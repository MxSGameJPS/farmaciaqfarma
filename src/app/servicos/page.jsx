"use client";

import styles from "./servicos.module.css";
import { FaBuilding, FaHome, FaSyringe } from "react-icons/fa";
import { MdVaccines, MdOutlineEarbuds } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { useState } from "react";

const cards = [
  {
    icon: <FaBuilding size={48} color="#2563eb" />,
    title: "Atendimento corporativo",
    desc: "Saiba mais",
    details: `A vacinação dos funcionários de empresas contra a gripe, o tétano e as hepatites tem sido alvo de grande interesse nas últimas décadas.\n\nEstima-se que 10 a 20% da população mundial apresente pelo menos um episódio de gripe a cada ano. Os benefícios da vacina contra a gripe nos adultos saudáveis em idade produtiva têm sido ressaltados no que concerne à redução do absenteísmo e da necessidade de visitas médicas, a demonstração de custo-benefício tem sido responsável pela vacinação de funcionários nas empresas.\n\nConfira alguns dos benefícios a serem obtidos através de programas de vacinação para sua empresa:\n\n- Redução do absenteísmo e dos gastos com a saúde.\n- Reconhecimento e satisfação do colaborador.\n- Melhoria da qualidade dos programas de saúde elaborados pela empresa.\n- Suporte na elaboração e planejamento de programas de vacinação.\n- Palestras sobre vacinas. Vacinação dos colaboradores com extensão dos benefícios para os familiares se for de interesse.`,
  },
  {
    icon: <BsFileEarmarkCheck size={48} color="#2563eb" />,
    title: "Análise de cartão de vacinas e Declaração de Situação Vacinal",
    desc: "Saiba mais",
    details: `A Análise do cartão de vacina é um serviço que demanda tempo e conhecimento do profissional que realiza. Os esquemas vacinais precisam ser feitos seguindo as recomendações da bula do fabricante.\n\nPara se ter a resposta esperada com a vacina, precisamos respeitar os intervalos mínimos entre as doses. Por isso é tão a importante a análise minuciosa desse cartão.\n\nNa QFarma Já nós fazemos este serviço.\n\nOrientamos as vacinas que podem ser encontradas na rede pública e privada seguindo recomendações dos calendários oficiais, sem custo adicional por esta informação!`,
  },
  {
    icon: <MdVaccines size={48} color="#2563eb" />,
    title: "Planos de Vacinação",
    desc: "Saiba mais",
    details: `Os planos de vacinação são elaborados de acordo com a idade da criança e a recomendação Médica. O principal benefício do plano é ter a certeza que a criança irá completar o esquema vacinal sem atrasos ou falta. As vacinas ficam armazenadas em câmaras frias em nome da criança.\n\nSolicite um estudo e aproveite mais esta vantagem que a QFarma Já traz para você!`,
  },
  {
    icon: <FaHome size={48} color="#2563eb" />,
    title: "Atendimento Domiciliar",
    desc: "Saiba mais",
    details: `O tempo, o medo devido a pandemia, a correria do dia a dia, a falta de disponibilidade e muitos outros motivos impedem que algumas pessoas possam sair de casa para deixar em dia o calendário de imunizações. Mas, sabemos também da importância de cuidar da saúde.\nPor isso, disponibilizamos o serviço de atendimento domiciliar, com enfermeiras que fazem a vacinação em domicílio. Para isso, dispomos de modernas câmaras portáteis de transporte e conservação de vacinas, levando proteção num serviço rápido, cômodo e seguro.`,
  },
  {
    icon: <MdOutlineEarbuds size={48} color="#2563eb" />,
    title: "Colocação de brincos com Enfermeira Especialista",
    desc: "Saiba mais",
    details: `Utilizamos a técnica de Acupuntura Auricular para o furo de orelha das bebês.\n\nA estimulação de pontos específicos do pavilhão auricular, proporciona menos estímulos dolorosos e mais tranquilidade no momento da perfuração.\n\nCoolsense • Método anestésico local Utilizamos também um método revolucionário que alivia a dor no local da perfuração.\n\nO Coolsense é um dispositivo anestésico local que utiliza a baixas temperaturas para eliminar a dor.\n\nCom a associação destes métodos os resultados são fantásticos. A perfuração transcorre com total segurança, comodidade e tranquilidade para a bebê e para a mamãe.`,
  },
  {
    icon: <FaSyringe size={48} color="#2563eb" />,
    title: "Aplicação Injetável de Medicamentos",
    desc: "Saiba mais",
    details: `Muitos pacientes têm necessidade de administrar medicamentos injetáveis, indicados por médicos em determinadas consultas. Aqui na QFarma Já, com a receita médica e a medicação em mãos, aplicamos medicamentos por via subcutânea e intramuscular.`,
  },
];

export default function Servicos() {
  const [modalIdx, setModalIdx] = useState(null);

  return (
    <main className={styles.servicosMain}>
      <h1 className={styles.servicosTitle}>Nossos serviços</h1>
      <p className={styles.servicosSubtitle}>
        Confira informações sobre serviços disponíveis em nossa farmácia.
      </p>
      <div className={styles.servicosGrid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.servicosCard}>
            <div className={styles.servicosIcon}>{card.icon}</div>
            <h2 className={styles.servicosCardTitle}>{card.title}</h2>
            <button
              className={styles.servicosCardBtn}
              onClick={() => setModalIdx(idx)}
            >
              {card.desc}
            </button>
          </div>
        ))}
      </div>

      {modalIdx !== null && (
        <div className={styles.servicosModalOverlay}>
          <div className={styles.servicosModal}>
            <h2 className={styles.servicosModalTitle}>
              {cards[modalIdx].title}
            </h2>
            <pre className={styles.servicosModalText}>
              {cards[modalIdx].details}
            </pre>
            <button
              className={styles.servicosModalClose}
              onClick={() => setModalIdx(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      <section className={styles.vacinasSection}>
        <h2 className={styles.vacinasTitle}>Vacinas</h2>
        <p className={styles.vacinasText}>
          Confira informações sobre as vacinas disponíveis em nossa clínica.
          <br />
          <br />
          Vale lembrar que estas informações não substituem as orientações de um
          profissional. Consulte seu médico de confiança antes de iniciar a
          vacinação e entre em contato com a nossa equipe de especialistas em
          casos de dúvidas!
        </p>
        <a href="/vacinas" className={styles.vacinasBtn}>
          Conheça nossas vacinas
        </a>
      </section>
    </main>
  );
}
