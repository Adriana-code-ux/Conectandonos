import { useState, useEffect } from "react";
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
} from "firebase/firestore";
import "./Comunidad.css";

function Comunidad() {
  const auth = getAuth();
  const [uid, setUid] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("/Fotod.jpg");

  // Editar perfil
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState("");

  // Posts
  const [contenidoPost, setContenidoPost] = useState("");
  const [posts, setPosts] = useState([]);

  // Edición de posts
  const [editandoID, setEditandoID] = useState(null);
  const [nuevoContenido, setNuevoContenido] = useState("");

  // Escuchar usuario logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setNombre(user.displayName || "Usuario");
        setEmail(user.email || "");
        setFoto(user.photoURL || "/Fotod.jpg");
      } else {
        setUid(null);
        setNombre("");
        setEmail("");
        setFoto("/Fotod.jpg");
      }
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

  const actualizarPerfil = async () => {
    if (!auth.currentUser) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: nuevoNombre || nombre,
        photoURL: nuevaFoto || foto,
      });

      setNombre(nuevoNombre || nombre);
      setFoto(nuevaFoto || foto);
      setNuevoNombre("");
      setNuevaFoto("");
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
        fecha: new Date(),
        autor: nombre || "Anónimo",
        autorUid: uid,
        autorFoto: foto,
      });
      setContenidoPost("");
    } catch (error) {
      console.error("Error al crear post:", error);
      alert("Ocurrió un error al crear la publicación");
    }
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
    const confirmar = window.confirm("¿Seguro que quieres eliminar esta publicación?");
    if (!confirmar) return;

    try {
      const ref = doc(db, "posts", id);
      await deleteDoc(ref);
    } catch (error) {
      console.error("Error al eliminar post:", error);
      alert("Ocurrió un error al eliminar la publicación");
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    const dateObj = fecha.toDate ? fecha.toDate() : fecha;
    return dateObj.toLocaleString();
  };

  return (
  <section className="comunidad-layout">
    <div className="comunidad-wrapper solo-card">
      {/* CAJA ÚNICA ESTILO LUXUS (CENTRADA) */}
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

        {/* IMAGEN CENTRAL – AHORA LA ILUSTRACIÓN QUE TE GUSTA */}
        <div className="luxus-image-wrapper">
          <img
            src="https://plus.unsplash.com/premium_vector-1745401592354-1b92dfca051f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  Aún no hay publicaciones. ¡Sé la primera en compartir algo! 💬
                </p>
              )}

              {posts.map((post) => (
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
                        onChange={(e) => setNuevoContenido(e.target.value)}
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

                  {/* Botones solo autor */}
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
              ))}
            </div>
          </div>

          {/* DESCRIPCIÓN + AVATAR USUARIO ABAJO */}
          <div className="luxus-footer">
            <p className="descripcion">
              Aquí podrás interactuar con otros usuarios y compartir tus ideas.
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
