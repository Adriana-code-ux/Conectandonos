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

/* ===================== COMPONENT ===================== */

export default function Comunidad() {
  const auth = getAuth();

  const [uid, setUid] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("/Fotod.jpg");

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState("");

  const [posts, setPosts] = useState([]);
  const [contenidoPost, setContenidoPost] = useState("");

  const [comentariosPorPost, setComentariosPorPost] = useState({});
  const [inputComentario, setInputComentario] = useState({});

  const [editandoPost, setEditandoPost] = useState(null);
  const [editandoComentario, setEditandoComentario] = useState(null);
  const [textoEdicion, setTextoEdicion] = useState("");

  const [loading, setLoading] = useState(true);
  const comentariosUnsubs = useRef({});

  /* ===================== AUTH ===================== */

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setNombre(user.displayName || "Usuario");
        setEmail(user.email || "");
        setFoto(user.photoURL || "/Fotod.jpg");
        setNuevoNombre(user.displayName || "");
        setNuevaFoto(user.photoURL || "");
      }
      setLoading(false);
    });
  }, [auth]);

  /* ===================== POSTS ===================== */

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("fecha", "desc"));
    return onSnapshot(q, (snap) => {
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  /* ===================== COMENTARIOS ===================== */

  useEffect(() => {
    posts.forEach((post) => {
      if (comentariosUnsubs.current[post.id]) return;

      const q = query(
        collection(db, "posts", post.id, "comentarios"),
        orderBy("fecha", "asc")
      );

      comentariosUnsubs.current[post.id] = onSnapshot(q, (snap) => {
        setComentariosPorPost(prev => ({
          ...prev,
          [post.id]: snap.docs.map(d => ({ id: d.id, ...d.data() })),
        }));
      });
    });

    return () =>
      Object.values(comentariosUnsubs.current).forEach(unsub => unsub());
  }, [posts]);

  /* ===================== ACCIONES ===================== */

  const actualizarPerfil = async () => {
    await updateProfile(auth.currentUser, {
      displayName: nuevoNombre,
      photoURL: nuevaFoto,
    });
    setNombre(nuevoNombre);
    setFoto(nuevaFoto);
  };

  const crearPost = async () => {
    if (!contenidoPost.trim()) return;
    await addDoc(collection(db, "posts"), {
      contenido: contenidoPost,
      autor: nombre,
      autorUid: uid,
      autorFoto: foto,
      fecha: serverTimestamp(),
      likes: [],
    });
    setContenidoPost("");
  };

  const toggleLike = async (post) => {
    const nuevosLikes = post.likes.includes(uid)
      ? post.likes.filter(id => id !== uid)
      : [...post.likes, uid];

    // Optimista
    setPosts(prev =>
      prev.map(p => p.id === post.id ? { ...p, likes: nuevosLikes } : p)
    );

    await updateDoc(doc(db, "posts", post.id), { likes: nuevosLikes });
  };

  const agregarComentario = async (postId) => {
    const texto = inputComentario[postId]?.trim();
    if (!texto) return;

    await addDoc(collection(db, "posts", postId, "comentarios"), {
      texto,
      autor: nombre,
      autorUid: uid,
      autorFoto: foto,
      fecha: serverTimestamp(),
    });

    setInputComentario(prev => ({ ...prev, [postId]: "" }));
  };

  const guardarEdicion = async (tipo, postId, comentarioId) => {
    if (!textoEdicion.trim()) return;

    const ref =
      tipo === "post"
        ? doc(db, "posts", postId)
        : doc(db, "posts", postId, "comentarios", comentarioId);

    await updateDoc(ref, { contenido: textoEdicion, texto: textoEdicion });
    setEditandoPost(null);
    setEditandoComentario(null);
    setTextoEdicion("");
  };

  const eliminar = async (tipo, postId, comentarioId) => {
    if (!confirm("¿Eliminar?")) return;

    const ref =
      tipo === "post"
        ? doc(db, "posts", postId)
        : doc(db, "posts", postId, "comentarios", comentarioId);

    await deleteDoc(ref);
  };

  const fecha = f => f?.toDate?.().toLocaleString("es-PE");

  /* ===================== UI ===================== */

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-4 animate-pulse">
        <div className="h-32 bg-gray-200 rounded-xl" />
        <div className="h-32 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-emerald-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 font-bold text-emerald-700">
          Comunidad Conectándonos
        </div>
      </header>

      {/* Layout */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-4 gap-6">

        {/* Perfil */}
<aside className="bg-white rounded-xl shadow overflow-hidden lg:col-span-1">

  {/* Imagen superior (reintegrada) */}
  <div className="h-32 w-full">
    <img
      src="https://plus.unsplash.com/premium_vector-1745401592354-1b92dfca051f?q=80&w=725&auto=format&fit=crop"
      alt="Comunidad"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Contenido perfil */}
  <div className="p-4">
    <img
      src={foto}
      alt="Avatar"
      className="w-20 h-20 mx-auto rounded-full border-4 border-emerald-600 -mt-12 bg-white object-cover"
    />

    <p className="text-center font-semibold mt-2">{nombre}</p>
    <p className="text-xs text-center text-gray-500">{email}</p>

    {/* Estado personal */}
    <p className="text-xs text-center text-emerald-700 mt-1 italic">
      Aquí desde la comunidad 🌱
    </p>

    {/* Estadísticas */}
    <div className="grid grid-cols-3 gap-2 text-center mt-4 text-xs">
      <div>
        <p className="font-bold text-gray-800">
          {posts.filter(p => p.autorUid === uid).length}
        </p>
        <p className="text-gray-500">Posts</p>
      </div>
      <div>
        <p className="font-bold text-gray-800">
          {Object.values(comentariosPorPost)
            .flat()
            .filter(c => c.autorUid === uid).length}
        </p>
        <p className="text-gray-500">Respuestas</p>
      </div>
      <div>
        <p className="font-bold text-gray-800">
          {posts
            .filter(p => p.autorUid === uid)
            .reduce((acc, p) => acc + p.likes.length, 0)}
        </p>
        <p className="text-gray-500">Likes</p>
      </div>
    </div>

    {/* Editar perfil */}
    <div className="mt-4 space-y-2">
      <input
        className="w-full border rounded-full px-3 py-1 text-sm"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
        placeholder="Actualizar nombre"
      />
      <input
        className="w-full border rounded-full px-3 py-1 text-sm"
        value={nuevaFoto}
        onChange={(e) => setNuevaFoto(e.target.value)}
        placeholder="Actualizar foto (URL)"
      />
      <button
        onClick={actualizarPerfil}
        className="w-full bg-emerald-600 text-white rounded-full py-1.5 text-sm font-semibold hover:bg-emerald-700 transition"
      >
        Guardar perfil
      </button>
    </div>
  </div>
</aside>


        {/* Feed */}
        <main className="lg:col-span-3 space-y-4">

          {/* Crear post */}
          <div className="bg-white rounded-xl p-4 shadow">
            <textarea
              className="w-full border rounded-lg p-2 text-sm"
              placeholder="¿Qué quieres compartir hoy?"
              value={contenidoPost}
              onChange={e => setContenidoPost(e.target.value)}
            />
            <button
              onClick={crearPost}
              className="mt-2 bg-slate-900 text-white px-4 py-1 rounded-full text-sm"
            >
              Compartir
            </button>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow p-4 space-y-2">

              {/* Autor */}
              <div className="flex items-center gap-2">
                <img src={post.autorFoto} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">{post.autor}</p>
                  <p className="text-xs text-gray-400">{fecha(post.fecha)}</p>
                </div>
              </div>

              {/* Contenido */}
              {editandoPost === post.id ? (
                <>
                  <textarea
                    className="w-full border rounded p-2 text-sm"
                    value={textoEdicion}
                    onChange={e => setTextoEdicion(e.target.value)}
                  />
                  <button
                    onClick={() => guardarEdicion("post", post.id)}
                    className="text-emerald-600 text-sm"
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <p className="text-sm">{post.contenido}</p>
              )}

              {/* Acciones */}
              <div className="flex gap-4 text-sm text-gray-600">
                <button onClick={() => toggleLike(post)}>
                  ❤️ {post.likes.length}
                </button>

                {post.autorUid === uid && (
                  <>
                    <button
                      onClick={() => {
                        setEditandoPost(post.id);
                        setTextoEdicion(post.contenido);
                      }}
                    >
                      Editar
                    </button>
                    <button onClick={() => eliminar("post", post.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </div>

              {/* Comentarios */}
              <div className="pt-2 space-y-2">
                {comentariosPorPost[post.id]?.map(c => (
                  <div key={c.id} className="bg-gray-100 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <img src={c.autorFoto} className="w-6 h-6 rounded-full" />
                      <p className="text-xs font-semibold">{c.autor}</p>
                      <span className="text-xs text-gray-400">{fecha(c.fecha)}</span>
                    </div>

                    {editandoComentario === c.id ? (
                      <>
                        <textarea
                          className="w-full border rounded p-1 text-xs"
                          value={textoEdicion}
                          onChange={e => setTextoEdicion(e.target.value)}
                        />
                        <button
                          onClick={() => guardarEdicion("comentario", post.id, c.id)}
                          className="text-xs text-emerald-600"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <p className="text-xs mt-1">{c.texto}</p>
                    )}

                    {c.autorUid === uid && (
                      <div className="flex gap-2 text-xs mt-1">
                        <button onClick={() => {
                          setEditandoComentario(c.id);
                          setTextoEdicion(c.texto);
                        }}>
                          Editar
                        </button>
                        <button onClick={() => eliminar("comentario", post.id, c.id)}>
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Responder */}
                <textarea
                  className="w-full border rounded p-1 text-xs"
                  placeholder="Responder..."
                  value={inputComentario[post.id] || ""}
                  onChange={e =>
                    setInputComentario(prev => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                />
                <button
                  onClick={() => agregarComentario(post.id)}
                  className="text-xs text-emerald-600"
                >
                  Responder
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
