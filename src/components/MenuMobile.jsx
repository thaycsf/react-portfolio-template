import "../styles/HeaderMobile.css";
import WhatsappButton from "./WhatsappButton";
import InstagramButton from "./InstagramButton";
import MenuIcon from "./Icons/Hamburguer";
import { useState } from "react";

export default function MenuMobile() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="menu">
      <div className="menu-title-row">
        <h1 className="main-title">Danielle Nunes</h1>
        <span className="main-subtitle">PSICÓLOGA</span>
      </div>

      <button type="button" className="menu-button" aria-label="Menu" onClick={toggleMenu}>
        <MenuIcon />
      </button>

      <nav className={`menu-nav ${showMenu ? 'menu-nav--visible' : ''}`} onClick={toggleMenu}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#faq">Dúvidas</a>
        <div className="menu-socials">
          <InstagramButton onlyIcon header/>
          <WhatsappButton onlyIcon header/>
        </div>
      </nav>
    </header>
  );
}
