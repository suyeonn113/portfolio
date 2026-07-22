import Image from "next/image";
import Link from "next/link";
import LinkArrowIcon from "@/components/ui/LinkArrowIcon";
import SpotlightHeading from "@/components/ui/SpotlightHeading";
import { projectBySlug } from "@/data/projects";
import styles from "./DaisomallCaseStudy.module.scss";

const project = projectBySlug.daisomall;

export const metadata = {
  title: "DAISOMALL Case Study · Suyeonn",
  description:
    "팀 프로젝트로 구현한 홈과 검색을 바탕으로 반응형, 정보 위계, 검색 UX와 접근성을 다시 정리한 React 커머스 UI 리디자인입니다.",
};

const userFlow = [
  {
    number: "01",
    title: "Browse",
    body: "프로모션, 배송 서비스, 카테고리와 랭킹을 훑습니다.",
    outcome: "관심 영역 선택",
  },
  {
    number: "02",
    title: "Search",
    body: "검색어를 입력하거나 추천 키워드로 탐색을 시작합니다.",
    outcome: "상품 목록 진입",
  },
  {
    number: "03",
    title: "Refine",
    body: "배송 옵션과 정렬 기준을 선택해 결과 범위를 좁힙니다.",
    outcome: "검색 결과 압축",
  },
  {
    number: "04",
    title: "Compare",
    body: "가격·평점·배송 가능 여부를 상품 카드에서 비교합니다.",
    outcome: "구매 후보 결정",
  },
];

