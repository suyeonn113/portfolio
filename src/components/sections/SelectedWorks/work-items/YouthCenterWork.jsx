import { projectBySlug } from "@/data/projects";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug["seoul-youth-center"];

export default function YouthCenterWork() {
  return (
    <article className={styles.work}>
      <div className={`${styles.visual} ${styles.youthVisual}`} aria-hidden="true">
        <div className={styles.youthBanner}>
          <span>SEOUL MY SOUL</span>
          <strong>청소년의 행복한 꿈을 키우는 곳</strong>
        </div>
        <div className={styles.youthServices}>
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index}>{String(index + 1).padStart(2, "0")}</span>
          ))}
        </div>
        <div className={styles.youthInfo}>
          <span />
          <span />
          <span />
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
