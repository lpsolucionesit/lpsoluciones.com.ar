import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <p>LP Soluciones IT</p>

        <div className="socials">

          <a
            href="https://www.instagram.com/lpsolucionesit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/LPSinformaticas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

        </div>

        <small>
          © {new Date().getFullYear()} .
          Todos los derechos reservados.
        </small>

      </div>
    </footer>
  );
}

export default Footer;