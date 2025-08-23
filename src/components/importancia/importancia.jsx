import React from "react";
import Link from "next/link";
import styles from "./importancia.module.css";

export default function Importancia() {
  return (
    <section className={styles.importancia}>
      <div className={styles.header}>
        <h2>Proteção para Você, a sua Família e a sua Comunidade</h2>
        <p>
          A vacinação é uma das maiores conquistas da medicina moderna. Ela é a
          maneira mais segura e eficaz de prevenir doenças graves e contagiosas.
          Ao se vacinar, você não está apenas se protegendo, mas também cuidando
          de quem está ao seu redor, como bebês, idosos e pessoas com a saúde
          fragilizada.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            {/* Ícone de escudo */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <path
                d="M24 6l16 6v10c0 9.5-6.7 18.1-16 20-9.3-1.9-16-10.5-16-20V12l16-6z"
                stroke="#007cf0"
                strokeWidth="2"
                fill="#e6f7ff"
              />
            </svg>
          </div>
          <h3>Proteção Individual</h3>
          <p>
            As vacinas ensinam o seu corpo a reconhecer e combater vírus e
            bactérias, fortalecendo seu sistema imunológico e evitando que você
            adoeça.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            {/* Ícone de grupo de pessoas */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="16"
                r="6"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="24"
                r="4"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <circle
                cx="36"
                cy="24"
                r="4"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <path
                d="M8 36c0-4 8-6 16-6s16 2 16 6v4H8v-4z"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3>Proteção Coletiva</h3>
          <p>
            Quando a maioria das pessoas em uma comunidade está vacinada, a
            circulação de doenças diminui drasticamente. Isso cria uma barreira
            de proteção para aqueles que não podem ser vacinados por motivos de
            saúde, um conceito conhecido como imunidade de rebanho.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            {/* Ícone de seta para baixo em gráfico */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <rect
                x="8"
                y="32"
                width="6"
                height="8"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <rect
                x="20"
                y="24"
                width="6"
                height="16"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <rect
                x="32"
                y="16"
                width="6"
                height="24"
                fill="#e6f7ff"
                stroke="#007cf0"
                strokeWidth="2"
              />
              <path
                d="M12 24l12 12 12-12"
                stroke="#007cf0"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h3>Prevenção de Doenças</h3>
          <p>
            Graças às vacinas, doenças que já foram mortais, como a poliomielite
            e o sarampo, foram erradicadas ou se tornaram extremamente raras em
            muitas partes do mundo.
          </p>
        </div>
      </div>
     
      <div className={styles.cta}>
        <Link href="/servicos" legacyBehavior>
          <a className={styles.buttonBlue}>
            Saiba mais  
          </a>
        </Link>
        <Link href="/contato" legacyBehavior>
          <a className={styles.buttonGreen}>Agende sua vacinação</a>
        </Link>
      </div>
      <div className={styles.footer}>
        <p>
          Invista na sua saúde e na saúde de todos. Vacinar é um gesto de
          cuidado e esperança para um futuro mais seguro e saudável.
        </p>
      </div>
    </section>
  );
}
