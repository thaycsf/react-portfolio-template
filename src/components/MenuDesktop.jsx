import "../styles/Header.css";
import WhatsappButton from "./WhatsappButton";
import InstagramButton from "./InstagramButton";
export default function MenuDesktop() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title-row">
          <h1 className="main-title">Danielle Nunes</h1>
          <span className="main-subtitle">PSICÓLOGA</span>
        </div>
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <div className="header-socials">
          <InstagramButton header onlyIcon />
          <WhatsappButton header onlyIcon />
        </div>
      </div>
    </header>
  );
}
