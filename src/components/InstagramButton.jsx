import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/InstagramButton.css";

export default function InstagramButton({ header = false, onlyIcon = false }) {
  const link = "https://instagram.com/psidaniellenunes";

  return (
    <section className="instagram-section">
      <a
        className={`instagram-btn${header ? " header-style" : ""}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
        {!onlyIcon && <span className="instagram-text">Instagram</span>}
      </a>
    </section>
  );
}
