// src/components/EncuestaBienestar.jsx
import { useState } from "react";
import "./EncuestaBienestar.css";

const preguntas = [
  {
    id: "q1",
    texto: "1. ¿Cómo te sientes al despertar?",
    opciones: [
      { valor: 1, texto: "Cansada" },
      { valor: 2, texto: "Neutral" },
      { valor: 3, texto: "Con energía" },
    ],
  },
  {
    id: "q2",
    texto: "2. ¿Qué tan seguido sientes estrés en el día?",
    opciones: [
      { valor: 1, texto: "Muy seguido" },
      { valor: 2, texto: "A veces" },
      { valor: 3, texto: "Raramente" },
    ],
  },
  {
    id: "q3",
    texto: "3. ¿Cómo describirías tu nivel de motivación?",
    opciones: [
      { valor: 1, texto: "Bajo" },
      { valor: 2, texto: "Medio" },
      { valor: 3, texto: "Alto" },
    ],
  },
  {
    id: "q4",
    texto: "4. ¿Con qué frecuencia compartes lo que sientes?",
    opciones: [
      { valor: 1, texto: "Casi nunca" },
      { valor: 2, texto: "A veces" },
      { valor: 3, texto: "Frecuentemente" },
    ],
  },
  {
    id: "q5",
    texto: "5. ¿Qué tan satisfecha te sientes con tu día a día?",
    opciones: [
      { valor: 1, texto: "Poco satisfecha" },
      { valor: 2, texto: "Algo satisfecha" },
      { valor: 3, texto: "Muy satisfecha" },
    ],
  },
];

function EncuestaBienestar() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  const totalPreguntas = preguntas.length;
  const progreso = ((preguntaActual + 1) / totalPreguntas) * 100;

  const manejarCambio = (preguntaId, valor) => {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: Number(valor),
    }));
  };

  const siguiente = () => {
    const preguntaId = preguntas[preguntaActual].id;
    if (!respuestas[preguntaId]) {
      alert("Por favor selecciona una respuesta antes de continuar.");
      return;
    }
    if (preguntaActual < totalPreguntas - 1) {
      setPreguntaActual(preguntaActual + 1);
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const preguntaId = preguntas[preguntaActual].id;
    if (!respuestas[preguntaId]) {
      alert("Por favor selecciona una respuesta.");
      return;
    }

    let score = 0;
    preguntas.forEach((p) => {
      score += respuestas[p.id] || 0;
    });

    let message = "";
    if (score <= 7) {
      message =
        "Parece que estás pasando por momentos difíciles 💙. Recuerda que no estás sol@ y pedir apoyo es valioso.";
    } else if (score <= 11) {
      message =
        "Tu estado emocional es intermedio 🌿. Hay días buenos y otros más retadores, cuida tu bienestar con pequeños hábitos.";
    } else {
      message =
        "¡Te sientes en equilibrio y motivad@! 🌸 Sigue cultivando tus emociones positivas.";
    }

    setResultado(message);
    setFinalizado(true);
  };

  const pregunta = preguntas[preguntaActual];

  return (
    <section className="test-section">
      <div className="test-card">
        <header className="test-header">
          <div>
            <h2 className="test-title">Test de Bienestar Emocional</h2>
            <p className="test-subtitle">
              Responde estas preguntas para tener una visión general de tu
              bienestar emocional en estos días.
            </p>
          </div>
          <div className="test-pill">
            <span>Conectándonos</span>
          </div>
        </header>

        <div className="progress-wrapper">
          <div className="progress-info">
            <span className="progress-label">Progreso</span>
            {!finalizado && (
              <span className="progress-step">
                Pregunta {preguntaActual + 1} de {totalPreguntas}
              </span>
            )}
          </div>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${finalizado ? 100 : progreso}%` }}
            ></div>
          </div>
        </div>

        {!finalizado ? (
          <form className="test-form" onSubmit={manejarSubmit}>
            <div className="question">
              <p className="question-text">{pregunta.texto}</p>

              <div className="options-group">
                {pregunta.opciones.map((op) => (
                  <label key={op.texto} className="option-item">
                    <input
                      type="radio"
                      name={pregunta.id}
                      value={op.valor}
                      checked={respuestas[pregunta.id] === op.valor}
                      onChange={(e) =>
                        manejarCambio(pregunta.id, e.target.value)
                      }
                    />
                    <span>{op.texto}</span>
                  </label>
                ))}
              </div>

              {preguntaActual < totalPreguntas - 1 ? (
                <button
                  type="button"
                  className="btn-next"
                  onClick={siguiente}
                >
                  Siguiente
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  Ver resultados
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="result-box">
            <h3 className="result-title">Tu resultado 🧠</h3>
            <p className="result-text">{resultado}</p>
            <p className="result-footnote">
              Este test no reemplaza una evaluación profesional, pero puede ser
              un buen punto de partida para reflexionar sobre cómo te sientes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default EncuestaBienestar;
