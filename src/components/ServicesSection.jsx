import {
  FaLaptopMedical,
  FaCloud,
  FaShieldAlt,
  FaGlobe,
  FaDocker,
  FaRobot,
  FaBolt
} from 'react-icons/fa';

function ServicesSection() {

  const services = [

    {
      icon: <FaLaptopMedical />,
      title: 'Soporte IT Remoto',
      description:
        'Resolución de incidencias, optimización de equipos y asistencia técnica remota para empresas y profesionales.',

      items: [
        'Asistencia remota segura',
        'Resolución de incidencias',
        'Optimización de sistemas',
        'Soporte para empresas',
        'Atención personalizada'
      ]
    },

    {
      icon: <FaCloud />,
      title: 'Herramientas Empresariales',
      description:
        'Implementación y administración de plataformas cloud modernas para mejorar productividad y colaboración.',

      items: [
        'Microsoft 365',
        'Google Workspace',
        'Correos corporativos',
        'Migraciones cloud',
        'Herramientas colaborativas'
      ]
    },

    {
      icon: <FaShieldAlt />,
      title: 'Ciberseguridad y Continuidad Operativa',
      description:
        'Protección de datos, backups y monitoreo orientado a mantener estabilidad y seguridad operativa.',

      items: [
        'Backups automatizados',
        'Monitoreo y alertas',
        'Protección de datos',
        'Seguridad empresarial',
        'Continuidad operativa'
      ]
    },

    {
      icon: <FaGlobe />,
      title: 'Desarrollo Web y Automatización',
      description:
        'Desarrollo de plataformas modernas e integraciones digitales para optimizar operaciones empresariales.',

      items: [
        'React.js y Vite',
        'Sitios corporativos',
        'Automatización de procesos',
        'Integraciones digitales',
        'Optimización operativa'
      ]
    },

    {
      icon: <FaDocker />,
      title: 'Infraestructura Docker & Cloud VPS',
      description:
        'Administración y despliegue de aplicaciones en entornos cloud modernos mediante Docker y VPS.',

      items: [
        'Deployments y contenedores',
        'SSL y seguridad',
        'Reverse proxy',
        'Monitoreo y uptime',
        'Backups automatizados'
      ]
    },

    {
      icon: <FaRobot />,
      title: 'Automatización Inteligente con IA',
      description:
        'Automatización de tareas e integración de herramientas de Inteligencia Artificial para empresas.',

      items: [
        'Integración ChatGPT y Gemini',
        'Automatización de tareas',
        'Workflows empresariales',
        'Optimización de tiempos',
        'Procesos inteligentes'
      ]
    }

  ];

  return (

    <section
      id="servicios"
      className="section premium-section"
    >

      <div className="container">

        <div className="premium-header">

          <span>
            
          </span>

          <h3>
            Servicios y Soluciones Digitales
          </h3>

          <p>
            Brindamos soporte IT, infraestructura cloud,
            automatización y soluciones digitales orientadas
            a optimizar operaciones, mejorar productividad y
            garantizar continuidad tecnológica.
          </p>

        </div>

        <div className="premium-grid">

          {services.map((service) => (

            <article
              className="premium-card"
              key={service.title}
            >

              <div className="premium-icon">
                {service.icon}
              </div>

              <h4>
                {service.title}
              </h4>

              <p className="premium-description">
                {service.description}
              </p>

              <ul>

                {service.items.map((item) => (

                  <li key={item}>

                    <FaBolt />

                    {item}

                  </li>

                ))}

              </ul>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;