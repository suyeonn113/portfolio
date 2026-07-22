import { projectBySlug } from "@/data/projects";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug["air-seoul"];

export default function AirSeoulWork() {
  return (
    <article className={styles.work}>
      <ProjectCopy project={project} />
      <div className={`${styles.visual} ${styles.airVisual}`} aria-hidden="true">
        <div className={styles.airNav}>
          <strong>AIR SEOUL</strong>
          <span>BOOKING&nbsp;&nbsp; SERVICE&nbsp;&nbsp; INFO</span>
        </div>
        <div className={styles.airDestination}>
          <span>DESTINATION 01</span>
          <strong>TOKYO</strong>
          <p>ICN → NRT</p>
        </div>
        <div className={styles.airPromos}>
          <span />
          <span />
        </div>
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
      <a href={item.url} target="_blank" rel="noreferrer">
        Visit live site ↗
      </a>
    </div>
  );
}
