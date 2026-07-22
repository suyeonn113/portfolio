export const projects = [
  {
    slug: "daisomall",
    order: "01",
    title: "DAISOMALL",
    category: "Commerce discovery",
    projectType: "Team project",
    role: "UI 기획 · React 구조·상품 데이터 설계 · 홈/검색 구현",
    summary:
      "홈 탐색과 검색 결과에 구현 범위를 집중해 상품 발견·필터·정렬·비교 흐름을 재구성했습니다. 반응형 UI와 키보드 접근성을 보완한 React 커머스 리디자인입니다.",
    tech: ["React", "Search UX", "Responsive", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/daisomall/",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/daisomall",
    thumbnail: "/images/projects/daisomall-showcase.png",
    thumbnailAlt: "다이소몰 메인 페이지",
    keyColor: "#b72a2d",
    softColor: "#f6d8d6",
    inkColor: "#ffffff",
  },
  {
    slug: "air-seoul",
    order: "02",
    title: "AIR SEOUL",
    category: "Airline booking service",
    summary:
      "항공권 검색 조건 입력부터 URL 기반 결과 비교, 운임 선택과 여정 요약까지 연결했습니다. 예약·체크인·스케줄·여행 정보로 확장한 React 기반 항공 서비스 리디자인입니다.",
    tech: ["React", "Routing", "URL Query", "Booking Flow"],
    url: "https://suyeonn.dothome.co.kr/airseoul/",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/airseoul",
    thumbnail: "/images/projects/airseoul-hero-clean.png",
    thumbnailAlt: "에어서울 메인 페이지",
    keyColor: "#63c9bf",
    softColor: "#bfe6e1",
    inkColor: "#063f39",
  },
  {
    slug: "seoul-youth-center",
    order: "03",
    title: "SEOUL YOUTH CENTER",
    category: "Public service",
    summary:
      "복잡한 기관 정보를 사용자 목적 중심으로 재편하고, 청소년·평생교육 프로그램 탐색부터 신청 내역 관리까지 연결했습니다. 반응형 UI와 키보드 접근성을 갖춘 PHP 기반 공공 서비스 리디자인입니다.",
    tech: ["PHP", "MySQL", "Information Architecture", "Application Flow"],
    url: "https://suyeonn.dothome.co.kr/seoul-youth-center/index.php",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/seoul-youth-center",
    thumbnail: "/images/projects/seoul-youth-center-showcase.png",
    thumbnailAlt: "시립서울청소년센터 메인 페이지",
    keyColor: "#f3a354",
    softColor: "#f8dfc4",
    inkColor: "#4a2606",
  },
  {
    slug: "fragfarm",
    order: "04",
    title: "FRAGFARM",
    category: "Mobile fashion commerce",
    summary:
      "브랜드 감성을 유지하면서 상품 탐색·상세 옵션·장바구니·주문·회원·리뷰와 문의까지 모바일 쇼핑 흐름을 구현했습니다. PHP 공통 구조와 접근성을 함께 정리한 패션 커머스 리디자인입니다.",
    tech: ["PHP", "Mobile Commerce", "Shopping Flow", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/fragfarm-mobile/index.php",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/fragfarm-mobile",
    thumbnail: "/images/projects/fragfarm-mobile-main-v2.png",
    thumbnailAlt: "프레그팜 모바일 메인 페이지",
    keyColor: "#292a2c",
    softColor: "#d9d9d7",
    inkColor: "#ffffff",
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
