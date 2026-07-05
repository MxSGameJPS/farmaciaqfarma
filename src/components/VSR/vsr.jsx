"use client";

import Image from "next/image";
import styles from "./vsr.module.css";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiHeart, FiShield } from "react-icons/fi";

export default function VSR() {
  return (
    <section className={styles.vsr}>
      <div className={styles.vsrContainer}>
        {/* Conteúdo */}
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span className={styles.tag}>Nossa Equipe</span>
            <h2 className={styles.title}>
              Equipe Especializada em <br />
              <span className={styles.highlight}>Vacinação</span>
            </h2>
          </div>

          <p className={styles.texto}>
            Nossa equipe é formada por profissionais experientes e dedicados,
            prontos para oferecer atendimento humanizado e seguro em todas as
            etapas da vacinação. Cuidamos de você, da sua família e de toda a
            comunidade com responsabilidade e carinho.
          </p>

          <div className={styles.diferenciais}>
            <div className={styles.diferencial}>
              <div className={styles.diferencialIcon}>
                <FiUsers />
              </div>
              <div>
                <h4>Profissionais Qualificados</h4>
                <p>Enfermeiros e técnicos especializados</p>
              </div>
            </div>
            <div className={styles.diferencial}>
              <div className={styles.diferencialIcon}>
                <FiHeart />
              </div>
              <div>
                <h4>Atendimento Humanizado</h4>
                <p>Cuidado e acolhimento em cada etapa</p>
              </div>
            </div>
            <div className={styles.diferencial}>
              <div className={styles.diferencialIcon}>
                <FiShield />
              </div>
              <div>
                <h4>Segurança Garantida</h4>
                <p>Procedimentos seguros e confiáveis</p>
              </div>
            </div>
          </div>

          <Link href="/contato" className={styles.button}>
            <span>Entre em contato</span>
            <FiArrowRight className={styles.buttonIcon} />
          </Link>
        </div>

        {/* Imagem */}
        <div className={styles.imagemEquipe}>
          <div className={styles.imageWrapper}>
            <Image
              src="/image/equipe.webp"
              alt="Equipe especializada em vacinação"
              width={600}
              height={450}
              className={styles.equipe}
              priority
            />
            <div className={styles.imageBadge}>
              <span>+5 anos</span>
              <p>de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}