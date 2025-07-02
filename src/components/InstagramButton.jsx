import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/InstagramButton.css";
import { CONTACT_INFO } from "../constants";

export default function InstagramButton({ header = false, onlyIcon = false }) {
  return (
    <section className="instagram-section">
      <a
        className={`instagram-btn${header ? " header-style" : ""}`}
        href={CONTACT_INFO.instagram}
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