function StructureIcon({ name }) {
  const paths = {
    product: (
      <>
        <rect x="4" y="6" width="9" height="14" />
        <rect x="11" y="4" width="9" height="14" />
        <path d="M7 10h3M7 14h3M14 8h3M14 12h3" />
      </>
    ),
    search: (
      <>
        <circle cx="9.5" cy="9.5" r="5.5" />
        <path d="m13.5 13.5 4 4M4 20h16M16 6h4M16 10h4" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" />
        <path d="M3 8h18M3 17h18M8 8v9" />
      </>
    ),
    navigation: (
      <>
        <path d="M5 4v16M5 7h5M5 12h5M5 17h5" />
        <rect x="13" y="5" width="8" height="5" />
        <rect x="13" y="14" width="8" height="5" />
      </>
    ),
  };

  return (
    <svg
      className={styles.componentIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const decisions = [
  {
    number: "01",
    title: "홈 섹션을 기능 단위로 나눴습니다.",
    body: [
      "배송, 카테고리, 기획전, 랭킹, 추천 상품을 목적별 섹션으로 분리했습니다.",
      "프로모션을 본 뒤 상품 탐색으로 이어지도록 노출 순서와 섹션 간격을 다시 맞췄습니다.",
    ],
  },
  {
    number: "02",
    title: "검색 조건과 현재 상태를 연결했습니다.",
    body: [
      "검색어, 배송 필터, 정렬 기준을 React state와 hook으로 관리했습니다.",
      "현재 검색 상태는 결과 요약 문장과 버튼의 선택 상태로 확인할 수 있게 했습니다.",
    ],
  },
  {
    number: "03",
    title: "화면 크기가 달라도 같은 탐색 기준을 유지했습니다.",
    body: [
      "SCSS 토큰과 breakpoint로 여백, radius, focus ring 기준을 통일했습니다.",
      "상품 목록은 모바일에서 스크롤·리스트형으로, 데스크톱에서는 더 넓은 그리드형으로 조정했습니다.",
    ],
  },
];

const components = [
  {
    title: "ProductCard / ProductCardList",
    body: "일반 상품과 랭킹 상품을 같은 컴포넌트 계열로 처리하고, 랭킹일 때 순위와 키보드 포커스 라벨을 추가했습니다.",
    icon: "product",
  },
  {
    title: "SearchPage / SearchResultsView",
    body: "검색어·필터·정렬 상태를 관리하고, 결과 요약과 선택 컨트롤·상품 목록에 전달했습니다.",
    icon: "search",
  },
  {
    title: "MainLayout",
    body: "스킵 메뉴와 Header·MainCategoryNav·BottomTabBar·Footer를 공통 레이아웃으로 구성했습니다.",
    icon: "layout",
  },
  {
    title: "CategoryDrawer / Tab lists",
    body: "대분류와 하위 카테고리, 랭킹과 기획전의 정보 구조에 맞춰 키보드 이동과 선택 상태를 연결했습니다.",
    icon: "navigation",
  },
];

export default function DaisomallCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/#top">
          SUYEONN
        </Link>
        <nav className={styles.headerLinks} aria-label="프로젝트 링크">
          <Link href="/#work">
            <LinkArrowIcon direction="left" className={styles.linkIcon} />
            All projects
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer">
            Live site
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
        </nav>
      </header>

      <section className={styles.intro} aria-labelledby="project-title">
        <div className={styles.introTopline}>
          <span>01 · Commerce discovery</span>
          <span className={styles.teamBadge}>Team project</span>
        </div>
        <h1 id="project-title">DAISOMALL</h1>
        <p className={styles.introLead}>
          홈에서 상품을 발견하고 검색 결과에서 조건을 좁혀 비교하기까지,
          다이소몰의 핵심 상품 탐색 흐름을 React로 구현하고 다시 다듬었습니다.
        </p>
      </section>

      <figure className={styles.heroFigure}>
        <div className={styles.heroImage}>
          <Image
            src="/images/projects/daisomall-showcase.png"
            alt="프로모션, 카테고리와 추천 상품으로 구성한 다이소몰 리디자인 홈"
            width={1428}
            height={1500}
            priority
            sizes="100vw"
          />
        </div>
        <figcaption>Redesigned home · responsive commerce UI</figcaption>
      </figure>

      <section className={styles.meta} aria-label="프로젝트 정보">
        <div>
          <span>Type</span>
          <strong>Team project</strong>
        </div>
        <div>
          <span>Role</span>
          <strong>UI 기획 · React 구조·상품 데이터 설계 · 홈/검색 구현</strong>
        </div>
        <div>
          <span>Focus</span>
          <strong>Home · Search · Accessibility</strong>
        </div>
        <div>
          <span>Stack</span>
          <strong>React · React Router · SCSS</strong>
        </div>
      </section>

      <section className={styles.brief} aria-labelledby="brief-title">
        <p className={styles.sectionLabel}>Project context</p>
        <div className={styles.briefCopy}>
          <SpotlightHeading id="brief-title">
            <span className={styles.headingLine}>팀 프로젝트의 홈·검색 구현을,</span>
            <span className={styles.headingLine}>
              완결된 탐색 경험으로 다시 정리했습니다.
            </span>
          </SpotlightHeading>
          <div>
            <p>
              팀 프로젝트에서 UI 기획과 React 구조·상품 데이터 설계, 홈과 검색
              구현을 맡았습니다. 이후 제출용으로 다시 정리하면서 화면 수를
              늘리기보다 기존 탐색 흐름의 완성도를 높이는 데 집중했습니다.
            </p>
            <p className={styles.scopeNote}>
              Personal refinement · 반응형 · 정보 위계 · 검색 UX · 키보드 접근성
            </p>
          </div>
        </div>
      </section>

      <section className={styles.comparison} aria-labelledby="comparison-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Visual context / Home</p>
          <SpotlightHeading id="comparison-title">
            <span className={styles.headingLine}>브랜드 인상은 유지하고,</span>
            <span className={styles.headingLine}>홈의 역할을 섹션별로</span>
            <span className={styles.headingLine}>나눴습니다.</span>
          </SpotlightHeading>
        </div>
        <div className={styles.comparisonGrid}>
          <figure>
            <div className={`${styles.screenFrame} ${styles.referenceFrame}`}>
              <Image
                src="/images/projects/daisomall-official-reference-2026-07.jpg"
                alt="2026년 7월 22일 캡처한 공식 다이소몰 운영 홈"
                width={1765}
                height={1187}
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <strong>
                <a
                  href="https://www.daisomall.co.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Current official site
                  <LinkArrowIcon className={styles.linkIcon} />
                </a>
              </strong>
              <span>
                Captured 2026.07.22 · 작업 당시 화면이 아닌 현재 운영 화면으로,
                브랜드와 정보 밀도를 보여주는 참고 자료입니다.
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className={styles.screenFrame}>
              <Image
                src="/images/projects/daisomall-home.png"
                alt="정보 위계와 탐색 흐름을 정리한 다이소몰 리디자인 홈"
                width={1430}
                height={894}
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <strong>Project home</strong>
              <span>
                배송·카테고리·기획전·랭킹·추천 상품을 목적별 섹션으로 분리했습니다.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.flow} aria-labelledby="flow-title">
        <div className={styles.flowHeading}>
          <p className={styles.sectionLabel}>Core user flow</p>
          <SpotlightHeading id="flow-title" tone="light">
            <span className={styles.headingLine}>홈에서 발견하고,</span>
            <span className={styles.headingLine}>검색에서 좁히고,</span>
            <span className={styles.headingLine}>상품 카드에서 비교합니다.</span>
          </SpotlightHeading>
        </div>
        <ol className={styles.flowList}>
          {userFlow.map((step, index) => (
            <li key={step.number}>
              <div
                className={styles.flowItem}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                data-aos-duration="600"
              >
                <span className={styles.flowNumber}>{step.number}</span>
                <strong className={styles.flowTitle}>{step.title}</strong>
                <p className={styles.flowBody}>{step.body}</p>
                <div className={styles.flowOutcome}>
                  <span>Outcome</span>
                  <div>
                    <p>{step.outcome}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.decisions} aria-labelledby="decisions-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Implementation decisions</p>
          <SpotlightHeading id="decisions-title">
            <span className={styles.headingLine}>정보 구조와 상태를 정리하고,</span>
            <span className={styles.headingLine}>반응형 기준을 통일했습니다.</span>
          </SpotlightHeading>
        </div>
        <ol className={styles.decisionList}>
          {decisions.map((decision) => (
            <li key={decision.number}>
              <span>{decision.number}</span>
              <h3>{decision.title}</h3>
              <div className={styles.decisionBody}>
                {decision.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.accessibility} aria-labelledby="accessibility-title">
        <div>
          <p className={styles.sectionLabel}>Accessibility</p>
          <SpotlightHeading id="accessibility-title" tone="light">
            <span className={styles.headingLine}>키보드 사용 흐름을 기준으로,</span>
            <span className={styles.headingLine}>
              홈과 검색을 끝까지 이용할 수 있게 했습니다.
            </span>
          </SpotlightHeading>
        </div>
        <ul>
          <li>스킵 메뉴로 반복되는 헤더·내비게이션 건너뛰기</li>
          <li>이동 없는 메뉴는 button, 실제 이동은 link로 역할 구분</li>
          <li>랭킹·기획전 탭은 방향키로 이동하고 Enter·Space로 선택</li>
          <li>aria-pressed·aria-selected·aria-controls로 선택 상태 전달</li>
        </ul>
      </section>

      <section className={styles.components} aria-labelledby="components-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Implementation structure</p>
          <SpotlightHeading id="components-title">
            <span className={styles.headingLine}>데이터와 상태를 분리해,</span>
            <span className={styles.headingLine}>
              반복해서 사용할 수 있는 구조로 만들었습니다.
            </span>
          </SpotlightHeading>
        </div>
        <div className={styles.componentGrid}>
          {components.map((component) => (
            <article key={component.title}>
              <div className={styles.componentTopline}>
                <h3>{component.title}</h3>
                <StructureIcon name={component.icon} />
              </div>
              <p>{component.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>DAISOMALL · Commerce discovery</p>
        <div>
          <Link href="/#work">
            <LinkArrowIcon direction="left" className={styles.linkIcon} />
            Back to projects
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit live site
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            View GitHub
            <LinkArrowIcon className={styles.linkIcon} />
          </a>
        </div>
      </footer>
    </main>
  );
}
