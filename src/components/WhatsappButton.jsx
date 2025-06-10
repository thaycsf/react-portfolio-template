import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/WhatsappButton.css";

export default function WhatsappButton({
  header = false,
  onlyIcon = false,
  text = "Whatsapp",
  showIcon = true,
  message,
  className = "",
}) {
  const phone = "+5531991253924";
  const msg = message || "Olá, Danielle! Gostaria de agendar uma sessão.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="whatsapp-section">
      <a
        className={`whatsapp-btn${header ? " header-style" : ""} ${className}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {showIcon && (
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        )}
        {!onlyIcon && <span className="whatsapp-text">{text}</span>}
      </a>
    </section>
  );
}
