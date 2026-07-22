import styles from "./Footer.module.scss";

const talkItems = Array.from({ length: 10 }, (_, index) => index);

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((group) => (
            <div className={styles.tickerGroup} key={group}>
              {talkItems.map((item) => (
                <span key={item}>FROM FLOW TO FUNCTION&nbsp;&nbsp;✳</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.space} />

      <div className={styles.info}>
        <div>
          <strong>Contact</strong>
          <a href="mailto:suyeonn113@naver.com">Email</a>
          <a
            href="https://github.com/suyeonn113"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
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
