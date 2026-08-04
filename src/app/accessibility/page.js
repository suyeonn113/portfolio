import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import styles from "./page.module.scss";

export const metadata = {
  title: "Accessibility in Practice · Web Publisher",
  description:
    "세 프로젝트에 시맨틱 구조와 키보드 조작을 적용하고 Lighthouse와 브라우저 테스트로 검증한 웹퍼블리셔 조수연의 접근성 작업 방식입니다.",
};

const summary = [
  { value: "03", label: "Projects" },
  { value: "06", label: "Lighthouse audits" },
  { value: "D + M", label: "Desktop · Mobile" },
  { value: "PASS", label: "Keyboard verified" },
];

const audits = [
  {
    project: "Daisomall",
    type: "Commerce",
    desktop: 97,
    mobile: 97,
    note: "iframe title",
  },
  {
    project: "Air Seoul",
    type: "Booking service",
    desktop: 97,
    mobile: 96,
    note: "iframe title",
  },
  {
    project: "Seoul Youth Center",
    type: "Public service",
    desktop: 93,
    mobile: 93,
    note: "Contrast · iframe title",
  },
];

const workflow = [
  {
    number: "01",
    title: "Structure",
    body: "HTML 역할과 제목 구조, 레이블과 상태를 먼저 정의합니다.",
  },
  {
    number: "02",
    title: "Interaction",
    body: "탭 순서와 방향키 조작, 포커스 이동과 복귀를 구현합니다.",
  },
  {
    number: "03",
    title: "Audit",
    body: "데스크톱과 모바일 환경에서 Lighthouse 자동 검사를 진행합니다.",
  },
  {
    number: "04",
    title: "Verify",
    body: "키보드만 사용해 주요 화면과 이용 흐름을 실제 브라우저에서 확인합니다.",
  },
];

const sharedCriteria = [
  {
    label: "Skip links",
    icon: "shortcut",
    body: "반복되는 메뉴를 건너뛰고 메뉴와 본문으로 바로 이동하는 스킵 링크를 제공했습니다.",
  },
  {
    label: "Keyboard control",
    icon: "keyboard",
    body: "탭, 메뉴, 선택 UI를 키보드로 조작하고 논리적인 탭 순서를 유지했습니다.",
  },
  {
    label: "Visible focus",
    icon: "focus",
    body: "카드와 SNS 영역의 포커스 링이 잘리지 않도록 내부 여백과 overflow를 조정했습니다.",
  },
  {
    label: "Readable status",
    icon: "status",
    body: "접수 상태와 필터 결과를 색상뿐 아니라 텍스트와 의미 구조로도 전달했습니다.",
  },
];

