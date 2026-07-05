"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import vacinas from "../../app/vacinas/vacinas.js";
import styles from "./cardsHomeVacinas.module.css";
import Link from "next/link";
import { FiArrowRight, FiInfo, FiShield, FiCalendar, FiAlertCircle, FiX } from "react-icons/fi";

export default function CardsHomeVacinas() {
  const [modalIdx, setModalIdx] = useState(null);
  const vacinasHome = vacinas.slice(0, 3);

  const handleOpenModal = (idx) => {
    setModalIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalIdx(null);
    document.body.style.overflow = "unset";
  };

  // Extrair informações principais para resumo
  const getResumo = (vacina) => {
    const indicacao = Array.isArray(vacina.indicacao) 
      ? vacina.indicacao[0] 
      : vacina.indicacao;
    return indicacao?.substring(0, 70) + "...";
  };

  // Extrair faixa etária para badge
  const getFaixaEtaria = (vacina) => {
    const indicacao = Array.isArray(vacina.indicacao) 
      ? vacina.indicacao.join(" ") 
      : vacina.indicacao || "";
    
    if (indicacao.includes("criança") || indicacao.includes("bebê")) {
      return "👶 Infantil";
    } else if (indicacao.includes("adulto") || indicacao.includes("adolescente")) {
      return "🧑 Adulto";
    } else if (indicacao.includes("gestante") || indicacao.includes("gestação")) {
      return "🤰 Gestante";
    }
    return "💉 Geral";
  };

  const currentVacina = modalIdx !== null ? vacinasHome[modalIdx] : null;

  return (
    <section className={styles.cardsHomeSection}>
      <div className={styles.cardsHomeHeader}>
        <span className={styles.cardsHomeTag}>Destaques</span>
        <h2 className={styles.cardsHomeTitle}>Vacinas em Destaque</h2>
        <p className={styles.cardsHomeSubtitle}>
          Proteção essencial para você e sua família
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {vacinasHome.map((vacina, idx) => (
          <div key={idx} className={styles.cardsCard}>
            <div className={styles.cardsCardHeader}>
              <span className={styles.cardsCardBadge}>
                {getFaixaEtaria(vacina)}
              </span>
            </div>
            <h3 className={styles.cardsCardTitulo}>{vacina.vacina}</h3>
            <p className={styles.cardsCardIndicacao}>
              {getResumo(vacina)}
            </p>
            <button
              className={styles.cardsCardBtn}
              onClick={() => handleOpenModal(idx)}
            >
              <FiInfo size={16} />
              <span>Detalhes</span>
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cardsFooter}>
        <Link href="/vacinas" className={styles.cardsConhecaBtn}>
          <span>Conheça todas as vacinas</span>
          <FiArrowRight size={18} />
        </Link>
      </div>

      {/* Modal via Portal */}
      {typeof window !== "undefined" && modalIdx !== null && currentVacina && (
        createPortal(
          <div className={styles.cardsModalOverlay} onClick={handleCloseModal}>
            <div className={styles.cardsModal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.cardsModalClose}
                onClick={handleCloseModal}
                aria-label="Fechar modal"
              >
                <FiX size={20} />
              </button>

              <div className={styles.cardsModalContent}>
                <div className={styles.cardsModalHeader}>
                  <span className={styles.cardsModalTag}>
                    {getFaixaEtaria(currentVacina)}
                  </span>
                  <h2 className={styles.cardsModalTitle}>
                    {currentVacina.vacina}
                  </h2>
                </div>

                <div className={styles.cardsModalBody}>
                  {currentVacina.previne && (
                    <div className={styles.cardsModalSection}>
                      <div className={styles.cardsModalSectionIcon}>
                        <FiShield />
                      </div>
                      <div>
                        <h4>O que previne</h4>
                        <p>{currentVacina.previne}</p>
                      </div>
                    </div>
                  )}

                  {currentVacina.indicacao && (
                    <div className={styles.cardsModalSection}>
                      <div className={styles.cardsModalSectionIcon}>
                        <FiCalendar />
                      </div>
                      <div>
                        <h4>Indicação</h4>
                        <p>
                          {Array.isArray(currentVacina.indicacao)
                            ? currentVacina.indicacao.join(" • ")
                            : currentVacina.indicacao}
                        </p>
                      </div>
                    </div>
                  )}

                  {currentVacina.esquema_doses && (
                    <div className={styles.cardsModalSection}>
                      <div className={styles.cardsModalSectionIcon}>
                        <FiInfo />
                      </div>
                      <div>
                        <h4>Esquema de doses</h4>
                        <p>
                          {typeof currentVacina.esquema_doses === "object"
                            ? Object.values(currentVacina.esquema_doses).join(" • ")
                            : currentVacina.esquema_doses}
                        </p>
                      </div>
                    </div>
                  )}

                  {currentVacina.contraindicacao && (
                    <div className={styles.cardsModalSection}>
                      <div className={styles.cardsModalSectionIcon}>
                        <FiAlertCircle />
                      </div>
                      <div>
                        <h4>Contraindicação</h4>
                        <p>
                          {Array.isArray(currentVacina.contraindicacao)
                            ? currentVacina.contraindicacao.join(" • ")
                            : currentVacina.contraindicacao}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardsModalFooter}>
                  <button
                    className={styles.cardsModalFechar}
                    onClick={handleCloseModal}
                  >
                    Fechar
                  </button>
                  <a
                    href={`https://wa.me/554197202738?text=${encodeURIComponent(
                      `Olá, gostaria de agendar a vacina "${currentVacina.vacina}". O que preciso fazer?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardsModalAgendar}
                  >
                    Agendar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      )}
    </section>
  );
}