import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const slides = [
  {
    image: "/image/hero1.jpg",
    title: "VACINAS SALVAM VIDAS. VOCÊ Já parou para pensar nisso?",
    subtitle:
      "Confira quais são as vacinas recomendadas para toda sua família.",
    button: { text: "Saiba mais", href: "/servicos" },
  },
  {
    image: "/image/hero2.jpg",
    title: "Não pode vir até nós? Nós iremos até você.",
    subtitle:
      "Vacinar em casa além de prático, pode ser econômico, agende agora mesmo sua vacinação domiciliar",
    button: { text: "Agendar", href: "/contato" },
  },
  {
    image: "/image/hero3.jpg",
    title: "Colocação do primeiro Brinco com enfermeira especialista.",
    subtitle:
      "Para uma maior bem-estar do bebê, utilizamos métodos auxiliares, para diminuir a dor no momento da colocação do primeiro brinco",
    button: { text: "Saiba mais", href: "/servicos" },
  },
  {
    image: "/image/hero4.jpg",
    title: "Conheça nossos planos e pacotes vacinais.",
    subtitle:
      "Os planos de vacinação são elaborados de acordo com a idade da criança, recomendação médica e orçamento da família.",
    button: { text: "Consultar agora", href: "/contato" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>
        <Link href={slides[current].button.href} legacyBehavior>
          <a className={styles.button}>{slides[current].button.text}</a>
        </Link>
        <div className={styles.dots}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={current === idx ? styles.dotActive : styles.dot}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
