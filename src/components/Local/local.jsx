"use client";

import styles from "./local.module.css";
import Image from "next/image";

export default function Local() {
  return (
    <section className={styles.localBg}>
      <h2 className={styles.localTitle}>ESTAMOS PERTO DE VOCÊ</h2>
      <div className={styles.localContainer}>
        <div className={styles.localCard}>
          <Image
            src="/image/equipe.webp"
            alt="Vacinas Sami"
            width={120}
            height={30}
            className={styles.localLogo}
          />
          <h3 className={styles.localName}>Água Verde</h3>
          <div className={styles.localInfo}>
            <p className={styles.localLine}>Seg. a Sáb. 8h às 20h</p>
            <p className={styles.localLine}>FERIADOS 9h às 20h</p>
            <p className={styles.localLine}>DOMINGO FECHADO</p>
            <p className={styles.localLine}>3030-1777</p>
            <p className={styles.localLine}>Av. República Argentina, 1115</p>
            <p className={styles.localLine}>Bairro Água Verde</p>
            <p className={styles.localLine}>Curitiba, Paraná</p>
          </div>
          <a
            href="https://wa.me/554130301777"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <span className={styles.whatsappIcon}>🟢</span> WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
