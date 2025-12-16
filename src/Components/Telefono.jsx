import { Link } from "react-router-dom";

const HeroAppLanding = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-teal-50 min-h-screen flex items-center 
                     px-6 lg:px-16 py-16 sm:py-20 lg:py-0"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* TEXTO IZQUIERDA */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-grey-800">
            Presentando a MindCare!
          </h1>
          <p className="text-xl text-gray-700">
            Tu compañero para mejorar tu bienestar emocional, rastrear hábitos
            saludables y dar seguimiento a tu proceso.
          </p>

          <p className="text-md text-gray-600 max-w-md mx-auto lg:mx-0">
            Crea rutinas, monitorea tu estado de ánimo y lleva un registro
            continuo para cada paciente o usuario. Empieza ahora y transforma tu
            bienestar mental.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/Contacto"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Explorar
            </Link>
          </div>
        </div>

        {/* TELEFONO DERECHA */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[580px] rounded-[2.5rem] border-8 border-gray-800 shadow-xl overflow-hidden bg-black">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-gray-900 w-14 h-4 rounded-full z-10"></div>
            <div className="w-full h-full bg-[#F7F9FC] rounded-[2rem] p-4 pt-6 text-sm text-gray-800 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Hola,</p>
                  <p className="font-semibold">Ana</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-teal-200 flex items-center justify-center font-semibold text-teal-700">
                  A
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-gray-500 mb-2">¿Cómo te sientes hoy?</p>
                <div className="flex justify-between text-xl">
                  <span>😞</span>
                  <span>😐</span>
                  <span>🙂</span>
                  <span>😄</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-medium mb-2">Hábitos de hoy</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>🧘 Meditación</span>
                    <span className="text-teal-500">✔</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🚶 Caminar</span>
                    <span className="text-gray-300">○</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💧 Hidratación</span>
                    <span className="text-gray-300">○</span>
                  </div>
                </div>
              </div>
              <div className="bg-teal-600 rounded-xl p-4 text-white">
                <p className="text-sm opacity-90">Seguimiento semanal</p>
                <p className="text-lg font-semibold">Progreso estable</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl py-2 flex justify-around shadow-md text-gray-500">
                <span>🏠</span>
                <span>📊</span>
                <span>➕</span>
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAppLanding;
