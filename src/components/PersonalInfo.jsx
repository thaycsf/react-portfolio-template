import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <section className="personal-info" id="inicio">
      <div className="info">
        <div className="personal-top-phrase">
          Danielle Nunes – Psicóloga Clínica | Atendimento Online para todo
          Brasil e Exterior
        </div>
      </div>
      <div className="hero">
        <div className="photo">
          <img
            src={`${import.meta.env.BASE_URL}dani_perfil.png`}
            alt="Danielle Nunes - Psicóloga"
          />
        </div>
        <blockquote className="personal-quote">
          <span className="personal-quote-text">
            A cura vem
            <br />
            pela fala.
          </span>
          <cite className="personal-quote-author">- Sigmund Freud</cite>
        </blockquote>
      </div>
    </section >
  );
}
