"use client";

import styles from "./vacinas.module.css";
import vacinas from "./vacinas.js";
import { useState } from "react";
import { FiX, FiCalendar, FiInfo, FiShield, FiAlertCircle } from "react-icons/fi";

export default function Vacinas() {
  const [modalIdx, setModalIdx] = useState(null);

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
    return indicacao?.substring(0, 80) + "...";
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

  return (
    <main className={styles.vacinasMain}>
      {/* Header da seção */}
      <div className={styles.vacinasHeader}>
        <div className={styles.vacinasHeaderContent}>
          <span className={styles.vacinasTag}>Imunização</span>
          <h1 className={styles.vacinasTitle}>Nossas Vacinas</h1>
          <p className={styles.vacinasSubtitle}>
            Proteção completa para toda a família, com profissionais qualificados
          </p>
        </div>
      </div>

      <div className={styles.vacinasGrid}>
        {vacinas.map((vacina, idx) => (
          <div key={idx} className={styles.vacinasCard}>
            <div className={styles.vacinasCardHeader}>
              <span className={styles.vacinasCardBadge}>
                {getFaixaEtaria(vacina)}
              </span>
            </div>
            <h2 className={styles.vacinasCardNome}>{vacina.vacina}</h2>
            <p className={styles.vacinasCardIndicacao}>
              {getResumo(vacina)}
            </p>
            <div className={styles.vacinasCardFooter}>
              <button
                className={styles.vacinasCardBtn}
                onClick={() => handleOpenModal(idx)}
              >
                <FiInfo size={16} />
                <span>Detalhes</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIdx !== null && (
        <div className={styles.vacinasModalOverlay} onClick={handleCloseModal}>
          <div className={styles.vacinasModal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.vacinasModalClose}
              onClick={handleCloseModal}
              aria-label="Fechar modal"
            >
              <FiX size={24} />
            </button>

            <div className={styles.vacinasModalContent}>
              <div className={styles.vacinasModalHeader}>
                <span className={styles.vacinasModalTag}>
                  {getFaixaEtaria(vacinas[modalIdx])}
                </span>
                <h2 className={styles.vacinasModalTitle}>
                  {vacinas[modalIdx].vacina}
                </h2>
              </div>

              <div className={styles.vacinasModalBody}>
                {vacinas[modalIdx].previne && (
                  <div className={styles.vacinasModalSection}>
                    <div className={styles.vacinasModalSectionIcon}>
                      <FiShield />
                    </div>
                    <div>
                      <h4>O que previne</h4>
                      <p>{vacinas[modalIdx].previne}</p>
                    </div>
                  </div>
                )}

                {vacinas[modalIdx].indicacao && (
                  <div className={styles.vacinasModalSection}>
                    <div className={styles.vacinasModalSectionIcon}>
                      <FiCalendar />
                    </div>
                    <div>
                      <h4>Indicação</h4>
                      <p>
                        {Array.isArray(vacinas[modalIdx].indicacao)
                          ? vacinas[modalIdx].indicacao.join(" • ")
                          : vacinas[modalIdx].indicacao}
                      </p>
                    </div>
                  </div>
                )}

                {vacinas[modalIdx].esquema_doses && (
                  <div className={styles.vacinasModalSection}>
                    <div className={styles.vacinasModalSectionIcon}>
                      <FiInfo />
                    </div>
                    <div>
                      <h4>Esquema de doses</h4>
                      <p>
                        {typeof vacinas[modalIdx].esquema_doses === "object"
                          ? Object.values(vacinas[modalIdx].esquema_doses).join(" • ")
                          : vacinas[modalIdx].esquema_doses}
                      </p>
                    </div>
                  </div>
                )}

                {vacinas[modalIdx].contraindicacao && (
                  <div className={styles.vacinasModalSection}>
                    <div className={styles.vacinasModalSectionIcon}>
                      <FiAlertCircle />
                    </div>
                    <div>
                      <h4>Contraindicação</h4>
                      <p>
                        {Array.isArray(vacinas[modalIdx].contraindicacao)
                          ? vacinas[modalIdx].contraindicacao.join(" • ")
                          : vacinas[modalIdx].contraindicacao}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.vacinasModalFooter}>
                <button
                  className={styles.vacinasModalFechar}
                  onClick={handleCloseModal}
                >
                  Fechar
                </button>
                <a
                  href={`https://wa.me/554197202738?text=${encodeURIComponent(
                    `Olá, gostaria de agendar a vacina "${vacinas[modalIdx].vacina}". O que preciso fazer?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.vacinasModalAgendar}
                >
                  Agendar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}