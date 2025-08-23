"use client";

import styles from "./sobrenos.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SobreNos() {
  const sectionRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            ref.current.classList.add("fadeInScroll");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.sobrenosMain}>
      <section
        ref={sectionRefs[0]}
        className={styles.sobrenosHeroExample + " fadeInScrollInit"}
      >
        <div className={styles.sobrenosHeroExampleContent}>
          <div className={styles.sobrenosHeroExampleImg}>
            <Image
              src="/image/logo2.png"
              alt="Logo QFarma"
              width={420}
              height={420}
              priority
            />
          </div>
          <div className={styles.sobrenosHeroExampleText}>
            <h1>Quem somos</h1>
            <p>
              Somos uma farmácia especializada, com mais de 15 anos de atuação.
              Atendemos gestantes, crianças, adolescentes, adultos e idosos,
              sempre em busca de excelência no atendimento para oferecer a
              melhor experiência possível aos nossos clientes.
              <br />
              <br />
              Nosso time é capacitado continuamente, sempre com temas
              atualizados e oportunos.
              <br />
              <br />
              Sua família vivendo com saúde é nosso compromisso!
            </p>
            <a href="/servicos" className={styles.sobrenosHeroExampleBtn}>
              CONHECER NOSSOS SERVIÇOS
            </a>
          </div>
        </div>
      </section>
      <div
        ref={sectionRefs[1]}
        className={styles.sobrenosCardsContainer + " fadeInScrollInit"}
      >
        <section className={styles.sobrenosCard}>
          <h2 className={styles.sobrenosCardTitle}>MISSÃO:</h2>
          <p className={styles.sobrenosCardText}>
            A QFarma é uma farmácia idealizada para oferecer um trabalho de
            excelência. Trabalhamos de forma humanizada, colocando o cliente
            sempre em primeiro lugar. Investimos em inovação, tecnologia e em
            treinamentos específicos, fazendo com que o cuidado com a saúde seja
            algo tranquilo e até mesmo acolhedor.
          </p>
        </section>
        <section className={styles.sobrenosCard}>
          <h2 className={styles.sobrenosCardTitle}>VISÃO:</h2>
          <p className={styles.sobrenosCardText}>
            Ser referência como Centro de Saúde e Bem-estar, não só em nossa
            cidade como na região. Ser lembrada como uma farmácia inovadora, com
            atendimento ágil e de qualidade, e que possa ser chamada por nossos
            clientes de "minha farmácia de confiança".
          </p>
        </section>
        <section className={styles.sobrenosCard}>
          <h2 className={styles.sobrenosCardTitle}>VALORES:</h2>
          <p className={styles.sobrenosCardText}>
            Oferecer a todos qualidade máxima, não só no atendimento como nos
            serviços e produtos. Garantir o conforto e tranquilidade de nossos
            clientes em todo o processo, do início ao fim. Tendo sempre uma
            equipe capacitada para oferecer um atendimento único e
            personalizado.
          </p>
        </section>
      </div>
      <section
        ref={sectionRefs[2]}
        className={styles.sobrenosLocalizacaoSection + " fadeInScrollInit"}
      >
        <div className={styles.sobrenosLocalizacaoContent}>
          <div className={styles.sobrenosLocalizacaoInfo}>
            <div className={styles.sobrenosLocalizacaoIcon}>
              {/* Ícone de localização usando react-icons */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="#231942"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.39 8.01 11.09.34.25.64.25.98 0C13.95 21.39 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C10.14 18.13 5 13.97 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.97-5.14 7.13-7 8.88z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
            </div>
            <h2 className={styles.sobrenosLocalizacaoTitle}>
              Localização de fácil acesso
            </h2>
            <p className={styles.sobrenosLocalizacaoText}>
              Nossa loja está localizada na República Argentina 1115 loja 2,
              Água Verde, Curitiba/PR. Fácil acesso, próximo a pontos de
              referência e com estacionamento gratuito e amplo para sua
              comodidade.
            </p>
          </div>
          <div className={styles.sobrenosLocalizacaoMapa}>
            <iframe
              src="https://www.google.com/maps?q=Rep%C3%BAblica+Argentina+1115+loja+2,+Curitiba,+PR&output=embed"
              width="400"
              height="280"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa QFarma"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
