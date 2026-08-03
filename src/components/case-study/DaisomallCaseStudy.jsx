import Image from "next/image";
import SpotlightHeading from "@/components/ui/SpotlightHeading";
import DaisomallReuseSwitcher from "./DaisomallReuseSwitcher";
import DaisomallResponsiveGallery from "./DaisomallResponsiveGallery";
import HorizontalTableScroller from "./HorizontalTableScroller";
import designTokens from "../../../public/images/projects/case-studies/daisomall/daisomall-design-tokens.json";
import styles from "./DaisomallCaseStudy.module.scss";

const imageRoot = "/images/projects/case-studies/daisomall";

function HeadingLines({ lines }) {
  return lines.map((line) => (
    <span className={styles.headingLine} key={line}>
      {line}
    </span>
  ));
}

function SectionHeading({ id, label, lines, tone }) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.sectionLabel}>{label}</p>
      <SpotlightHeading id={id} tone={tone}>
        <HeadingLines lines={lines} />
      </SpotlightHeading>
    </div>
  );
}

function ArchitectureNode({ layer, file, role, accent = false }) {
  return (
    <article className={`${styles.treeNode} ${accent ? styles.treeNodeAccent : ""}`}>
      <span>{layer}</span>
      <code>{file}</code>
      <p>{role}</p>
    </article>
  );
}

export function DaisomallHero() {
  return (
    <div className={styles.heroStage}>
      <div className={styles.heroDesktop}>
        <Image
          src={`${imageRoot}/daisomall-home-desktop.png`}
          alt="다이소몰 리뉴얼 데스크톱 홈"
          width={2880}
          height={1800}
          priority
          sizes="(max-width: 640px) 86vw, 76vw"
        />
      </div>
      <div className={styles.heroMobile}>
        <Image
          src={`${imageRoot}/daisomall-home-mobile.png`}
          alt="같은 콘텐츠 구조를 적용한 다이소몰 리뉴얼 모바일 홈"
          width={780}
          height={1688}
          priority
          sizes="(max-width: 640px) 34vw, 20vw"
        />
      </div>
    </div>
  );
}

const tokenValue = (token) => token.$value?.hex ?? token.$value;

const tokenRows = [
  { group: "Breakpoint", name: "Mobile", value: `${tokenValue(designTokens.Breakpoint.Mobile)}px`, code: "$breakpoint-mobile", usage: "모바일 전환" },
  { group: "Breakpoint", name: "Tablet", value: `${tokenValue(designTokens.Breakpoint.Tablet)}px`, code: "$breakpoint-tablet", usage: "태블릿 전환" },
  { group: "Breakpoint", name: "Desktop", value: `${tokenValue(designTokens.Breakpoint.Desktop)}px`, code: "$breakpoint-desktop", usage: "데스크톱 그리드" },
  { group: "Layout", name: "Content Max Width", value: `${tokenValue(designTokens.Layout["Content Max Width"])}px`, code: "--content-max-width", usage: "콘텐츠 최대 너비" },
  { group: "Spacing", name: "Spacing / 4", value: `${tokenValue(designTokens.Spacing["4"])}px`, code: "--space-4", usage: "기본 내부 여백" },
  { group: "Spacing", name: "Spacing / 6", value: `${tokenValue(designTokens.Spacing["6"])}px`, code: "--space-6", usage: "카드·섹션 간격" },
  { group: "Color", name: "Text / Primary", value: tokenValue(designTokens.Color.Text.Primary), code: "--color-text-primary", usage: "본문·제목", swatch: tokenValue(designTokens.Color.Text.Primary) },
  { group: "Color", name: "Bg / Page", value: tokenValue(designTokens.Color.Bg.Page), code: "--color-bg-page", usage: "페이지 배경", swatch: tokenValue(designTokens.Color.Bg.Page) },
  { group: "Color", name: "Bg / Chip", value: tokenValue(designTokens.Color.Bg.Chip), code: "--color-bg-chip", usage: "필터·카테고리 칩", swatch: tokenValue(designTokens.Color.Bg.Chip) },
  { group: "Radius", name: "Radius / LG", value: `${tokenValue(designTokens.Radius.LG)}px`, code: "--radius-lg", usage: "카드·컨트롤" },
  { group: "Radius", name: "Radius / Pill", value: `${tokenValue(designTokens.Radius.Pill)}px`, code: "--radius-pill", usage: "필터 버튼" },
];

const reuseViews = [
  {
    label: "RECOMMEND",
    title: "홈 추천상품",
    src: "daisomall-reuse-recommend.png",
    alt: "추천상품 영역에서 노출되는 욕석 석회 강력 제거제 상품",
  },
  {
    label: "RANKING",
    title: "순위와 함께 탐색",
    src: "daisomall-reuse-ranking.png",
    alt: "랭킹 영역에서 1위로 노출되는 동일 상품",
  },
  {
    label: "SEARCH",
    title: "조건에 따른 결과",
    src: "daisomall-reuse-search.png",
    alt: "청소 검색 결과에 노출되는 동일 상품",
  },
];

