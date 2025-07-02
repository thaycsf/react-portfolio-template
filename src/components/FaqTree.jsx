import { useState } from "react";
import "../styles/FaqTree.css";
import { faqData } from "../data/faqData";

export default function FaqTree() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-tree">
      {faqData.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{faq.question}</span>
            <span
              className={`faq-arrow ${openIndex === idx ? "open" : ""}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          <div
            className={`faq-answer${openIndex === idx ? " open" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
