import './Contactos.css'

const Contactos = () => {
  return (
    <div id="contactos" className="contenedor-contacto container">
      <div>
        <h2 className="titulo1"><b>Estamos para Ayudarte</b></h2>
        <p className="titulo2">Siempre encontrarás una respuesta amigable aquí</p>
      </div>

      <div className="imagen-titulo" data-aos="flip-left">
        <img
          src="https://psicologoencasa.cl/wp-content/uploads/2022/08/ayuda-emocional.jpg"
          alt="Apoyo emocional"
          className="img-fluid rounded shadow"
        />
      </div>

      <div className="texto-4">
        <p>
          En Conectándonos queremos que sepas que no estás sola. Este es tu espacio para compartir tus
          pensamientos, expresar lo que sientes y encontrar un respiro cuando la carga se vuelve pesada. Aquí
          puedes desahogarte o simplemente buscar una mano amiga cuando lo necesites.<br /><br />

          Escríbenos con total confianza, sin miedo a juicios ni críticas, porque creemos que cada voz merece ser
          escuchada con respeto y empatía. Nuestro compromiso es ofrecerte un lugar seguro, donde encontrarás
          escucha atenta, comprensión genuina y apoyo sincero 💙🧠.<br /><br />

          Recuerda: dar el primer paso para hablar ya es un acto de valentía, y no tienes que hacerlo sola.
          Estamos aquí para acompañarte en este camino.
        </p>
      </div>

      <div className="contenido-contacto">
        <div className="contacto-campos" data-aos="fade-right">
          <h3 className="formulario-titulo">💙😁Formulario de Contacto</h3>
          <form id="contactForm">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "24px",
                marginTop: "30px"
              }}
            >
              <div className="campos">
                <label htmlFor="nombreContacto">Nombre</label>
                <input type="text" id="nombreContacto" placeholder="Tu nombre completo" />
              </div>
              <div className="campos">
                <label htmlFor="telefono">Teléfono</label>
                <input type="number" id="telefono" placeholder="Tu número de teléfono" />
              </div>
            </div>

            <div className="campos">
              <label htmlFor="emailContacto">Email</label>
              <input type="email" id="emailContacto" placeholder="tu@email.com" required />
            </div>

            <div className="campos">
              <label htmlFor="consulta">Tipo de Consulta</label>
              <select id="consulta" required>
                <option value="">Selecciona un tipo</option>
                <option value="individual">Terapia Individual</option>
                <option value="pareja">Terapia de Pareja</option>
                <option value="familiar">Terapia Familiar</option>
                <option value="online">Consulta Online</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="campos">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                rows="4"
                placeholder="Cuéntanos brevemente sobre tu situación o cualquier pregunta que tengas..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              📨 Enviar Solicitud
            </button>

            <p
              style={{
                fontSize: "15px",
                color: "rgb(106, 106, 106)",
                textAlign: "center",
                marginTop: "20px"
              }}
            >
              Tus datos están protegidos y se manejan con total confidencialidad.
            </p>
          </form>
        </div>

        <div className="contenido-info" aria-label="Sección con imagen de fondo sobre bienestar emocional" data-aos="fade-left">
          <div className="info-item">
            <div className="emojis-item">📍</div>
            <div>
              <h4 className="info-palabras">Ubicación</h4>
              <p className="p-frases">Av. Centro de Lima, Perú</p>
              <p style={{ color: "#373737" }}>
                Estamos ubicados en una zona céntrica y de fácil acceso.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="emojis-item">📞</div>
            <div>
              <h4 className="info-palabras">Teléfono</h4>
              <p className="p-frases">+51 914 324 244</p>
              <p style={{ color: "#373737" }}>
                Atendemos llamadas y mensajes de lunes a viernes, de 9:00 AM a 7:00 PM.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="emojis-item">📧</div>
            <div>
              <h4 className="info-palabras">Correo Electrónico</h4>
              <p className="p-frases">conectandonos@mentebienestar.com</p>
              <p style={{ color: "#373737" }}>
                Te responderemos en un plazo máximo de 24 horas.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="emojis-item">🕒</div>
            <div>
              <h4 className="info-palabras">Horarios de Atención</h4>
              <p className="p-frases">Lunes a viernes de 9:00 AM a 7:00 PM</p>
              <p style={{ color: "#373737" }}>Sábados: Atención con cita previa.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frasefinal" data-aos="fade-up">
        <h3>
          Aquí, cada paso hacia tu bienestar emocional es un logro y cada palabra compartida un puente hacia la esperanza.
        </h3>
      </div>

      <div className="opinion-campos">
        <form id="formulario2">
          <div style={{ gap: "16px", marginBottom: "24px", marginTop: "30px" }}>
            <div className="campos">
              <h3 className="formulario-titulo" id="titulo-suscripcion">
                ¡SUSCRÍBETE!❤️😊
              </h3>

              <label htmlFor="nombreSuscripcion">Nombre:</label>
              <input
                type="text"
                id="nombreSuscripcion"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="campos">
              <label htmlFor="emailSuscripcion">Correo electrónico:</label>
              <input
                type="email"
                id="emailSuscripcion"
                name="email"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <h3 className="formulario-titulo" id="titulo-opinion">"Tu voz importa,🤩🤔."</h3>

            <div className="campos">
              <label htmlFor="opinion">Tu opinión:</label>
              <textarea
                id="opinion"
                name="opinion"
                placeholder="Escribe tu comentario aquí..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              SUSCRÍBETE✌️😉
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactos;