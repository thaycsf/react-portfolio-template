import "../styles/TextSection.css";

export default function TextSection({ title, subtitle, content }) {
  return (
    <section className="text-section">
      <h2>{title}</h2>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      <p>{content}</p>
    </section>
  );
}
