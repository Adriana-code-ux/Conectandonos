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
      });
  };

  return (
    <div className="registro-container">
      <h1>Registrar Usuario</h1>

      <input
        type="email"
        placeholder="Escribe tu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />

      <input
        type="password"
        placeholder="Escribe tu Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={registrar}>Registrar</button>
      <button onClick={cambiarVista}>Iniciar Sesión</button>

      <p className="toggle-view" onClick={cambiarVista}>
        ¿Ya tienes cuenta? Inicia sesión aquí
      </p>
    </div>
  );
}

export default RegistrarUsuario;
