import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <section className="personal-info">
      <div className="info">
        <blockquote className="quote">
          <p className="quote-text">"A cura vem pela fala."</p>
          <cite className="quote-author">Sigmund Freud</cite>
        </blockquote>
        <p>
          Contato: <a href="mailto:dani@example.com">dani@example.com</a>
        </p>
      </div>
      <div className="photo">
        <img src="/dani_perfil.png" alt="Danielle Nunes - Psicóloga" />
      </div>
    </section>
  );
}
