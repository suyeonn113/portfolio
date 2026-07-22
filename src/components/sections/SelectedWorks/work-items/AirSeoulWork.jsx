import { projectBySlug } from "@/data/projects";
import Image from "next/image";
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
