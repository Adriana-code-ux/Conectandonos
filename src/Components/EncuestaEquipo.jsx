// src/components/EncuestaEquipo.jsx
import { useState } from "react";
import "./Encuesta.css"; // si tienes estilos para .encuesta, .titulo, .subtitulo, etc.

function EncuestaEquipo() {
  const [inspiracion, setInspiracion] = useState("");
  const [gusto, setGusto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrandoResultado, setMostrandoResultado] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas (por si acaso)
    if (!inspiracion || !gusto.trim()) {
      alert("Por favor, completa toda la encuesta 💙");
      return;
    }

    const mensajeFinal = `¡Gracias por tu respuesta! Es increíble saber que ${inspiracion} te inspira. Nos alegra mucho saber que te gusta "${gusto}" de nuestra iniciativa.`;

    setMensaje(mensajeFinal);
    setMostrandoResultado(true);
  };

  return (
    <section className="encuesta">
      <h1 className="titulo">🧠 Conecta con el equipo</h1>
      <p className="subtitulo">¡Conócenos mejor a través de nuestra encuesta!</p>

      <form id="formEncuesta" onSubmit={manejarSubmit}>
        <div className="pregunta">
          <label htmlFor="inspiracion">
            1️⃣ ¿Cuál de las integrantes te inspira más?
          </label>
          <select
            id="inspiracion"
            required
            value={inspiracion}
            onChange={(e) => setInspiracion(e.target.value)}
          >
            <option value="">Selecciona a una de nosotras...</option>
            <option value="Camila Warthon">Camila Warthon</option>
           
            <option value="Adriana Huamani">Adriana Huamani</option>
            
          </select>
        </div>

        <div className="pregunta">
          <label htmlFor="gusto">
            2️⃣ ¿Qué te gusta más de nuestra iniciativa?
          </label>
          <input
            type="text"
            id="gusto"
            placeholder="Ej: La información, el diseño..."
            required
            value={gusto}
            onChange={(e) => setGusto(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Enviar Encuesta
        </button>
      </form>

      <div
        id="resultado"
        className={`resultado ${mostrandoResultado ? "" : "oculto"}`}
      >
        {mostrandoResultado && <p>{mensaje}</p>}
      </div>
    </section>
  );
}

export default EncuestaEquipo;
