import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/WhatsappButton.css";
import { CONTACT_INFO } from "../constants";

export default function WhatsappButton({
  header = false,
  onlyIcon = false,
  text = "Whatsapp",
  showIcon = true,
  message,
  className = "",
}) {
  const msg = message || CONTACT_INFO.defaultWhatsappMessage;
  const link = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(msg)}`;

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
