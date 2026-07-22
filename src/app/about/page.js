import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import styles from "./page.module.scss";

export const metadata = {
  title: "About Me · Web Publisher",
  description:
    "사용 목적과 운영자의 의도를 이해하고, 명확한 구조와 실제 동작으로 구현하는 웹퍼블리셔 조수연의 소개입니다.",
};

const workingNotes = [
  {
    number: "01",
    title: "화면을 만들기 전에,\n필요한 이유부터 묻습니다.",
    paragraphs: [
      "처음 전달받은 요청만으로 답을 정하지 않습니다. 누가 이 화면을 사용하고, 어떤 상황에서 어려움을 느끼며, 운영자는 무엇을 해결하고 싶은지 질문합니다. 매장에서 고객의 시선과 반응을 살피며 말로 표현되지 않은 필요까지 파악했던 경험은 지금도 화면의 기준을 찾는 출발점이 됩니다.",
      "요청의 배경이 보이면 기능의 우선순위와 정보의 순서도 분명해집니다. 그래서 디자인을 그대로 옮기는 데 머무르지 않고, 사용 목적이 자연스럽게 읽히는 구조로 정리한 뒤 구현을 시작합니다.",
    ],
  },
  {
    number: "02",
    title: "한 번 보이는 화면보다,\n계속 쓰일 구조를 생각합니다.",
    paragraphs: [
      "좋은 화면은 특정 해상도에서만 완성되는 결과물이 아니라, 내용이 바뀌고 기능이 늘어나도 같은 기준으로 확장될 수 있어야 한다고 생각합니다. 반복되는 UI는 역할에 맞게 나누고, 시맨틱 마크업과 일관된 스타일 규칙을 사용해 다음 작업에서도 이해하기 쉬운 구조를 만듭니다.",
      "반응형 레이아웃과 키보드 이동, 포커스 상태, 대체 텍스트 같은 접근성 항목도 마지막 점검이 아니라 설계의 일부로 다룹니다. 작은 기준을 초기에 함께 세우는 것이 수정 비용을 줄이고, 팀이 더 안정적으로 화면을 운영하는 방법이라고 배웠습니다.",
    ],
  },
  {
    number: "03",
    title: "의도를 실제 동작으로 연결하고,\n끝까지 확인합니다.",
    paragraphs: [
      "구현의 완성은 코드가 작성된 순간이 아니라 사용자가 흐름을 막힘없이 통과했을 때라고 생각합니다. 링크와 버튼의 상태, 입력과 오류 상황, 모바일에서의 터치 영역처럼 실제 이용 과정에서 만나는 장면을 확인하며 화면의 의도와 동작이 어긋나지 않는지 점검합니다.",
      "협업할 때는 결정된 기준과 변경 이유를 공유하고, 서로 다른 요구가 생기면 목적을 중심으로 우선순위를 다시 맞춥니다. 운영자에게는 관리하기 쉬운 화면을, 사용자에게는 이해하기 쉬운 경험을 남기는 것이 제가 만들고 싶은 결과입니다.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <section className={styles.hero} id="top" aria-labelledby="about-title">
          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>ABOUT / PROFILE</span>
              <h1 id="about-title">
                About
                <br />
                Me.
              </h1>
            </div>
            <p className={styles.heroCopy}>
              사람과 브랜드의 의도를 이해하고,
              <br />
              오래 쓰일 수 있는 화면으로 연결합니다.
            </p>
          </div>

          <dl className={styles.profileBar}>
            <div>
              <dt>Role</dt>
              <dd>Web Publisher</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Structure · Accessibility</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Seoul, Korea</dd>
            </div>
          </dl>
        </section>

        <section className={styles.introduction} aria-labelledby="intro-title">
          <header className={styles.introHeading} data-aos="fade-up">
            <span className={styles.eyebrow}>INTRODUCTION</span>
            <h2 id="intro-title">
              브랜드의 의도를
              <br />
              화면과 사용 흐름으로
              <br />
              구현하고 싶습니다.
            </h2>
          </header>

          <div className={styles.introBody} data-aos="fade-up">
            <p>
              웹퍼블리셔를 선택한 계기는 지인들과 소규모 패션 브랜드 론칭을
              준비하며 홈페이지 제작을 맡았던 경험이었습니다. 제품을 소개하는
              화면이 단순한 정보의 나열이 아니라, 브랜드의 분위기와 정보의 순서,
              사용자의 구매 경험을 연결하는 중요한 접점이라는 사실을 배웠습니다.
            </p>
            <p>
              그 경험 이후 운영자의 의도를 화면의 구조로 정리하고, 사용자가 실제로
              이용할 수 있는 형태로 구현하는 일을 목표로 삼았습니다. 950시간의
              웹퍼블리셔·프론트엔드 실무 훈련과정에서는
              React와 PHP·MySQL 기반 프로젝트를 진행하며 기획, 마크업, 스타일링,
              상호작용, 접근성 점검과 배포까지 하나의 흐름으로 경험했습니다.
            </p>
            <p>
              저는 처음 전달된 요청만으로 이해를 끝내지 않습니다. 질문과 관찰을 통해
              요청 안에 숨어 있는 기준을 찾고, 팀이 함께 이해할 수 있는 구조로 바꿉니다.
              운영하기 쉬우면서도 사용자가 망설이지 않는 화면을 만드는 웹퍼블리셔로
              성장하고 있습니다.
            </p>
          </div>
        </section>

        <section className={styles.notes} aria-labelledby="notes-title">
          <header className={styles.notesHeading} data-aos="fade-up">
            <span className={styles.eyebrow}>WORKING NOTES / 03</span>
            <h2 id="notes-title">From intent to interface.</h2>
            <p>
              홈에서 보여준 강점을,
              <br />
              실제로 일할 때의 생각과 과정으로 풀었습니다.
            </p>
          </header>

          <div className={styles.noteList}>
            {workingNotes.map((note) => (
              <article className={styles.note} key={note.number} data-aos="fade-up">
                <span className={styles.noteNumber}>{note.number}</span>
                <h3>
                  {note.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <div className={styles.noteBody}>
                  {note.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.resume} aria-labelledby="resume-title">
          <span className={styles.resumeNumber}>RESUME / 2026</span>
          <div className={styles.resumeCopy}>
            <h2 id="resume-title">
              A closer look at
              <br />
              my experience.
            </h2>
            <p>
              경력과 교육, 자격 및 프로젝트 경험을
              <br />
              A4 이력서에서 자세히 확인할 수 있습니다.
            </p>
          </div>
          <a
            className={styles.downloadButton}
            href="/documents/suyeon-resume-2026.pdf"
            download="조수연_웹퍼블리셔_이력서.pdf"
          >
            <span>Download resume</span>
            <span className="srOnly"> (PDF 파일 다운로드)</span>
            <LinkArrowIcon className={styles.downloadIcon} />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
