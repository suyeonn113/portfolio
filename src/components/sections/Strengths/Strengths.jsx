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
          사용 목적을 먼저 이해하고,
          <br />
          반복 가능한 구조와 실제 동작으로 답합니다.
        </p>
      </header>

      <div className={styles.grid}>
        {strengths.map((strength) => (
          <article className={styles.item} key={strength.title}>
            <div className={styles.titleRow}>
              <span
                className={`${styles.symbol} ${styles[strength.icon]}`}
                aria-hidden="true"
              />
              <h3>{strength.title}</h3>
            </div>
            <p className={styles.description}>{strength.description}</p>
            <ul className={styles.keywords} aria-label={`${strength.title} 키워드`}>
              {strength.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
