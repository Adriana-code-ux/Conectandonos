import './Informacion.css'

function Informacion() {
  return (
    <>
    <div className='info'>
        <div className="cajasTexto">
          <div>
            <h1 className="titulo"><b>Trastornos Mentales</b></h1>
            <p className="titulo2">Cuidando tu mente, cuidando tu vida</p>
          </div>

          <div className="contenido-texto">
            <div className="texto">
              <h3><b>IMPORTACIA DE ABORDAR LOS TRANSTORNOS MENTALES</b></h3><br />
              <p>
                Los trastornos mentales no son simples cambios de ánimo o “malos días” que se superan con fuerza de
                voluntad. Son condiciones reales que influyen en la forma en que una persona piensa, siente y actúa, y pueden
                tener un impacto significativo en la vida diaria. No solo afectan el bienestar emocional, sino también la
                salud física, la calidad de las relaciones y el rendimiento en el trabajo o los estudios.
              </p>
              <p>
                Cuando no se reconocen o no se tratan a tiempo, estos trastornos pueden agravarse, generando un círculo
                difícil de romper. Por eso, es fundamental hablar de ellos con naturalidad, derribar el estigma que los
                rodea y ser mejores siempre que se pueda en los ambientes que manejemos.
              </p>
              <p>
                Abordarlos implica mucho más que ofrecer tratamiento médico o psicológico. Significa construir entornos
                seguros y comprensivos, brindar herramientas para el manejo de las emociones y garantizar que las personas
                tengan acceso a apoyo profesional y redes de contención. La prevención, la educación y la empatía son pilares
                clave para que más personas se animen a dar el primer paso hacia su recuperación.
              </p>
            </div>
            <div className="imagen-texto">
              <img src="fon-info.jpg" alt="Imagen relacionada" />
            </div>
          </div>
        </div>
        <div className="cuadros">
          <div className="cajasTexto caja">
            <h3>ANSIEDAD</h3><br />
              <div className="uno">
                <div>
                  <p>La ansiedad, cuando es intensa y constante, puede limitar la vida diaria. No es solo nervios
                      antes de un evento, sino una preocupación persistente que afecta el sueño, la concentración y las relaciones.
                      Detectarla a tiempo facilita recuperar la calma y el equilibrio.</p>
                </div>
                <div><i className="fa-solid fa-brain fa-2xl iconos" ></i></div>
              </div>
          </div>

                <div className="cajasTexto caja">
                    <h3>DEPRESIÓN</h3><br />
                    <div className="uno">
                        <div>
                            <p>La depresión va más allá de la tristeza. Puede causar pérdida de interés, cambios en el sueño
                                o apetito,
                                fatiga y una sensación persistente de vacío. Detectarla pronto ayuda a prevenir que se
                                agrave y facilita
                                la
                                recuperación.</p>
                        </div>
                        <div><i className="fa-solid fa-cloud-rain fa-2xl iconos"></i></div>
                    </div>
                </div>

                <div className="cajasTexto caja">
                    <h3>CONDUCTAS ALIMENTARIAS</h3><br />
                    <div className="uno">
                        <div>
                            <p>Incluyen afecciones como anorexia, bulimia o atracones, que afectan la salud física y
                                emocional. Suelen
                                relacionarse con la autoimagen y la autoestima, y requieren atención especializada para una
                                recuperación
                                integral.</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-utensils fa-2xl iconos"></i>
                        </div>
                    </div>
                </div>

                <div className="cajasTexto caja">
                    <h3>TRASTORNO BIPOLAR</h3><br />
                    <div className="uno">
                        <div>
                            <p>Se caracteriza por cambios extremos en el estado de ánimo, desde euforia y energía elevada
                                hasta profunda
                                tristeza y agotamiento. Con tratamiento adecuado, es posible lograr estabilidad y bienestar.
                            </p>
                        </div>
                        <div><i className="fa-solid fa-masks-theater fa-2xl iconos"></i></div>
                    </div>
                </div>

            </div>
            <div className="cajasTexto">
            <p>En Conectándonos creemos que la salud mental es tan importante como la salud física. Por eso, trabajamos
                para
                ofrecer un espacio seguro, libre de prejuicios y enfocado en el bienestar integral de cada persona.
                Entendemos
                que dar el primer paso puede ser difícil, pero también sabemos que buscar ayuda puede marcar la
                diferencia.<br />

                Si tú o alguien cercano está atravesando un momento difícil, aquí encontrarás orientación y apoyo
                profesional
                para iniciar el camino hacia una vida más equilibrada y plena.
            </p>
            </div>

      </div>

      <div className="ayuda">
            <div className="titulo2">
                <h2>¿Necesitas apoyo? Estamos para acompañarte</h2>
                <p className="lead">
                    La ayuda oportuna marca la diferencia. Aquí puedes agendar una orientación, chatear con nuestro equipo o
                    explorar recursos que te ayuden a dar el primer paso.
                </p>
            </div>

            <div className="boton ">
                <button><a className="a" href="contacto.html">Agenda tu consulta aquí</a></button>
            </div>

            </div>
        

            <div className="nota">
            <b>Importante:</b> Esta página no reemplaza una evaluación profesional ni es un canal de emergencia.
            Si tú o alguien corre peligro, contacta a los servicios de emergencia de tu país.
            </div>
    </>
  );
}

export default Informacion;