import { projectBySlug } from "@/data/projects";
import Image from "next/image";
import ProjectCopy from "./ProjectCopy";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug["seoul-youth-center"];

export default function YouthCenterWork() {
  return (
    <article
      id={`project-${project.slug}`}
      className={styles.work}
      style={{
        "--project-color-light": project.keyColor,
        "--project-ink-light": project.inkColor,
        "--project-color-dark": project.darkKeyColor,
        "--project-ink-dark": project.darkInkColor,
      }}
    >
      <div
        className={`${styles.visual} ${styles.youthVisual}`}
        data-aos="fade-right"
      >
        <div className={styles.youthPoster}>
          <span className={styles.youthTape} aria-hidden="true" />
          <div className={styles.youthPosterLabel} aria-hidden="true">
            <span>03 / PROGRAM BOARD</span>
          </div>
          <div className={styles.youthScreen}>
            <Image
              className={styles.previewImage}
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 31vw, 41vw"
              unoptimized
            />
          </div>
        </div>
      </div>
      <ProjectCopy project={project} />
    </article>
  );
}
