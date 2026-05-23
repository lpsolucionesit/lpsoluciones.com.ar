import {
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';

function TestimonialsSection() {

  const testimonials = [
    {
      name: 'Leonel Del Teso',
      company: 'Logística y Distribución',
      text:
        'Teníamos muchos problemas con correos y accesos compartidos. Nos ayudaron a ordenar todo con Microsoft 365 y el soporte remoto siempre responde rápido.',
    },

    {
      name: 'Julian Cuevas',
      company: 'Estudio Contable',
      text:
        'Necesitábamos alguien que pudiera resolver problemas técnicos sin depender de visitas presenciales. La atención es rápida, clara y muy profesional.',
    },

    {
      name: 'Mariana Ojeda',
      company: 'Emprendedora Digital',
      text:
        'Me ayudaron con la web, el dominio y el correo corporativo. Todo quedó funcionando en muy poco tiempo y con excelente acompañamiento.',
    }
  ];

  return (
    <section className="section testimonials-section">

      <div className="container">

        <h3>Empresas y profesionales que confían en nosotros</h3>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <article
              className="testimonial-card"
              key={item.name}
            >

              <FaQuoteLeft className="quote-icon" />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-user">
                <h4>{item.name}</h4>

                <span>{item.company}</span>
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;