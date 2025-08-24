"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Inicial" },
  { href: "/sobrenos", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>QFarma</div>
      {/* Nav só aparece em desktop ou quando menuOpen no mobile */}
      {(!isMobile || menuOpen) && (
        <nav
          className={`${styles.nav} ${
            menuOpen && isMobile ? styles.navMobileOpen : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
      <button
        className={styles.menuBtn}
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </header>
  );
};

export default Header;
