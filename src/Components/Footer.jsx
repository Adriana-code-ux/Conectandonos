import './footer.css'
import { Link } from 'react-router-dom';

function Footer (){
    return(
        <>
    <footer>
        <div className="contenedor-footer">
            <div className="contenido-footer">
                <div>
                    <div className="marca-footer">
                        <div className="icono-marca">
                            C
                        </div>
                        <span>Conectándonos</span>
                    </div>
                    <p className="texto-footer">
                        Dedicados a brindar servicios de salud mental de calidad, creando
                        un espacio seguro para tu crecimiento personal y bienestar
                        emocional.
                    </p>
                    <div>
                        <span>❤️</span>
                        <span className="texto-footer">Cuidando tu bienestar mental desde 2025</span>
                    </div>
                </div>
            </div>
            <div className="pie">
                <p>© 2025 Conectándonos. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;