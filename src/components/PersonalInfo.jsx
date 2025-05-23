import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <section className="personal-info">
      <div className="info">
        <div className="personal-top-phrase">
          Danielle Nunes – Psicóloga Clínica | Atendimento Online para todo
          Brasil e Exterior
        </div>
        <blockquote className="personal-quote">
          <p className="personal-quote-text">"A cura vem pela fala."</p>
          <cite className="personal-quote-author">Sigmund Freud</cite>
        </blockquote>
        <a
          className="whatsapp-btn"
          href="https://wa.me/+5531991127403"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whatsapp-text">Fale comigo agora</span>
        </a>
      </div>
      <div className="photo">
        <img src="/dani_perfil.png" alt="Danielle Nunes - Psicóloga" />
      </div>
    </section>
  );
}
