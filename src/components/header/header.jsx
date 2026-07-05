"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { FiHome, FiUsers, FiBriefcase, FiMail } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Inicial", icon: FiHome },
  { href: "/sobrenos", label: "Sobre Nós", icon: FiUsers },
  { href: "/servicos", label: "Serviços", icon: FiBriefcase },
  { href: "/contato", label: "Contato", icon: FiMail },
];

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navListRef = useRef(null);
  const linkRefs = useRef({});
  const firstLinkRef = useRef(null);

  const isActive = useCallback(
    (href) => (href === "/" ? pathname === href : pathname?.startsWith(href)),
    [pathname]
  );

  // Detecta breakpoint mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    handleResize();
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // Header compacta e ganha sombra ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Fecha com Esc e devolve o foco ao botão
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Trava o scroll do body e move o foco para dentro do drawer
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    if (menuOpen) {
      const timeout = setTimeout(() => firstLinkRef.current?.focus(), 300);
      return () => clearTimeout(timeout);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Calcula posição/largura da "pílula" indicadora atrás do link ativo/hover
  const updateIndicator = useCallback(() => {
    if (isMobile) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const targetHref = hoveredHref ?? navLinks.find((l) => isActive(l.href))?.href;
    const el = targetHref ? linkRefs.current[targetHref] : null;

    if (el && navListRef.current) {
      const listRect = navListRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicator({
        left: rect.left - listRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredHref, isActive, isMobile]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      role="banner"
      aria-label="Cabeçalho principal"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="QFarma - Página inicial">
          <Image
            src="/image/logofooter.webp"
            alt="QFarma Logo"
            width={150}
            height={50}
            className={styles.logoImage}
            priority
          />
        </Link>

        {menuOpen && isMobile && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          id="navigation-menu"
          ref={menuRef}
          className={`${styles.nav} ${menuOpen && isMobile ? styles.navMobileOpen : ""}`}
          role="navigation"
          aria-label="Navegação principal"
          {...(isMobile ? { "aria-hidden": menuOpen ? "false" : "true" } : {})}
        >
          <ul
            className={styles.navList}
            ref={navListRef}
            onMouseLeave={() => setHoveredHref(null)}
          >
            <li
              className={styles.navIndicator}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
              }}
              aria-hidden="true"
            />
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={styles.navItem}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <Link
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                    if (index === 0) firstLinkRef.current = el;
                  }}
                  href={link.href}
                  className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
                  onClick={handleLinkClick}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onFocus={() => setHoveredHref(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  <span className={styles.linkIcon}>
                    <link.icon size={18} />
                  </span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navFooter}>
            <Link href="/contato" className={styles.ctaMobile} onClick={handleLinkClick}>
              Fale Conosco
            </Link>
            <div className={styles.navSocial}>
              <a
                href="https://www.instagram.com/qfarmavacinas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579829288531"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <Link href="/contato" className={styles.ctaDesktop}>
          Fale Conosco
        </Link>

        <button
          ref={buttonRef}
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="navigation-menu"
        >
          <span className={styles.hamburger}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;