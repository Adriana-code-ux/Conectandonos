import './navbar.css'
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase';

import NavbarUsuario from './NavbarUsuario';
import NavbarVisitante from './NavbarVisitante';


function Navbar() {
  const [usuario , setUsuario] = useState (null)

  useEffect(() => {
    const auth =getAuth(app);

    //detectar usuario 
    const unsubcribe =onAuthStateChanged(auth,(user)=>
    {
      if (user){
        setUsuario(user)
      } else {
        setUsuario(null)
      }
    });
    return () => unsubcribe();
  }, []);
  
  // nvavbar dinamico 
  if (usuario) {
    return <NavbarUsuario/>
  }else{
    return <NavbarVisitante/>
  }
}

export default Navbar;
