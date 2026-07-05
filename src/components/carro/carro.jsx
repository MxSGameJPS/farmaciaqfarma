"use client";

import styles from "./carro.module.css";
import Image from "next/image";
import { FiHome, FiHeart, FiUsers, FiArrowRight, FiCalendar } from "react-icons/fi";

export default function Carro() {
  return (
    <section className={styles.carroBg}>
      <div className={styles.carroContainer}>
        {/* Conteúdo */}
        <div className={styles.carroTextBox}>
          <div className={styles.carroHeader}>
            <span className={styles.tag}>Vacinação Domiciliar</span>
            <h2 className={styles.carroTitle}>
              Vacinação no <br />
              <span className={styles.highlight}>Conforto do seu Lar</span>
            </h2>
          </div>

          <p className={styles.carroText}>
            A vacinação em casa é uma excelente alternativa para quem deseja
            cuidar da saúde sem sair do conforto do lar e sem se expor a riscos
            desnecessários.
          </p>

          <p className={styles.carroText}>
            Você será atendido com o mesmo profissionalismo e cordialidade que
            oferecemos em nossa clínica. Ideal para crianças, gestantes, idosos
            e pessoas com dificuldade de locomoção.
          </p>

          <div className={styles.carroDiferenciais}>
            <div className={styles.carroDiferencial}>
              <FiHome className={styles.diferencialIcon} />
              <span>Conforto do seu lar</span>
            </div>
            <div className={styles.carroDiferencial}>
              <FiUsers className={styles.diferencialIcon} />
              <span>Atendimento humanizado</span>
            </div>
            <div className={styles.carroDiferencial}>
              <FiHeart className={styles.diferencialIcon} />
              <span>Segurança garantida</span>
            </div>
          </div>

          <a
            href={`https://wa.me/554197202738?text=${encodeURIComponent(
              "Olá, gostaria de saber mais sobre a vacinação em casa. Como funciona?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonContato}
          >
            <FiCalendar size={18} />
            <span>Agendar visita</span>
            <FiArrowRight className={styles.buttonIcon} />
          </a>
        </div>

        {/* Imagem */}
        <div className={styles.carroImageBox}>
          <div className={styles.imageWrapper}>
            <Image
              src="/image/emcasa.webp"
              alt="Vacinação domiciliar - Carro da QFarma"
              width={540}
              height={200}
              className={styles.carroImage}
              priority
            />
            <div className={styles.imageBadge}>
              <span>Atendimento</span>
              <p>em até 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}