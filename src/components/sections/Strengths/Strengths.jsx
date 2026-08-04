import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import { strengths } from "@/data/strengths";
import styles from "./Strengths.module.scss";

export default function Strengths() {
  return (
    <section
      className={styles.section}
      id="strengths"
      aria-labelledby="strengths-title"
      data-aos="fade-up"
    >
      <header className={styles.heading}>
        <h2 id="strengths-title">
          How I
          <br />
          work
        </h2>
        <p>
          브랜드의 방향과 사용자의 목적을 함께 이해하고,
          <br />
          반복 가능한 구조로 구현하며,
          <br />
          누구나 이용할 수 있는지 끝까지 확인합니다.
        </p>
      </header>

      <div className={styles.grid}>
        {strengths.map((strength) => (
          <article
            className={`${styles.item} ${strength.featured ? styles.featured : ""}`}
            key={strength.title}
          >
            <span className={styles.number} aria-hidden="true">
              {strength.number}
            </span>
            <div className={styles.titleRow}>
              <span
                className={`${styles.symbol} ${styles[strength.icon]}`}
                aria-hidden="true"
              />
              <h3>{strength.title}</h3>
            </div>
            <p className={styles.description}>{strength.description}</p>
            <div className={styles.itemFooter}>
              <ul className={styles.keywords} aria-label={`${strength.title} 키워드`}>
                {strength.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
              {strength.evidence ? (
                <p className={styles.evidence}>
                  <span>Accessibility in practice</span>
                  {strength.evidence.join(" · ")}
                </p>
              ) : null}
              {strength.href ? (
                <Link className={styles.relatedPreview} href={strength.href}>
                  {strength.previewLabel}
                  <LinkArrowIcon direction="right" className={styles.linkIcon} />
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
