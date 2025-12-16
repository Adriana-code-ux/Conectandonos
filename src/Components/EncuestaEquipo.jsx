import { useState } from "react";

function EncuestaEquipo() {
  const [inspiracion, setInspiracion] = useState("");
  const [gusto, setGusto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrandoResultado, setMostrandoResultado] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!inspiracion || !gusto.trim()) {
      alert("Por favor, completa toda la encuesta 💙");
      return;
    }

    const mensajeFinal = `¡Gracias por tu respuesta! Es increíble saber que ${inspiracion} te inspira. Nos alegra mucho saber que te gusta "${gusto}" de nuestra iniciativa.`;

    setMensaje(mensajeFinal);
    setMostrandoResultado(true);
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-14 bg-slate-50">
      <div className="w-full max-w-5xl bg-emerald-50 rounded-3xl shadow-xl p-8 sm:p-10">
        
        {/* Título */}
        <h1 className="text-center text-3xl font-bold text-teal-700 mb-2">
          🧠 Conecta con el equipo
        </h1>
        <p className="text-center text-sm text-slate-500 mb-10">
          ¡Conócenos mejor a través de nuestra encuesta!
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* FORM */}
          <form onSubmit={manejarSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                1️⃣ ¿Cuál de las integrantes te inspira más?
              </label>
              <select
                required
                value={inspiracion}
                onChange={(e) => setInspiracion(e.target.value)}
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm
                           focus:outline-none focus:border-emerald-500
                           focus:ring-4 focus:ring-emerald-300/40 transition"
              >
                <option value="">Selecciona a una de nosotras...</option>
                <option value="Camila Warthon">Camila Warthon</option>
                <option value="Adriana Huamani">Adriana Huamani</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                2️⃣ ¿Qué te gusta más de nuestra iniciativa?
              </label>
              <input
                type="text"
                placeholder="Ej: La información, el diseño..."
                required
                value={gusto}
                onChange={(e) => setGusto(e.target.value)}
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm
                           focus:outline-none focus:border-emerald-500
                           focus:ring-4 focus:ring-emerald-300/40 transition"
              />
            </div>

            <button
              type="submit"
              className="rounded-full px-8 py-2.5 text-sm font-semibold text-white
                         bg-gradient-to-r from-emerald-600 to-teal-500
                         shadow-lg shadow-emerald-600/40
                         hover:-translate-y-0.5 hover:shadow-xl transition"
            >
              Enviar Encuesta
            </button>
          </form>

          {/* RESULTADO */}
          <div className="flex items-center justify-center h-full">
            {mostrandoResultado ? (
              <div className="w-full rounded-2xl bg-white p-6 shadow text-sm text-slate-900">
                <p>{mensaje}</p>
              </div>
            ) : (
              <div className="w-full rounded-2xl border border-dashed border-emerald-300 p-6 text-center text-sm text-slate-400">
                Tu respuesta aparecerá aquí 💬
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default EncuestaEquipo;
