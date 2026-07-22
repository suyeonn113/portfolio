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
          I turn complex flows
          <br />
          into usable interfaces.
        </h1>

        <p className={styles.description}>
          정보를 읽는 순서를 설계하고
          <br />
          실제 사용할 수 있는 화면으로 연결합니다.
        </p>
      </div>

      <div className={styles.meta}>
        <div>
          <strong>Selected Projects</strong>
          <ul>
            {projectNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Focus</strong>
          <ul>
            <li>Flow</li>
            <li>System</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <a href="#projects">View projects ↗</a>
      </div>
    </section>
  );
}
