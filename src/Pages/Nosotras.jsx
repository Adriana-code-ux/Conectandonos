import './Nosotras.css'

function Nosotras (){
    return(
        <>
    <section id="servicios" className="nosotras mx-auto py-10 px-6 max-w-5xl">
      <div className='px-12 py-5 fondo' > 
        <div>
            <h2 className="titulo1 text-5xl font-extrabold text-gray-800 text-center mb-4"><b>¿Quienes somos?</b></h2>
        </div>


        <div className="cuadros nosotras-grid space-y-10 ">
          <div className="nosotras-caja perfil-card bg-camila p-8 rounded-lg flex-1 shadow-md">
            <h3 className="nombres text-2xl font-semibold text-gray-800 mb-3">Camila Warthon</h3>
            <p className="descripcion text-gray-700 leading-relaxed">
              Hola a todos, soy Camila y tengo 18 años. A lo largo de mi vida,
              he descubierto que mis pasiones, como la lectura y los deportes,
              no solo me permiten desconectar, sino que también me enseñan
              valiosas lecciones de perseverancia y enfoque. Ambas actividades
              me ayudan a mantener un equilibrio y a sentirme más conectada
              conmigo misma. Estoy emocionada por lo que está por venir y por
              todo lo que podremos lograr como un equipo.
            </p>
        </div>

       

          <div className="nosotras-caja perfil-card bg-camila p-8 rounded-lg flex-1 shadow-md">
            <h3 className="nombres text-2xl font-semibold text-gray-800 mb-3">Adriana Huamani</h3>
            <p className="descripcion text-gray-700 leading-relaxed">
              Hola, soy Adriana. Con 18 años, me defino como una aprendiz
              constante; me encanta descubrir cosas nuevas cada día.
              Actualmente, estoy inmersa en el mundo de la programación gracias
              al programa +ChicasTec. Disfruto de mis momentos de lectura,
              música y deporte porque son un recordatorio de que siempre hay
              espacio para crecer y mejorar. Mi objetivo es que este proyecto
              refleje nuestra dedicación al aprendizaje y al bienestar.
            </p>
          </div>

        
        </div>
      </div>
    </section>
        </>
    )
}
export default Nosotras;