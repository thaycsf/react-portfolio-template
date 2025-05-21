import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/WhatsappButton.css";

export default function WhatsappButton() {
  return (
    <section className="whatsapp-section">
      <a
        className="whatsapp-btn"
        href="https://wa.me/+5531991127403"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        <span className="whatsapp-text">Whatsapp</span>
      </a>
    </section>
  );
}
