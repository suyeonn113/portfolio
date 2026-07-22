import Image from "next/image";
import styles from "../SelectedWorks.module.scss";

export default function ProjectPreview({ className, project, sizes }) {
  return (
    <div className={`${styles.previewFrame} ${className}`}>
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
