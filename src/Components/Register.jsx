import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css"; // 🔗 Vinculación del CSS

function RegistrarUsuario({ onRegister, cambiarVista }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para registrar usuario
  const registrar = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Cuenta creada con éxito");
        onRegister(user);
      })
      .catch((error) => {
        console.log("Error al registrar el usuario:", error.message);
        alert("Ocurrió un error al registrarte. Revisa tus datos.");
      });
  };

  return (
    <div className="registro-page">
      {/* Panel izquierdo: texto */}
      <div className="registro-left">
        <p className="registro-pill">🤍 Bienestar emocional</p>
        <h1 className="registro-title">Crea tu espacio seguro</h1>
        <p className="registro-text">
          Únete a <strong>Conectándonos</strong> y comienza a cuidar tu salud mental con
          herramientas, recursos y una comunidad que te acompaña.
        </p>
        <div className="registro-highlight">
          <span className="registro-number">+1500</span>
          <span className="registro-highlight-text">
            consultas acompañadas con empatía y profesionalismo.
          </span>
        </div>
      </div>

      {/* Panel derecho: formulario */}
      <div className="registro-card">
        <h2 className="registro-card-title">Crear cuenta</h2>
        <p className="registro-card-subtitle">
          Regístrate con tu correo y comienza a conectar contigo misma 🧠💚
        </p>

        <div className="registro-form">
          <label className="registro-label">
            Correo electrónico
            <input
              type="email"
              placeholder="Escribe tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="registro-label">
            Contraseña
            <input
              type="password"
              placeholder="Crea una contraseña segura"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="registro-btn-principal" onClick={registrar}>
            Registrar
          </button>

          <button
            type="button"
            className="registro-btn-secundario"
            onClick={cambiarVista}
          >
            Iniciar sesión
          </button>

          <p className="toggle-view" onClick={cambiarVista}>
            ¿Ya tienes cuenta? <span>Inicia sesión aquí</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrarUsuario;
