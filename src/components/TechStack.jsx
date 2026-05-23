import {
  FaMicrosoft,
  FaGoogle,
  FaCloud,
  FaDocker,
  FaGithub,
  FaWordpress,
  FaReact,
  FaServer,
  FaDesktop
} from 'react-icons/fa';

function TechStack() {

  const technologies = [
    {
      icon: <FaMicrosoft />,
      name: 'Microsoft 365'
    },

    {
      icon: <FaGoogle />,
      name: 'Google Workspace'
    },

    {
      icon: <FaCloud />,
      name: 'Cloudflare'
    },

    {
      icon: <FaDocker />,
      name: 'Docker'
    },

    {
      icon: <FaGithub />,
      name: 'GitHub'
    },

    {
      icon: <FaWordpress />,
      name: 'WordPress'
    },

    {
      icon: <FaReact />,
      name: 'React JS'
    },

    {
      icon: <FaServer />,
      name: 'Vite'
    },

    {
      icon: <FaDesktop />,
      name: 'AnyDesk'
    },

    {
      icon: <FaServer />,
      name: 'cPanel'
    }
  ];

  return (
    <section
      id="tecnologias"
      className="section tech-section"
    >

      <div className="container">

        <h3>
          Plataformas y Tecnologías con las que Trabajamos
        </h3>

        <p className="tech-description">
          Utilizamos herramientas modernas orientadas a soporte remoto,
          cloud, colaboración, desarrollo web y soluciones digitales
          para empresas y profesionales.
        </p>

        <div className="tech-grid">

          {technologies.map((tech) => (
            <div
              className="tech-item"
              key={tech.name}
            >

              <div className="tech-icon">
                {tech.icon}
              </div>

              <span>
                {tech.name}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;