import { projectBySlug } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import ProjectCopy from "./ProjectCopy";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug.fragfarm;

export default function FragfarmWork() {
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
      <ProjectCopy project={project} />
      <div
        className={`${styles.visual} ${styles.fragVisual}`}
        data-aos="fade-left"
      >
        <span className={styles.fragCaption} aria-hidden="true">
          04 / EDITORIAL COMMERCE
        </span>
        <ProjectPreview
          className={styles.fragPhone}
          project={project}
          sizes="(max-width: 640px) 44vw, (max-width: 960px) 26vw, 24vw"
        />
      </div>
    </article>
  );
}
