import Image from "next/image";
import SpotlightHeading from "@/components/ui/SpotlightHeading";
import {
  AirSeoulBookingViewer,
  AirSeoulConceptComparison,
} from "./AirSeoulInteractive";
import AirSeoulFlowVideo from "./AirSeoulFlowVideo";
import styles from "./AirSeoulCaseStudy.module.scss";

function HeadingLines({ lines }) {
  return lines.map((line) => <span className={styles.headingLine} key={line}>{line}</span>);
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

export function AirSeoulHero() {
  return (
    <div className={styles.heroStage}>
      <Image
        src="/images/projects/airseoul-hero-clean.png"
        alt="도쿄 특가와 예약 패널로 구성한 에어서울 리디자인 홈"
        width={1440}
        height={900}
        priority
        sizes="100vw"
      />
    </div>
  );
}

const architecture = [
  { step: "검색 조건 입력", files: ["HeroSlider", "FlightBookingPanel"], role: "특가 CTA와 검색 조건 입력 시작" },
  { step: "조건 전달 및 데이터 조회", files: ["searchParams", "FlightSearchResults", "flightSearch"], role: "홈의 입력값을 URL 조건과 조회 데이터로 연결" },
  { step: "운임 선택", files: ["FlightSelectSection", "DateFareBar", "FlightOptionRow"], role: "날짜/항공편/운임 선택" },
  { step: "선택 상태 즉시 반영", files: ["BookingSummaryAside"], role: "선택 여정과 운임을 요약 영역에 동기화" },
];

const outcomes = [
  {
    label: "Context",
    title: "특가에서 예약으로",
    body: "목적지와 날짜 조건을 URL 파라미터로 전달해 예약 페이지에서 같은 조건을 다시 입력하지 않도록 했습니다.",
  },
  {
    label: "Responsive",
    title: "기능은 유지하고 배치는 조정",
    body: "공통 예약 기능을 유지하면서 데스크톱 탭, 태블릿 사이드 레일, 모바일 퀵 메뉴로 조작 위치를 바꿨습니다.",
  },
  {
    label: "State",
    title: "선택과 요약을 함께 갱신",
    body: "가는 편과 오는 편의 선택 상태를 공유해 운임 카드와 여정 요약이 같은 데이터로 갱신되도록 연결했습니다.",
  },
];

export default function AirSeoulCaseStudy() {
  return (
    <>
      <section className={styles.concept} aria-labelledby="air-concept-title">
        <SectionHeading
          id="air-concept-title"
          label="02 · From concept to interface"
          lines={["AI 콘셉트를 출발점으로,", "브랜드와 실제 예약 기능을 구체화했습니다."]}
        />
        <p className={styles.sectionIntro}>
          초기 시안의 여행 이미지는 유지하되, 에어서울의 민트 컬러와 실제 검색·서비스 구조에 맞춰 정보 위계와 인터랙션을 다시 설계했습니다.
        </p>
        <AirSeoulConceptComparison />
      </section>

      <section className={styles.adaptive} aria-labelledby="air-adaptive-title">
        <SectionHeading
          id="air-adaptive-title"
          label="03 · Adaptive booking module"
          lines={["같은 예약 기능을 유지하고,", "화면과 목적에 따라 조작 방식을 바꿨습니다."]}
        />
        <p className={styles.sectionIntro}>
          서비스 상태는 하나의 프레임에서 전환하고, 예약 화면은 데스크톱·태블릿·모바일의 정보 밀도에 맞춰 다시 배치했습니다.
        </p>
        <AirSeoulBookingViewer />
      </section>

      <section className={styles.flow} aria-labelledby="air-flow-title">
        <SectionHeading
          id="air-flow-title"
          label="04 · Promotion to booking"
          lines={["특가를 발견한 순간부터,", "운임 선택과 여정 요약까지 이어집니다."]}
          tone="light"
        />
        <p className={styles.sectionIntro}>
          서비스 상태는 하나의 프레임에서 전환하고, 예약 화면은 데스크톱·태블릿·모바일의 정보 밀도에 맞춰 다시 배치했습니다.
        </p>
        <AirSeoulFlowVideo />
      </section>

      <section className={styles.structure} aria-labelledby="air-structure-title">
        <SectionHeading
          id="air-structure-title"
          label="05 · Connected React structure"
          lines={["컴포넌트를 나열하지 않고,", "검색 조건과 선택 상태를 연결했습니다."]}
        />
        <p className={styles.sectionIntro}>
          홈에서 만든 검색 조건이 결과 화면의 데이터와 선택 컴포넌트를 거쳐 최종 여정 요약까지 이어지는 구조입니다.
        </p>
        <div className={styles.architectureTable} data-aos="fade-up">
          <table>
            <thead>
              <tr>
                <th scope="col">Step</th>
                <th scope="col">Flow</th>
                <th scope="col">Connected components</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {architecture.map((item, index) => (
                <tr key={item.step}>
                  <td className={styles.architectureStep}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </td>
                  <th scope="row">{item.step}</th>
                  <td className={styles.architectureFiles}>
                    {item.files.map((file) => <code key={file}>{file}</code>)}
                  </td>
                  <td className={styles.architectureRole}>{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.outcome} aria-labelledby="air-outcome-title">
        <SectionHeading
          id="air-outcome-title"
          label="06 · Troubleshooting & outcome"
          lines={["검색 조건과 운임 선택 상태를 연결해,", "탐색부터 여정 확인까지 이어지게 했습니다."]}
          tone="light"
        />
        <div className={styles.outcomeGrid}>
          {outcomes.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className={styles.notice}>본 프로젝트는 학습 및 포트폴리오 목적으로 제작한 비공식 리디자인이며 실제 브랜드 서비스와 무관합니다.</p>
      </section>
    </>
  );
}
