import { Link } from 'react-router-dom';

function Footer() {
    // Definimos las rutas locales para las secciones del footer
    const enlacesPrincipales = [
        { name: 'Inicio', path: '/' },
        { name: 'Información', path: '/informacion' },
        { name: '¿Quienes Somos?', path: '/nosotras' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const enlacesUtilidad = [
        // Aquí puedes poner las rutas locales que necesites
        { name: 'Términos', path: '/legal/terminos' }, 
        { name: 'Privacidad', path: '/legal/privacidad' },
        { name: 'Preguntas Frecuentes', path: '/ayuda/faq' },
    ];

    return (
        // 1. Estilo General y Dark Mode
        // Fondo claro: bg-teal-800 | Fondo oscuro: dark:bg-gray-900 (gris oscuro casi negro)
        <footer className="bg-teal-800 text-gray-100 dark:bg-gray-900 mt-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Contenedor Principal (GRID) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-teal-600 dark:border-gray-700 pb-8">

                    {/* 1. Columna: Marca y Misión */}
                    <div className="md:col-span-2">
                        {/* Marca - Ajuste de color para dark mode */}
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-teal-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-xl">
                                C
                            </div>
                            <span className="text-2xl font-bold text-white">Conectándonos</span>
                        </div>
                        
                        {/* Misión/Descripción - Letra más clara en dark mode */}
                        <p className="text-sm max-w-md text-teal-200 dark:text-gray-400 mb-4">
                            Dedicados a brindar servicios de salud mental de calidad, creando
                            un espacio seguro para tu crecimiento personal y bienestar
                            emocional.
                        </p>

                        {/* Frase de Cuidado */}
                        <div className="flex items-center space-x-2 text-sm text-teal-300 dark:text-gray-500">
                            <span>❤️</span>
                            <span>Cuidando tu bienestar mental desde 2025</span>
                        </div>
                    </div>

                    {/* 2. Columna: Enlaces de Navegación */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Navegación</h4>
                        <ul className="space-y-2">
                            {enlacesPrincipales.map((link) => (
                                <li key={link.name}>
                                    {/* Uso de Link con rutas locales */}
                                    <Link 
                                        to={link.path} 
                                        className="text-teal-200 dark:text-gray-400 hover:text-white dark:hover:text-teal-400 transition duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Columna: Utilidad y Contacto */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Ayuda y Contacto</h4>
                        <ul className="space-y-2 mb-4">
                            {enlacesUtilidad.map((link) => (
                                <li key={link.name}>
                                    {/* Uso de Link con rutas locales */}
                                    <Link 
                                        to={link.path} 
                                        className="text-teal-200 dark:text-gray-400 hover:text-white dark:hover:text-teal-400 transition duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Redes Sociales */}
                        <div className="flex space-x-4 mt-6">
                            <a href="#" aria-label="Facebook" className="text-teal-300 dark:text-gray-500 hover:text-white dark:hover:text-teal-400 transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter" className="text-teal-300 dark:text-gray-500 hover:text-white dark:hover:text-teal-400 transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram" className="text-teal-300 dark:text-gray-500 hover:text-white dark:hover:text-teal-400 transition"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/* Pie de página (Derechos de autor) - Letra más clara */}
                <div className="pt-6 text-center text-xs text-teal-300 dark:text-gray-600">
                    <p>© {new Date().getFullYear()} Conectándonos. Todos los derechos reservados.</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;