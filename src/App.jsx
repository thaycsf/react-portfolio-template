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
          title="Prazer! Sou Danielle Nunes!"
          subtitle="CRP-04/70868"
          content="Sou psicóloga, graduada, com uma paixão em ajudar indivíduos a alcançarem seu bem-estar mental."
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
