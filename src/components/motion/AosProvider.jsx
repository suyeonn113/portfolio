"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll("[data-aos]").forEach((element) => {
        element.classList.add("aos-init", "aos-animate");
      });

      return;
    }

    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      offset: 90,
      once: true,
    });
    AOS.refresh();
  }, []);

  return null;
}
