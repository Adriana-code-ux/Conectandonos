import { useState } from "react";
import { Link } from "react-router-dom";

function Informacion() {
  // Define los datos de los trastornos.
  const trastornos = [
    {
      titulo: "ANSIEDAD",
      descripcion:
        "La ansiedad, cuando es intensa y constante, puede limitar la vida diaria. No es solo nervios antes de un evento, sino una preocupación persistente que afecta el sueño, la concentración y las relaciones.",
      icono: "fa-brain",
      color: "text-amber-600",
    },
    {
      titulo: "DEPRESIÓN",
      descripcion:
        "La depresión va más allá de la tristeza. Puede causar pérdida de interés, cambios en el sueño o apetito, fatiga y una sensación persistente de vacío.",
      icono: "fa-cloud-rain",
      color: "text-blue-600",
    },
    {
      titulo: "CONDUCTAS ALIMENTARIAS",
      descripcion:
        "Incluyen afecciones como anorexia, bulimia o atracones, que afectan la salud física y emocional. Requieren atención especializada para una recuperación integral.",
      icono: "fa-utensils",
      color: "text-green-600",
    },
    {
      titulo: "TRASTORNO BIPOLAR",
      descripcion:
        "Se caracteriza por cambios extremos en el estado de ánimo, desde euforia y energía elevada hasta profunda tristeza y agotamiento.",
      icono: "fa-masks-theater",
      color: "text-purple-600",
    },
    {
      titulo: "ESTRÉS CRÓNICO",
      descripcion:
        "El estrés prolongado puede afectar la salud física y emocional, generando irritabilidad, tensión muscular, problemas de sueño y agotamiento constante.",
      icono: "fa-bolt",
      color: "text-red-600",
    },
    {
      titulo: "AUTOESTIMA BAJA",
      descripcion:
        "Una autopercepción negativa puede influir en las decisiones, las relaciones y el bienestar general, generando inseguridad y autocrítica excesiva.",
      icono: "fa-user-minus",
      color: "text-pink-600",
    },
    {
      titulo: "DUEL0 Y PÉRDIDA",
      descripcion:
        "El duelo implica un proceso emocional complejo ante la pérdida. Puede causar tristeza profunda, confusión, irritabilidad y desmotivación.",
      icono: "fa-heart-broken",
      color: "text-gray-600",
    },
    {
      titulo: "TRASTORNOS DEL SUEÑO",
      descripcion:
        "Incluye dificultades como insomnio, despertares frecuentes o sueño no reparador. Pueden afectar la energía, el estado de ánimo y la concentración.",
      icono: "fa-moon",
      color: "text-indigo-600",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? trastornos.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === trastornos.length - 1 ? 0 : i + 1));
  };

  const { titulo, descripcion, icono, color } = trastornos[index];

  return (
    <div className="bg-stone-50 text-gray-800 font-sans">
      {/* 1. HERO SECTION: Fondo con imagen SVG local */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/prevencion-salud-mental.svg')", // desde public
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Capa superpuesta más oscura para que se lea mejor el texto */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        {/* Contenido (Texto) */}
        <div className="relative max-w-6xl w-full px-6 py-10 md:py-14 m-6">
          <div className="grid grid-cols-1 items-center">
            <div className="text-center md:text-left md:pl-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]">
                Trastornos Mentales
              </h1>

              <p className="text-lg md:text-2xl text-white font-medium mt-4 max-w-xl md:max-w-2xl mx-auto md:mx-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Cuidando tu mente, <b>cuidando tu vida</b>
              </p>

              <a
                href="#importancia"
                className="mt-8 inline-block bg-white/95 text-teal-800 px-6 md:px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-white transition duration-300 transform hover:scale-105"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPORTANCIA */}
      <section id="importancia" className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-bold mb-6 text-teal-700 leading-snug">
              La Importancia de <strong>Abordar</strong> la Salud Mental
            </h3>

            <p className="mb-4 text-gray-600 text-lg">
              Los trastornos mentales no son simples cambios de ánimo o “malos
              días” que se superan con fuerza de voluntad...
            </p>

            <p className="mb-4 text-gray-600 text-lg border-l-4 border-teal-500 pl-4 italic">
              Cuando no se reconocen o no se tratan a tiempo, estos trastornos
              pueden agravarse...
            </p>

            <p className="text-gray-600 text-lg">
              Abordarlos implica construir entornos seguros...
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?q=80&w=927&auto=format&fit=crop"
              alt="Salud mental y apoyo psicológico"
              className="rounded-2xl shadow-2xl transition duration-500 hover:shadow-teal-300/50"
            />
          </div>
        </div>
      </section>

      <hr className="max-w-4xl mx-auto border-t border-gray-200" />

      {/* 3. CARRUSEL */}
      <section className="max-w-4xl mx-auto py-20 px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-800">
          Conoce los Trastornos Comunes
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute -left-10 md:-left-16 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 hover:scale-110 transition"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-200 text-center w-full max-w-xl transition-all">
            <i className={`fa-solid ${icono} fa-3x md:fa-4x ${color} mb-4`}></i>

            <h3 className="text-3xl font-extrabold text-teal-700 mb-4">
              {titulo}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {descripcion}
            </p>

            <div className="flex justify-center space-x-2 mt-8">
              {trastornos.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 w-3 rounded-full cursor-pointer transition ${
                    i === index ? "bg-teal-600" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute -right-10 md:-right-16 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 hover:scale-110 transition"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-teal-900 text-white py-20 px-6 text-center shadow-inner">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          ¿Necesitas apoyo? Estamos para acompañarte 🤝
        </h2>
        <p className="mb-8 text-xl md:text-2xl font-light max-w-3xl mx-auto">
          La ayuda oportuna marca la diferencia.
        </p>
        <Link
          to="/Contacto"
          className="inline-block bg-teal-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-teal-400 transition duration-300 shadow-lg transform hover:-translate-y-1"
        >
          Agenda tu consulta aquí
        </Link>
      </section>
    </div>
  );
}

export default Informacion;
