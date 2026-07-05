"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: "/image/hero1.webp",
    imageMobile: "/image/heromob1.webp",
    tag: "Vacinação",
    title: "Proteja quem você ama",
    highlight: "Vacinas salvam vidas",
    description: "Confira o calendário vacinal completo para sua família",
    cta: "Ver calendário",
    href: "/servicos",
  },
  {
    id: 2,
    image: "/image/hero2.webp",
    imageMobile: "/image/heromob2.webp",
    tag: "Conveniência",
    title: "Vacinação no conforto do seu lar",
    highlight: "Nós vamos até você",
    description: "Atendimento domiciliar com profissionais qualificados",
    cta: "Agendar visita",
    href: "/contato",
  },
  {
    id: 3,
    image: "/image/hero3.webp",
    imageMobile: "/image/heromob3.webp",
    tag: "Especializado",
    title: "Cuidado desde o primeiro dia",
    highlight: "Primeiro brinco com segurança",
    description: "Procedimento realizado por enfermeira especialista",
    cta: "Conhecer serviço",
    href: "/servicos",
  },
  {
    id: 4,
    image: "/image/hero4.webp",
    imageMobile: "/image/heromob4.webp",
    tag: "Personalizado",
    title: "Planos que cabem no seu bolso",
    highlight: "Para toda a família",
    description: "Pacotes adaptados para cada idade e necessidade",
    cta: "Fazer orçamento",
    href: "/contato",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(nextSlide, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const currentSlide = slides[current];
  // Escolhe a imagem correta baseado no dispositivo
  const imageSrc = isMobile ? currentSlide.imageMobile : currentSlide.image;

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrossel de apresentação"
      role="region"
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={currentSlide.title}
          fill
          priority
          sizes="100vw"
          quality={85}
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.headerGroup}>
            <span className={styles.tag}>{currentSlide.tag}</span>
            <span className={styles.indicator} aria-hidden="true">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <h1 className={styles.title}>
            {currentSlide.title}
            <br />
            <span className={styles.highlight}>{currentSlide.highlight}</span>
          </h1>

          <p className={styles.description}>{currentSlide.description}</p>

          <Link href={currentSlide.href} className={styles.button}>
            <span>{currentSlide.cta}</span>
            <FiArrowRight className={styles.buttonIcon} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <button
        className={`${styles.control} ${styles.controlPrev}`}
        onClick={prevSlide}
        aria-label="Slide anterior"
        type="button"
      >
        <FiChevronLeft size={28} aria-hidden="true" />
      </button>

      <button
        className={`${styles.control} ${styles.controlNext}`}
        onClick={nextSlide}
        aria-label="Próximo slide"
        type="button"
      >
        <FiChevronRight size={28} aria-hidden="true" />
      </button>

      <div className={styles.dotsContainer} role="tablist">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${styles.dot} ${current === index ? styles.dotActive : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
            role="tab"
            type="button"
          >
            <span className={styles.dotLabel}>{slide.tag}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;