import './hero.css'
import { Link } from 'react-router-dom';

function Hero (){
    return(
        <>
        <div className='inicio'>
            <div>
            <header>
                <div className="caja-pequeña">
                    <span>❤️</span>
                    <span>Cuidamos tu bienestar mental</span>
                </div>
                <h1>Tu salud mental es nuestra prioridad</h1>

                    <p>Encuentra el apoyo profesional que necesitas para afrontar tus retos emocionales y personales.
                        Ofrecemos terapias especializadas, diseñadas para tus necesidades, en un ambiente seguro, acogedor y
                        completamente confidencial, donde tu bienestar emocional es nuestra prioridad.</p>

                    <div className="caja-pequeña2">
                    <span className="counter"><strong> 0 </strong></span>
                    </div>
                        <p>¡1500 consultas exitosas! Tu bienestar mental es nuestra prioridad.</p>
                </header>
                </div>
                    <img src="fonod2.webp" className='style'></img>

        </div>
        </>
    )
}
export default Hero;