import { projectBySlug } from "@/data/projects";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug.daisomall;

export default function DaisomallWork() {
  return (
    <article className={styles.work}>
      <div className={`${styles.visual} ${styles.daisoVisual}`} aria-hidden="true">
        <div className={styles.daisoLead}>
          <span>DAILY DISCOVERY</span>
          <strong>오늘의 추천</strong>
        </div>
        <div className={styles.daisoTiles}>
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className={styles.daisoProducts}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
      <ProjectCopy project={project} />
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
