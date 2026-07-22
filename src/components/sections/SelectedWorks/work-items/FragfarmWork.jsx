import { projectBySlug } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
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

function ProjectCopy({ project: item }) {
  return (
    <div className={styles.copy}>
      <div className={styles.workTitle}>
        <span>{item.order}</span>
        <div>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
        </div>
      </div>
      <p className={styles.summary}>{item.summary}</p>
      <p className={styles.tech}>{item.tech.join(" · ")}</p>
      <div className={styles.projectLinks}>
        <a href={item.url} target="_blank" rel="noreferrer">
          Visit live site ↗
        </a>
        <a href={item.githubUrl} target="_blank" rel="noreferrer">
          View GitHub ↗
        </a>
      </div>
    </div>
  );
}
