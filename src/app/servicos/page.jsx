"use client";

import styles from "./servicos.module.css";
import { 
  FaBuilding, 
  FaHome, 
  FaSyringe,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import { MdVaccines, MdOutlineEarbuds } from "react-icons/md";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { FiX, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const cards = [
  {
    icon: <FaBuilding />,
    title: "Atendimento Corporativo",
    desc: "Vacinação para empresas",
    details: `A vacinação dos funcionários contra gripe, tétano e hepatites tem sido alvo de grande interesse nas últimas décadas.

Estima-se que 10 a 20% da população mundial apresente pelo menos um episódio de gripe por ano. Os benefícios da vacina contra gripe em adultos saudáveis em idade produtiva são evidentes na redução do absenteísmo e visitas médicas.

Benefícios para sua empresa:
• Redução do absenteísmo e gastos com saúde
• Reconhecimento e satisfação do colaborador
• Melhoria da qualidade dos programas de saúde
• Palestras educativas sobre vacinação
• Vacinação dos colaboradores e familiares`,
    cta: "Solicitar orçamento",
  },
  {
    icon: <BsFileEarmarkCheck />,
    title: "Análise de Cartão de Vacinas",
    desc: "Declaração de Situação Vacinal",
    details: `A Análise do cartão de vacina é um serviço que demanda tempo e conhecimento especializado. Os esquemas vacinais precisam seguir rigorosamente as recomendações da bula do fabricante.

Para garantir a resposta esperada, é essencial respeitar os intervalos mínimos entre as doses. Por isso, a análise minuciosa do cartão é fundamental.

Na QFarma, realizamos este serviço com excelência, orientando sobre vacinas disponíveis na rede pública e privada, seguindo os calendários oficiais, sem custo adicional pela consultoria.`,
    cta: "Agendar análise",
  },
  {
    icon: <MdVaccines />,
    title: "Planos de Vacinação",
    desc: "Personalizados para sua família",
    details: `Os planos de vacinação são elaborados de acordo com a idade e recomendação médica de cada pessoa.

Principais benefícios:
• Certeza de que a criança completará o esquema vacinal sem atrasos
• Vacinas armazenadas em câmaras frias em nome da criança
• Acompanhamento personalizado
• Flexibilidade de agendamento

Solicite um estudo e aproveite esta vantagem exclusiva!`,
    cta: "Solicitar plano",
  },
  {
    icon: <FaHome />,
    title: "Atendimento Domiciliar",
    desc: "Vacinação no conforto do seu lar",
    details: `A correria do dia a dia, o medo de exposição, a falta de disponibilidade e muitos outros motivos impedem que algumas pessoas possam sair de casa para manter o calendário de imunizações em dia.

Por isso, disponibilizamos o serviço de atendimento domiciliar com enfermeiras especializadas.

Diferenciais:
• Modernas câmaras portáteis para transporte e conservação
• Serviço rápido, cômodo e seguro
• Atendimento humanizado
• Profissionais qualificados`,
    cta: "Agendar visita",
  },
  {
    icon: <MdOutlineEarbuds />,
    title: "Colocação de Brincos",
    desc: "Com enfermeira especialista",
    details: `Realizamos a colocação de brincos com técnicas avançadas para garantir o máximo de conforto e segurança.

Técnicas utilizadas:
• Acupuntura Auricular: Estimulação de pontos específicos do pavilhão auricular, proporcionando menos estímulos dolorosos e mais tranquilidade no momento da perfuração.

• Coolsense: Método anestésico local revolucionário que utiliza baixas temperaturas para eliminar a dor no local da perfuração.

Com a associação destes métodos, os resultados são fantásticos, com total segurança, comodidade e tranquilidade para o bebê e para os pais.`,
    cta: "Agendar procedimento",
  },
  {
    icon: <FaSyringe />,
    title: "Aplicação de Medicamentos",
    desc: "Injetáveis com segurança",
    details: `Muitos pacientes necessitam administrar medicamentos injetáveis prescritos por médicos em consultas específicas.

Na QFarma, com a receita médica e a medicação em mãos, aplicamos medicamentos por via subcutânea e intramuscular com total segurança e profissionalismo.

Serviço realizado por enfermeiras experientes, seguindo todos os protocolos de segurança e boas práticas.`,
    cta: "Agendar aplicação",
  },
];

export default function Servicos() {
  const [modalIdx, setModalIdx] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    grid: useRef(null),
    vacinas: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (idx) => {
    setModalIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalIdx(null);
    document.body.style.overflow = "unset";
  };

  return (
    <main className={styles.servicosMain}>
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`${styles.servicosHero} ${
          isVisible.hero ? styles.visible : ""
        }`}
      >
        <div className={styles.servicosHeroContent}>
          <span className={styles.tag}>Nossos Serviços</span>
          <h1 className={styles.servicosHeroTitle}>
            Cuidado completo <br />
            <span className={styles.gradientText}>para sua família</span>
          </h1>
          <p className={styles.servicosHeroDescription}>
            Oferecemos uma ampla gama de serviços para garantir a saúde e 
            bem-estar de você e sua família, com profissionais qualificados 
            e atendimento humanizado.
          </p>
          <div className={styles.servicosHeroFeatures}>
            <div className={styles.feature}>
              <FiCalendar />
              <span>Agendamento flexível</span>
            </div>
            <div className={styles.feature}>
              <FiMapPin />
              <span>Atendimento domiciliar</span>
            </div>
            <div className={styles.feature}>
              <FiClock />
              <span>Horário estendido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Serviços */}
      <div
        id="grid"
        ref={sectionRefs.grid}
        className={`${styles.servicosGridContainer} ${
          isVisible.grid ? styles.visible : ""
        }`}
      >
        <div className={styles.servicosGrid}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.servicosCard}>
              <div className={styles.servicosCardIcon}>{card.icon}</div>
              <h2 className={styles.servicosCardTitle}>{card.title}</h2>
              <p className={styles.servicosCardDesc}>{card.desc}</p>
              <button
                className={styles.servicosCardBtn}
                onClick={() => handleOpenModal(idx)}
              >
                <span>Saiba mais</span>
                <FaArrowRight className={styles.btnIcon} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Vacinas */}
      <section
        id="vacinas"
        ref={sectionRefs.vacinas}
        className={`${styles.vacinasSection} ${
          isVisible.vacinas ? styles.visible : ""
        }`}
      >
        <div className={styles.vacinasContent}>
          <span className={styles.tag}>Vacinas</span>
          <h2 className={styles.vacinasTitle}>
            Conheça nossas <br />
            <span className={styles.gradientText}>vacinas disponíveis</span>
          </h2>
          <p className={styles.vacinasText}>
            Confira informações sobre as vacinas disponíveis em nossa clínica.
            <br />
            <br />
            Vale lembrar que estas informações não substituem as orientações de um
            profissional. Consulte seu médico de confiança antes de iniciar a
            vacinação.
          </p>
          <Link href="/vacinas" className={styles.vacinasBtn}>
            <span>Conheça nossas vacinas</span>
            <FaArrowRight className={styles.btnIcon} />
          </Link>
        </div>
      </section>

      {/* Modal */}
      {modalIdx !== null && (
        <div className={styles.servicosModalOverlay} onClick={handleCloseModal}>
          <div className={styles.servicosModal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.servicosModalClose}
              onClick={handleCloseModal}
              aria-label="Fechar modal"
            >
              <FiX size={24} />
            </button>

            <div className={styles.servicosModalContent}>
              <div className={styles.servicosModalIcon}>
                {cards[modalIdx].icon}
              </div>
              <h2 className={styles.servicosModalTitle}>
                {cards[modalIdx].title}
              </h2>
              <pre className={styles.servicosModalText}>
                {cards[modalIdx].details}
              </pre>
              <div className={styles.servicosModalFooter}>
                <a
                  href={`https://wa.me/554197202738?text=${encodeURIComponent(
                    `Olá, gostaria de mais informações sobre "${cards[modalIdx].title}". Poderiam me ajudar?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.servicosModalBtn}
                >
                  <FaWhatsapp size={20} />
                  <span>Falar com especialista</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}