import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title">
          I translate design intent
          <br />
          into accessible interactions.
        </h1>

        <p className={styles.description}>
          디자인 의도를 접근 가능한
          <br />
          인터랙션으로 구현합니다.
        </p>
      </div>

      <div className={styles.meta}>
        <div>
          <strong>Role</strong>
          <ul>
            <li>Web Publisher</li>
            <li>UI Implementation</li>
          </ul>
        </div>
        <div>
          <strong>Specialty</strong>
          <ul>
            <li>Accessibility</li>
            <li>Design Systems</li>
            <li>UI States</li>
          </ul>
        </div>
        <div className={styles.contactCell}>
          <Link href="/about">
            <span className={styles.contactLinkLabel}>
              ABOUT ME
              <LinkArrowIcon direction="right" className={styles.resumeIcon} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
