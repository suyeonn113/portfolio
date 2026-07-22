import styles from "./Footer.module.scss";

const talkItems = Array.from({ length: 7 }, (_, index) => index);

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.ticker} aria-hidden="true">
        {talkItems.map((item) => (
          <span key={item}>LET&apos;S TALK&nbsp;&nbsp;✳</span>
        ))}
      </div>

      <div className={styles.space} />

      <div className={styles.info}>
        <div className={styles.mark} aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@example.com">Email</a>
          <a href="#">GitHub</a>
        </div>
        <div>
          <strong>Pages</strong>
          <a href="#work">Work</a>
          <a href="#strengths">Strengths</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <strong>Seoul, Korea</strong>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
