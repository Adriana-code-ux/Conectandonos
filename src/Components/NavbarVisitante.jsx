// src/components/NavbarVisitante.jsx
import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

function NavbarVisitante() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Sincroniza darkMode con el body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

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
            <li>
              <Link
                className={isActive("/iniciar-sesion")}
                to="/iniciar-sesion"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/registrar-usuario")}
                to="/registrar-usuario"
              >
                Registrarse
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botón modo oscuro */}
        <button onClick={toggleDarkMode} className="btn-darkmode">
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
    </header>
  );
}

export default NavbarVisitante;
