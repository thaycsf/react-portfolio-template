import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <section className="personal-info">
      <div className="info">
        <h1>Danielle Nunes</h1>
        <p>"Transformando vidas, uma sessão de cada vez."</p>
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
