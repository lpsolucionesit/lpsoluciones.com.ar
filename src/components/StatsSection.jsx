import {
  FaLaptop,
  FaUsers,
  FaHeadset,
  FaGlobe
} from 'react-icons/fa';

function StatsSection() {
  const stats = [
    {
      icon: <FaLaptop />,
      number: '+1600',
      label: 'Incidencias Resueltas'
    },

    {
      icon: <FaUsers />,
      number: '+1200',
      label: 'Clientes Asistidos'
    },

    {
      icon: <FaHeadset />,
      number: '24/7',
      label: 'Soporte Remoto'
    },

    {
      icon: <FaGlobe />,
      number: '+600',
      label: 'Soluciones Digitales Implementadas'
    }
  ];

  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((stat) => (
            <article
              className="stat-card"
              key={stat.label}
            >

              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.label}</p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;