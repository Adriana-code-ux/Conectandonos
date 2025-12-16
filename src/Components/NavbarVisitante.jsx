import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function NavbarVisitante() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-inner contenedor">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icono">C</div>
          <span className="nombre-sitio">CONECTANDONOS</span>
        </div>

        {/* Navegación normal */}
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
            <li>
              <Link
                className={isActive("/iniciar-sesion")}
                to="/iniciar-sesion"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
                          {/* Registro 
              <Link
                className={isActive("/registrar-usuario")}
                to="/registrar-usuario"
              >
                Registrarse
              </Link>*/}
            </li>
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
            <Link
              className={isActive("/")}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              className={isActive("/Informacion")}
              to="/Informacion"
              onClick={() => setMenuOpen(false)}
            >
              Información
            </Link>
            <Link
              className={isActive("/Nosotras")}
              to="/Nosotras"
              onClick={() => setMenuOpen(false)}
            >
              ¿Quiénes somos?
            </Link>
            <Link
              className={isActive("/Contacto")}
              to="/Contacto"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              className={isActive("/Comunidad")}
              to="/Comunidad"
              onClick={() => setMenuOpen(false)}
            >
              Comunidad
            </Link>
            <Link
              className={isActive("/iniciar-sesion")}
              to="/iniciar-sesion"
              onClick={() => setMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
            <Link
              className={isActive("/registrar-usuario")}
              to="/registrar-usuario"
              onClick={() => setMenuOpen(false)}
            >
              Registrarse
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavbarVisitante;
