"use client";

import { useRef, useState } from "react";
import buttonStyles from "@/components/ui/ControlButton.module.scss";
import styles from "./AirSeoulCaseStudy.module.scss";

const videoSrc =
  "/images/projects/case-studies/airseoul/airseoul-promo-to-booking-flow.mp4";

const videoSteps = [
  { number: "01", label: "특가 발견", start: 0 },
  { number: "02", label: "운임 선택", start: 3.8 },
  { number: "03", label: "여정 확인", start: 20.6 },
];

function PlaybackIcon({ isPlaying }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {isPlaying ? (
        <>
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </>
      ) : (
        <path d="m6 3 14 9-14 9V3Z" />
      )}
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

export default function AirSeoulFlowVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  };

  const replay = () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => setIsPlaying(false));
  };

  const updateActiveStep = (currentTime) => {
    if (currentTime >= videoSteps[2].start) {
      setActiveStep(2);
    } else if (currentTime >= videoSteps[1].start) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  };

  const playFromStep = (step, index) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = step.start;
    setActiveStep(index);
    video.play().catch(() => setIsPlaying(false));
  };

  return (
    <div className={styles.videoPlayer} data-aos="fade-up">
      <div className={styles.videoSteps} aria-label="예약 흐름 구간 선택">
        {videoSteps.map((step, index) => (
          <button
            type="button"
            key={step.number}
            aria-pressed={activeStep === index}
            aria-label={`${step.number} ${step.label}, ${step.start}초부터 재생`}
            onClick={() => playFromStep(step, index)}
          >
            <span>{step.number}</span>
            <strong>{step.label}</strong>
          </button>
        ))}
      </div>

      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/projects/airseoul-hero-clean.png"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(event) => updateActiveStep(event.currentTarget.currentTime)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className={styles.videoControls}>
        <button
          type="button"
          className={`${buttonStyles.controlButtonDark} ${styles.playButton}`}
          onClick={togglePlayback}
          aria-label={isPlaying ? "영상 일시정지" : "영상 재생"}
          aria-pressed={isPlaying}
          title={isPlaying ? "일시정지" : "재생"}
        >
          <PlaybackIcon isPlaying={isPlaying} />
        </button>

        <button
          className={buttonStyles.controlButtonDark}
          type="button"
          onClick={replay}
          aria-label="영상을 처음부터 다시 재생"
          title="다시보기"
        >
          <ReplayIcon />
        </button>
      </div>
    </div>
  );
}
