import "../styles/ServiceBenefitCard.css";

export default function ServiceCard({ title, summary, whatsappMessage }) {
  const phone = "+5531991253924";
  const message = encodeURIComponent(whatsappMessage);
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="service-benefit-card service-card">
      <h4 className="card-title">{title}</h4>
      <p className="card-summary">{summary}</p>
      <a
        className="service-btn"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Vamos conversar?
      </a>
    </div>
  );
}
