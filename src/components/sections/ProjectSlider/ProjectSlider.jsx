import { projects } from "@/data/projects";
import styles from "./ProjectSlider.module.scss";

export default function ProjectSlider() {
  const loopedProjects = [...projects, ...projects];

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <h2 className={styles.srOnly} id="projects-title">
        프로젝트 미리보기
      </h2>

      <div className={styles.track}>
        {loopedProjects.map((project, index) => {
          const isDuplicate = index >= projects.length;

          return (
            <article
              className={styles.project}
              key={`${project.slug}-${index}`}
              aria-hidden={isDuplicate || undefined}
              style={{
                "--project-color": project.keyColor,
                "--project-ink": project.inkColor,
              }}
            >
              <div className={styles.visual}>
                <span>{project.order}</span>
                <strong>{project.title}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
