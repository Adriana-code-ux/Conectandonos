// src/components/NavbarUsuario.jsx
import "./navbar.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

function NavbarUsuario() {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // función para cerrar sesión
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("cerraste sesión");
      navigate("/"); // redirige al inicio
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // para marcar el link activo
  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-inner contenedor">
        {/* Logo + texto bienvenida */}
        <div className="logo">
          <div className="logo-icono">C</div>
          <span className="nombre-sitio">Bienvenido!!</span>
        </div>

        {/* Navegación */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link className={isActive("/")} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={isActive("/Informacion")} to="/Informacion">
                Información
              </Link>
            </li>
            <li>
              <Link className={isActive("/Nosotras")} to="/Nosotras">
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link className={isActive("/Contacto")} to="/Contacto">
                Contacto
              </Link>
            </li>
            <li>
              <Link className={isActive("/Comunidad")} to="/Comunidad">
                Comunidad
              </Link>
            </li>

            {/* Botón cerrar sesión */}
            <li>
              <button onClick={cerrarSesion} className="btn-logout">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavbarUsuario;
