// src/components/Hero.jsx
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <>
      {/* SECCIÓN 1: hero con la imagen de fondo, texto y botones centrados */}
      <section className="inicio">
        <div className="hero-centered-content"> {/* Nuevo contenedor centrado */}
          <h1 className="hero-main-title">
            Tu salud mental es nuestra prioridad
          </h1>
          <p className="hero-subtitle">
            Te acompañamos con recursos, comunidad y apoyo profesional, estés donde estés.
          </p>
          <div className="hero-buttons">
            <Link  to = "/Informacion " className="btn-primary">Explora Recursos</Link>
            <Link  to = "/Nosotras  " className="btn-secondary">Conócenos</Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: bloque clarito inferior (sin cambios) */}
      <section className="inicio-secundario">
        <div className="inicio-secundario-inner">
          <div className="inicio-texto-principal">
            <h2 className="inicio-secundario-title">
              Acompañamiento emocional y herramientas para tu bienestar
            </h2>
            <p className="inicio-secundario-parrafo">
              En <strong>Conectándonos</strong> encontrarás recursos,
              información y una comunidad que pone en el centro tu salud
              emocional. Nuestro objetivo es ayudarte a reconocer tus
              emociones, validar lo que sientes y recordarte que pedir ayuda
              también es un acto de valentía.
            </p>
          </div>

          <div className="inicio-texto-lateral">
            <h3 className="inicio-lateral-title">Conecta con tu bienestar</h3>
            <p className="inicio-lateral-text">
              Explora artículos, ejercicios y espacios de reflexión pensados
              para acompañarte en tu día a día. Da pequeños pasos, a tu ritmo,
              hacia una relación más amable contigo misma.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;