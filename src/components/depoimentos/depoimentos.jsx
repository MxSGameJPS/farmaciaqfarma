"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./depoimentos.module.css";
import Image from "next/image";

const depoimentos = [
  {
    texto:
      "O melhor momento para proteger seu filho é agora. O VSR não espera, e a prevenção também não deveria.",
  },
  {
    texto:
      "Aplicamos confiança, prevenção e cuidado. Escolha proteger quem você ama com quem leva isso a sério.",
  },
  {
    texto:
      "A prevenção começa no primeiro passo. Seja por você, por seus filhos, ou por quem você ama. Vacinar é um ato de cuidado.",
  },
];

export function DepoimentosTop() {
  const [count, setCount] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  return (
    <section className={styles.depoimentosBg}>
      <div className={styles.depoimentosContainer}>
        <div className={styles.depoimentosTop}>
          <div className={styles.depoimentoCardBig}>
            <p className={styles.depoimentoTitle}>
              COMPROMISSO COM A PREVENÇÃO QUE TRANSFORMA VIDAS
            </p>
            <p className={styles.depoimentoSubtitle}>
              Seguimos firmes no nosso propósito: cuidar, prevenir e proteger
              com excelência.
            </p>
            <p className={styles.depoimentoText}>
              Ao longo dos anos, temos atuado com seriedade e responsabilidade
              na imunização de milhares de pessoas. Cada vacina aplicada
              representa um passo na proteção contra doenças e na construção de
              um futuro mais saudável.
            </p>
            <div className={styles.depoimentoStats}>
              <button className={styles.buttonContato}>ENTRE EM CONTATO</button>
              <div className={styles.statsRight}>
                <div className={styles.avatars}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      src="/image/10.jpg"
                      alt="Logo"
                      width={40}
                      height={40}
                      className={styles.logoAvatar}
                    />
                  ))}
                </div>
                <div className={styles.statsText} ref={statsRef}>
                  <span className={styles.statsNumber}>{count}K+</span>
                  <span className={styles.statsLabel}>Vacinas aplicadas</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.depoimentoCardBig}>
            <p className={styles.depoimentoTitle}>
              A ESCOLHA DE QUEM VALORIZA A SAÚDE DA FAMÍLIA
            </p>
            <p className={styles.depoimentoSubtitle}>
              Vacinar aqui é ter a tranquilidade de estar em boas mãos.
            </p>
            <p className={styles.depoimentoText}>
              Pais, mães e responsáveis confiam em nossa clínica para proteger
              quem mais amam. Do acolhimento no agendamento até a aplicação
              segura das vacinas, oferecemos um atendimento humanizado,
              eficiente e pensado para todas as idades.
            </p>
          </div>
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
            <Image
              src="/image/10.jpg"
              alt="Logo"
              width={40}
              height={40}
              className={styles.logoAvatar2}
            />
            <p className={styles.depoimentoSmallText}>{dep.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
