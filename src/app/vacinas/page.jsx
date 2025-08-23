"use client";

import styles from "./vacinas.module.css";
import vacinas from "./vacinas.js";

import { useState } from "react";

export default function Vacinas() {
  const [modalIdx, setModalIdx] = useState(null);

  const handleOpenModal = (idx) => {
    setModalIdx(idx);
  };
  const handleCloseModal = () => {
    setModalIdx(null);
  };

  return (
    <main className={styles.vacinasMain}>
      <h1 className={styles.vacinasTitle}>Nossas Vacinas</h1>
      <div className={styles.vacinasGrid}>
        {vacinas.map((vacina, idx) => (
          <div key={idx} className={styles.vacinasCard}>
            <h2 className={styles.vacinasCardNome}>{vacina.vacina}</h2>
            <p className={styles.vacinasCardIndicacao}>{vacina.indicacao}</p>
            <button
              className={styles.vacinasCardBtn}
              onClick={() => handleOpenModal(idx)}
            >
              Saiba mais
            </button>
          </div>
        ))}
      </div>

      {modalIdx !== null && (
        <div className={styles.vacinasModalOverlay}>
          <div className={styles.vacinasModal}>
            <h2 className={styles.vacinasModalTitle}>
              {vacinas[modalIdx].vacina || vacinas[modalIdx].nome}
            </h2>
            <div className={styles.vacinasModalText}>
              {vacinas[modalIdx].previne && (
                <p>
                  <strong>O que previne:</strong> {vacinas[modalIdx].previne}
                </p>
              )}
              {vacinas[modalIdx].composicao && (
                <p>
                  <strong>Composição:</strong> {vacinas[modalIdx].composicao}
                </p>
              )}
              {vacinas[modalIdx].indicacao && (
                <p>
                  <strong>Indicação:</strong>{" "}
                  {Array.isArray(vacinas[modalIdx].indicacao)
                    ? vacinas[modalIdx].indicacao.join("; ")
                    : vacinas[modalIdx].indicacao}
                </p>
              )}
              {vacinas[modalIdx].contraindicacao && (
                <p>
                  <strong>Contraindicação:</strong>{" "}
                  {Array.isArray(vacinas[modalIdx].contraindicacao)
                    ? vacinas[modalIdx].contraindicacao.join("; ")
                    : vacinas[modalIdx].contraindicacao}
                </p>
              )}
              {vacinas[modalIdx].esquema_doses && (
                <p>
                  <strong>Esquema de doses:</strong>{" "}
                  {typeof vacinas[modalIdx].esquema_doses === "object"
                    ? Object.values(vacinas[modalIdx].esquema_doses).join("; ")
                    : vacinas[modalIdx].esquema_doses}
                </p>
              )}
              {vacinas[modalIdx].local_aplicacao && (
                <p>
                  <strong>Local de aplicação:</strong>{" "}
                  {vacinas[modalIdx].local_aplicacao}
                </p>
              )}
              {vacinas[modalIdx].cuidados && (
                <p>
                  <strong>Cuidados:</strong>{" "}
                  {Array.isArray(vacinas[modalIdx].cuidados)
                    ? vacinas[modalIdx].cuidados.join("; ")
                    : vacinas[modalIdx].cuidados}
                </p>
              )}
              {vacinas[modalIdx].efeitos_adversos && (
                <div>
                  <strong>Efeitos adversos:</strong>
                  <ul>
                    {typeof vacinas[modalIdx].efeitos_adversos === "object" ? (
                      Object.entries(vacinas[modalIdx].efeitos_adversos).map(
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
                      <li>{vacinas[modalIdx].efeitos_adversos}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.vacinasModalBtns}>
              <a href="/contato" className={styles.vacinasModalAgendar}>
                Agendar
              </a>
              <button
                className={styles.vacinasModalFechar}
                onClick={handleCloseModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
