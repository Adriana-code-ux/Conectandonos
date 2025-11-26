import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import "./Comunidad.css";

function Comunidad() {
  const auth = getAuth();

  // Datos de usuario
  const [uid, setUid] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("/Fotod.jpg");
  const [cargando, setCargando] = useState(true);

  // Editar perfil
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState("");

  // Posts
  const [contenidoPost, setContenidoPost] = useState("");
  const [posts, setPosts] = useState([]);

  // Edición de posts
  const [editandoID, setEditandoID] = useState(null);
  const [nuevoContenido, setNuevoContenido] = useState("");

  // Comentarios por post
  const [comentariosPorPost, setComentariosPorPost] = useState({});
  const [inputComentarioPorPost, setInputComentarioPorPost] = useState({});
  const comentariosUnsubsRef = useRef({});

  // Escuchar usuario logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setNombre(user.displayName || "Usuario");
        setEmail(user.email || "");
        setFoto(user.photoURL || "/Fotod.jpg");
        setNuevoNombre(user.displayName || "");
        setNuevaFoto(user.photoURL || "");
      } else {
        setUid(null);
        setNombre("");
        setEmail("");
        setFoto("/Fotod.jpg");
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, [auth]);

  // Escuchar publicaciones en tiempo real
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setPosts(lista);
    });

    return () => unsubscribe();
  }, []);

  // Escuchar comentarios de cada post
  useEffect(() => {
    posts.forEach((p) => {
      if (comentariosUnsubsRef.current[p.id]) return;

      const q = query(
        collection(db, "posts", p.id, "comentarios"),
        orderBy("fecha", "asc")
      );

      const unsub = onSnapshot(q, (snap) => {
        const lista = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setComentariosPorPost((prev) => ({ ...prev, [p.id]: lista }));
      });

      comentariosUnsubsRef.current[p.id] = unsub;
    });

    return () => {
      Object.values(comentariosUnsubsRef.current).forEach((unsub) => unsub());
    };
  }, [posts]);

  const actualizarPerfil = async () => {
    if (!auth.currentUser) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: nuevoNombre || nombre,
        photoURL: nuevaFoto || foto,
      });

      setNombre(nuevoNombre || nombre);
      setFoto(nuevaFoto || foto);
      alert("Perfil actualizado correctamente ✅");
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert("Ocurrió un error al actualizar el perfil");
    }
  };

  const crearPost = async () => {
    if (!contenidoPost.trim()) return;

    try {
      await addDoc(collection(db, "posts"), {
        contenido: contenidoPost,
        fecha: serverTimestamp(),
        autor: nombre || "Anónimo",
        autorUid: uid,
        autorFoto: foto,
        likes: [],
      });
      setContenidoPost("");
    } catch (error) {
      console.error("Error al crear post:", error);
      alert("Ocurrió un error al crear la publicación");
    }
  };

  const toggleLike = async (post) => {
    const ref = doc(db, "posts", post.id);
    const actuales = post.likes || [];
    const nuevos = actuales.includes(uid)
      ? actuales.filter((id) => id !== uid)
      : [...actuales, uid];

    await updateDoc(ref, { likes: nuevos });
  };

  const guardarEdicion = async (id) => {
    if (!nuevoContenido.trim()) return;

    try {
      const ref = doc(db, "posts", id);
      await updateDoc(ref, { contenido: nuevoContenido });
      setEditandoID(null);
      setNuevoContenido("");
    } catch (error) {
      console.error("Error al editar post:", error);
      alert("Ocurrió un error al guardar los cambios");
    }
  };

  const eliminarPost = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que quieres eliminar esta publicación?"
    );
    if (!confirmar) return;

    try {
      const ref = doc(db, "posts", id);
      await deleteDoc(ref);
    } catch (error) {
      console.error("Error al eliminar post:", error);
      alert("Ocurrió un error al eliminar la publicación");
    }
  };

  const agregarComentario = async (postId) => {
    const texto = (inputComentarioPorPost[postId] || "").trim();
    if (!texto) return;

    await addDoc(collection(db, "posts", postId, "comentarios"), {
      texto,
      autor: nombre,
      autorFoto: foto,
      autorUid: uid,
      fecha: serverTimestamp(),
    });

    setInputComentarioPorPost((prev) => ({ ...prev, [postId]: "" }));
  };

  const editarComentario = async (postId, comentario) => {
    const nuevoTexto = prompt("Editar comentario:", comentario.texto);
    if (!nuevoTexto || nuevoTexto.trim() === "") return;

    await updateDoc(
      doc(db, "posts", postId, "comentarios", comentario.id),
      { texto: nuevoTexto }
    );
  };

  const eliminarComentario = async (postId, comentario) => {
    if (!window.confirm("¿Eliminar comentario?")) return;

    await deleteDoc(doc(db, "posts", postId, "comentarios", comentario.id));
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    const dateObj = fecha.toDate ? fecha.toDate() : fecha;
    return dateObj.toLocaleString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (cargando) {
    return <p className="texto-sin-posts">Cargando comunidad...</p>;
  }

  return (
    <section className="comunidad-layout">
      <div className="comunidad-wrapper solo-card">
        <div className="comunidad-luxus-card">
          {/* Semicírculo superior */}
          <div className="luxus-header-curve">
            <div className="luxus-rays" />
            <div className="luxus-header-inner">
              <h2 className="luxus-title">Comunidad Conectándonos</h2>
              <p className="luxus-subtitle">
                Un espacio tranquilo para compartir, escuchar y acompañar.
              </p>
            </div>
          </div>

          {/* Imagen central */}
          <div className="luxus-image-wrapper">
            <img
              src="https://plus.unsplash.com/premium_vector-1745401592354-1b92dfca051f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Ilustración comunidad"
              className="luxus-main-image"
            />
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="luxus-content">
            <h3 className="luxus-section-title">Bienvenido a la Comunidad</h3>
            <p className="luxus-welcome-text">
              Hola, <strong>{nombre}</strong> · Tu correo: <span>{email}</span>
            </p>

            <div className="luxus-divider" />

            {/* EDITAR PERFIL */}
            <div className="editar-perfil-bloque">
              <h4 className="editar-titulo">Editar perfil</h4>

              <div className="editar-formulario">
                <input
                  type="text"
                  placeholder="Actualizar mi nombre"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Actualizar mi foto (URL)"
                  value={nuevaFoto}
                  onChange={(e) => setNuevaFoto(e.target.value)}
                />
                <button onClick={actualizarPerfil} className="btn-primario">
                  Actualizar perfil
                </button>
              </div>
            </div>

            <div className="luxus-divider" />

            {/* CREAR POST */}
            <div className="crear-post-bloque">
              <h4 className="subtitulo-comunidad">Crear una publicación</h4>

              <textarea
                className="textarea-post"
                placeholder="¿Qué estás pensando?"
                value={contenidoPost}
                onChange={(e) => setContenidoPost(e.target.value)}
              />

              <button onClick={crearPost} className="btn-secundario">
                Publicar
              </button>
            </div>

            <div className="luxus-divider" />

            {/* LISTA DE POSTS */}
            <div className="posts-bloque">
              <h4 className="subtitulo-comunidad">Publicaciones</h4>

              <div className="lista-posts">
                {posts.length === 0 && (
                  <p className="texto-sin-posts">
                    Aún no hay publicaciones. ¡Sé la primera en compartir algo!
                    💬
                  </p>
                )}

                {posts.map((post) => {
                  const comentarios = comentariosPorPost[post.id] || [];
                  const liked = (post.likes || []).includes(uid);

                  return (
                    <div key={post.id} className="post-card">
                      {/* Autor */}
                      <div className="post-autor">
                        <img
                          src={post.autorFoto || "/Fotod.jpg"}
                          alt="Autor"
                          className="post-avatar"
                        />
                        <div>
                          <p className="post-autor-nombre">{post.autor}</p>
                          <p className="post-fecha">
                            {formatearFecha(post.fecha)}
                          </p>
                        </div>
                      </div>

                      {/* Contenido / Edición */}
                      {editandoID === post.id ? (
                        <div className="post-edicion">
                          <textarea
                            className="textarea-post"
                            value={nuevoContenido}
                            onChange={(e) =>
                              setNuevoContenido(e.target.value)
                            }
                          />
                          <div className="post-edicion-botones">
                            <button
                              onClick={() => guardarEdicion(post.id)}
                              className="btn-guardar"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setEditandoID(null)}
                              className="btn-cancelar"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="post-contenido">{post.contenido}</p>
                      )}

                      {/* Likes + acciones */}
                      <div className="post-acciones-linea">
                        <button
                          className={`btn-like ${
                            liked ? "btn-like-activo" : ""
                          }`}
                          onClick={() => toggleLike(post)}
                        >
                          ❤️ {post.likes?.length || 0}
                        </button>

                        {post.autorUid === uid && editandoID !== post.id && (
                          <div className="post-acciones">
                            <button
                              onClick={() => {
                                setEditandoID(post.id);
                                setNuevoContenido(post.contenido);
                              }}
                              className="btn-editar"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => eliminarPost(post.id)}
                              className="btn-eliminar"
                            >
                              Eliminar
                            </button>
                          </div>
                        )}
                      </div>

                      {/* COMENTARIOS */}
                      <div className="post-comentarios">
                        <h4 className="comentarios-titulo">
                          Comentarios ({comentarios.length})
                        </h4>

                        <div className="comentarios-lista">
                          {comentarios.map((c) => (
                            <div key={c.id} className="comentario-card">
                              <div className="comentario-header">
                                <img
                                  src={c.autorFoto || "/Fotod.jpg"}
                                  alt="avatar comentario"
                                  className="comentario-avatar"
                                />
                                <div>
                                  <p className="comentario-autor">
                                    {c.autor}
                                  </p>
                                  <p className="comentario-fecha">
                                    {formatearFecha(c.fecha)}
                                  </p>
                                </div>
                              </div>

                              <p className="comentario-texto">{c.texto}</p>

                              {c.autorUid === uid && (
                                <div className="comentario-acciones">
                                  <button
                                    className="comentario-btn editar"
                                    onClick={() =>
                                      editarComentario(post.id, c)
                                    }
                                  >
                                    Editar
                                  </button>
                                  <button
                                    className="comentario-btn eliminar"
                                    onClick={() =>
                                      eliminarComentario(post.id, c)
                                    }
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Input de comentario */}
                        <div className="comentario-input-wrapper">
                          <textarea
                            placeholder="Escribe un comentario..."
                            className="textarea-comentario"
                            value={inputComentarioPorPost[post.id] || ""}
                            onChange={(e) =>
                              setInputComentarioPorPost((prev) => ({
                                ...prev,
                                [post.id]: e.target.value,
                              }))
                            }
                          />
                          <div className="comentario-input-footer">
                            <button
                              className="btn-comentar"
                              onClick={() => agregarComentario(post.id)}
                            >
                              Comentar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DESCRIPCIÓN + AVATAR USUARIO ABAJO */}
            <div className="luxus-footer">
              <p className="descripcion">
                Aquí podrás interactuar con otros usuarios y compartir tus
                ideas.
              </p>

              <div className="luxus-user-footer">
                <img
                  src={foto || "/Fotod.jpg"}
                  alt="Foto de perfil"
                  className="luxus-user-avatar"
                />
                <div>
                  <p className="luxus-user-name">{nombre}</p>
                  <p className="luxus-user-text">Mi espacio en la comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* borde inferior */}
      <div className="comunidad-bottom-border" />
    </section>
  );
}

export default Comunidad;
