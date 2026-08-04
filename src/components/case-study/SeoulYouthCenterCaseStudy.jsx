"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SpotlightHeading from "@/components/ui/SpotlightHeading";
import styles from "./SeoulYouthCenterCaseStudy.module.scss";

const imageRoot = "/images/projects/case-studies/seoul-youth-center";

const findViews = [
  {
    key: "open",
    label: "Open programs",
    src: `${imageRoot}/youth-home-desktop-program.png`,
    alt: "홈 전면에 배치한 접수 중 프로그램 목록",
    width: 2877,
    height: 1439,
    caption: "홈에서 지금 신청할 수 있는 프로그램을 먼저 확인합니다.",
  },
  {
    key: "filtered",
    label: "Filtered results",
    src: `${imageRoot}/youth-program-filtered.png`,
    alt: "모집 상태와 연령, 분야 조건으로 좁힌 청소년 프로그램 결과",
    width: 2875,
    height: 2156,
    caption: "상태·연령·분야 조건을 조합해 필요한 결과만 남깁니다.",
  },
];

const applicationFlows = [
  {
    key: "youth",
    label: "Youth program",
    liveLabel: "Try youth program flow",
    liveUrl: "https://suyeonn.dothome.co.kr/seoul-youth-center/programs.php?status=ongoing",
    description: "상세에서 대상과 일정을 확인한 뒤 신청하고, 완료 내역을 다시 관리합니다.",
    steps: [
      { label: "Program detail", body: "대상·일정·접수 상태 확인", src: "youth-application-detail.png", width: 2856, height: 5077 },
      { label: "Application form", body: "신청 정보와 동의 항목 입력", src: "youth-application-form.png.png", width: 2032, height: 3048 },
      { label: "Application complete", body: "접수 결과와 신청 정보 확인", src: "youth-application-history.png", width: 1967, height: 1967 },
      { label: "Manage", body: "신청 정보 수정·취소", src: "youth-application-manage.png", width: 1777, height: 1777 },
    ],
  },
  {
    key: "education",
    label: "Education",
    liveLabel: "Try education flow",
    liveUrl: "https://suyeonn.dothome.co.kr/seoul-youth-center/lifelong-education-apply.php",
    description: "강좌를 선택하고 수강 정보를 입력한 뒤 같은 신청 관리 구조로 연결합니다.",
    steps: [
      { label: "Choose course", body: "접수 가능한 강좌 선택", src: "lifelong-program-detail.png", width: 3348, height: 4185 },
      { label: "Application form", body: "수강 정보와 동의 항목 입력", src: "lifelong-program-application-form.png", width: 1974, height: 2656 },
      { label: "Application complete", body: "수강 신청 결과 확인", src: "lifelong-program-application-history.png", width: 2032, height: 2032 },
      { label: "Manage", body: "수강 정보 수정·취소", src: "lifelong-program-application-manage.png", width: 1805, height: 1805 },
    ],
  },
  {
    key: "lookup",
    label: "Application lookup",
    liveLabel: "Try application lookup",
    liveUrl: "https://suyeonn.dothome.co.kr/seoul-youth-center/applications.php",
    description: "신청자 정보로 청소년·교육 신청내역을 한 번에 찾고 상세 관리로 이동합니다.",
    steps: [
      { label: "Lookup", body: "신청자 정보로 내역 조회", src: "application-lookup.png", width: 2598, height: 1299 },
      { label: "Applications & status", body: "유형별 결과와 접수 상태 확인", src: "application-lookup-detail.png", width: 3358, height: 2518 },
    ],
  },
];

