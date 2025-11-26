import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch(() => alert("Correo o contraseña incorrectos."));
  };

  const iniciarSesionGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(() => navigate("/"))
      .catch(() => alert("Error al iniciar sesión con Google."));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* ==== LADO IZQUIERDO (Hero con imagen real) ==== */}
      <div className="hidden md:flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1525708827920-7a40f2e3c438?q=80&w=1200&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="wellness"
        />

        {/* Capa oscura suave para que el texto destaque */}
        <div className="absolute inset-0 bg-teal-900/60"></div>

        <div className="relative text-white px-10">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            Conecta con tu bienestar
          </h1>

          <p className="mt-4 text-lg text-teal-100 max-w-md">
            Tómate un momento para ti.  
            Reconoce tus emociones y da un paso hacia una versión más plena de ti misma.
          </p>

          <div className="mt-6 bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-lg border border-white/30 inline-block">
            <p className="text-lg font-semibold">✨ +1500 sesiones de apoyo emocional</p>
          </div>
        </div>
      </div>

      {/* ==== LADO DERECHO (Formulario) ==== */}
      <div className="flex items-center justify-center p-6">
        <div
          className="
            w-full max-w-md 
            bg-white/70 
            backdrop-blur-xl 
            rounded-3xl 
            border border-gray-300/50
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
            px-10 py-12
            animate-fadeIn
          "
        >
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Inicia sesión
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Estamos aquí para acompañarte 💛
          </p>

          {/* CAMPOS */}
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Ej: maria@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full mt-1 px-4 py-2.5 rounded-xl 
                  bg-gray-100 border border-gray-300 
                  text-gray-900
                  outline-none 
                  focus:border-teal-600 
                  focus:ring-2 focus:ring-teal-300
                  transition
                "
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full mt-1 px-4 py-2.5 rounded-xl 
                  bg-gray-100 border border-gray-300 
                  text-gray-900
                  outline-none 
                  focus:border-teal-600 
                  focus:ring-2 focus:ring-teal-300
                  transition
                "
              />
            </div>
          </div>

          {/* BOTÓN INICIAR SESIÓN */}
          <button
            onClick={iniciarSesion}
            className="
              w-full mt-6 py-3 
              bg-gradient-to-r from-teal-700 to-teal-500 
              text-white font-semibold 
              rounded-full shadow-lg
              hover:brightness-110 
              hover:-translate-y-0.5
              transition
            "
          >
            Iniciar sesión
          </button>

          {/* GOOGLE */}
          <button
            onClick={iniciarSesionGoogle}
            className="
              w-full mt-3 py-3 
              bg-white 
              border border-gray-300 
              rounded-full 
              flex items-center justify-center gap-3
              text-gray-700 font-medium
              shadow-sm
              hover:bg-gray-100
              hover:-translate-y-0.5
              transition
            "
          >
            <img
              src="https://i.pinimg.com/originals/68/3d/9a/683d9a1a8150ee8b29bfd25d46804605.png"
              alt="Google"
              className="w-5"
            />
            Continuar con Google
          </button>

          {/* REGISTRO */}
          <p className="text-sm text-gray-600 text-center mt-6">
            ¿No tienes cuenta?
            <span
              onClick={() => navigate("/registrar-usuario")}
              className="ml-1 text-teal-700 font-semibold underline cursor-pointer"
            >
              Regístrate aquí
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
