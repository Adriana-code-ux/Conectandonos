import { useState } from "react";

function Informacion() {
  const trastornos = [
    {
      titulo: "ANSIEDAD",
      descripcion:
        "La ansiedad, cuando es intensa y constante, puede limitar la vida diaria. No es solo nervios antes de un evento, sino una preocupación persistente que afecta el sueño, la concentración y las relaciones.",
      icono: "fa-brain",
    },
    {
      titulo: "DEPRESIÓN",
      descripcion:
        "La depresión va más allá de la tristeza. Puede causar pérdida de interés, cambios en el sueño o apetito, fatiga y una sensación persistente de vacío.",
      icono: "fa-cloud-rain",
    },
    {
      titulo: "CONDUCTAS ALIMENTARIAS",
      descripcion:
        "Incluyen afecciones como anorexia, bulimia o atracones, que afectan la salud física y emocional. Requieren atención especializada para una recuperación integral.",
      icono: "fa-utensils",
    },
    {
      titulo: "TRASTORNO BIPOLAR",
      descripcion:
        "Se caracteriza por cambios extremos en el estado de ánimo, desde euforia y energía elevada hasta profunda tristeza y agotamiento.",
      icono: "fa-masks-theater",
    },
  ];

  // Estado para carrusel
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? trastornos.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === trastornos.length - 1 ? 0 : i + 1));
  };

  const { titulo, descripcion, icono } = trastornos[index];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section modificado */}
      <section
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://unsplash.com/es/fotos/person-reaching-black-heart-cutout-paper-XX2WTbLr3r8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-900 bg-opacity-30"></div>
        <div className="relative max-w-xl bg-white bg-opacity-80 rounded-lg p-10 m-6 shadow-lg text-teal-900 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trastornos Mentales</h1>
          <p className="text-xl md:text-2xl">Cuidando tu mente, cuidando tu vida</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-teal-800">
              IMPORTANCIA DE ABORDAR LOS TRANSTORNOS MENTALES
            </h3>
            <p className="mb-4">
              Los trastornos mentales no son simples cambios de ánimo o “malos días” que se superan con fuerza de voluntad. Son
              condiciones reales que influyen en la forma en que una persona piensa, siente y actúa, y pueden tener un impacto
              significativo en la vida diaria.
            </p>
            <p className="mb-4">
              Cuando no se reconocen o no se tratan a tiempo, estos trastornos pueden agravarse, generando un círculo difícil
              de romper.
            </p>
            <p>
              Abordarlos implica mucho más que ofrecer tratamiento médico o psicológico. Significa construir entornos seguros
              y comprensivos y garantizar que las personas tengan acceso a apoyo profesional y redes de contención.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Salud mental"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Carrusel de trastornos */}
      <section className="max-w-4xl mx-auto py-16 px-6 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center space-y-6 text-teal-900">
          <i className={`fa-solid ${icono} fa-5x`}></i>
          <h3 className="text-3xl font-bold">{titulo}</h3>
          <p className="text-center text-lg max-w-xl">{descripcion}</p>
          <div className="flex space-x-6 mt-8">
            <button
              onClick={prev}
              className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition"
              aria-label="Anterior trastorno"
            >
              &larr; Anterior
            </button>
            <button
              onClick={next}
              className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition"
              aria-label="Siguiente trastorno"
            >
              Siguiente &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-teal-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas apoyo? Estamos para acompañarte</h2>
        <p className="mb-6 text-lg md:text-xl">
          La ayuda oportuna marca la diferencia. Aquí puedes agendar una orientación, chatear con nuestro equipo o explorar recursos
          que te ayuden a dar el primer paso.
        </p>
        <a
          href="contacto.html"
          className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Agenda tu consulta aquí
        </a>
      </section>

      {/* Footer Note */}
      <section className="max-w-6xl mx-auto py-6 px-6 text-gray-600 text-sm">
        <b>Importante:</b> Esta página no reemplaza una evaluación profesional ni es un canal de emergencia. Si tú o alguien corre peligro,
        contacta a los servicios de emergencia de tu país.
      </section>
    </div>
  );
}

export default Informacion;
