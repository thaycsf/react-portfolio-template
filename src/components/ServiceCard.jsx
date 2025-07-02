import "../styles/ServiceBenefitCard.css";
import { CONTACT_INFO } from "../constants";

export default function ServiceCard({ title, summary, whatsappMessage }) {
  const message = encodeURIComponent(whatsappMessage);
  const link = `https://wa.me/${CONTACT_INFO.phone}?text=${message}`;

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
