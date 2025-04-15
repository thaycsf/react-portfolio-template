import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Danielle Nunes</h1>
        <span className="subtitle">Psicóloga</span>
      </div>
      <nav className="header-nav">
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#benefits">Benefícios</a>
        <a href="#faq">Dúvidas</a>
      </nav>
      <a
        href="https://wa.me/+5531991127403"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <FontAwesomeIcon icon={faWhatsapp} alt="WhatsApp" />
      </a>
    </header>
  );
}
