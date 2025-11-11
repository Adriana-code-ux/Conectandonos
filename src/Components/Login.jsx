import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword,  GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import './Login.css';
//provedor de google 
const provider = new GoogleAuthProvider();

function Login( ) {
    const [email,setEmail]      =   useState("");
    const [password, setPassword] =useState("");
    //Redireccionar 
    const navigate = useNavigate();

//funcion para iniciar sesion con correo y contraseña 
    const iniciarSesion = async() =>{
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log ("Se inicio sesion");
    //onLogin(user);
    navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al inciar sesion");
  });

    }
// Funcion para iniciar sesion con google -------------------------------------------------
const iniciarSesionGoogle = () => {
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.use
    console.log("Iniciaste sesion con Google");
    // onlogin
    navigate('/');

    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error al iniciar sesion con Google");
    console.log(error);
  });
}


    
    return(

       <div className="login-container">
    <div className="login-box">
      <h1>Iniciar Sesión</h1>

      <input 
        type="email" 
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        type="password" 
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={iniciarSesion}>Iniciar sesión</button>
      <button onClick={iniciarSesionGoogle}>Iniciar sesión con Google</button>
    </div>
  </div>
    )
}
export default Login;
