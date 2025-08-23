"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogoBox}>
            <Image
              src="/image/logo.png"
              alt="Vacinas Sami"
              width={80}
              height={40}
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.footerDesc}>
            Garantir um atendimento diferenciado, minimizando o máximo possível
            a dor da picadinha é um dos nossos objetivos. Investimos no que há
            de melhor em tecnologia, tanto no mercado nacional quanto
            internacional.
          </p>
        </div>
        <div className={styles.footerCenter}>
          <div className={styles.footerContactBox}>
            <p className={styles.footerContact}>
              <FaPhoneAlt className={styles.icon} /> 3030-1777
            </p>
            <p className={styles.footerContact}>
              <FaWhatsapp className={styles.icon} /> WhatsApp: 41 9 9127-1777
            </p>
            <p className={styles.footerContact}>
              <FaMapMarkerAlt className={styles.icon} /> Av. República
              Argentina, 1115 - Água Verde, Curitiba/PR
            </p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerHoursBox}>
            <p className={styles.footerHoursTitle}>HORÁRIO DE FUNCIONAMENTO</p>
            <p className={styles.footerHours}>
              <span className={styles.bold}>Segunda a Sábado:</span> 08h às 20h
            </p>
            <p className={styles.footerHours}>
              <span className={styles.bold}>Feriados:</span> 09h às 20h
            </p>
            <p className={styles.footerHours}>
              <span className={styles.bold}>Domingo:</span> Fechado
            </p>
          </div>
          <div className={styles.footerSocialBox}>
            <p className={styles.footerSocialTitle}>Siga-nos</p>
            <div className={styles.footerSocialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaInstagram size={28} color="#fff" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaFacebookF size={28} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
