function ContactSection() {
  return (
    <section id="contacto" className="section container">

      <h3>Envíanos tu consulta</h3>

      <div className="contact-wrap">

        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/?success=true"
          className="contact-form"
        >

          {/* 🔥 IMPORTANTE: este hidden es CLAVE para Netlify */}
          <input type="hidden" name="form-name" value="contacto" />

          {/* honeypot */}
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Contanos en qué podemos ayudarte..."
            rows="5"
            required
          />

          <button type="submit" className="btn-primary">
            Enviar
          </button>

        </form>

        <aside className="contact-info">
          <h4>Soporte remoto rápido y profesional</h4>

          <p>
            Brindamos asistencia IT remota y soluciones digitales
            para empresas, profesionales y emprendedores.
          </p>

          <p>WhatsApp: +54 9 3489 683379</p>
          <p>info@lpsoluciones.com.ar</p>
          <p>soporte@lpsoluciones.com.ar</p>

          <a
            href="https://wa.me/5493489683379?text=Hola%20LP%20Soluciones,%20quiero%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            Abrir WhatsApp
          </a>
        </aside>

      </div>
    </section>
  );
}

export default ContactSection;