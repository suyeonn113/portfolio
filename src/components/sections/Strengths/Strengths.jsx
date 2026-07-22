import { strengths } from "@/data/strengths";
import styles from "./Strengths.module.scss";

export default function Strengths() {
  return (
    <section className={styles.section} id="strengths" aria-labelledby="strengths-title">
      <header className={styles.heading}>
        <h2 id="strengths-title">
          Things I do
          <br />
          well
        </h2>
        <p>
          화면을 예쁘게 만드는 데서 끝내지 않고,
          <br />
          사용 흐름과 구현 구조를 함께 정리합니다.
        </p>
      </header>

      <div className={styles.grid}>
        {strengths.map((strength) => (
          <article className={styles.item} key={strength.order}>
            <div className={styles.titleRow}>
              <span className={styles.symbol} aria-hidden="true">
                {strength.symbol}
              </span>
              <span>{strength.order}</span>
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
