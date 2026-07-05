"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./depoimentos.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiShield, FiUsers, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const depoimentos = [
  {
    id: 1,
    texto:
      "O melhor momento para proteger seu filho é agora. O VSR não espera, e a prevenção também não deveria.",
    autor: "Maria Silva",
    local: "Mãe do Pedro",
  },
  {
    id: 2,
    texto:
      "Aplicamos confiança, prevenção e cuidado. Escolha proteger quem você ama com quem leva isso a sério.",
    autor: "João Santos",
    local: "Pai da Ana",
  },
  {
    id: 3,
    texto:
      "A prevenção começa no primeiro passo. Seja por você, por seus filhos, ou por quem você ama. Vacinar é um ato de cuidado.",
    autor: "Carla Oliveira",
    local: "Mãe do Lucas",
  },
];

export function DepoimentosTop() {
  const [count, setCount] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!statsRef.current || hasAnimated) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAnimated(true);
        let start = 0;
        const end = 90;
        const duration = 1800;
        const increment = end / (duration / 16);
        function animate() {
          start += increment;
          if (start < end) {
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        }
        animate();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className={styles.depoimentosBg}>
      <div className={styles.depoimentosContainer}>
        {/* Header da seção */}
        <div className={styles.depoimentosHeader}>
          <span className={styles.tag}>Depoimentos</span>
          <h2 className={styles.title}>
            O que nossos clientes dizem
            <br />
            <span className={styles.highlight}>sobre nós</span>
          </h2>
        </div>

        <div className={styles.depoimentosTop}>
          {/* Card 1 - Compromisso */}
          <div className={styles.depoimentoCardBig}>
            <div className={styles.cardBigIcon}>
              <FiShield size={24} />
            </div>
            <h3 className={styles.depoimentoTitle}>
              Compromisso com a Prevenção
            </h3>
            <p className={styles.depoimentoSubtitle}>
              Transformando vidas através da imunização
            </p>
            <p className={styles.depoimentoText}>
              Seguimos firmes no nosso propósito: cuidar, prevenir e proteger
              com excelência. Cada vacina aplicada representa um passo na
              construção de um futuro mais saudável.
            </p>
            <div className={styles.depoimentoStats}>
              <div className={styles.statsItem} ref={statsRef}>
                <span className={styles.statsNumber}>{count}+</span>
                <span className={styles.statsLabel}>Clientes atendidos</span>
              </div>
              <Link href="/contato" className={styles.buttonContato}>
                <span>Fale conosco</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
          </div>

          {/* Card 2 - Escolha da Família */}
          <div className={styles.depoimentoCardBig}>
            <div className={styles.cardBigIcon}>
              <FiHeart size={24} />
            </div>
            <h3 className={styles.depoimentoTitle}>
              A Escolha de Quem Valoriza a Saúde
            </h3>
            <p className={styles.depoimentoSubtitle}>
              Tranquilidade em estar em boas mãos
            </p>
            <p className={styles.depoimentoText}>
              Pais, mães e responsáveis confiam em nossa clínica para proteger
              quem mais amam. Oferecemos atendimento humanizado, eficiente e
              pensado para todas as idades.
            </p>
            <div className={styles.depoimentoStats}>
              <div className={styles.statsItem}>
                <span className={styles.statsNumber}>100%</span>
                <span className={styles.statsLabel}>Satisfação</span>
              </div>
              <div className={styles.statsItem}>
                <span className={styles.statsNumber}>5★</span>
                <span className={styles.statsLabel}>Avaliações</span>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos em Cards */}
        <div className={styles.depoimentosBottom}>
          {depoimentos.map((dep, i) => (
            <div key={dep.id} className={styles.depoimentoCardSmall}>
              <div className={styles.cardSmallIcon}>
                <FiStar size={20} />
              </div>
              <div className={styles.cardSmallContent}>
                <p className={styles.depoimentoSmallText}>"{dep.texto}"</p>
                <div className={styles.cardSmallAuthor}>
                  <strong>{dep.autor}</strong>
                  <span>{dep.local}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DepoimentosCards() {
  return (
    <div className={styles.depoimentosCardsWrapper}>
      <div className={styles.depoimentosBottom}>
        {depoimentos.map((dep, i) => (
          <div key={i} className={styles.depoimentoCardSmall}>
            <div className={styles.cardSmallIcon}>
              <FiStar size={20} />
            </div>
            <div className={styles.cardSmallContent}>
              <p className={styles.depoimentoSmallText}>"{dep.texto}"</p>
              <div className={styles.cardSmallAuthor}>
                <strong>{dep.autor}</strong>
                <span>{dep.local}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}