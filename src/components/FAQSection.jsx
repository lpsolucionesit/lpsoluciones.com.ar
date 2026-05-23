const faqs = [
  {
    question: '¿Cómo funciona el soporte remoto?',
    answer:
      'Nos conectamos mediante herramientas seguras de acceso remoto para diagnosticar y resolver incidencias sin necesidad de visitas presenciales.'
  },

  {
    question: '¿Es seguro permitir acceso remoto?',
    answer:
      'Sí. Todas las conexiones se realizan de forma cifrada y únicamente con autorización del cliente.'
  },

  {
    question: '¿Qué tipo de problemas pueden resolver?',
    answer:
      'Soporte de sistemas, correos corporativos, Microsoft 365, redes, backups, impresoras, servidores y soporte general de infraestructura IT.'
  },

  {
    question: '¿Trabajan únicamente con empresas?',
    answer:
      'Nuestro enfoque principal está orientado a PyMEs, profesionales y empresas que necesitan soporte técnico confiable y continuidad operativa.'
  },

  {
    question: '¿Ofrecen mantenimiento mensual?',
    answer:
      'Sí. Disponemos de planes mensuales que incluyen monitoreo, soporte remoto, backups, mantenimiento preventivo y asistencia prioritaria.'
  },

  {
    question: '¿Brindan soporte urgente?',
    answer:
      'Sí. Priorizamos incidencias críticas para minimizar tiempos de inactividad y mantener la operación funcionando correctamente.'
  },

  {
    question: '¿Pueden ayudar con Microsoft 365 y Google Workspace?',
    answer:
      'Sí. Realizamos configuración, migraciones, administración y soporte de plataformas cloud empresariales.'
  },

  {
    question: '¿También desarrollan sitios web y automatizaciones?',
    answer:
      'Sí. Diseñamos plataformas modernas, automatizamos procesos e integramos herramientas digitales para optimizar operaciones empresariales.'
  },

  {
    question: '¿Trabajan de forma presencial?',
    answer:
      'Nuestro modelo principal es remoto, permitiendo brindar asistencia rápida, segura y eficiente.'
  },

  {
    question: '¿Cómo puedo solicitar una asistencia?',
    answer:
      'Podés contactarnos mediante WhatsApp, formulario web o agendando una reunión inicial desde la plataforma de reservas.'
  }
];

export default function FAQSection() {
  return (
    <section id="FAQ" className="faq">

      <div className="container">

        <div className="section-header">

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