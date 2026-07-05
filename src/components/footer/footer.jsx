"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContainer}>
        {/* Coluna 1 - Sobre */}
        <div className={styles.footerCol}>
          <div className={styles.footerLogoBox}>
            <Image
              src="/image/logofooter.webp"
              alt="QFarma - Vacinas"
              width={120}
              height={50}
              className={styles.footerLogo}
              priority
            />
          </div>
          <p className={styles.footerDesc}>
            Garantir um atendimento diferenciado, minimizando ao máximo a dor da
            picadinha é um dos nossos objetivos. Investimos no que há de melhor
            em tecnologia para sua proteção.
          </p>
          <div className={styles.footerSocial}>
            <span className={styles.footerSocialLabel}>Siga-nos</span>
            <div className={styles.footerSocialIcons}>
              <a
                href="https://www.instagram.com/qfarmavacinas"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579829288531"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 2 - Contato */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Contato</h4>
          <div className={styles.footerContactBox}>
            <a href="tel:5530301777" className={styles.footerContact}>
              <FaPhoneAlt className={styles.icon} />
              <span>(41) 3030-1777</span>
            </a>
            <a
              href="https://wa.me/554197202738"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerContact}
            >
              <FaWhatsapp className={styles.icon} />
              <span>(41) 9 9720-2738</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Av.+Rep%C3%BAblica+Argentina,+1115,+Curitiba+-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerContact}
            >
              <FaMapMarkerAlt className={styles.icon} />
              <span>Av. República Argentina, 1115</span>
            </a>
          </div>
        </div>

        {/* Coluna 3 - Horário */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Horário de Funcionamento</h4>
          <div className={styles.footerHoursBox}>
            <div className={styles.footerHours}>
              <span className={styles.bold}>Segunda a Sábado</span>
              <span>08h às 20h</span>
            </div>
            <div className={styles.footerHours}>
              <span className={styles.bold}>Feriados</span>
              <span>09h às 20h</span>
            </div>
            <div className={styles.footerHours}>
              <span className={styles.bold}>Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
          <Link href="/contato" className={styles.footerCta}>
            <span>Fale conosco</span>
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} QFarma - Todos os direitos reservados
          </p>
          <p className={styles.footerDev}>
            Desenvolvido por{' '}
            <a
              href="https://www.neumannwebsolutions.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              Neumann Web Solutions
              <FiExternalLink size={12} className={styles.devLinkIcon} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}