import { useEffect, useState } from 'react';

import {
  FaBars,
  FaTimes
} from 'react-icons/fa';

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header
      className={`navbar ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
    >

      <div className="container navbar-container">

        <a
          href="#inicio"
          className="navbar-logo"
        >

          <img
            src="/logo.png"
            alt="LP Soluciones IT"
          />

        </a>

        <nav
          className={`navbar-links ${
            menuOpen ? 'active' : ''
          }`}
        >

          <a
            href="#servicios"
            onClick={closeMenu}
          >
            Servicios
          </a>

      
        <a
            href="#FAQ"
            onClick={closeMenu}
          >
            FAQ
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
          >
            Contacto
          </a>

          <a
            href="#calendar"
            className="navbar-cta mobile-only"
            onClick={closeMenu}
          >
            Agendar reunión
          </a>

        </nav>

        <a
          href="#calendar"
          className="navbar-cta desktop-only"
        >
          Agendar reunión
        </a>

        <button
          className="navbar-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </div>

    </header>
  );
}

export default Navbar;