export const projects = [
  {
    slug: "daisomall",
    order: "01",
    title: "DAISOMALL",
    category: "Commerce renewal",
    role: "팀 프로젝트 · React 구조·컴포넌트 설계·반응형·접근성 개선 주도",
    highlight:
      "분리되어 있던 모바일·PC 경험을 하나의 React 구조로 통합했습니다.",
    summary:
      "상품 데이터와 UI의 재사용 범위를 설계하고, 홈·랭킹·검색으로 확장 가능한 컴포넌트 구조를 구성했습니다. SCSS 분기 기준을 정리해 다양한 환경에서도 일관된 경험을 유지하도록 했습니다.",
    tech: ["React Architecture", "Reusable UI", "Responsive", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/daisomall/",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/daisomall",
    thumbnail: "/images/projects/daisomall-showcase.png",
    thumbnailAlt: "다이소몰 메인 페이지",
    keyColor: "#b72a2d",
    softColor: "#f6d8d6",
    inkColor: "#ffffff",
    darkKeyColor: "#842327",
    darkInkColor: "#fff5f5",
  },
  {
    slug: "air-seoul",
    order: "02",
    title: "AIR SEOUL",
    category: "Airline booking service",
    role: "UI 기획 · 비주얼 방향 · React 예약 상태·컴포넌트 연결",
    highlight:
      "여행을 떠나고 싶은 첫인상부터 항공권 선택까지 하나의 예약 경험으로 연결했습니다.",
    summary:
      "에어서울의 브랜드 컬러인 민트 컬러를 유지하면서 친근하면서 세련된 저가항공사의 인상을 다시 설계했습니다. 특가 항공권의 조건을 예약 화면으로 전달하고 날짜·인원·운임을 이어서 변경할 수 있게 했습니다.",
    tech: ["Visual Direction", "React State", "Booking Flow", "Routing"],
    url: "https://suyeonn.dothome.co.kr/airseoul/",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/airseoul",
    thumbnail: "/images/projects/airseoul-hero-clean.png",
    thumbnailAlt: "에어서울 메인 페이지",
    keyColor: "#63c9bf",
    softColor: "#bfe6e1",
    inkColor: "#063f39",
    darkKeyColor: "#176f69",
    darkInkColor: "#effffc",
  },
  {
    slug: "seoul-youth-center",
    order: "03",
    title: "시립서울청소년센터",
    category: "Public service",
    role: "UI 기획 · 정보구조 · 온라인 신청·수정·취소 흐름 · 반응형 구현",
    highlight:
      "전화·방문에 의존하던 프로그램 신청을 온라인에서 끝낼 수 있게 만들었습니다.",
    summary:
      "청소년·평생교육 프로그램을 홈페이지에서 찾고 신청한 뒤, 신청 내역을 수정·취소할 수 있는 흐름으로 연결했습니다. 모바일 사용이 많은 청소년과 PC 사용이 많은 청소년지도사 및 센터 업무 담당자를 함께 고려했습니다.",
    tech: ["Online Application", "Responsive", "Public Service", "Accessibility"],
    url: "https://suyeonn.dothome.co.kr/seoul-youth-center/index.php",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/seoul-youth-center",
    thumbnail: "/images/projects/seoul-youth-center-showcase.png",
    thumbnailAlt: "시립서울청소년센터 메인 페이지",
    keyColor: "#f3a354",
    softColor: "#f8dfc4",
    inkColor: "#4a2606",
    darkKeyColor: "#8f572c",
    darkInkColor: "#fff5e9",
  },
  {
    slug: "fragfarm",
    order: "04",
    title: "FRAGFARM",
    category: "Mobile fashion commerce",
    role: "UI 기획 · 상품 탐색 · 위시·카트 연결 · 상품 문의·마이페이지 흐름 구현",
    highlight:
      "모바일 쇼핑에서 직접 느낀 불편을 상품 탐색과 구매·문의 흐름의 개선으로 연결했습니다.",
    summary:
      "상품을 1열·2열로 전환해 원하는 정보 밀도로 탐색하고, 목록에서 위시리스트와 장바구니에 바로 담을 수 있게 했습니다. 상단 탭으로 위시와 카트를 오가며 구매로 이어지게 하고, 상품별 문의는 마이페이지에서 다시 관리하도록 연결했습니다.",
    tech: ["Product Discovery", "Wishlist & Cart", "Commerce UX", "Personalized CS"],
    url: "https://suyeonn.dothome.co.kr/fragfarm-mobile/index.php",
    githubUrl:
      "https://github.com/suyeonn113/web-publisher-works/tree/main/fragfarm-mobile",
    thumbnail: "/images/projects/fragfarm-mobile-main-v2.png",
    thumbnailAlt: "프레그팜 모바일 메인 페이지",
    keyColor: "#292a2c",
    softColor: "#d9d9d7",
    inkColor: "#ffffff",
    darkKeyColor: "#17181b",
    darkInkColor: "#f6f5f1",
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
