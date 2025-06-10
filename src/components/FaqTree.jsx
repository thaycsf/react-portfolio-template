import { useState } from "react";
import "../styles/FaqTree.css";

const faqs = [
  {
    question: "A terapia online é tão eficaz quanto a presencial?",
    answer:
      "Sim! Diversos estudos mostram que a psicoterapia online pode ser tão eficaz quanto a presencial, especialmente quando há um bom vínculo entre paciente e terapeuta.",
  },
  {
    question: "Como funciona uma sessão de terapia online?",
    answer:
      "Os atendimentos são feitos por chamada de vídeo através do aplicativo Google Meet, você só precisa de um dispositivo com câmera, microfone e uma conexão estável à internet. No dia e hora marcada da sua sessão te encaminharei um link exclusivo via WhatsApp. É importante que você esteja em um ambiente tranquilo para melhor concentração.",
  },
  {
    question: "A terapia online é segura e sigilosa?",
    answer:
      "Sim. O sigilo é garantido por lei, e são utilizadas plataformas seguras para manter sua privacidade e proteção dos dados.",
  },
  {
    question: "Como posso agendar uma sessão?",
    answer:
      "É simples! Basta me chamar no WhatsApp para combinarmos o melhor dia e horário para você. Estou à disposição para tirar qualquer dúvida por lá.",
  },
  {
    question: "A terapia é coberta pelo plano de saúde?",
    answer:
      "No momento não realizo atendimentos via plano de saúde, apenas particular. Se você tiver interesse, entre em contato pelo WhatsApp para mais informações.",
  },
  {
    question: "Qual a duração de cada sessão?",
    answer: "Cada sessão dura em média 50 minutos.",
  },
  {
    question: "Como funciona o valor das sessões e o pagamento?",
    answer:
      "Para saber os valores atualizados, entre em contato comigo pelo WhatsApp — assim posso te passar todas as informações direitinho.",
  },
  {
    question: "Você atende crianças?",
    answer:
      "Atendo apenas adultos e adolescentes a partir dos 15 anos, desde que tenham autorização dos pais ou responsáveis. Essa autorização é enviada por mim via WhatsApp e deve ser preenchida e entregue antes da primeira sessão.",
  },
];

export default function FaqTree() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-tree">
      {faqs.map((faq, idx) => (
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
            style={{
              maxHeight: openIndex === idx ? "200px" : "0",
              transition: "max-height 0.3s ease",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
