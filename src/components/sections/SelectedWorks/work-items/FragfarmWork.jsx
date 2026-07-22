import { projectBySlug } from "@/data/projects";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug.fragfarm;

export default function FragfarmWork() {
  return (
    <article className={styles.work}>
      <ProjectCopy project={project} />
      <div className={`${styles.visual} ${styles.fragVisual}`} aria-hidden="true">
        <div className={styles.phone}>
          <div className={styles.phoneTop}>FRAGFARM</div>
          <div className={styles.fashionFigure} />
          <div className={styles.reviewCard}>
            <strong>Review Event</strong>
            <span>Photo review&nbsp;&nbsp; +5,000</span>
            <span>Text review&nbsp;&nbsp; +3,000</span>
          </div>
          <div className={styles.phoneMenu}>
            <span>NEW</span>
            <span>SALE</span>
            <span>REVIEW</span>
            <span>ABOUT</span>
          </div>
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
