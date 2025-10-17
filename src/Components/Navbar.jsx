import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar (){
    return(
        <>
<header>
        <div className="contenedor">
            <div className="contenido">
                <div className="logo">
                    <div className="logo-icono">C</div>
                    <a className="a2" href="inicio.html"><span>Conectándonos</span></a>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        <li><Link to ="/Inicio">Inicio           </ Link></li>
                        <li><Link to ="/Informacion">Información </ Link></li>
                        <li><Link to ="/Nosotras">¿Quienes somos?</ Link></li>
                        <li><Link to ="/Contacto">Contacto       </ Link></li>
                        
                    </ul>
                </nav>
        

            </div>
        </div>
    </header>
        </>
    )
}
export default Navbar;