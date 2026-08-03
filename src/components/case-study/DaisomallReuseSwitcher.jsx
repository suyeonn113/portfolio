"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./DaisomallCaseStudy.module.scss";

const imageRoot = "/images/projects/case-studies/daisomall";

export default function DaisomallReuseSwitcher({ views }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeView = views[activeIndex];

  const moveTo = (index) => {
    const nextIndex = (index + views.length) % views.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveTo(views.length - 1);
    }
  };

  return (
    <div className={styles.reuseSwitcher}>
      <div className={styles.reuseTabs} role="tablist" aria-label="상품 카드 화면 선택">
        {views.map((view, index) => (
          <button
            id={`reuse-tab-${index}`}
            key={view.label}
            ref={(node) => { tabRefs.current[index] = node; }}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="reuse-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <figure
        id="reuse-panel"
        role="tabpanel"
        aria-labelledby={`reuse-tab-${activeIndex}`}
      >
        <div className={styles.reuseSwitcherImage}>
          <Image
            key={activeView.src}
            src={`${imageRoot}/${activeView.src}`}
            alt={activeView.alt}
            fill
            sizes="(max-width: 640px) 100vw, 0px"
          />
        </div>
        <figcaption>
          <span>{activeView.label}</span>
          <strong>{activeView.title}</strong>
        </figcaption>
      </figure>
    </div>
  );
}
