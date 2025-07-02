import "./index.css";
import "./styles/ServiceBenefitCard.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import TextSection from "./components/TextSection";
import ServiceCard from "./components/ServiceCard";
import BenefitCard from "./components/BenefitCard";
import WhatsappButton from "./components/WhatsappButton";
import FaqTree from "./components/FaqTree";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <PersonalInfo />
        <TextSection
          id="sobre"
          title="Olá, sou a Danielle!"
          subtitle="CRP-04/70868"
          content="Sou psicóloga especializada em psicologia clínica e com diversos cursos na psicanálise. Meu compromisso é oferecer um espaço acolhedor e seguro para que você possa explorar seus sentimentos, compreender seus conflitos e construir uma relação mais saudável consigo mesma(o) e com o mundo ao seu redor. Acredito no poder da escuta ativa e do autoconhecimento, sem soluções prontas ou promessas irreais, mas com um olhar atento, ético e comprometido com o seu bem-estar emocional. Vamos conversar?"
        />
        <div className="button-container">
          <WhatsappButton
            text="Agende sua sessão"
            showIcon={false}
            className="personal-whatsapp-btn"
            message="Olá, Danielle! Gostaria de agendar uma sessão."
          />
        </div>
        <section id="servicos" className="section-block">
          <TextSection
            id="servicos"
            title="Como posso te ajudar"
            content={[
              "Através da escuta atenta e das interpretações psicanalíticas, ajudarei você a identificar padrões repetitivos, compreender suas dores emocionais e ressignificar experiências passadas que ainda impactam sua vida.",
              "Esse processo promove maior clareza sobre si mesmo(a), fortalecimento emocional e mudanças significativas na forma como você se relaciona consigo e com os outros.",
              "Com a flexibilidade da terapia online, é possível acessar esse cuidado de qualquer lugar, respeitando seu ritmo e sua rotina, sem perder a profundidade do trabalho terapêutico.",
              "Se você deseja se conhecer melhor e encontrar novos caminhos para uma vida mais leve e equilibrada, estou aqui para te acompanhar nessa jornada.",
            ]}
          />
          <div className="services-grid">
            <ServiceCard
              title="Depressão"
              summary="A depressão é um transtorno mental sério que vai muito além da tristeza passageira. Ela afeta profundamente o humor, a energia e a motivação, tornando tarefas do dia a dia desafiadoras. Sensações persistentes de vazio, desesperança e desinteresse por atividades antes prazerosas são comuns. Compreender seus impactos e buscar apoio adequado pode transformar sua qualidade de vida."
              whatsappMessage="Olá, Danielle! Preciso de apoio com depressão."
            />
            <ServiceCard
              title="Ansiedade"
              summary="A ansiedade é uma reação natural do corpo ao estresse, mas quando se torna intensa e persistente, pode comprometer o bem-estar e a rotina. Sintomas como inquietação, preocupação intensa e até crises de pânico podem surgir, impactando a qualidade de vida. Compreender suas origens e aprender a gerenciá-la é essencial para recuperar o equilíbrio emocional e viver com mais tranquilidade."
              whatsappMessage="Olá, Danielle! Preciso de apoio com ansiedade."
            />
            <ServiceCard
              title="Transtorno Bipolar"
              summary="A bipolaridade é um transtorno mental caracterizado por mudanças extremas de humor, alternando entre períodos de euforia intensa (mania) e profunda tristeza (depressão). Essas oscilações podem impactar a rotina, os relacionamentos e o bem-estar emocional, mas com o tratamento adequado é possível alcançar equilíbrio."
              whatsappMessage="Olá, Danielle! Preciso de apoio com transtorno bipolar."
            />
            <ServiceCard
              title="Autoestima e aceitação"
              summary="Dificuldades com autoimagem, autoestima e confiança podem impactar profundamente o bem-estar emocional, gerando sofrimento psicológico e afetando relações interpessoais. Esses desafios podem influenciar a forma como nos vemos, nos conectamos com os outros e enfrentamos a vida."
              whatsappMessage="Olá, Danielle! Preciso de apoio com autoestima e aceitação."
            />
            <ServiceCard
              title="Problemas de relacionamento"
              summary="Desafios nas relações interpessoais podem se manifestar através de conflitos, dificuldades na comunicação ou falta de conexão emocional, impactando vínculos românticos, familiares e/ou profissionais. Compreender e transformar esses padrões é essencial para construir relações mais saudáveis e significativas."
              whatsappMessage="Olá, Danielle! Preciso de apoio com problemas de relacionamento."
            />
            <ServiceCard
              title="Autoconhecimento"
              summary="Às vezes, sentimos um vazio profundo que gera angústia e nos leva a questionar a nós mesmos. Confrontar essas questões pode ser desafiador, mas também abre caminho para uma vida mais autêntica e em sintonia com quem realmente somos."
              whatsappMessage="Olá, Danielle! Preciso de apoio com autoconhecimento."
            />
          </div>
        </section>
        <section id="beneficios" className="section-block">
          <TextSection
            id="beneficios"
            title="Benefícios da Psicoterapia Online"
          />
          <div className="benefit-cards-grid">
            <BenefitCard
              title="Atendimento onde você estiver"
              summary="Não importa se você está em casa, viajando ou mora longe dos grandes centros — com a terapia online, você pode cuidar da sua saúde emocional de qualquer lugar. É só encontrar um cantinho tranquilo e se conectar."
            />
            <BenefitCard
              title="Mais flexível para o seu dia a dia"
              summary="Sua rotina é corrida? A terapia online se adapta ao seu tempo. Você escolhe os melhores horários, com mais liberdade para encaixar o cuidado com você na agenda."
            />
            <BenefitCard
              title="Conforto e acolhimento no seu espaço"
              summary="Fazer terapia de um lugar familiar pode ajudar você a se sentir mais à vontade para falar sobre o que sente. Estar no seu próprio espaço traz conforto e segurança para o processo."
            />
            <BenefitCard
              title="Cuidado que te acompanha"
              summary="Mudou de cidade? Vai viajar? A psicoterapia online continua com você. Com ela, você mantém o acompanhamento terapêutico sem interrupções, onde estiver."
            />
          </div>
        </section>
        <div className="button-container-small">
          <WhatsappButton
            text="Fale comigo agora"
            showIcon={false}
            className="personal-whatsapp-btn"
            message="Olá, Danielle! Gostaria de agendar uma sessão."
          />
        </div>
        <section id="faq" className="section-block faq-section">
          <div className="faq-tree">
            <h2>Tire suas dúvidas!</h2>
            <FaqTree />
          </div>
        </section>
      </main>
    </div>
  );
}
