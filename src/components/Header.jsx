import "../styles/Header.css";
import WhatsappButton from "./WhatsappButton";

export default function Header() {
  return (
    <header className="header">
      <div className="header-title-row">
        <h1 className="main-title">Danielle Nunes</h1>
        <span className="main-subtitle">PSICÓLOGA</span>
      </div>
      <nav className="header-nav">
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#benefits">Benefícios</a>
        <a href="#faq">Dúvidas</a>
      </nav>
      <div className="header-whatsapp">
        <WhatsappButton header />
      </div>
    </header>
  );
}
