import "../styles/ServiceBenefitCard.css";

export default function BenefitCard({ title, summary }) {
  return (
    <div className="service-benefit-card benefit-card">
      <h4 className="card-title">{title}</h4>
      <p className="card-summary">{summary}</p>
    </div>
  );
}
