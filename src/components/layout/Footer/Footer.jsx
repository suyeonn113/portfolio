import Link from "next/link";
import styles from "./Footer.module.scss";

const talkItems = Array.from({ length: 10 }, (_, index) => index);

export default function Footer({ compact = false }) {
  return (
    <footer className={styles.footer} id="contact">
      {!compact ? (
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[0, 1].map((group) => (
              <div className={styles.tickerGroup} key={group}>
                {talkItems.map((item) => (
                  <span key={item}>BUILT WITH INTENT&nbsp;&nbsp;·&nbsp;&nbsp;MADE ACCESSIBLE&nbsp;&nbsp;✳︎</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {!compact ? <div className={styles.space} /> : null}

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
            <span className="srOnly"> (새 창에서 열림)</span>
          </a>
        </div>
        <div>
          <strong>Pages</strong>
          <Link href="/about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#strengths">Strengths</Link>
        </div>
        <div>
          <strong>Seoul, Korea</strong>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
