import { projectBySlug } from "@/data/projects";
import Image from "next/image";
import ProjectCopy from "./ProjectCopy";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug.daisomall;

export default function DaisomallWork() {
  return (
    <article
      className={styles.work}
      style={{
        "--project-color": project.keyColor,
        "--project-ink": project.inkColor,
      }}
    >
      <div
        className={`${styles.visual} ${styles.daisoVisual}`}
        data-aos="fade-right"
      >
        <div className={styles.daisoCatalog}>
          <div className={styles.daisoCatalogTop} aria-hidden="true">
            <strong>DAISOMALL</strong>
            <span>01 / STORE</span>
          </div>
          <div className={styles.daisoCatalogScreen}>
            <Image
              className={styles.previewImage}
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              fill
              sizes="(max-width: 768px) 90vw, 42vw"
              unoptimized
            />
          </div>
        </div>
      </div>
      <ProjectCopy project={project} />
    </article>
  );
}
