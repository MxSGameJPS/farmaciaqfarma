"use client";

import React from "react";
import Link from "next/link";
import styles from "./importancia.module.css";
import { FiShield, FiUsers, FiTrendingDown, FiArrowRight, FiCalendar } from "react-icons/fi";

export default function Importancia() {
  return (
    <section className={styles.importancia}>
      <div className={styles.importanciaContainer}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Por que vacinar?</span>
          <h2 className={styles.title}>
            Proteção para Você, sua Família <br />
            <span className={styles.highlight}>e sua Comunidade</span>
          </h2>
          <p className={styles.subtitle}>
            A vacinação é uma das maiores conquistas da medicina moderna. 
            É a maneira mais segura e eficaz de prevenir doenças graves e contagiosas.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiShield size={28} />
            </div>
            <h3 className={styles.cardTitle}>Proteção Individual</h3>
            <p className={styles.cardText}>
              As vacinas ensinam seu corpo a reconhecer e combater vírus e bactérias, 
              fortalecendo seu sistema imunológico e evitando que você adoeça.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiUsers size={28} />
            </div>
            <h3 className={styles.cardTitle}>Proteção Coletiva</h3>
            <p className={styles.cardText}>
              Quando a maioria está vacinada, a circulação de doenças diminui. 
              Isso cria uma barreira de proteção para quem não pode ser vacinado.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiTrendingDown size={28} />
            </div>
            <h3 className={styles.cardTitle}>Prevenção de Doenças</h3>
            <p className={styles.cardText}>
              Doenças que já foram mortais, como poliomielite e sarampo, foram 
              erradicadas ou se tornaram extremamente raras graças às vacinas.
            </p>
          </div>
        </div>

        {/* Footer com CTA e mensagem */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Invista na sua saúde e na saúde de todos. Vacinar é um gesto de cuidado 
            e esperança para um futuro mais seguro e saudável.
          </p>

          <div className={styles.cta}>
            <Link href="/servicos" className={styles.buttonPrimary}>
              <span>Saiba mais</span>
              <FiArrowRight className={styles.buttonIcon} />
            </Link>
            <a
              href={`https://wa.me/554197202738?text=${encodeURIComponent(
                "Olá, gostaria de agendar uma vacina. O que preciso fazer?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonSecondary}
            >
              <FiCalendar size={18} />
              <span>Agendar agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}