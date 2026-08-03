"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./DaisomallCaseStudy.module.scss";

const imageRoot = "/images/projects/case-studies/daisomall";

const views = [
  {
    label: "Desktop · 1440",
    src: `${imageRoot}/daisomall-home-desktop.png`,
    alt: "데스크톱 다이소몰 홈의 반응형 화면",
    width: 2880,
    height: 1800,
    className: styles.desktopViewport,
    sizes: "(max-width: 640px) 100vw, 72vw",
  },
  {
    label: "Tablet · 768",
    src: `${imageRoot}/daisomall-home-tablet.png`,
    alt: "태블릿 다이소몰 홈의 반응형 화면",
    width: 1536,
    height: 1800,
    className: styles.tabletViewport,
    sizes: "(max-width: 640px) 72vw, 24vw",
  },
  {
    label: "Mobile · 390",
    src: `${imageRoot}/daisomall-home-mobile.png`,
    alt: "모바일 다이소몰 홈의 반응형 화면",
    width: 780,
    height: 1688,
    className: styles.mobileViewport,
    sizes: "(max-width: 640px) 55vw, 22vw",
  },
];

export default function DaisomallResponsiveGallery() {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = views[activeIndex];

  const openView = (index, trigger) => {
    setActiveIndex(index);
    triggerRef.current = trigger;
    dialogRef.current?.showModal();
  };

  const closeView = () => dialogRef.current?.close();

  return (
    <>
      <div className={styles.viewportBoard} data-aos="fade-up">
        {views.map((view, index) => (
          <figure className={view.className} key={view.label}>
            <figcaption>{view.label}</figcaption>
            <button
              className={styles.viewportTrigger}
              type="button"
              aria-label={`${view.label} 화면 크게 보기`}
              onClick={(event) => openView(index, event.currentTarget)}
            >
              <span className={styles.viewportImage}>
                <Image src={view.src} alt={view.alt} fill sizes={view.sizes} />
              </span>
              <span className={styles.viewportHint} aria-hidden="true">View</span>
            </button>
          </figure>
        ))}
      </div>

      <dialog
        className={styles.viewportDialog}
        ref={dialogRef}
        aria-labelledby="daisomall-responsive-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeView();
        }}
        onClose={() => triggerRef.current?.focus()}
      >
        <div className={styles.viewportDialogPanel}>
          <div className={styles.viewportDialogHeader}>
            <strong id="daisomall-responsive-dialog-title">{activeView.label}</strong>
            <button type="button" onClick={closeView} aria-label="확대 이미지 닫기">Close</button>
          </div>
          <Image
            src={activeView.src}
            alt={activeView.alt}
            width={activeView.width}
            height={activeView.height}
            sizes="90vw"
          />
        </div>
      </dialog>
    </>
  );
}
