import { projectBySlug } from "@/data/projects";
import Image from "next/image";
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

function ProjectCopy({ project: item }) {
  return (
    <div className={styles.copy}>
      <div className={styles.workTitle}>
        <span>{item.order}</span>
        <div>
          <div className={styles.projectTitleRow}>
            <h3>{item.title}</h3>
            <span className={styles.projectBadge}>{item.projectType}</span>
          </div>
          <p>{item.category}</p>
          <p className={styles.projectRole}>{item.role}</p>
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
