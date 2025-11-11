//Iniciar Firebase
import { initializeApp } from "firebase/app";

//base de datos
import { getFirestore } from "firebase/firestore";
// autenticacion 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_xB-Bucf7Ht6rfVCYLaojOULSO37s8Ek",
  authDomain: "conectandonos-a679e.firebaseapp.com",
  projectId: "conectandonos-a679e",
  storageBucket: "conectandonos-a679e.firebasestorage.app",
  messagingSenderId: "176504936253",
  appId: "1:176504936253:web:561d4f1d69d686ec991754",
  measurementId: "G-550880LGP1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db , getAuth };
