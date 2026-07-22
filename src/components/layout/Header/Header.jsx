"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const menuItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Works", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function ThemeIcon({ theme, animate }) {
  return (
    <span
      className={`${styles.themeIcon} ${animate ? styles.themeIconBump : ""}`}
      aria-hidden="true"
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20.25 14.15A8.5 8.5 0 0 1 9.85 3.75a8.5 8.5 0 1 0 10.4 10.4Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.25" />
          <path d="M12 2.75v2.2M12 19.05v2.2M2.75 12h2.2M19.05 12h2.2M5.46 5.46l1.56 1.56M16.98 16.98l1.56 1.56M18.54 5.46l-1.56 1.56M7.02 16.98l-1.56 1.56" />
        </svg>
      )}
    </span>
  );
}

function MenuIcon() {
  return (
    <span className={styles.menuIcon} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [themeAnimationKey, setThemeAnimationKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    setThemeAnimationKey((key) => key + 1);
    document.documentElement.dataset.theme = nextTheme;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
          aria-pressed={theme === "dark"}
        >
          <ThemeIcon
            key={themeAnimationKey}
            theme={theme}
            animate={themeAnimationKey > 0}
          />
        </button>
        <button
          className={styles.controlButton}
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="전체 메뉴 열기"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
        >
          <MenuIcon />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={styles.menuPanel}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
        >
          <div className={styles.menuTop}>
            <button
              className={styles.controlButton}
              type="button"
              onClick={closeMenu}
              aria-label="전체 메뉴 닫기"
            >
              <MenuIcon />
            </button>
          </div>

          <nav className={styles.menuNavigation} aria-label="전체 메뉴 목록">
            <ol>
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    <span className={styles.menuNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.menuLabel}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.menuFooter}>
            <div>
              <strong>Web publishing · UI implementation</strong>
              <span>Needs · Structure · Accessibility</span>
            </div>
            <div>
              <strong>Based in Seoul</strong>
              <a href="#contact" onClick={closeMenu}>
                Let&apos;s talk ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
