import "../styles/TextSection.css";

export default function TextSection({ id, title, subtitle, content }) {
  return (
    <section className="text-section" id={id}>
      <h2>{title}</h2>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      {Array.isArray(content) ? (
        content.map((p, i) => <p key={i}>{p}</p>)
      ) : (
        <p>{content}</p>
      )}
    </section>
  );
}
