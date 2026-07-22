"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Strengths", href: "/#strengths" },
  { label: "Projects", href: "/#work" },
];

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

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
    <svg
      className={styles.menuIcon}
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.5 0.5H16.5" />
      <path d="M3.5 6.5H16.5" />
      <path d="M3.5 12.5H16.5" />
    </svg>
  );
}

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [themeAnimationKey, setThemeAnimationKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const shouldRestoreFocusRef = useRef(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const documentTheme = document.documentElement.dataset.theme;
    const initialTheme =
      storedTheme ??
      documentTheme ??
      (mediaQuery.matches ? "dark" : "light");

    document.documentElement.dataset.theme = initialTheme;
    const themeFrame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
    });

    const syncSystemTheme = (event) => {
      if (window.localStorage.getItem("portfolio-theme")) return;

      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
    };

    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      window.cancelAnimationFrame(themeFrame);
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const backgroundElements = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ].filter(Boolean);
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleMenuKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        shouldRestoreFocusRef.current = true;
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusableElements = Array.from(
        menuPanelRef.current.querySelectorAll(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.inert = true;
    });
    document.addEventListener("keydown", handleMenuKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      backgroundElements.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", handleMenuKeyDown);

      if (shouldRestoreFocusRef.current) {
        window.requestAnimationFrame(() => {
          menuTriggerRef.current?.focus();
        });
      }
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    setThemeAnimationKey((key) => key + 1);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const openMenu = (event) => {
    menuTriggerRef.current = event.currentTarget;
    shouldRestoreFocusRef.current = true;
    setIsMenuOpen(true);
  };

  const closeMenu = (restoreFocus = true) => {
    shouldRestoreFocusRef.current = restoreFocus;
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link
        className={styles.wordmark}
        href="/"
        aria-label="홈으로 이동"
        inert={isMenuOpen ? true : undefined}
      >
        SUYEONN
      </Link>

      <div className={styles.controls} inert={isMenuOpen ? true : undefined}>
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
          onClick={openMenu}
          aria-label="전체 메뉴 열기"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
        >
          <MenuIcon />
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuPanelRef}
          className={styles.menuPanel}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
        >
          <div className={styles.menuTop}>
            <button
              ref={closeButtonRef}
              className={styles.controlButton}
              type="button"
              onClick={() => closeMenu()}
              aria-label="전체 메뉴 닫기"
            >
              <MenuIcon />
            </button>
          </div>

          <nav className={styles.menuNavigation} aria-label="전체 메뉴 목록">
            <ol>
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => closeMenu(false)}>
                    <span className={styles.menuNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.menuLabel}>{item.label}</span>
                  </Link>
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
              <Link href="/#contact" onClick={() => closeMenu(false)}>
                Let&apos;s talk ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
