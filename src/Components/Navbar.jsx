import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="contenedor">
        <div className="contenido">
          <div className="logo">
            <div className="logo-icono">C</div>
            <span className="nombre">Conectándonos</span>
          </div>

          <nav className="desktop-nav ">
            <ul>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/">Inicio</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Informacion">Información</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Nosotras">¿Quiénes somos?</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
