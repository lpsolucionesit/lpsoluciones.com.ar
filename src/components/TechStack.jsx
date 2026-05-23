import {
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaGithub,
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaWindows,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaDesktop,
  FaEnvelope,
  FaNetworkWired,
  FaRobot
} from 'react-icons/fa';

import {
  SiCloudflare,
  SiVite,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiCpanel,
  SiOpenai,
  SiGooglecloud,
  SiGithubactions,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

function TechStack() {

  const technologies = [
    { icon: <FaMicrosoft />, name: 'Microsoft 365' },
    { icon: <FaGoogle />, name: 'Google Workspace' },
    { icon: <SiGooglecloud />, name: 'Google Cloud' },
    { icon: <SiCloudflare />, name: 'Cloudflare' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiGithubactions />, name: 'GitHub Actions' },
    { icon: <FaWordpress />, name: 'WordPress' },
    { icon: <FaReact />, name: 'React JS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiVite />, name: 'Vite' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <FaWindows />, name: 'Windows Server' },
    { icon: <FaServer />, name: 'VPS & Hosting' },
    { icon: <FaDatabase />, name: 'Databases' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiCpanel />, name: 'cPanel' },
    { icon: <FaShieldAlt />, name: 'Cybersecurity' },
    { icon: <FaEnvelope />, name: 'Corporate Email' },
    { icon: <FaNetworkWired />, name: 'Networking' },
    { icon: <FaDesktop />, name: 'Anydesk' },
    { icon: <FaRobot />, name: 'Automation' },
    { icon: <SiOpenai />, name: 'OpenAI & AI' }
  ];

  return (
    <section
      id="tecnologias"
      className="section tech-section"
    >

      <div className="container">

        <h3>
          Plataformas y Tecnologías
        </h3>

        <p className="tech-description">
          Herramientas modernas utilizadas para soporte IT,
          cloud, automatización, desarrollo web,
          infraestructura y seguridad empresarial.
        </p>

        <div className="tech-grid">

          {technologies.map((tech, index) => (
            <div
              className="tech-item"
              key={index}
            >

              <div className="tech-icon">
                {tech.icon}
              </div>

              <div className="tech-tooltip">
                {tech.name}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;