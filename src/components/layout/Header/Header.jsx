import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.mark} href="#top" aria-label="페이지 맨 위로">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </a>

      <nav aria-label="주요 메뉴">
        <ul className={styles.navigation}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#strengths">Strengths</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