const troubleshooting = [
  { icon: "notice", label: "Before", title: "포스터와 문의에 머문 신청", body: "프로그램 안내를 확인해도 실제 신청은 센터 방문이나 전화 문의로 이어졌습니다." },
  { icon: "search", label: "Define", title: "찾고 비교할 수 있는 데이터", body: "청소년·교육 프로그램의 접수 상태와 대상, 분야를 데이터 기준으로 정리했습니다." },
  { icon: "form", label: "Connect", title: "온라인 신청 흐름", body: "상세 확인부터 신청서 작성과 접수 완료까지 홈페이지 안에서 처리하도록 연결했습니다." },
  { icon: "manage", label: "Manage", title: "조회·수정·취소", body: "신청자 정보로 내역을 찾고 프로그램 유형별 상세 관리까지 이어지게 했습니다." },
];

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

function FlowIcon({ name }) {
  const paths = {
    notice: <><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M8 9h8M8 13h5" /></>,
    search: <><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5M4 20h7" /></>,
    form: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    manage: <><circle cx="8" cy="7" r="3" /><path d="M3 18c.7-3 2.3-5 5-5s4.3 2 5 5M15 12h6M18 9v6" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[name]}</svg>;
}

export function SeoulYouthCenterHero() {
  return (
    <div className={styles.heroStage}>
      <div className={styles.heroDesktop}>
        <Image src={`${imageRoot}/youth-home-desktop.png`} alt="시립서울청소년센터 데스크톱 홈" width={2880} height={3000} priority sizes="(max-width: 960px) 88vw, 72vw" />
      </div>
      <div className={styles.heroTablet}>
        <Image src={`${imageRoot}/youth-home-tablet.png`} alt="시립서울청소년센터 태블릿 홈" width={1536} height={2048} priority sizes="28vw" />
      </div>
      <div className={styles.heroMobile}>
        <Image src={`${imageRoot}/youth-home-mobile.png`} alt="시립서울청소년센터 모바일 홈" width={780} height={1688} priority sizes="18vw" />
      </div>
    </div>
  );
}

function ImageButton({ item, onOpen, className, sizes }) {
  return (
    <button className={`${styles.imageButton} ${className ?? ""}`} type="button" onClick={() => onOpen(item)} aria-label={`${item.alt ?? item.label} 이미지 확대`}>
      <Image src={item.src.startsWith("/") ? item.src : `${imageRoot}/${item.src}`} alt={item.alt ?? ""} width={item.width} height={item.height} sizes={sizes ?? "(max-width: 640px) 82vw, (max-width: 1200px) 44vw, 24vw"} />
      <span className={styles.zoomHint}>View full page</span>
    </button>
  );
}

