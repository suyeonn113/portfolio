import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import styles from "./Hero.module.scss";

const projectNames = [
  "DAISOMALL",
  "AIR SEOUL",
  "SEOUL YOUTH CENTER",
  "FRAGFARM",
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title">
          I turn unspoken needs
          <br />
          into clear interfaces.
        </h1>

        <p className={styles.description}>
          질문과 관찰로 필요한 기준을 발견하고
          <br />
          사용자가 이해하기 쉬운 화면으로 구현합니다.
        </p>
      </div>

      <div className={styles.meta}>
        <div>
          <strong>Projects</strong>
          <ul>
            {projectNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Focus</strong>
          <ul>
            <li>User needs</li>
            <li>Structure</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className={styles.contactCell}>
          <Link href="/resume">
            VIEW RESUME
            <LinkArrowIcon direction="right" className={styles.resumeIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
