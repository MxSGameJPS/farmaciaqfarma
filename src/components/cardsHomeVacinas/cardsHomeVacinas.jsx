"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import vacinas from "../../app/vacinas/vacinas.js";
import styles from "./cardsHomeVacinas.module.css";
import Link from "next/link";

export default function CardsHomeVacinas() {
  const [modalIdx, setModalIdx] = useState(null);
  const vacinasHome = vacinas.slice(0, 3);

  const handleOpenModal = (idx) => {
    setModalIdx(idx);
  };
  const handleCloseModal = () => {
    setModalIdx(null);
  };

  return (
    <section className={styles.cardsHomeSection}>
      <h2 className={styles.cardsCardNome}>Vacinas em destaque</h2>
      <div className={styles.cardsGrid}>
        {vacinasHome.map((vacina, idx) => (
          <div key={idx} className={styles.cardsCard}>
            <h3 className={styles.cardsCardTitulo}>{vacina.vacina}</h3>
            <p className={styles.cardsCardIndicacao}>{vacina.indicacao}</p>
            <button
              className={styles.cardsCardBtn}
              onClick={() => handleOpenModal(idx)}
            >
              Saiba mais
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link href="/vacinas" className={styles.cardsConhecaBtn}>
          Conheça nossas vacinas
        </Link>
      </div>
      {/* Portal do modal, client-side only */}
      {typeof window !== "undefined" && modalIdx !== null && createPortal(
        <div className={styles.cardsModalOverlay}>
          <div className={styles.cardsModal}>
            <h2 className={styles.cardsModalTitle}>
              {vacinasHome[modalIdx].vacina || vacinasHome[modalIdx].nome}
            </h2>
            <div className={styles.cardsModalText}>
              {vacinasHome[modalIdx].previne && (
                <p>
                  <strong>O que previne:</strong> {vacinasHome[modalIdx].previne}
                </p>
              )}
              {vacinasHome[modalIdx].composicao && (
                <p>
                  <strong>Composição:</strong> {vacinasHome[modalIdx].composicao}
                </p>
              )}
              {vacinasHome[modalIdx].indicacao && (
                <p>
                  <strong>Indicação:</strong>{" "}
                  {Array.isArray(vacinasHome[modalIdx].indicacao)
                    ? vacinasHome[modalIdx].indicacao.join("; ")
                    : vacinasHome[modalIdx].indicacao}
                </p>
              )}
              {vacinasHome[modalIdx].contraindicacao && (
                <p>
                  <strong>Contraindicação:</strong>{" "}
                  {Array.isArray(vacinasHome[modalIdx].contraindicacao)
                    ? vacinasHome[modalIdx].contraindicacao.join("; ")
                    : vacinasHome[modalIdx].contraindicacao}
                </p>
              )}
              {vacinasHome[modalIdx].esquema_doses && (
                <p>
                  <strong>Esquema de doses:</strong>{" "}
                  {typeof vacinasHome[modalIdx].esquema_doses === "object"
                    ? Object.values(vacinasHome[modalIdx].esquema_doses).join("; ")
                    : vacinasHome[modalIdx].esquema_doses}
                </p>
              )}
              {vacinasHome[modalIdx].local_aplicacao && (
                <p>
                  <strong>Local de aplicação:</strong>{" "}
                  {vacinasHome[modalIdx].local_aplicacao}
                </p>
              )}
              {vacinasHome[modalIdx].cuidados && (
                <p>
                  <strong>Cuidados:</strong>{" "}
                  {Array.isArray(vacinasHome[modalIdx].cuidados)
                    ? vacinasHome[modalIdx].cuidados.join("; ")
                    : vacinasHome[modalIdx].cuidados}
                </p>
              )}
              {vacinasHome[modalIdx].efeitos_adversos && (
                <div>
                  <strong>Efeitos adversos:</strong>
                  <ul>
                    {typeof vacinasHome[modalIdx].efeitos_adversos === "object" ? (
                      Object.entries(vacinasHome[modalIdx].efeitos_adversos).map(
                        ([key, value], i) => (
                          <li key={i}>
                            <strong>{key.replace(/_/g, " ")}: </strong>
                            {Array.isArray(value)
                              ? value.join(", ")
                              : typeof value === "object"
                              ? JSON.stringify(value)
                              : value}
                          </li>
                        )
                      )
                    ) : (
                      <li>{vacinasHome[modalIdx].efeitos_adversos}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.cardsModalBtns}>
              <a href="/contato" className={styles.cardsModalAgendar}>
                Agendar
              </a>
              <button
                className={styles.cardsModalFechar}
                onClick={handleCloseModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
