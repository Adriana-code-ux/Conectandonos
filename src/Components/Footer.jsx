import { Link } from "react-router-dom";

function Footer() {
  const enlacesPrincipales = [
    { name: "Inicio", path: "/" },
    { name: "Información", path: "/informacion" },
    { name: "¿Quienes Somos?", path: "/nosotras" },
    { name: "Contacto", path: "/contacto" },
  ];

  const enlacesUtilidad = [
    { name: "Términos", path: "/legal/terminos" },
    { name: "Privacidad", path: "/legal/privacidad" },
    { name: "Preguntas Frecuentes", path: "/ayuda/faq" },
  ];

  return (
    <footer className="bg-teal-800 text-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-teal-600 dark:border-gray-700 pb-8">
          {/* Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold text-white">
                Conectándonos
              </span>
            </div>

            <p className="text-sm max-w-md text-teal-200 dark:text-gray-400 mb-4">
              Dedicados a brindar servicios de salud mental de calidad, creando
              un espacio seguro para tu crecimiento personal y bienestar
              emocional.
            </p>

            <div className="flex items-center space-x-2 text-sm text-teal-300 dark:text-gray-500">
              <span>❤️</span>
              <span>Cuidando tu bienestar mental desde 2025</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navegación
            </h4>
            <ul className="space-y-2">
              {enlacesPrincipales.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-teal-200 dark:text-gray-400 hover:text-white dark:hover:text-teal-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Ayuda y Contacto
            </h4>
            <ul className="space-y-2 mb-4">
              {enlacesUtilidad.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-teal-200 dark:text-gray-400 hover:text-white dark:hover:text-teal-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4 mt-6">
              <a className="text-teal-300 hover:text-white transition">
                Facebook
              </a>
              <a className="text-teal-300 hover:text-white transition">
                Twitter
              </a>
              <a className="text-teal-300 hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-teal-300 dark:text-gray-600">
          © {new Date().getFullYear()} Conectándonos. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
