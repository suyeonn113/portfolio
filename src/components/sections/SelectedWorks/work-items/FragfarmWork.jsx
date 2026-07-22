import { projectBySlug } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import ProjectCopy from "./ProjectCopy";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug.fragfarm;

export default function FragfarmWork() {
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
        className={`${styles.visual} ${styles.fragVisual}`}
        data-aos="fade-left"
      >
        <span className={styles.fragCaption} aria-hidden="true">
          FRAGFARM / EDITORIAL COMMERCE
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
