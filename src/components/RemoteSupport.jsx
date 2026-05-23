import {
  FaHeadset,
  FaBolt,
  FaShieldAlt,
  FaDesktop
} from 'react-icons/fa';

function RemoteSupport() {

  return (
    <section id="remoto" className="section remote-support">

      <div className="container">

        <h3>Soporte Remoto</h3>

        <p className="remote-description">
          Ofrecemos asistencia técnica remota para resolver
          incidencias, optimizar sistemas y brindar soporte
          profesional sin necesidad de traslados.
          Trabajamos con conexiones seguras y atención personalizada
          para empresas, profesionales y usuarios particulares.
        </p>

        <div className="remote-grid">

          {/* BENEFICIOS */}

          <div className="remote-card">

            <div className="remote-icons">

              <div>
                <FaBolt />
                <span>Resolución rápida de incidencias</span>
              </div>

              <div>
                <FaShieldAlt />
                <span>Conexiones remotas seguras y privadas</span>
              </div>

              <div>
                <FaDesktop />
                <span>Soporte sin traslados ni interrupciones</span>
              </div>

              <div>
                <FaHeadset />
                <span>Atención para empresas y profesionales</span>
              </div>

            </div>

          </div>

          {/* ACCESO REMOTO */}

          <div className="remote-card">

            <h4>¿Ya coordinaste una asistencia técnica?</h4>

            <p className="remote-access-text">
              Si ya tenés una sesión programada con nuestro equipo,
              podés descargar la herramienta de acceso remoto segura
              para iniciar la conexión.
            </p>

            <ol className="support-steps">

              <li>Descargá AnyDesk</li>

              <li>Abrí la aplicación</li>

              <li>Compartinos tu ID de conexión</li>

              <li>Recibí asistencia técnica en tiempo real</li>

            </ol>

            <div className="support-buttons">

              <a
                href="https://anydesk.com/es"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Descargar AnyDesk
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RemoteSupport;