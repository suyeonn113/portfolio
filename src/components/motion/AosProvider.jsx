"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    const prepareCaseStudySections = () => {
      document
        .querySelectorAll("[data-case-study-page] > section")
        .forEach((section) => {
          if (section.hasAttribute("data-aos") || section.querySelector("[data-aos]")) return;

          section.setAttribute("data-aos", "fade-up");
          section.setAttribute("data-aos-duration", "850");
        });
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    prepareCaseStudySections();

    if (prefersReducedMotion) {
      const revealWithoutMotion = () => {
        prepareCaseStudySections();
        document.querySelectorAll("[data-aos]").forEach((element) => {
          element.classList.add("aos-init", "aos-animate");
        });
      };

      revealWithoutMotion();
      const observer = new MutationObserver(revealWithoutMotion);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => observer.disconnect();
    }

    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      offset: 90,
      once: true,
    });
    AOS.refresh();

    const observer = new MutationObserver(() => {
      prepareCaseStudySections();
      AOS.refreshHard();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