const variants = [
  {
    label: "layout=vertical · context=default",
    src: "daisomall-card-vertical-default.png",
    width: 768,
    height: 1440,
    className: styles.verticalVariant,
  },
  {
    label: "layout=horizontal · context=search",
    src: "daisomall-card-horizontal-search.png",
    width: 1396,
    height: 596,
  },
  {
    label: "layout=horizontal · context=ranked",
    src: "daisomall-card-horizontal-ranked.png",
    width: 1640,
    height: 588,
  },
];

export default function DaisomallCaseStudy() {
  return (
    <>
      <section className={styles.structure} aria-labelledby="structure-title">
        <SectionHeading
          id="structure-title"
          label="02 · Structure for reuse"
          lines={["데이터와 UI의 책임을 나누고,", "화면은 같은 구조에서 확장했습니다."]}
        />
        <p className={styles.sectionIntro}>
          상품 데이터 처리와 화면 표현을 분리하고, 공통 상품 카드가 추천·랭킹·검색의
          문맥에 맞춰 조합되도록 React 구조를 설계했습니다.
        </p>

        <div className={styles.architectureTree} data-aos="fade-up">
          <div className={styles.architectureFlow}>
            <div className={styles.treeStage}>
              <ArchitectureNode layer="Data" file="products.js" role="상품 원본 데이터" />
            </div>
            <span className={styles.flowConnector} aria-hidden="true" />
            <div className={styles.treeStage}>
              <ArchitectureNode layer="Service" file="productService.js" role="상품 조회·가공" />
            </div>
            <span className={styles.flowConnector} aria-hidden="true" />
            <div className={`${styles.treeStage} ${styles.treeStageGroup} ${styles.treeStageHooks}`}>
              <ArchitectureNode layer="Hooks" file="useProducts.js" role="일반 상품 데이터 연결" />
              <ArchitectureNode layer="Hooks" file="useRankingProducts.js" role="랭킹 상품 데이터 연결" />
            </div>
            <span className={styles.flowConnector} aria-hidden="true" />
            <div className={`${styles.treeStage} ${styles.treeStageGroup} ${styles.treeStageViews}`}>
              <ArchitectureNode layer="View" file="HomeRecommendSection" role="추천 화면 조합" />
              <ArchitectureNode layer="View" file="HomeRankingSection" role="랭킹 화면 조합" />
              <ArchitectureNode layer="View" file="SearchResultsView" role="검색 결과 조합" />
            </div>
            <span className={styles.flowConnector} aria-hidden="true" />
            <div className={styles.treeStage}>
            <ArchitectureNode layer="List" file="ProductCardList.jsx" role="문맥에 맞는 카드 목록 출력" />
            </div>
            <span className={styles.flowConnector} aria-hidden="true" />
            <div className={styles.treeStage}>
              <ArchitectureNode layer="UI" file="ProductCard.jsx" role="상품 카드 조합과 Variant 제어" accent />
            </div>
          </div>

          <div className={styles.componentLeaves} aria-label="ProductCard 구성 파일">
            <ArchitectureNode layer="File" file="ProductCardImage.jsx" role="상품 이미지" />
            <ArchitectureNode layer="File" file="ProductCardInfo.jsx" role="가격·이름·평점 정보" />
            <ArchitectureNode layer="File" file="ProductCardLabel.jsx" role="구매량·신상 상태 라벨" />
            <ArchitectureNode layer="File" file="ProductCardDeliveryBadges.jsx" role="배송 옵션 배지" />
            <ArchitectureNode layer="Style" file="ProductCard.scss" role="레이아웃·상태별 스타일" />
          </div>
        </div>
      </section>

      <section className={styles.reuse} aria-labelledby="reuse-title">
        <SectionHeading
          id="reuse-title"
          label="03 · One data, multiple views"
          lines={["하나의 상품 정보가,", "화면의 목적에 따라 달라집니다."]}
        />
        <p className={styles.sectionIntro}>
          같은 상품 데이터를 추천 카드, 랭킹 카드, 검색 결과로 확장했습니다. 검색은
          별도의 중심 기능이 아니라 데이터와 UI 구조의 확장성을 보여주는 사례입니다.
        </p>
        <div className={styles.reuseGrid}>
          {reuseViews.map((view, index) => (
            <figure key={view.label} data-aos="fade-up" data-aos-delay={index * 90}>
              <div className={styles.reuseImage}>
                <Image
                  src={`${imageRoot}/${view.src}`}
                  alt={view.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption>
                <span>{view.label}</span>
                <strong>{view.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <DaisomallReuseSwitcher views={reuseViews} />
      </section>

      <section className={styles.responsive} aria-labelledby="responsive-title">
        <SectionHeading
          id="responsive-title"
          label="04 · Unified responsive experience"
          lines={["기기별 페이지를 나누지 않고,", "정보 밀도와 배치만 조정했습니다."]}
          tone="light"
        />
        <div className={styles.responsiveCopy}>
          <p>
            같은 데이터와 컴포넌트를 유지하면서 카드 방향, 배치 수, 간격을 반응형
            SCSS 기준으로 분기했습니다.
          </p>
          <ul>
            <li><span>Keep</span> 상품 데이터 · 카드 정보 · 탐색 맥락</li>
            <li><span>Adjust</span> 카드 방향 · 정보 밀도 · 여백</li>
            <li><span>Method</span> 공통 컴포넌트 · SCSS breakpoint</li>
          </ul>
        </div>
        <DaisomallResponsiveGallery />
      </section>

      <section className={styles.system} aria-labelledby="system-title">
        <SectionHeading
          id="system-title"
          label="05 · Design system & components"
          lines={["디자인 기준을 코드에 연결하고,", "문맥에 맞는 Variant를 설계했습니다."]}
        />
        <p className={styles.sectionIntro}>
          컬러와 간격의 기준을 변수로 관리하고, 반복되는 상품 정보를 사용 환경과 화면
          크기에 맞춰 확장할 수 있도록 컴포넌트와 Variant를 설계했습니다.
        </p>

        <HorizontalTableScroller label="디자인 토큰 표">
          <div className={styles.tokenTable} data-aos="fade-up">
            <table>
            <thead><tr><th>Group</th><th>Token</th><th>Value</th><th>Code</th><th>Applied to</th></tr></thead>
            <tbody>
              {tokenRows.map((token) => (
                <tr key={`${token.group}-${token.name}`}>
                  <td>{token.group}</td><td>{token.name}</td>
                  <td>{token.swatch ? <i aria-hidden="true" style={{ "--token-swatch": token.swatch }} /> : null}{token.value}</td>
                  <td><code>{token.code}</code></td><td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </HorizontalTableScroller>

        <div className={styles.componentShowcase} data-aos="fade-up">
          <div className={styles.figmaBoard}>
            <div className={styles.figmaTitle}><span aria-hidden="true">◆</span> product-card</div>
            <div className={styles.variantGrid}>
              {variants.map((variant) => (
                <figure
                  className={variant.className}
                  key={variant.label}
                  style={{
                    "--variant-ratio": `${variant.width} / ${variant.height}`,
                    "--variant-width": `${variant.width * 0.3}px`,
                    "--variant-relative-width": `${(variant.width / 1640) * 100}%`,
                  }}
                >
                  <figcaption>{variant.label}</figcaption>
                  <div className={styles.variantImage}>
                    <Image
                      src={`${imageRoot}/${variant.src}`}
                      alt={`${variant.label} 상품 카드 컴포넌트`}
                      width={variant.width}
                      height={variant.height}
                      sizes="(max-width: 640px) 100vw, 45vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <aside className={styles.componentNotes} aria-label="ProductCard 속성 설명">
            <p>
              같은 ProductCard를 화면마다 새로 만들지 않고, 속성으로 카드의 방향과 정보
              밀도를 조정했습니다. 부가 정보는 필요한 상황에 따라 선택적으로 조합합니다.
            </p>
            <table>
              <tbody>
                <tr><th scope="row">layout</th><td><code>vertical / horizontal</code><span>카드 방향 전환</span></td></tr>
                <tr><th scope="row">context</th><td><code>default / search / ranked</code><span>화면 목적에 맞는 정보 위계</span></td></tr>
                <tr><th scope="row">optional</th><td><code>wish / label / delivery</code><span>필요한 부가 정보만 조합</span></td></tr>
              </tbody>
            </table>
          </aside>
        </div>
      </section>

      <section className={styles.outcome} aria-labelledby="outcome-title">
        <SectionHeading
          id="outcome-title"
          label="06 · Troubleshooting & outcome"
          lines={["반복될 구현은 줄이고,", "새로운 탐색 화면의 확장성을 남겼습니다."]}
          tone="light"
        />
        <div className={styles.outcomeGrid}>
          <article><span>Problem</span><p>추천·랭킹·검색마다 상품 카드와 반응형 처리가 반복될 가능성이 있었습니다.</p></article>
          <article><span>Decision</span><p>공통 정보 구조는 유지하고 카드 방향과 문맥별 정보만 상태와 스타일로 조절했습니다.</p></article>
          <article><span>Result</span><p>상품 데이터의 수정 범위를 줄이고 새로운 탐색 화면에서도 같은 구조를 재사용할 수 있게 했습니다.</p></article>
        </div>
        <p className={styles.notice}>본 프로젝트는 학습 및 포트폴리오 목적으로 제작한 비공식 리디자인이며 실제 브랜드 서비스와 무관합니다.</p>
      </section>
    </>
  );
}
