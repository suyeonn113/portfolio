import Image from "next/image";
import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import SpotlightHeading from "@/components/ui/SpotlightHeading";
import { projectBySlug } from "@/data/projects";
import styles from "./CaseStudyPage.module.scss";

function HeadingLines({ lines }) {
  return lines.map((line) => (
    <span className={styles.headingLine} key={line}>
      {line}
    </span>
  ));
}

function StructureIcon({ name }) {
  const paths = {
    product: (
      <>
        <rect x="4" y="6" width="9" height="14" />
        <rect x="11" y="4" width="9" height="14" />
        <path d="M7 10h3M7 14h3M14 8h3M14 12h3" />
      </>
    ),
    search: (
      <>
        <circle cx="9.5" cy="9.5" r="5.5" />
        <path d="m13.5 13.5 4 4M4 20h16M16 6h4M16 10h4" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" />
        <path d="M3 8h18M3 17h18M8 8v9" />
      </>
    ),
    navigation: (
      <>
        <path d="M5 4v16M5 7h5M5 12h5M5 17h5" />
        <rect x="13" y="5" width="8" height="5" />
        <rect x="13" y="14" width="8" height="5" />
      </>
    ),
    route: (
      <>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h1" />
      </>
    ),
    options: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="8" cy="7" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="10" cy="17" r="2" />
      </>
    ),
    cart: (
      <>
        <path d="M3 5h2l2 10h10l2-7H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="16" cy="19" r="1.5" />
      </>
    ),
    form: (
      <>
        <rect x="4" y="3" width="16" height="18" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    system: (
      <>
        <rect x="3" y="4" width="7" height="7" />
        <rect x="14" y="4" width="7" height="7" />
        <rect x="8.5" y="14" width="7" height="7" />
        <path d="M6.5 11v2h5.5M17.5 11v2H12M12 13v1" />
      </>
    ),
  };

  return (
    <svg
      className={styles.componentIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {paths[name] ?? paths.system}
    </svg>
  );
}

export default function CaseStudyPage({ study }) {
  const project = projectBySlug[study.projectSlug];
  const pageStyle = {
    "--case-accent": study.theme.accent,
    "--case-accent-deep": study.theme.deep,
    "--case-accent-soft": study.theme.soft,
    "--case-focus": study.theme.focus,
    "--case-hero-width": study.hero.maxWidth ?? "1428px",
    "--case-title-vw": study.titleSize?.vw ?? "13.2vw",
    "--case-title-max": study.titleSize?.max ?? "13rem",
    "--spotlight-light": study.theme.spotlightLight,
  };

  return (
    <main className={styles.page} id="top" style={pageStyle}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/#top">
          SUYEONN
        </Link>
        <nav className={styles.headerLinks} aria-label="프로젝트 링크">
          <Link href="/#work">
            <LinkArrowIcon direction="left" className={styles.linkIcon} />
            All projects
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer">
            Live site
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
        </nav>
      </header>

      <section className={styles.intro} aria-labelledby="project-title">
        <div className={styles.introTopline}>
          <span>{study.eyebrow}</span>
          {study.badge ? (
            <span className={styles.teamBadge}>{study.badge}</span>
          ) : null}
        </div>
        <h1 id="project-title">{project.title}</h1>
        <p className={styles.introLead}>{study.lead}</p>
      </section>

      <figure className={styles.heroFigure}>
        <div className={styles.heroImage} data-layout={study.hero.layout}>
          <Image
            src={study.hero.src}
            alt={study.hero.alt}
            width={study.hero.width}
            height={study.hero.height}
            priority
            sizes="100vw"
          />
        </div>
        <figcaption>{study.hero.caption}</figcaption>
      </figure>

      <section className={styles.meta} aria-label="프로젝트 정보">
        {study.meta.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>

      <section className={styles.brief} aria-labelledby="brief-title">
        <p className={styles.sectionLabel}>{study.context.label}</p>
        <div className={styles.briefCopy}>
          <SpotlightHeading id="brief-title">
            <HeadingLines lines={study.context.title} />
          </SpotlightHeading>
          <div>
            <p>{study.context.body}</p>
            <p className={styles.scopeNote}>{study.context.note}</p>
          </div>
        </div>
      </section>

      <section className={styles.comparison} aria-labelledby="comparison-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>{study.visuals.label}</p>
          <SpotlightHeading id="comparison-title">
            <HeadingLines lines={study.visuals.title} />
          </SpotlightHeading>
        </div>
        <div className={styles.comparisonGrid} data-count={study.visuals.items.length}>
          {study.visuals.items.map((visual) => (
            <figure key={visual.title}>
              <div
                className={`${styles.screenFrame} ${
                  visual.reference ? styles.referenceFrame : ""
                }`}
              >
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={visual.width}
                  height={visual.height}
                  sizes={
                    study.visuals.items.length === 3
                      ? "(max-width: 640px) 100vw, 34vw"
                      : "(max-width: 960px) 100vw, 50vw"
                  }
                />
              </div>
              <figcaption>
                <strong>
                  {visual.url ? (
                    <a href={visual.url} target="_blank" rel="noreferrer">
                      {visual.title}
                      <LinkArrowIcon className={styles.linkIcon} />
                    </a>
                  ) : (
                    visual.title
                  )}
                </strong>
                <span>{visual.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.flow} aria-labelledby="flow-title">
        <div className={styles.flowHeading}>
          <p className={styles.sectionLabel}>{study.flow.label}</p>
          <SpotlightHeading id="flow-title" tone="light">
            <HeadingLines lines={study.flow.title} />
          </SpotlightHeading>
        </div>
        <ol className={styles.flowList}>
          {study.flow.items.map((step, index) => (
            <li key={step.number}>
              <div
                className={styles.flowItem}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                data-aos-duration="600"
              >
                <span className={styles.flowNumber}>{step.number}</span>
                <strong className={styles.flowTitle}>{step.title}</strong>
                <p className={styles.flowBody}>{step.body}</p>
                <div className={styles.flowOutcome}>
                  <span>Outcome</span>
                  <div>
                    <p>{step.outcome}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.decisions} aria-labelledby="decisions-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>{study.decisions.label}</p>
          <SpotlightHeading id="decisions-title">
            <HeadingLines lines={study.decisions.title} />
          </SpotlightHeading>
        </div>
        <ol className={styles.decisionList}>
          {study.decisions.items.map((decision) => (
            <li key={decision.number}>
              <span>{decision.number}</span>
              <h3>{decision.title}</h3>
              <div className={styles.decisionBody}>
                {decision.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.accessibility} aria-labelledby="accessibility-title">
        <div>
          <p className={styles.sectionLabel}>{study.accessibility.label}</p>
          <SpotlightHeading id="accessibility-title" tone="light">
            <HeadingLines lines={study.accessibility.title} />
          </SpotlightHeading>
        </div>
        <ul>
          {study.accessibility.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.components} aria-labelledby="components-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>{study.components.label}</p>
          <SpotlightHeading id="components-title">
            <HeadingLines lines={study.components.title} />
          </SpotlightHeading>
        </div>
        <div className={styles.componentGrid}>
          {study.components.items.map((component) => (
            <article key={component.title}>
              <div className={styles.componentTopline}>
                <h3>{component.title}</h3>
                <StructureIcon name={component.icon} />
              </div>
              <p>{component.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>{study.footerLabel}</p>
        <div>
          <Link href="/#work">
            <LinkArrowIcon direction="left" className={styles.linkIcon} />
            Back to projects
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit live site
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            View GitHub
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
        </div>
      </footer>
    </main>
  );
}
