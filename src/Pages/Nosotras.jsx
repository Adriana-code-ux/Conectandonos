import "./Nosotras.css";

function Nosotras() {
  return (
    <>
      {/* 1) HERO PRINCIPAL */}
      <section className="nosotras-hero">
        <div className="nosotras-hero-overlay">
          <div className="nosotras-hero-content">
            <p className="nosotras-hero-pill">Conectándonos • Salud mental</p>
            <h1 className="nosotras-hero-title">
              Conoce un poco más sobre nosotras
            </h1>
            <p className="nosotras-hero-subtitle">
              Creemos en una salud mental accesible, cálida y humana. Este
              espacio nace para acompañarte, escucharte y recordarte que no
              estás sola en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* 2) CAMILA Y ADRIANA */}
      <section className="nosotras-equipo">
        <div className="nosotras-equipo-inner">
          <h2 className="nosotras-section-title">Nuestro equipo</h2>
          <p className="nosotras-section-text">
            Detrás de Conectándonos estamos nosotras, aprendiendo, creando y
            soñando con un espacio seguro para tu bienestar emocional.
          </p>

          <div className="nosotras-cards">
            {/* CAMILA */}
            <article className="nosotras-card">
              <h3 className="nosotras-card-name">Camila Warthon</h3>
              <p className="nosotras-card-role">Co-fundadora</p>
              <p className="nosotras-card-text">
                Hola a todos, soy Camila y tengo 18 años. A lo largo de mi vida,
                he descubierto que mis pasiones, como la lectura y los deportes,
                no solo me permiten desconectar, sino que también me enseñan
                valiosas lecciones de perseverancia y enfoque. Ambas actividades
                me ayudan a mantener un equilibrio y a sentirme más conectada
                conmigo misma. Estoy emocionada por lo que está por venir y por
                todo lo que podremos lograr como equipo.
              </p>
            </article>

            {/* ADRIANA */}
            <article className="nosotras-card">
              <h3 className="nosotras-card-name">Adriana Huamani</h3>
              <p className="nosotras-card-role">Co-fundadora</p>
              <p className="nosotras-card-text">
                Hola, soy Adriana. Con 18 años, me defino como una aprendiz
                constante; me encanta descubrir cosas nuevas cada día.
                Actualmente, estoy inmersa en el mundo de la programación
                gracias al programa +ChicasTec. Disfruto de mis momentos de
                lectura, música y deporte porque son un recordatorio de que
                siempre hay espacio para crecer y mejorar. Mi objetivo es que
                este proyecto refleje nuestra dedicación al aprendizaje y al
                bienestar.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3) VISIÓN Y MISIÓN */}
      <section className="nosotras-vision-mision">
        <div className="nosotras-vision-mision-inner">
          <h2 className="nosotras-section-title">Nuestra visión y misión</h2>
          <p className="nosotras-section-text">
            Conectándonos nace como un espacio de aprendizaje, acompañamiento y
            empatía, impulsado por jóvenes que creen en el poder de la salud
            mental.
          </p>

          <div className="nosotras-vision-mision-grid">
            <article className="nosotras-vm-card">
              <h3 className="nosotras-vm-title">Visión</h3>
              <p className="nosotras-vm-text">
                Ser una plataforma cercana y confiable donde las personas puedan
                encontrar recursos, apoyo emocional y motivación para cuidar de
                su bienestar mental, sin sentirse juzgadas y con un lenguaje
                simple y humano.
              </p>
            </article>

            <article className="nosotras-vm-card">
              <h3 className="nosotras-vm-title">Misión</h3>
              <p className="nosotras-vm-text">
                Acompañar a las personas en su camino emocional a través de
                contenido útil, herramientas digitales y un enfoque empático,
                creado desde la experiencia, la juventud y las ganas de aportar
                algo positivo al mundo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4) SECCIÓN FINAL: FORMULARIO / TEXTO SOBRE NOSOTRAS */}
      <section className="nosotras-final">
        <div className="nosotras-final-inner">
          <h2 className="nosotras-section-title">Un espacio hecho con cariño</h2>
          <p className="nosotras-section-text">
            Esta página es parte de nuestro proyecto en +ChicasTec, pero también
            es un reflejo de lo que creemos: que hablar de salud mental debería
            ser algo cotidiano, seguro y sin tabúes. Queremos que Conectándonos
            sea un lugar donde puedas sentirte acompañada, informada y
            comprendida.
          </p>

          {/* Aquí puedes insertar tu formulario original si tenías uno,
              por ejemplo un <form> o un componente <FormularioNosotras /> */}
          {/* Lo dejo como contenedor para que pegues tu contenido */}
          <div className="nosotras-formulario-caja">
            <p className="nosotras-formulario-texto">
              Aquí puedes escribir un pequeño formulario, un mensaje o un texto
              más personal sobre nosotras, nuestro recorrido o cómo quieres que
              las personas usen esta plataforma.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotras;
