const Recursos = () => {
  return (
    <section className="bg-teal-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold text-teal-800 mb-4">
          Recursos para tu bienestar
        </h2>

        <p className="text-teal-700 max-w-2xl mx-auto mb-12">
          Explora guías prácticas, artículos y recursos confiables que pueden
          ayudarte a comprender y cuidar tu salud mental.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PDF */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Guías descargables
            </h3>
            <p className="text-teal-600 mb-6">
              Material práctico en PDF para trabajar hábitos, emociones y
              autocuidado.
            </p>
            <a
              href="https://www.redalyc.org/journal/279/27957772009/27957772009.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-medium hover:underline"
            >
              Ver guías →
            </a>
          </div>
          {/* Artículos */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Artículos recomendados
            </h3>
            <p className="text-teal-600 mb-6">
              Lecturas seleccionadas sobre trastornos mentales, bienestar
              emocional y psicología.
            </p>
            <a
              href="https://www.who.int/es/news-room/fact-sheets/detail/mental-health-strengthening-our-response"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-medium hover:underline"
            >
              Leer articulos →
            </a>
          </div>

          {/* Recursos externos */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Recursos confiables
            </h3>
            <p className="text-teal-600 mb-6">
              Enlaces a organizaciones y profesionales especializados en salud
              mental.
            </p>
            <a
              href="https://www.prevenirelsuicidiomexico.org/el-proyecto?gad_source=1&gad_campaignid=22373458259&gbraid=0AAAAA-r4R3Pk1OPRbzLb3FOUQ3BoSW2MX&gclid=EAIaIQobChMI-cOixLXCkQMVNVpIAB3J3jdkEAAYASAAEgLvRfD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-medium hover:underline"
            >
              Explorar recursos →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-6 text-gray-500 text-sm text-center">
        <p className="italic">
          <b>Importante:</b> Esta página no reemplaza una evaluación
          profesional.
        </p>
      </div>
    </section>
  );
};

export default Recursos;
