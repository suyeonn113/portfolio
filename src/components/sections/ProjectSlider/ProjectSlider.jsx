"use client";

import { projects } from "@/data/projects";
import styles from "./ProjectSlider.module.scss";

export default function ProjectSlider() {
  const loopedProjects = [...projects, ...projects];

  const moveToProject = (slug) => {
    const target = document.getElementById(`project-${slug}`);

    if (!target) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    const title = target.querySelector("h3");
    window.requestAnimationFrame(() => title?.focus({ preventScroll: true }));
  };

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <h2 className={styles.srOnly} id="projects-title">
        프로젝트 바로가기
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
                "--project-color-light": project.keyColor,
                "--project-ink-light": project.inkColor,
                "--project-color-dark": project.darkKeyColor,
                "--project-ink-dark": project.darkInkColor,
              }}
            >
              <button
                className={styles.visual}
                type="button"
                tabIndex={isDuplicate ? -1 : undefined}
                aria-label={`${project.title} 프로젝트 요약으로 이동`}
                onClick={() => moveToProject(project.slug)}
              >
                <span className={styles.order}>{project.order}</span>
                <span className={styles.projectMeta}>
                  <strong>{project.title}</strong>
                  <span className={styles.action}>View project</span>
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
