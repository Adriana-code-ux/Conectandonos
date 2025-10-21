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
                <h1 className=' font-serif text-center text-6xl font-medium text-gray-700 leading-snug'>Tu salud mental es nuestra prioridad</h1>

                    <p className=' bg-white/20 p-4 rounded-lg shadow-lg backdrop-blur-sm
                    max-w-3xl mx-auto font-sans text-xl text-gray-800 text-center mt-5'>
                        Encuentra el apoyo profesional que necesitas para afrontar tus retos emocionales y personales.
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