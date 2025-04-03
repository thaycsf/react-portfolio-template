import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Danielle Nunes - Psicóloga</h1>
      <a
        href="https://wa.me/+5531991127403"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        WhatsApp
      </a>
    </header>
  );
}
