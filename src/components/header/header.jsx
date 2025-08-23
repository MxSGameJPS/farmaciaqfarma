"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const navLinks = [
  { href: "/", label: "Inicial" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>QFarma</div>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
