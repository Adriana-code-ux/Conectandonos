import { useState } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function NavbarUsuario() {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("cerraste sesión");
      navigate("/"); // redirige al inicio
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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

        {/* Navegación normal */}
        <nav className="nav-links">
          <ul>
            <li><Link className={isActive("/")} to="/">Inicio</Link></li>
            <li><Link className={isActive("/Informacion")} to="/Informacion">Información</Link></li>
            <li><Link className={isActive("/Nosotras")} to="/Nosotras">¿Quiénes somos?</Link></li>
            <li><Link className={isActive("/Contacto")} to="/Contacto">Contacto</Link></li>
            <li><Link className={isActive("/Comunidad")} to="/Comunidad">Comunidad</Link></li>
            <li><button onClick={cerrarSesion} className="btn-logout">Cerrar sesión</button></li>
          </ul>
        </nav>

        {/* Botón hamburguesa */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <nav className={`nav-links-mobile ${menuOpen ? "open" : ""}`}>
            <Link className={isActive("/")} to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link className={isActive("/Informacion")} to="/Informacion" onClick={() => setMenuOpen(false)}>Información</Link>
            <Link className={isActive("/Nosotras")} to="/Nosotras" onClick={() => setMenuOpen(false)}>¿Quiénes somos?</Link>
            <Link className={isActive("/Contacto")} to="/Contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link className={isActive("/Comunidad")} to="/Comunidad" onClick={() => setMenuOpen(false)}>Comunidad</Link>
            <button onClick={() => {cerrarSesion(); setMenuOpen(false)}} className="btn-logout">
              Cerrar sesión
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavbarUsuario;
