"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./AirSeoulCaseStudy.module.scss";

const imageRoot = "/images/projects/case-studies/airseoul";

const finalViews = [
  {
    key: "mobile",
    label: "Mobile",
    src: `${imageRoot}/airseoul-final-home-mobile.png`,
    alt: "에어서울 최종 구현 모바일 전체 화면",
    width: 500,
    height: 4635,
  },
  {
    key: "desktop",
    label: "Desktop",
    src: `${imageRoot}/airseoul-final-home-desktop.png`,
    alt: "에어서울 최종 구현 데스크톱 전체 화면",
    width: 1975,
    height: 3154,
  },
];

const serviceViews = [
  { key: "booking", label: "항공권 예매", file: "airseoul-booking-tabs-desktop-booking.png", width: 5760, height: 1360 },
  { key: "mytrip", label: "나의 여행", file: "airseoul-booking-tabs-desktop-mytrip.png", width: 5760, height: 1360 },
  { key: "checkin", label: "체크인", file: "airseoul-booking-tabs-desktop-checkin.png", width: 5760, height: 1360 },
  { key: "schedule", label: "출도착/스케줄", file: "airseoul-booking-tabs-desktop-schedule.png", width: 5760, height: 1360 },
];

const viewportViews = [
  { key: "desktop", label: "Desktop", file: "airseoul-booking-tabs-desktop-booking.png", width: 5760, height: 1360 },
  {
    key: "devices",
    label: "Tablet + Mobile",
    devices: [
      { label: "Tablet", file: "airseoul-booking-tabs-tablet-booking.png", width: 1536, height: 1097 },
      { label: "Mobile", file: "airseoul-booking-tabs-mobile-booking.png", width: 780, height: 1260 },
    ],
  },
];

export function AirSeoulConceptComparison() {
  const [dialogView, setDialogView] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const openDialog = (view, trigger) => {
    setDialogView(view);
    triggerRef.current = trigger;
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <div className={styles.conceptGrid} data-aos="fade-up">
        <figure>
          <figcaption><span>Direction</span><strong>AI-assisted concept</strong></figcaption>
          <button
            className={`${styles.conceptFrame} ${styles.conceptSource}`}
            type="button"
            onClick={(event) => openDialog({
              label: "AI-assisted concept",
              src: `${imageRoot}/airseoul-ai-concept.png`,
              alt: "에어서울 모바일과 데스크톱 AI 초기 콘셉트",
              width: 1024,
              height: 1536,
            }, event.currentTarget)}
            aria-label="AI 초기 콘셉트 전체 이미지 보기"
          >
            <Image
              src={`${imageRoot}/airseoul-ai-concept.png`}
              alt="에어서울 모바일과 데스크톱 AI 초기 콘셉트"
              width={1024}
              height={1536}
              sizes="(max-width: 640px) 100vw, 42vw"
            />
          </button>
        </figure>

        <figure>
          <figcaption>
            <span>Final</span>
            <strong>Implemented UI</strong>
          </figcaption>
          <div className={styles.finalPair}>
            {finalViews.map((view) => (
              <button
                className={`${styles.finalFrame} ${view.key === "mobile" ? styles.finalMobileFrame : ""}`}
                type="button"
                key={view.key}
                onClick={(event) => openDialog(view, event.currentTarget)}
                aria-label={`${view.label} 최종 구현 전체 이미지 보기`}
              >
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={view.width}
                  height={view.height}
                  sizes={view.key === "mobile" ? "(max-width: 640px) 28vw, 14vw" : "(max-width: 640px) 68vw, 38vw"}
                />
                <span className={styles.viewHint} aria-hidden="true">{view.label}</span>
              </button>
            ))}
          </div>
        </figure>
      </div>

      <dialog
        className={styles.imageDialog}
        ref={dialogRef}
        aria-labelledby="airseoul-image-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        onClose={() => triggerRef.current?.focus()}
      >
        {dialogView ? (
          <div className={styles.dialogPanel}>
            <header>
              <strong id="airseoul-image-dialog-title">{dialogView.label}</strong>
              <button type="button" onClick={closeDialog} aria-label="전체 이미지 닫기">Close</button>
            </header>
            <Image
              src={dialogView.src}
              alt={dialogView.alt}
              width={dialogView.width}
              height={dialogView.height}
              sizes="92vw"
            />
          </div>
        ) : null}
      </dialog>
    </>
  );
}

export function AirSeoulBookingViewer() {
  const [mode, setMode] = useState("service");
  const [activeService, setActiveService] = useState(0);
  const [activeViewport, setActiveViewport] = useState(0);
  const activeView = mode === "service" ? serviceViews[activeService] : viewportViews[activeViewport];

  return (
    <div className={styles.bookingViewer} data-aos="fade-up">
      <div className={styles.viewerControls}>
        <div>
          <span>Service state</span>
          <div>
            {serviceViews.map((view, index) => (
              <button
                key={view.key}
                type="button"
                aria-pressed={mode === "service" && activeService === index}
                onClick={() => { setMode("service"); setActiveService(index); }}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span>Responsive booking</span>
          <div>
            {viewportViews.map((view, index) => (
              <button
                key={view.key}
                type="button"
                aria-pressed={mode === "viewport" && activeViewport === index}
                onClick={() => { setMode("viewport"); setActiveViewport(index); }}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <figure className={styles.bookingStage} data-mode={mode} data-view={activeView.key}>
        {activeView.devices ? (
          <div className={styles.responsivePair}>
            {activeView.devices.map((device) => (
              <div className={styles.responsiveDevice} key={device.label}>
                <span>{device.label}</span>
                <Image
                  src={`${imageRoot}/${device.file}`}
                  alt={`에어서울 ${device.label} 예약 서비스 화면`}
                  width={device.width}
                  height={device.height}
                  sizes={device.label === "Mobile" ? "30vw" : "68vw"}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            key={`${mode}-${activeView.file}`}
            src={`${imageRoot}/${activeView.file}`}
            alt={`에어서울 ${activeView.label} 예약 서비스 화면`}
            width={activeView.width}
            height={activeView.height}
            sizes="(max-width: 640px) 100vw, 92vw"
          />
        )}
        <figcaption>{activeView.label}</figcaption>
      </figure>
    </div>
  );
}
