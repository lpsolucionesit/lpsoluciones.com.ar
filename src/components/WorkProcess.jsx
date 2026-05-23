function WorkProcess() {

  const steps = [
    {
      number: "1",
      title: "Solicitud de Consultoría",
      description:
        "Nos contactás mediante WhatsApp o formulario y analizamos las necesidades tecnológicas de tu empresa."
    },

    {
      number: "2",
      title: "Propuesta Técnica",
      description:
        "Evaluamos tu infraestructura y definimos una solución eficiente, escalable y adaptada a cada entorno de trabajo."
    },

    {
      number: "3",
      title: "Implementación",
      description:
        "Brindamos asistencia remota segura para implementar soluciones, resolver incidencias y optimizar sistemas."
    },

    {
      number: "4",
      title: "Continuidad Operativa",
      description:
        "Realizamos seguimiento constante para garantizar estabilidad, seguridad y continuidad en la operación tecnológica."
    }
  ];

  return (
    <section className="section process-section">

      <div className="container">

        <h3>Nuestro Proceso de Trabajo</h3>

        <p className="process-description">
          Un proceso profesional orientado a brindar
          soluciones IT remotas, ágiles y seguras para empresas modernas.
        </p>

        <div className="process-grid">

          {steps.map((step) => (
            <article
              className="process-card"
              key={step.number}
            >

              <div className="process-number">
                {step.number}
              </div>

              <h4>{step.title}</h4>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkProcess;