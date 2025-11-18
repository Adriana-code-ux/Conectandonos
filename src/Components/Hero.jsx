// src/components/Hero.jsx
import './hero.css';

function Hero() {
  return (
    <>
      <section className="inicio">
        <div className="hero-content">
          {/* Columna izquierda: título + texto */}
          <div className="hero-main-card">
            <div className="caja-pequeña">
              <span>❤️</span>
              <span>Cuidamos tu bienestar mental</span>
            </div>

            <h1 className="hero-title">
              Tu salud mental es nuestra prioridad
            </h1>

            <p className="hero-text">
              Encuentra el apoyo profesional que necesitas para afrontar tus retos
              emocionales y personales. Ofrecemos terapias especializadas, diseñadas
              para tus necesidades, en un ambiente seguro, acogedor y completamente
              confidencial, donde tu bienestar emocional es nuestra prioridad.
            </p>
          </div>

          {/* Columna derecha: contador / info extra */}
          <div className="hero-side-card">
            <div className="caja-pequeña2">
              <span className="counter">
                <strong>1500</strong>
              </span>
            </div>
            <p className="hero-side-text">
              ¡1500 consultas exitosas! Tu bienestar mental es nuestra prioridad.
            </p>
          </div>
        </div>

        {/* Fondo */}
        <div className="style"></div>
      </section>
    </>
  );
}

export default Hero;
