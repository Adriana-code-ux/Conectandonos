import './navbar.css'
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function NavbarUsuario() {
  const auth = getAuth();

    //funcion para cerrar sesion 
const cerrarSesion = async () => {
    await signOut(auth);
    console.log("cerraste sesion ")
}
    
  return (
    <header className="navbar">
      <div className="contenedor">
        <div className="contenido contenido flex flex-col sm:flex-row sm:justify-between sm:items-center">

          <div className="logo desktop-nav hidden sm:block">
            <div className="logo-icono">C</div>
            <span className="nombre">Conectándonos</span>
          </div>
           
          <nav className="desktop-nav ">
            <ul>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/">Inicio</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Informacion">Información</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Nosotras">¿Quiénes somos?</Link></li>
              <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Contacto">Contacto</Link></li>
                             <li className='ml-5 text-gray-700 hover:text-gray-900'><Link to="/Comunidad">Comunidad</Link></li>

              <li>
                <button onClick={cerrarSesion}>
                cerrar sesion </button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavbarUsuario ;
