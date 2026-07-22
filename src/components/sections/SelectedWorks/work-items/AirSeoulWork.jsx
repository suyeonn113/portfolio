import { projectBySlug } from "@/data/projects";
import Image from "next/image";
import ProjectCopy from "./ProjectCopy";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug["air-seoul"];

export default function AirSeoulWork() {
  return (
    <article
      className={styles.work}
      style={{
        "--project-color": project.keyColor,
        "--project-ink": project.inkColor,
      }}
    >
      <ProjectCopy project={project} />
      <div
        className={`${styles.visual} ${styles.airVisual}`}
        data-aos="fade-left"
      >
        <div className={styles.airNav} aria-hidden="true">
          <strong>BOARDING / 02</strong>
        </div>
        <div className={styles.airHeroScreen}>
          <Image
            className={styles.previewImage}
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            sizes="(max-width: 640px) 94vw, (max-width: 960px) 46vw, 42vw"
            unoptimized
          />
        </div>
      </div>
    </article>
  );
}
