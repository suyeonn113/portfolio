import { projectBySlug } from "@/data/projects";
import Image from "next/image";
import styles from "../SelectedWorks.module.scss";

const project = projectBySlug["seoul-youth-center"];

export default function YouthCenterWork() {
  return (
    <article
      className={styles.work}
      style={{
        "--project-color": project.keyColor,
        "--project-ink": project.inkColor,
      }}
    >
      <div
        className={`${styles.visual} ${styles.youthVisual}`}
        data-aos="fade-right"
      >
        <div className={styles.youthPoster}>
          <span className={styles.youthTape} aria-hidden="true" />
          <div className={styles.youthPosterLabel} aria-hidden="true">
            <strong>SEOUL YOUTH CENTER</strong>
            <span>PROGRAM BOARD / 03</span>
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
