"use client";

import styles from "./sobrenos.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  FiArrowRight, 
  FiTarget, 
  FiEye, 
  FiHeart,
  FiUsers,
  FiAward,
  FiCheckCircle
} from "react-icons/fi";

export default function SobreNosClient() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    cards: useRef(null),
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

  const stats = [
    { value: "5+", label: "Anos de experiência", icon: FiAward },
    { value: "90+", label: "Clientes atendidos", icon: FiUsers },
    { value: "98%", label: "Satisfação garantida", icon: FiCheckCircle },
  ];

  return (
    <main className={styles.sobrenosMain}>
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`${styles.sobrenosHero} ${
          isVisible.hero ? styles.visible : ""
        }`}
      >
        <div className={styles.sobrenosHeroContent}>
          <div className={styles.sobrenosHeroText}>
            <span className={styles.tag}>Sobre Nós</span>
            <h1 className={styles.sobrenosHeroTitle}>
              Cuidado que <br />
              <span className={styles.gradientText}>transforma vidas</span>
            </h1>
            <p className={styles.sobrenosHeroDescription}>
              Somos uma farmácia especializada com mais de 5 anos de atuação. 
              Atendemos gestantes, crianças, adolescentes, adults e idosos, 
              sempre em busca de excelência no atendimento.
            </p>
            <div className={styles.sobrenosHeroStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <stat.icon className={styles.statIcon} />
                  <div>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/servicos" className={styles.sobrenosHeroBtn}>
              <span>Conhecer serviços</span>
              <FiArrowRight className={styles.btnIcon} />
            </Link>
          </div>
          <div className={styles.sobrenosHeroImage}>
            <div className={styles.imageWrapper}>
              <Image
                src="/image/equipe.webp"
                alt="Equipe QFarma"
                width={450}
                height={450}
                className={styles.heroImage}
                priority
              />
              <div className={styles.imageOverlay}>
                <div className={styles.floatingBadge}>
                  <FiHeart className={styles.badgeIcon} />
                  <span>+5 anos cuidando de você</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroDecoration}>
          <div className={styles.decorationCircle}></div>
          <div className={styles.decorationCircle2}></div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <div
        id="cards"
        ref={sectionRefs.cards}
        className={`${styles.sobrenosCardsContainer} ${
          isVisible.cards ? styles.visible : ""
        }`}
      >
        <div className={styles.sobrenosCard}>
          <div className={styles.cardNumber}>01</div>
          <div className={styles.sobrenosCardIcon}>
            <FiTarget size={28} />
          </div>
          <h2 className={styles.sobrenosCardTitle}>Missão</h2>
          <p className={styles.sobrenosCardText}>
            Oferecer um trabalho de excelência de forma humanizada, colocando o 
            cliente sempre em primeiro lugar. Investimos em inovação, tecnologia 
            e treinamentos para um cuidado acolhedor.
          </p>
          <div className={styles.cardBorder}></div>
        </div>

        <div className={`${styles.sobrenosCard} ${styles.cardHighlight}`}>
          <div className={styles.cardNumber}>02</div>
          <div className={styles.sobrenosCardIcon}>
            <FiEye size={28} />
          </div>
          <h2 className={styles.sobrenosCardTitle}>Visão</h2>
          <p className={styles.sobrenosCardText}>
            Ser referência como Centro de Saúde e Bem-estar na região, lembrada 
            como uma farmácia inovadora com atendimento ágil e de qualidade, 
            a "farmácia de confiança" de nossos clientes.
          </p>
          <div className={styles.cardBorder}></div>
        </div>

        <div className={styles.sobrenosCard}>
          <div className={styles.cardNumber}>03</div>
          <div className={styles.sobrenosCardIcon}>
            <FiHeart size={28} />
          </div>
          <h2 className={styles.sobrenosCardTitle}>Valores</h2>
          <p className={styles.sobrenosCardText}>
            Qualidade máxima no atendimento, serviços e produtos. Garantir 
            conforto e tranquilidade em todo o processo, com uma equipe 
            capacitada para um atendimento único e personalizado.
          </p>
          <div className={styles.cardBorder}></div>
        </div>
      </div>
    </main>
  );
}
