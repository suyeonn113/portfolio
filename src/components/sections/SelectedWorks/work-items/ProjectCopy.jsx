import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import styles from "../SelectedWorks.module.scss";

export default function ProjectCopy({ project }) {
  return (
    <div className={styles.copy}>
      <div className={styles.workTitle}>
        <span>{project.order}</span>
        <div>
          <div className={styles.projectTitleRow}>
            <h3>{project.title}</h3>
            {project.projectType ? (
              <span className={styles.projectBadge}>{project.projectType}</span>
            ) : null}
          </div>
          <p>{project.category}</p>
          {project.role ? (
            <p className={styles.projectRole}>{project.role}</p>
          ) : null}
        </div>
      </div>
      <p className={styles.summary}>{project.summary}</p>
      <p className={styles.tech}>{project.tech.join(" · ")}</p>
      <div className={styles.projectLinks}>
        <Link
          href={`/works/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          View case study
          <LinkArrowIcon direction="right" className={styles.linkIcon} />
        </Link>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.title} live site (새 창에서 열림)`}
        >
          Visit live site
          <span className="srOnly"> (새 창에서 열림)</span>
          <LinkArrowIcon className={styles.linkIcon} />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} GitHub (새 창에서 열림)`}
        >
          View GitHub
          <span className="srOnly"> (새 창에서 열림)</span>
          <LinkArrowIcon className={styles.linkIcon} />
        </a>
      </div>
    </div>
  );
}