export default function SeoulYouthCenterCaseStudy() {
  const [findView, setFindView] = useState("open");
  const [activeFlow, setActiveFlow] = useState("youth");
  const [selectedImage, setSelectedImage] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedImage && dialog && !dialog.open) dialog.showModal();
  }, [selectedImage]);

  const closeDialog = () => {
    dialogRef.current?.close();
    setSelectedImage(null);
  };

  return (
    <>
      <section className={styles.find} aria-labelledby="youth-find-title">
        <SectionHeading id="youth-find-title" label="02 · Find a program" lines={["접수 중인 프로그램을 먼저 보여주고,", "조건으로 빠르게 좁혔습니다."]} />
        <p className={styles.sectionIntro}>홈에서는 지금 신청할 수 있는 프로그램을 전면에 배치하고, 신청 페이지에서는 모집 상태·연령·분야·검색어를 조합해 필요한 활동만 남겼습니다.</p>

        <div className={styles.findViewer}>
          <div className={styles.viewTabs} aria-label="프로그램 탐색 화면 선택">
            {findViews.map((view) => (
              <button key={view.key} type="button" aria-pressed={findView === view.key} onClick={() => setFindView(view.key)}>{view.label}</button>
            ))}
          </div>
          <div className={styles.findGrid}>
            {findViews.map((view, index) => (
              <figure className={styles.findPanel} data-active={findView === view.key} key={view.key}>
                <div className={styles.findImage}>
                  <ImageButton item={view} onOpen={setSelectedImage} sizes="(max-width: 640px) 92vw, (max-width: 1440px) 48vw, 700px" />
                  {view.key === "filtered" ? (
                    <div className={styles.filterEvidence} aria-hidden="true">
                      <span className={styles.filterConditions}>Selected conditions</span>
                    </div>
                  ) : null}
                </div>
                <figcaption>
                  <a href="https://suyeonn.dothome.co.kr/seoul-youth-center/programs.php?status=ongoing" target="_blank" rel="noreferrer">{String(index + 1).padStart(2, "0")} · {view.label} ↗<span className="srOnly"> (새 창에서 열림)</span></a>
                  <span>{view.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.apply} aria-labelledby="youth-apply-title">
        <SectionHeading id="youth-apply-title" label="03 · Apply and manage" lines={["신청을 온라인으로 옮기고,", "조회·수정·취소까지 연결했습니다."]} tone="light" />
        <p className={styles.sectionIntro}>청소년 프로그램과 교육 프로그램의 정보는 구분하되, 상세 확인부터 신청과 사후 관리까지 같은 처리 원칙으로 설계했습니다.</p>

        <div className={styles.flowTabs} aria-label="신청 흐름 선택">
          {applicationFlows.map((flow) => (
            <button key={flow.key} type="button" aria-pressed={activeFlow === flow.key} onClick={() => setActiveFlow(flow.key)}>{flow.label}</button>
          ))}
        </div>

        <div className={styles.applicationFlows}>
          {applicationFlows.map((flow) => (
            <article className={styles.flowGroup} data-active={activeFlow === flow.key} key={flow.key}>
              <header className={styles.flowGroupHeader}>
                <div><span>{flow.label}</span><p>{flow.description}</p></div>
                <a href={flow.liveUrl} target="_blank" rel="noreferrer">{flow.liveLabel} ↗<span className="srOnly"> (새 창에서 열림)</span></a>
              </header>
              <ol className={styles.stepGrid} data-count={flow.steps.length}>
                {flow.steps.map((step, index) => (
                  <li key={step.label}>
                    <ImageButton item={{ ...step, alt: `${flow.label} ${step.label} 화면` }} onOpen={setSelectedImage} />
                    <div className={styles.stepCaption}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{step.label}</strong><p>{step.body}</p></div></div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.troubleshooting} aria-labelledby="youth-trouble-title">
        <SectionHeading id="youth-trouble-title" label="04 · Troubleshooting & outcome" lines={["포스터와 문의에 머물던 신청을,", "온라인에서 끝나는 처리 흐름으로 바꿨습니다."]} tone="light" />
        <p className={styles.sectionIntro}>새 화면을 추가하는 데서 끝내지 않고, 프로그램 정보와 신청 데이터를 연결해 사용자는 빠르게 신청하고 센터 업무자는 같은 기준으로 내역을 관리할 수 있게 했습니다.</p>
        <ol className={styles.troubleFlow}>
          {troubleshooting.map((item, index) => (
            <li key={item.label}>
              <div className={styles.iconBox}><FlowIcon name={item.icon} /></div>
              <span>{String(index + 1).padStart(2, "0")} · {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
        <div className={styles.outcomes}>
          <p><span>Discover</span> 접수 중 프로그램과 조건별 결과를 한눈에 확인</p>
          <p><span>Apply</span> 청소년·교육 프로그램을 홈페이지에서 바로 신청</p>
          <p><span>Manage</span> 신청내역 조회부터 수정·취소까지 같은 흐름에서 처리</p>
        </div>
      </section>

      <dialog className={styles.imageDialog} ref={dialogRef} onClose={() => setSelectedImage(null)} onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
        {selectedImage ? (
          <div className={styles.dialogPanel}>
            <header><strong>{selectedImage.label ?? selectedImage.alt}</strong><button type="button" onClick={closeDialog}>Close</button></header>
            <Image src={selectedImage.src.startsWith("/") ? selectedImage.src : `${imageRoot}/${selectedImage.src}`} alt={selectedImage.alt ?? ""} width={selectedImage.width} height={selectedImage.height} sizes="94vw" />
          </div>
        ) : null}
      </dialog>
    </>
  );
}
