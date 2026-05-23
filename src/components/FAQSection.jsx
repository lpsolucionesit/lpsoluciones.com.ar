const faqs = [
  {
    question: '¿Cómo funciona el soporte remoto?',
    answer:
      'Nos conectamos de forma segura mediante herramientas de asistencia remota para diagnosticar y resolver incidencias sin necesidad de visitas físicas.'
  },

  {
    question: '¿Es seguro permitir acceso remoto a los equipos?',
    answer:
      'Sí. Utilizamos conexiones cifradas y el acceso se realiza únicamente con autorización del cliente, quien puede supervisar toda la sesión en tiempo real.'
  },

  {
    question: '¿Qué tipo de problemas pueden resolver de forma remota?',
    answer:
      'Resolución de errores de software, configuración de correos corporativos, problemas de red, acceso a servidores, impresoras, backups, Microsoft 365, rendimiento de equipos y soporte general de infraestructura IT.'
  },

  {
    question: '¿Trabajan únicamente con empresas?',
    answer:
      'Nuestro enfoque principal está orientado a PyMEs, profesionales y empresas que necesitan soporte IT confiable, mantenimiento continuo y soluciones digitales.'
  },

  {
    question: '¿Ofrecen planes mensuales de mantenimiento?',
    answer:
      'Sí. Contamos con planes de soporte y mantenimiento remoto que incluyen monitoreo, asistencia técnica, seguridad, backups y soporte prioritario.'
  },

  {
    question: '¿Cuánto tiempo tardan en responder una solicitud?',
    answer:
      'Priorizamos respuestas rápidas para minimizar tiempos de inactividad y garantizar continuidad operativa en entornos de trabajo críticos.'
  },

  {
    question: '¿Pueden ayudar con Microsoft 365 y Google Workspace?',
    answer:
      'Sí. Realizamos configuración, migración, administración y soporte de plataformas cloud corporativas como Microsoft 365 y Google Workspace.'
  },

  {
    question: '¿Qué incluye el mantenimiento preventivo?',
    answer:
      'Incluye revisión de sistemas, optimización de rendimiento, actualización de software, monitoreo de seguridad y verificación de backups y servicios críticos.'
  }
];

export default function FAQSection() {
  return (
    <section id="FAQ" className="faq">

      <div className="container">

        <div className="section-header">

          <span>
            
          </span>

          <h2>
            Preguntas Frecuentes
          </h2>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
            >

              <h3>
                {faq.question}
              </h3>

              <p>
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}