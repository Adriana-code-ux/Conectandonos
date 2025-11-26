import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import app from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Nosotras from "./Pages/Nosotras";
import Footer from "./Components/Footer";
import Informacion from "./Pages/Informacion";
import Contactos from "./Pages/Contactos";
import Login from "./Components/Login";
import RegistrarUsuario from "./Components/Register";
import Comunidad from "./Components/Comunidad";
import Rutaprivada from "./Components/Rutaprivada";
import EncuestaBienestar from "./Components/EncuestaBienestar";
import EncuestaEquipo from "./Components/EncuestaEquipo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <EncuestaBienestar />
              </>
            }
          />
          <Route path="/Informacion" element={<Informacion />} />
          <Route
            path="/Nosotras"
            element={
              <>
                <Nosotras />
                <EncuestaEquipo />
              </>
            }
          />
          <Route path="/Contacto" element={<Contactos />} />

          {/* Página combinada (si la sigues usando) */}
          <Route
            path="/Prueba"
            element={
              <>
                <Login />
                <RegistrarUsuario />
              </>
            }
          />

          {/* Rutas individuales */}
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registrar-usuario" element={<RegistrarUsuario />} />

          <Route
            path="/Comunidad"
            element={
              <Rutaprivada>
                <Comunidad />
              </Rutaprivada>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
