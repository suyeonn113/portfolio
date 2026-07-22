export const projects = [
  {
    slug: "daisomall",
    order: "01",
    title: "DAISOMALL",
    category: "Commerce discovery",
    summary:
      "홈과 검색을 중심으로 상품 탐색과 비교 흐름을 정리한 커머스 UI 리디자인.",
    tech: ["React", "Search UX", "Responsive", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/daisomall/",
    keyColor: "#e53935",
    softColor: "#f6d8d6",
    inkColor: "#ffffff",
  },
  {
    slug: "air-seoul",
    order: "02",
    title: "AIR SEOUL",
    category: "Airline booking service",
    summary:
      "검색 조건부터 URL 기반 결과, 운임 선택과 여정 요약까지 연결한 서비스형 프로젝트.",
    tech: ["React", "Routing", "URL Query", "Booking Flow"],
    url: "https://suyeonn.dothome.co.kr/airseoul/",
    keyColor: "#20a899",
    softColor: "#bfe6e1",
    inkColor: "#063f39",
  },
  {
    slug: "seoul-youth-center",
    order: "03",
    title: "SEOUL YOUTH CENTER",
    category: "Public service",
    summary:
      "기관의 복잡한 정보와 프로그램 신청 흐름을 사용 목적에 따라 재구성한 공공 서비스.",
    tech: ["PHP", "MySQL", "Information Architecture", "Application Flow"],
    url: "https://suyeonn.dothome.co.kr/seoul-youth-center/index.php",
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
      "브랜드 감성과 상품 탐색부터 주문·회원·리뷰까지 이어지는 모바일 쇼핑 흐름.",
    tech: ["PHP", "Mobile Commerce", "Shopping Flow", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/fragfarm-mobile/index.php",
    keyColor: "#292a2c",
    softColor: "#d9d9d7",
    inkColor: "#ffffff",
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
