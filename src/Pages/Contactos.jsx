const Contactos = () => {
  return (
    <section id="contactos">

      {/* HERO SIN OPACIDAD EXCESIVA */}
      <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">

        <img
          src="https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=870&auto=format&fit=crop"
          alt="Apoyo emocional"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay MUY suave */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* BLOQUE FLOTANTE DE TEXTO DEL HERO */}
      <div className="relative z-20 -mt-16 max-w-3xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-teal-100">
          <h1 className="text-teal-700 text-3xl md:text-4xl font-bold mb-3">
            Conectándonos Contigo 
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Un espacio seguro, humano y lleno de empatía para acompañarte en tu bienestar emocional.
          </p>
        </div>
      </div>

      {/* SECCIÓN EMOCIONAL – MÁS COLOR Y CONTRASTE */}
      <div className="bg-teal-100/60 py-20 px-6 mt-16 border-t border-teal-200">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            No estás sola, estamos contigo
          </h2>

          <p className="text-gray-700 text-lg">
            Aquí puedes compartir tus pensamientos, encontrar alivio y recibir apoyo real.
          </p>

          <p className="text-gray-700 text-lg mt-2">
            Tu voz importa. Tu historia importa. Tu bienestar importa.
          </p>

          <p className="italic text-teal-700 font-medium mt-4">
            Dar el primer paso ya es valentía 🌈
          </p>

        </div>
      </div>

      {/* INFO CARDS – MÁS COLOR PARA SEPARAR */}
      <div className="bg-white py-20 px-6 border-t border-gray-200">
        <h3 className="text-center text-3xl font-bold text-teal-700 mb-12">
          Información de contacto
        </h3>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <InfoCard icon="📍" title="Ubicación" text="Av. Centro de Lima, Perú" />
          <InfoCard icon="📞" title="Teléfono" text="+51 914 324 244" />
          <InfoCard icon="📧" title="Correo" text="atencion@conectandonos.com" />
          <InfoCard icon="🕒" title="Horario" text="Lunes - Viernes: 9AM – 7PM" />

        </div>
      </div>

      {/* FORMULARIO CON MÁS COLOR Y CONTRASTE */}
      <div className="bg-gradient-to-br from-teal-200 to-teal-300 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-white shadow-2xl rounded-3xl p-12">

          {/* TEXTO LATERAL */}
          <div className="flex flex-col justify-center">
            <h3 className="text-teal-800 text-4xl font-bold mb-4">
              💬 Escríbenos un mensaje
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Estamos aquí para escucharte. Todo lo que compartas es confidencial y tratado con
              respeto y empatía.
            </p>
          </div>

          {/* FORMULARIO */}
          <form className="space-y-6">

            <Input label="Nombre" type="text" placeholder="Tu nombre completo" />
            <Input label="Correo" type="email" placeholder="ejemplo@correo.com" />

            <div>
              <label className="block mb-2 text-gray-800 font-medium">Mensaje</label>
              <textarea
                rows="5"
                className="w-full border rounded-xl p-4 outline-none bg-gray-50 focus:ring-2 focus:ring-teal-400"
                placeholder="Cuéntanos cómo te sientes..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition"
            >
              📨 Enviar mensaje
            </button>

          </form>

        </div>
      </div>

      {/* FRASE FINAL */}
      <p className="text-center mt-12 mb-16 text-teal-700 italic px-4">
        Cada palabra es un paso hacia tu bienestar. Aquí estamos contigo 💛
      </p>

    </section>
  );
};

export default Contactos;

/* SUBCOMPONENTES */
const InfoCard = ({ icon, title, text }) => (
  <div className="bg-teal-50 rounded-2xl shadow-md p-6 flex items-start gap-4 border border-teal-200">
    <span className="text-4xl">{icon}</span>
    <div>
      <h3 className="font-semibold text-teal-800 text-xl">{title}</h3>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  </div>
);

const Input = ({ label, type, placeholder }) => (
  <div>
    <label className="block mb-2 text-gray-800 font-medium">{label}</label>
    <input
      type={type}
      className="w-full border rounded-xl p-3 bg-gray-50 outline-none focus:ring-2 focus:ring-teal-400"
      placeholder={placeholder}
    />
  </div>
);