function CriteriaIcon({ name }) {
  const paths = {
    shortcut: (
      <>
        <path d="M4 5h13" />
        <path d="M4 10h9" />
        <path d="M4 15h5" />
        <path d="m15 12 3 3-3 3" />
      </>
    ),
    keyboard: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M6 9h1M10 9h1M14 9h1M18 9h.01M6 13h1M10 13h5M18 13h.01M6 16h12" />
      </>
    ),
    focus: (
      <>
        <path d="M8 4H4v4M16 4h4v4M20 16v4h-4M4 16v4h4" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    status: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m8 12 2.3 2.3L16 8.7" />
      </>
    ),
  };

  return (
    <svg className={styles.criteriaIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const projects = [
  {
    name: "Daisomall",
    category: "Commerce",
    href: "/works/daisomall",
    src: "/images/projects/case-studies/daisomall/daisomall-home-desktop.png",
    alt: "상품 탐색 영역으로 구성한 다이소몰 리뉴얼 데스크톱 홈",
    width: 2880,
    height: 1800,
    score: "97 / 97",
    body: "버튼과 링크의 역할을 구분하고 탭 선택과 콘텐츠의 관계를 의미 구조로 전달했습니다.",
  },
  {
    name: "Air Seoul",
    category: "Booking service",
    href: "/works/air-seoul",
    src: "/images/projects/case-studies/airseoul/airseoul-final-home-desktop.png",
    alt: "예약 탭과 여행 서비스로 구성한 에어서울 최종 데스크톱 홈",
    width: 1975,
    height: 3154,
    score: "97 / 96",
    body: "예약 탭과 날짜 선택에 방향키 조작을 적용하고 선택 상태와 포커스 복귀를 연결했습니다.",
    tall: true,
  },
  {
    name: "Seoul Youth Center",
    category: "Public service",
    href: "/works/seoul-youth-center",
    src: "/images/projects/case-studies/seoul-youth-center/youth-home-desktop.png",
    alt: "시립서울청소년센터의 주요 정보와 프로그램을 구성한 데스크톱 홈",
    width: 2880,
    height: 4448,
    score: "93 / 93",
    body: "많은 정보와 신청 경로를 스킵 링크, 방향키 탐색, 읽을 수 있는 상태 정보로 연결했습니다.",
    tall: true,
  },
];

const keyboardChecks = [
  {
    component: "General navigation",
    keys: ["Tab", "Shift + Tab"],
    expected: "논리적인 순서로 이전·다음 초점 요소 이동",
  },
  {
    component: "Button · Link",
    keys: ["Enter", "Space"],
    expected: "버튼 실행과 링크 이동을 요소의 역할에 맞게 제공",
  },
  {
    component: "Global menu",
    keys: ["↑ / ↓", "Esc"],
    expected: "하위 메뉴 탐색, 닫기와 상위 메뉴로 초점 복귀",
  },
  {
    component: "Tablist",
    keys: ["← / →", "Tab"],
    expected: "이전·다음 탭 선택 후 연결된 패널로 이동",
  },
  {
    component: "Dialog",
    keys: ["Tab", "Shift + Tab", "Esc"],
    expected: "모달 내부에 초점을 유지하고 닫은 뒤 호출 버튼으로 복귀",
  },
  {
    component: "Combobox",
    keys: ["Alt + ↓", "↑ / ↓", "Enter"],
    expected: "목록 열기, 옵션 탐색과 선택 결과 반영",
  },
  {
    component: "Radio group",
    keys: ["← / →", "↑ / ↓"],
    expected: "그룹 내부 항목을 이동하고 선택 상태 변경",
  },
];

const findings = [
  {
    label: "Verified",
    title: "주요 흐름을 키보드로 완료",
    body: "세 프로젝트의 메뉴, 탭, 선택 UI와 주요 이용 경로를 같은 기준으로 확인했습니다.",
  },
  {
    label: "Remaining",
    title: "점수 밖의 과제도 기록",
    body: "iframe title과 서울유스센터의 일부 색상 대비 항목을 다음 개선 범위로 남겼습니다.",
  },
  {
    label: "Next",
    title: "검증 범위를 계속 확장",
    body: "남은 자동 검사 항목을 수정하고 화면낭독기 테스트로 수동 검증 범위를 넓힙니다.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="accessibility-title">
          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>HOW I WORK / ACCESSIBILITY</span>
              <h1 id="accessibility-title">
                Access
                <br />
                in practice.
              </h1>
            </div>
            <p className={styles.heroCopy}>
              시맨틱 구조와 키보드 조작을 화면에 반영하고, Lighthouse와 실제 브라우저
              테스트로 주요 이용 흐름을 검증합니다.
            </p>
          </div>

          <dl className={styles.summary} aria-label="접근성 검증 요약">
            {summary.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.audit} aria-labelledby="audit-title">
          <header className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>01 / EVIDENCE SNAPSHOT</span>
              <h2 id="audit-title">
                자동 검사 결과를
                <br />
                환경별로 확인했습니다.
              </h2>
            </div>
            <p>
              동일한 기준으로 세 프로젝트를 데스크톱과 모바일에서 검사했습니다. 점수는
              완성 선언이 아니라 수동 검증이 필요한 지점을 찾는 출발점으로 사용했습니다.
            </p>
          </header>

          <div className={styles.auditTable} role="table" aria-label="프로젝트별 Lighthouse 접근성 점수">
            <div className={styles.auditHeader} role="row">
              <span role="columnheader">Project</span>
              <span role="columnheader">Desktop</span>
              <span role="columnheader">Mobile</span>
              <span role="columnheader">Remaining</span>
            </div>
            {audits.map((audit) => (
              <div className={styles.auditRow} role="row" key={audit.project}>
                <div role="cell">
                  <strong>{audit.project}</strong>
                  <span>{audit.type}</span>
                </div>
                <strong className={styles.auditScore} role="cell">
                  {audit.desktop}
                </strong>
                <strong className={styles.auditScore} role="cell">
                  {audit.mobile}
                </strong>
                <span className={styles.auditNote} role="cell">
                  {audit.note}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.auditMeta}>
            Accessibility category · Lighthouse 13.3.0 · 2026.08.04
          </p>
        </section>

        <section className={styles.workflow} aria-labelledby="workflow-title">
          <header className={styles.workflowHeading}>
            <span className={styles.eyebrow}>02 / VALIDATION PROCESS</span>
            <h2 id="workflow-title">
              설계하고, 구현하고,
              <br />
              두 번 확인합니다.
            </h2>
          </header>
          <ol className={styles.workflowList}>
            {workflow.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.shared} aria-labelledby="shared-title">
          <header className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>03 / SHARED IMPLEMENTATION</span>
              <h2 id="shared-title">
                세 프로젝트에서 공통으로 적용한
                <br />
                접근성 기준입니다.
              </h2>
            </div>
            <p>
              서비스의 목적과 화면은 달라도, 사용자가 주요 흐름을 이해하고 조작하는 데
              필요한 기준은 같았습니다. 세 프로젝트에 아래 기준을 반복해서 적용했습니다.
            </p>
          </header>

          <ol className={styles.criteriaGrid}>
            {sharedCriteria.map((criterion, index) => (
                <li key={criterion.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <CriteriaIcon name={criterion.icon} />
                    <h3>{criterion.label}</h3>
                    <p>{criterion.body}</p>
                  </div>
                </li>
              ))}
          </ol>
        </section>

        <section className={styles.projects} aria-labelledby="projects-title">
          <header className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>04 / APPLIED ACROSS PROJECTS</span>
              <h2 id="projects-title">
                서비스가 달라도
                <br />
                같은 기준을 적용했습니다.
              </h2>
            </div>
            <p>
              공공 서비스, 항공 예약, 커머스처럼 목적이 다른 화면에서도 초점 이동과
              선택 상태, 의미 구조를 각 사용 흐름에 맞게 적용했습니다.
            </p>
          </header>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.name}>
                <div className={styles.projectImage} data-tall={project.tall ? "true" : undefined}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 640px) 100vw, 34vw"
                  />
                </div>
                <div className={styles.projectCopy}>
                  <div>
                    <span>{project.category}</span>
                    <strong>{project.score}</strong>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.body}</p>
                  <Link href={project.href}>
                    View case study
                    <LinkArrowIcon className={styles.linkIcon} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.keyboard} aria-labelledby="keyboard-title">
          <header className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>05 / MANUAL KEYBOARD TEST</span>
              <h2 id="keyboard-title">
                자동 검사가 놓치는 조작을
                <br />
                실제 브라우저에서 확인했습니다.
              </h2>
            </div>
            <p>
              세 프로젝트 모두 마우스 없이 주요 흐름을 이동하고 선택할 수 있는지 같은
              기준으로 검증했습니다.
            </p>
          </header>

          <div className={styles.keyboardTableWrap} tabIndex={0} aria-label="키보드 검증표, 가로로 스크롤 가능">
            <table className={styles.keyboardTable}>
              <caption className="srOnly">세 프로젝트 공통 키보드 접근성 검증 결과</caption>
              <thead>
                <tr>
                  <th scope="col">Component</th>
                  <th scope="col">Keys</th>
                  <th scope="col">Expected behavior</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
              <tbody>
                {keyboardChecks.map((check) => (
                  <tr key={check.component}>
                    <th scope="row">{check.component}</th>
                    <td>
                      <div className={styles.keyList}>
                        {check.keys.map((key) => (
                          <kbd key={key}>{key}</kbd>
                        ))}
                      </div>
                    </td>
                    <td>{check.expected}</td>
                    <td>
                      <span className={styles.pass}>PASS · 3/3</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.findings} aria-labelledby="findings-title">
          <header>
            <span className={styles.eyebrow}>06 / FINDINGS & NEXT</span>
            <h2 id="findings-title">
              점수로 끝내지 않고,
              <br />
              다음 확인을 남깁니다.
            </h2>
          </header>
          <div className={styles.findingGrid}>
            {findings.map((finding) => (
              <article key={finding.label}>
                <span>{finding.label}</span>
                <h3>{finding.title}</h3>
                <p>{finding.body}</p>
              </article>
            ))}
          </div>
          <Link className={styles.backLink} href="/#strengths">
            <LinkArrowIcon direction="left" className={styles.linkIcon} />
            Back to How I work
          </Link>
        </section>
      </main>
      <Footer compact />
    </>
  );
}
