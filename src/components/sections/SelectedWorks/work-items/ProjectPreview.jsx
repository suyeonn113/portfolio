import Image from "next/image";
import styles from "../SelectedWorks.module.scss";

export default function ProjectPreview({ className, project, sizes }) {
  return (
    <div className={`${styles.previewFrame} ${className}`}>
      <div className={styles.iosStatus} aria-hidden="true">
        <time>9:41</time>
        <span className={styles.dynamicIsland} />
        <span className={styles.iosSignals}>
          <CellularIcon />
          <WifiIcon />
          <BatteryIcon />
        </span>
      </div>
      <div className={styles.previewScreen}>
        <Image
          className={styles.previewImage}
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          sizes={sizes}
        />
      </div>
      <div className={styles.iosToolbar} aria-hidden="true">
        <span className={styles.iosBack}>
          <BackIcon />
        </span>
        <strong>{project.title}</strong>
        <span className={styles.iosShare}>
          <ShareIcon />
        </span>
        <span className={styles.iosTabs}>
          <TabsIcon />
        </span>
      </div>
    </div>
  );
}

function CellularIcon() {
  return (
    <svg viewBox="0 0 18 12" focusable="false">
      <rect x="1" y="7.5" width="2.5" height="3.5" rx="1" />
      <rect x="5.3" y="5.5" width="2.5" height="5.5" rx="1" />
      <rect x="9.6" y="3" width="2.5" height="8" rx="1" />
      <rect x="13.9" y="1" width="2.5" height="10" rx="1" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 18 12" fill="none" focusable="false">
      <path d="M1.5 3.9a11.2 11.2 0 0 1 15 0" />
      <path d="M4.2 6.6a7.1 7.1 0 0 1 9.6 0" />
      <path d="M7.1 9.2a2.8 2.8 0 0 1 3.8 0" />
      <circle cx="9" cy="10.2" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 26 12" fill="none" focusable="false">
      <rect x="1" y="1" width="21" height="10" rx="3" />
      <path d="M24 4v4" />
      <rect x="3" y="3" width="16" height="6" rx="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" focusable="false">
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" focusable="false">
      <path d="M12 15V3" />
      <path d="m8 7 4-4 4 4" />
      <path d="M7 10H5.5A1.5 1.5 0 0 0 4 11.5v7A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H17" />
    </svg>
  );
}

function TabsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" focusable="false">
      <rect x="4" y="6" width="14" height="14" rx="3" />
      <path d="M8 3h10a3 3 0 0 1 3 3v10" />
    </svg>
  );
}
