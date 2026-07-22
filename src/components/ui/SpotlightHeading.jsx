"use client";

import styles from "./SpotlightHeading.module.scss";

export default function SpotlightHeading({
  children,
  className = "",
  id,
  tone = "dark",
}) {
  const updateSpotlight = (event) => {
    const heading = event.currentTarget;
    const bounds = heading.getBoundingClientRect();

    heading.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`,
    );
    heading.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`,
    );
    heading.style.setProperty("--spotlight-opacity", "1");
  };

  const hideSpotlight = (event) => {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  };

  return (
    <h2
      id={id}
      className={`${styles.heading} ${className}`.trim()}
      data-tone={tone}
      onMouseEnter={updateSpotlight}
      onMouseMove={updateSpotlight}
      onMouseLeave={hideSpotlight}
    >
      <span className={styles.base}>{children}</span>
      <span className={styles.spotlight} aria-hidden="true">
        {children}
      </span>
    </h2>
  );
}
