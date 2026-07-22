import { projects } from "@/data/projects";
import styles from "./ProjectSlider.module.scss";

export default function ProjectSlider() {
  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <h2 className={styles.srOnly} id="projects-title">
        프로젝트 미리보기
      </h2>

      <div className={styles.track}>
        {projects.map((project) => (
          <article
            className={styles.project}
            key={project.slug}
            style={{
              "--project-color": project.keyColor,
              "--project-soft": project.softColor,
              "--project-ink": project.inkColor,
            }}
          >
            <div className={styles.visual}>
              <span>{project.order}</span>
              <strong>{project.title}</strong>
            </div>
            <div className={styles.caption}>
              <span>{project.order}</span>
              <div>
                <strong>{project.title}</strong>
                <p>{project.category}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls} aria-label="슬라이더 동작 안내">
        <p>AUTO PLAY&nbsp;&nbsp;·&nbsp;&nbsp;DRAG / SWIPE</p>
        <p>01 / 04</p>
        <div aria-hidden="true">
          <span>←</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
