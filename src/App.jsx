import "./index.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import TextSection from "./components/TextSection";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <PersonalInfo />
        <TextSection
          title="Olá, sou a Danielle!"
          subtitle="CRP-04/70868"
          content="Sou psicóloga especializada em psicologia clínica e com diversos cursos na psicanálise. Meu compromisso é oferecer um espaço acolhedor e seguro para que você possa explorar seus sentimentos, compreender seus conflitos e construir uma relação mais saudável consigo mesma(o) e com o mundo ao seu redor. Acredito no poder da escuta ativa e do autoconhecimento, sem soluções prontas ou promessas irreais, mas com um olhar atento, ético e comprometido com o seu bem-estar emocional. Vamos conversar?"
        />
        <TextSection
          title="Como posso te ajudar"
          content="Ofereço terapia individual, aconselhamento para casais e sessões de gerenciamento de estresse personalizadas para suas necessidades."
        />
        <TextSection
          title="Benefícios da Psicoterapia Online"
          content="Comodidade, flexibilidade e acesso a ajuda profissional no conforto da sua casa."
        />
        <TextSection
          title="Tire suas dúvidas!"
          content="Tem perguntas? Confira nossa seção de perguntas frequentes para saber mais sobre o processo terapêutico e como posso te ajudar."
        />
      </main>
    </div>
  );
}
