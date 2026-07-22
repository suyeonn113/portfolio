export const caseStudies = [
  {
    projectSlug: "daisomall",
    metadata: {
      title: "DAISOMALL Case Study · Suyeonn",
      description:
        "팀 프로젝트로 구현한 홈과 검색을 바탕으로 반응형, 정보 위계, 검색 UX와 접근성을 다시 정리한 React 커머스 UI 리디자인입니다.",
    },
    eyebrow: "01 · Commerce discovery",
    badge: "Team project",
    lead:
      "홈에서 상품을 발견하고 검색 결과에서 조건을 좁혀 비교하기까지, 다이소몰의 핵심 상품 탐색 흐름을 React로 구현하고 다시 다듬었습니다.",
    titleSize: { vw: "13.2vw", max: "13rem" },
    theme: {
      accent: "#b72a2d",
      deep: "#8f171b",
      soft: "#f6d8d6",
      focus: "#f4be32",
      spotlightLight: "#ffd0d2",
    },
    hero: {
      src: "/images/projects/daisomall-showcase.png",
      alt: "프로모션, 카테고리와 추천 상품으로 구성한 다이소몰 리디자인 홈",
      width: 1428,
      height: 1500,
      maxWidth: "1428px",
      caption: "Redesigned home · responsive commerce UI",
    },
    meta: [
      { label: "Type", value: "Team project" },
      {
        label: "Role",
        value: "UI 기획 · React 구조·상품 데이터 설계 · 홈/검색 구현",
      },
      { label: "Focus", value: "Home · Search · Accessibility" },
      { label: "Stack", value: "React · React Router · SCSS" },
    ],
    context: {
      label: "Project context",
      title: [
        "팀 프로젝트의 홈·검색 구현을,",
        "완결된 탐색 경험으로 다시 정리했습니다.",
      ],
      body: "팀 프로젝트에서 UI 기획과 React 구조·상품 데이터 설계, 홈과 검색 구현을 맡았습니다. 프로젝트 종료 후 개인적으로 다시 다듬으며, 화면 수를 늘리기보다 기존 탐색 흐름의 완성도를 높이는 데 집중했습니다.",
      note: "Personal refinement · 반응형 · 정보 위계 · 검색 UX · 키보드 접근성",
    },
    visuals: {
      label: "Visual context / Home",
      title: [
        "다이소몰의 익숙한 분위기는 유지하고,",
        "홈의 역할을 섹션별로",
        "나눴습니다.",
      ],
      items: [
        {
          title: "Current official site",
          url: "https://www.daisomall.co.kr/",
          src: "/images/projects/daisomall-official-reference-2026-07.jpg",
          alt: "2026년 7월 22일 캡처한 공식 다이소몰 운영 홈",
          width: 1765,
          height: 1187,
          reference: true,
          caption:
            "Captured 2026.07.22 · 작업 당시 화면이 아닌 현재 운영 화면으로, 브랜드와 정보 밀도를 보여주는 참고 자료입니다.",
        },
        {
          title: "Project home",
          src: "/images/projects/daisomall-home.png",
          alt: "정보 위계와 탐색 흐름을 정리한 다이소몰 리디자인 홈",
          width: 1440,
          height: 900,
          caption:
            "카테고리·추천 상품·랭킹·기획전·배송을 목적별 섹션으로 분리했습니다.",
        },
      ],
    },
    flow: {
      label: "Core user flow",
      title: ["홈에서 발견하고,", "검색에서 좁히고,", "상품 카드에서 비교합니다."],
      items: [
        {
          number: "01",
          title: "Browse",
          body: "카테고리와 랭킹, 프로모션, 배송 서비스를 훑습니다.",
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
      ],
    },
    decisions: {
      label: "Implementation decisions",
      title: ["정보 구조와 상태를 정리하고,", "반응형 기준을 통일했습니다."],
      items: [
        {
          number: "01",
          title: "홈 섹션을 기능 단위로 나눴습니다.",
          body: [
            "카테고리, 추천 상품, 랭킹, 기획전, 배송을 목적별 섹션으로 분리했습니다.",
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
      ],
    },
    accessibility: {
      label: "Accessibility",
      title: ["키보드 사용 흐름을 기준으로,", "홈과 검색을 끝까지 이용할 수 있게 했습니다."],
      items: [
        "스킵 메뉴로 반복되는 헤더·내비게이션 건너뛰기",
        "이동 없는 메뉴는 button, 실제 이동은 link로 역할 구분",
        "랭킹·기획전 탭은 방향키로 이동하고 Enter·Space로 선택",
        "aria-pressed·aria-selected·aria-controls로 선택 상태 전달",
      ],
    },
    components: {
      label: "Implementation structure",
      title: ["데이터와 상태를 분리해,", "반복해서 사용할 수 있는 구조로 만들었습니다."],
      items: [
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
      ],
    },
    footerLabel: "DAISOMALL · Commerce discovery",
  },
  {
    projectSlug: "air-seoul",
    metadata: {
      title: "AIR SEOUL Case Study · Suyeonn",
      description:
        "항공권 검색 조건부터 날짜 운임, 항공편과 운임 선택, 여정 요약까지 연결한 React 항공 서비스 리디자인입니다.",
    },
    eyebrow: "02 · Airline booking service",
    lead:
      "항공권 검색 조건을 입력하고 날짜별 운임과 항공편을 비교한 뒤, 선택한 여정을 확인하기까지의 예약 흐름을 React로 연결했습니다.",
    titleSize: { vw: "10.8vw", max: "11rem" },
    theme: {
      accent: "#0b948a",
      deep: "#063f39",
      soft: "#e5f6f3",
      focus: "#ffcc4d",
      spotlightLight: "#b9fff6",
    },
    hero: {
      src: "/images/projects/airseoul-hero-clean.png",
      alt: "도쿄 특가와 예약 패널로 구성한 에어서울 리디자인 홈",
      width: 1440,
      height: 900,
      maxWidth: "1440px",
      caption: "Booking-led home · airline service redesign",
    },
    meta: [
      { label: "Type", value: "Individual project" },
      {
        label: "Role",
        value: "UI 기획 · React 구조·예약 데이터 설계 · 전체 화면 구현",
      },
      { label: "Focus", value: "Booking flow · URL state · Travel information" },
      { label: "Stack", value: "React · React Router · SCSS" },
    ],
    context: {
      label: "Project context",
      title: ["검색 조건부터 운임 선택까지,", "하나의 예약 흐름으로 연결했습니다."],
      body: "항공사의 모든 업무 기능을 재현하기보다, 사용자가 가장 먼저 만나는 예약과 여행 정보 흐름에 범위를 집중했습니다. 홈에서 입력한 조건이 결과 화면의 날짜·항공편·운임·여정 요약으로 이어지도록 데이터와 화면 구조를 함께 설계했습니다.",
      note: "Scope · 항공권 검색 · 운임 비교 · 예약 조회 · 체크인 · 여행 정보",
    },
    visuals: {
      label: "Live project / Booking",
      title: ["홈의 프로모션에서 출발해,", "운임 비교 화면까지 이어집니다."],
      items: [
        {
          title: "Live project home",
          url: "https://suyeonn.dothome.co.kr/airseoul/",
          src: "/images/projects/case-studies/air-live-home.png",
          alt: "도쿄 특가와 예약 진입을 강조한 에어서울 라이브 홈",
          width: 1270,
          height: 714,
          caption: "특가 프로모션과 예약 패널, 여행 준비 정보를 한 화면의 우선순위로 정리했습니다.",
        },
        {
          title: "Flight search results",
          url: "https://suyeonn.dothome.co.kr/airseoul/booking/flight?tripType=oneWay&from=ICN&to=NRT&departureDate=2026-05-14&adult=1&child=0&infant=0",
          src: "/images/projects/case-studies/air-live-results.png",
          alt: "날짜별 운임과 항공편 운임을 비교하는 에어서울 검색 결과",
          width: 1270,
          height: 714,
          caption: "검색 조건, 날짜별 최저가, 항공편과 운임 옵션을 순서대로 비교할 수 있게 했습니다.",
        },
      ],
    },
    flow: {
      label: "Core user flow",
      title: ["조건을 입력하고,", "날짜와 운임을 비교하고,", "여정을 확인합니다."],
      items: [
        { number: "01", title: "Search", body: "출발지·도착지·일정·인원을 입력합니다.", outcome: "검색 조건 생성" },
        { number: "02", title: "Scan dates", body: "날짜별 최저 운임을 비교하고 일정을 조정합니다.", outcome: "여행 날짜 선택" },
        { number: "03", title: "Select fare", body: "항공편 시간과 운임 조건, 잔여 좌석을 비교합니다.", outcome: "항공편·운임 결정" },
        { number: "04", title: "Review", body: "가는 편과 오는 편, 총액을 여정 요약에서 확인합니다.", outcome: "예약 정보 확인" },
      ],
    },
    decisions: {
      label: "Implementation decisions",
      title: ["검색 조건은 URL에 남기고,", "예약 단계는 컴포넌트로 연결했습니다."],
      items: [
        {
          number: "01",
          title: "검색 조건을 URL 상태로 전달했습니다.",
          body: [
            "URLSearchParams로 여정 유형, 공항, 날짜, 탑승객 조건을 읽고 결과 화면에 복원했습니다.",
            "새로고침하거나 결과 주소를 다시 열어도 같은 검색 맥락을 유지하도록 했습니다.",
          ],
        },
        {
          number: "02",
          title: "반복되는 예약 선택 UI를 분리했습니다.",
          body: [
            "DateFareBar와 FlightOptionRow로 날짜 운임과 항공편 선택 구조를 나눴습니다.",
            "선택된 편도·왕복 여정은 BookingSummaryAside에서 한 번에 확인하게 했습니다.",
          ],
        },
        {
          number: "03",
          title: "예약 이후의 여행 정보까지 같은 구조로 확장했습니다.",
          body: [
            "MainLayout 안에서 예약 조회·체크인·스케줄과 공항·수하물·좌석 안내를 연결했습니다.",
            "공통 데이터와 상세 템플릿을 사용해 페이지마다 정보 위계가 달라지지 않게 했습니다.",
          ],
        },
      ],
    },
    accessibility: {
      label: "Accessibility",
      title: ["예약의 선택 상태가,", "키보드와 보조기술에도 이어지게 했습니다."],
      items: [
        "빠른 메뉴와 스킵 링크로 예약·본문·주요 서비스 바로 이동",
        "탭과 날짜 선택은 방향키·Home·End를 지원하는 roving tabindex 적용",
        "운임 카드는 focus-within으로 선택 영역 전체에 포커스 표시",
        "단계 진행은 aria-current, 선택창은 dialog 의미와 포커스 복귀 제공",
      ],
    },
    components: {
      label: "Implementation structure",
      title: ["검색·선택·요약의 책임을 나눠,", "예약 흐름을 조합했습니다."],
      items: [
        { title: "FlightBookingPanel", body: "여정 유형과 공항·날짜·인원을 관리하고 검색 조건을 결과 URL로 전달합니다.", icon: "search" },
        { title: "FlightSearchResults / DateFareBar", body: "검색 조건을 복원하고 날짜별 최저가와 항공편·운임 옵션을 단계적으로 보여줍니다.", icon: "route" },
        { title: "FlightOptionRow / BookingSummaryAside", body: "운임 선택 상태와 잔여 좌석을 연결하고 선택한 여정과 총액을 요약합니다.", icon: "options" },
        { title: "MainLayout / Travel guides", body: "공통 헤더·푸터와 공항 서비스, 수하물, 좌석 안내 페이지의 정보 구조를 공유합니다.", icon: "layout" },
      ],
    },
    footerLabel: "AIR SEOUL · Airline booking service",
  },
  {
    projectSlug: "seoul-youth-center",
    metadata: {
      title: "SEOUL YOUTH CENTER Case Study · Suyeonn",
      description:
        "기관 정보 구조와 청소년·평생교육 프로그램 탐색, 신청, 신청내역을 연결한 PHP 공공 서비스 리디자인입니다.",
    },
    eyebrow: "03 · Public service",
    lead:
      "복잡한 기관 정보를 사용자 목적 중심으로 재편하고, 청소년·평생교육 프로그램을 찾고 신청한 뒤 내역을 확인하는 흐름까지 구현했습니다.",
    titleSize: { vw: "7.9vw", max: "9.4rem" },
    theme: {
      accent: "#ef8b2c",
      deep: "#a64d0d",
      soft: "#fff0df",
      focus: "#16314f",
      spotlightLight: "#fff0c7",
    },
    hero: {
      src: "/images/projects/seoul-youth-center-showcase.png",
      alt: "센터 소개, 바로가기와 프로그램 카드로 구성한 시립서울청소년센터 홈",
      width: 1408,
      height: 1490,
      maxWidth: "1408px",
      caption: "Purpose-led information architecture · public service UI",
    },
    meta: [
      { label: "Type", value: "Individual project" },
      { label: "Role", value: "UI 기획 · 정보구조·PHP 공통 구조 · 신청 흐름 구현" },
      { label: "Focus", value: "Information architecture · Program application" },
      { label: "Stack", value: "PHP · MySQL · JavaScript · SCSS" },
    ],
    context: {
      label: "Project context",
      title: ["기관 정보는 목적 중심으로,", "프로그램은 신청 흐름으로 다시 묶었습니다."],
      body: "기관 소개와 시설·이용 안내, 청소년 활동 12개 분야, 평생교육과 각종 신청 화면이 흩어지지 않도록 상위 메뉴와 하위 경로를 다시 설계했습니다. 사용자가 지금 할 수 있는 일을 먼저 찾고 조건을 좁힌 뒤 신청과 조회까지 이어가게 했습니다.",
      note: "Scope · 7개 상위 메뉴 · 12개 활동 분야 · 청소년·평생교육 신청 · 통합 검색",
    },
    visuals: {
      label: "Live project / Program",
      title: ["센터 이용과 프로그램 신청을,", "같은 정보 구조 안에서 연결했습니다."],
      items: [
        {
          title: "Live project home",
          url: "https://suyeonn.dothome.co.kr/seoul-youth-center/index.php",
          src: "/images/projects/case-studies/youth-live-home.png",
          alt: "센터 시설 안내와 이용 바로가기로 구성한 시립서울청소년센터 홈",
          width: 1270,
          height: 714,
          caption: "주요 소식, 바로 이용하기, 접수중 프로그램과 센터 일정을 목적별로 배치했습니다.",
        },
        {
          title: "Program search",
          url: "https://suyeonn.dothome.co.kr/seoul-youth-center/programs.php?status=ongoing",
          src: "/images/projects/case-studies/youth-live-programs.png",
          alt: "상태, 연령, 분야, 검색어로 프로그램을 찾는 청소년 프로그램 신청 화면",
          width: 1270,
          height: 714,
          caption: "모집 상태·연령·분야·검색어를 한 번에 조합해 현재 신청 가능한 활동을 찾게 했습니다.",
        },
        {
          title: "Application lookup",
          url: "https://suyeonn.dothome.co.kr/seoul-youth-center/applications.php",
          src: "/images/projects/case-studies/youth-live-applications.png",
          alt: "청소년과 평생교육 신청내역을 확인하는 화면",
          width: 1270,
          height: 714,
          caption: "청소년·평생교육 신청을 같은 조회 구조에서 구분해 확인할 수 있게 했습니다.",
        },
      ],
    },
    flow: {
      label: "Core user flow",
      title: ["목적을 찾고,", "조건을 좁히고,", "신청 내역까지 확인합니다."],
      items: [
        { number: "01", title: "Navigate", body: "기관·시설·프로그램·신청 메뉴에서 목적을 찾습니다.", outcome: "서비스 영역 선택" },
        { number: "02", title: "Filter", body: "모집 상태와 연령, 분야, 검색어로 프로그램을 좁힙니다.", outcome: "참여 후보 확인" },
        { number: "03", title: "Apply", body: "상세 정보와 일정을 확인하고 신청 정보를 입력합니다.", outcome: "프로그램 신청" },
        { number: "04", title: "Review", body: "청소년·평생교육 신청내역을 구분해 다시 확인합니다.", outcome: "신청 상태 확인" },
      ],
    },
    decisions: {
      label: "Implementation decisions",
      title: ["정보 구조를 먼저 세우고,", "프로그램 데이터를 같은 규칙으로 연결했습니다."],
      items: [
        {
          number: "01",
          title: "기관 메뉴와 신청 메뉴의 기준을 분리했습니다.",
          body: [
            "7개 상위 메뉴와 12개 청소년 활동 분야를 사용자의 정보 탐색 목적에 맞게 정리했습니다.",
            "프로그램 신청은 별도 경로로 묶어 청소년·평생교육·신청내역을 서로 오갈 수 있게 했습니다.",
          ],
        },
        {
          number: "02",
          title: "프로그램 상태와 필터를 데이터로 연결했습니다.",
          body: [
            "모집 상태, 연령, 분야, 검색어를 조합해 현재 조건에 맞는 카드만 보여주게 했습니다.",
            "프로그램 유형을 함께 저장해 신청내역 표에서도 청소년과 평생교육을 같은 규칙으로 구분했습니다.",
          ],
        },
        {
          number: "03",
          title: "공통 PHP 구조로 많은 정보 페이지를 관리했습니다.",
          body: [
            "헤더·전역 내비게이션·서브메뉴·신청 탭·푸터를 include로 나눴습니다.",
            "페이지별 데이터와 공통 함수를 분리해 목록, 상세, 신청 화면의 정보 위계를 유지했습니다.",
          ],
        },
      ],
    },
    accessibility: {
      label: "Accessibility",
      title: ["공공 서비스의 많은 경로를,", "키보드로도 놓치지 않게 했습니다."],
      items: [
        "메뉴와 본문으로 바로 이동하는 스킵 링크 제공",
        "탭과 슬라이더는 방향키를 지원하고 현재 항목만 탭 순서에 포함",
        "카드와 SNS 영역의 포커스 링이 잘리지 않도록 내부 여백과 overflow 조정",
        "접수 상태·필터·신청 결과를 텍스트와 의미 구조로 함께 전달",
      ],
    },
    components: {
      label: "Implementation structure",
      title: ["공통 내비게이션과 신청 데이터를 나눠,", "많은 페이지를 같은 규칙으로 관리했습니다."],
      items: [
        { title: "Global navigation / Submenu", body: "상위 7개 메뉴와 페이지별 하위 경로, 현재 위치와 신청 전용 탭을 공통 include로 구성했습니다.", icon: "navigation" },
        { title: "ProgramFilter / ProgramCard", body: "모집 상태·연령·분야·검색어를 조합하고 결과 수와 프로그램 카드에 같은 상태를 반영했습니다.", icon: "options" },
        { title: "ApplicationForm / Applications", body: "청소년·평생교육 신청 데이터를 유형과 상태로 구분하고 조회 화면의 공통 표 구조에 전달했습니다.", icon: "form" },
        { title: "Home modules / Data functions", body: "배너, 프로그램 슬라이더, 소식·일정·사진·SNS 영역을 데이터와 공통 함수 단위로 분리했습니다.", icon: "system" },
      ],
    },
    footerLabel: "SEOUL YOUTH CENTER · Public service",
  },
  {
    projectSlug: "fragfarm",
    metadata: {
      title: "FRAGFARM Case Study · Suyeonn",
      description:
        "브랜드 감성과 상품 탐색, 옵션, 장바구니, 주문, 회원, 리뷰와 문의 흐름을 함께 구현한 PHP 모바일 패션 커머스입니다.",
    },
    eyebrow: "04 · Mobile fashion commerce",
    lead:
      "브랜드의 빈티지한 인상은 유지하면서 상품 탐색과 옵션 선택, 장바구니·주문·회원·리뷰와 문의까지 실제 쇼핑 흐름을 구현했습니다.",
    titleSize: { vw: "12vw", max: "12rem" },
    theme: {
      accent: "#292a2c",
      deep: "#111113",
      soft: "#efefed",
      focus: "#e75b79",
      spotlightLight: "#f3c9d2",
    },
    hero: {
      src: "/images/projects/fragfarm-mobile-main.png",
      alt: "프레그팜 컬렉션 비주얼과 모바일 헤더로 구성한 홈",
      width: 390,
      height: 844,
      maxWidth: "520px",
      layout: "narrow",
      caption: "Brand mood · end-to-end mobile commerce",
    },
    meta: [
      { label: "Type", value: "Individual project" },
      { label: "Role", value: "UI 기획 · PHP 공통 구조·상품 데이터 · 쇼핑 흐름 구현" },
      { label: "Focus", value: "Mobile commerce · Shopping state · CRUD" },
      { label: "Stack", value: "PHP · MySQL · JavaScript · SCSS" },
    ],
    context: {
      label: "Project context",
      title: ["브랜드 무드는 유지하고,", "실제 쇼핑 흐름을 끝까지 연결했습니다."],
      body: "룩북처럼 보이는 홈에 머무르지 않고 상품 목록·검색·상세 옵션·장바구니·주문·회원·리뷰와 문의까지 모바일 커머스의 핵심 흐름을 구성했습니다. 공통 PHP include와 서비스 함수, 클라이언트 저장 상태를 역할별로 나눠 화면과 데이터가 함께 확장되게 했습니다.",
      note: "Scope · 상품 탐색 · 옵션·재고 · 장바구니·주문 · 회원 · 리뷰·문의 CRUD",
    },
    visuals: {
      label: "Live project / Commerce",
      title: ["상품은 이미지로 먼저 발견하고,", "선택 상태와 합계는 분명하게 보여줍니다."],
      items: [
        {
          title: "Product list",
          url: "https://suyeonn.dothome.co.kr/fragfarm-mobile/pages/product.php?category=new",
          src: "/images/projects/case-studies/frag-live-list.png",
          alt: "카테고리, 보기 방식과 정렬을 제공하는 프레그팜 상품 목록",
          width: 1270,
          height: 714,
          caption: "카테고리·정렬·보기 방식·페이지 상태를 유지하면서 상품 이미지를 중심으로 탐색하게 했습니다.",
        },
        {
          title: "Cart state",
          url: "https://suyeonn.dothome.co.kr/fragfarm-mobile/pages/cart.php",
          src: "/images/projects/case-studies/frag-live-cart.png",
          alt: "옵션, 수량, 할인과 주문 합계를 확인하는 프레그팜 장바구니",
          width: 1270,
          height: 714,
          caption: "선택 상품과 옵션·수량·할인·배송비를 연결하고 결제 전 총액을 바로 확인하게 했습니다.",
        },
      ],
    },
    flow: {
      label: "Core user flow",
      title: ["발견하고,", "비교하고,", "옵션을 고른 뒤 주문으로 이어집니다."],
      items: [
        { number: "01", title: "Discover", body: "컬렉션, 신상품, 세일과 리뷰 아카이브를 훑습니다.", outcome: "관심 상품 발견" },
        { number: "02", title: "Browse", body: "카테고리·정렬·보기 방식과 검색으로 목록을 좁힙니다.", outcome: "상품 후보 비교" },
        { number: "03", title: "Select", body: "상품 상세에서 옵션·재고·리뷰와 문의를 확인합니다.", outcome: "옵션 선택" },
        { number: "04", title: "Order", body: "장바구니 합계를 확인하고 주문·내역·후기로 이어갑니다.", outcome: "주문 흐름 완료" },
      ],
    },
    decisions: {
      label: "Implementation decisions",
      title: ["상품 상태는 한곳에서 정리하고,", "화면은 공통 구조로 조합했습니다."],
      items: [
        {
          number: "01",
          title: "목록 상태를 URL 규칙으로 정규화했습니다.",
          body: [
            "normalizeProductListState로 카테고리·정렬·보기 방식·페이지 값을 같은 형태로 정리했습니다.",
            "검색과 카테고리 이동 후에도 현재 조건을 쿼리에 남겨 탐색 맥락을 유지했습니다.",
          ],
        },
        {
          number: "02",
          title: "상품 카드와 쇼핑 상태를 재사용했습니다.",
          body: [
            "일반 목록, 신상품, 세일에서 같은 상품 카드 마크업과 상태별 라벨·가격·액션을 공유했습니다.",
            "shop-storage에서 장바구니·위시리스트·수량·합계를 관리해 여러 화면의 상태를 연결했습니다.",
          ],
        },
        {
          number: "03",
          title: "PHP 화면과 CRUD 로직의 역할을 나눴습니다.",
          body: [
            "헤더·푸터·상품 카드·목록 상태를 include와 공통 함수로 분리했습니다.",
            "리뷰와 문의는 서비스 함수와 action 파일로 나눠 작성·수정·삭제 흐름을 구성했습니다.",
          ],
        },
      ],
    },
    accessibility: {
      label: "Accessibility",
      title: ["모바일 쇼핑의 동적인 상태도,", "키보드와 화면낭독기에 남겼습니다."],
      items: [
        "스킵 링크와 페이지 이동 후 목록 시작점 포커스 복원",
        "옵션·로그인 패널은 포커스 트랩과 닫은 뒤 원래 위치 복귀 제공",
        "리뷰 슬라이더는 방향키 탐색을 지원하고 복제 카드는 접근성 트리에서 제외",
        "장바구니·위시·수량·결과 변화는 aria-live와 읽을 수 있는 상태 문구로 전달",
      ],
    },
    components: {
      label: "Implementation structure",
      title: ["상품·상태·서비스 로직을 나눠,", "쇼핑 흐름을 반복해서 조합했습니다."],
      items: [
        { title: "ProductCard / ListState", body: "상품 카드의 이미지·가격·리뷰·액션을 공유하고 필터·정렬·페이지 상태를 공통 함수로 처리했습니다.", icon: "product" },
        { title: "OptionDialog / ShopStorage", body: "옵션과 재고 선택을 장바구니·위시리스트·수량·합계 상태에 연결했습니다.", icon: "cart" },
        { title: "Header / MainLayout / Includes", body: "모바일 헤더와 메뉴, 푸터, 반복되는 페이지 골격을 PHP include와 공통 스타일로 구성했습니다.", icon: "layout" },
        { title: "Review / Question services", body: "리뷰와 상품 문의의 조회·작성·수정·삭제를 서비스 함수와 action 파일로 분리했습니다.", icon: "form" },
      ],
    },
    footerLabel: "FRAGFARM · Mobile fashion commerce",
  },
];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((study) => [study.projectSlug, study]),
);
