import { FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import WorkProcess from './components/WorkProcess';
import RemoteSupport from './components/RemoteSupport';
import TestimonialsSection from './components/TestimonialsSection';
import TechStack from './components/TechStack';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import CalendarSection from './components/CalendarSection';
import Navbar from './components/Navbar';
import './App.css'; // 👈 importante






function App() {
  return (
    <>
      {/* FONDO FIJO */}
      <div className="bg-fixed" />

      {/* CONTENIDO */}
      <div className="app-content">
        <Navbar />
        <Header />

        <main>
          <ServicesSection />
          <WorkProcess />
          <TechStack />
          <TestimonialsSection />
          <StatsSection />
          <CalendarSection />
          <RemoteSupport />
          <FAQSection />
          <ContactSection />
        </main>

        <a
          className="whatsapp-float"
          href="https://wa.me/5493489683379?text=Hola%20LP%20Soluciones"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        <Footer />
      </div>
    </>
  );
}
export default App;