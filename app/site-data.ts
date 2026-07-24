export type Qualification = {
  name: string;
  slug: string;
  ctaUrl: string;
  examFocus: string;
  studyFlow: string[];
  learner: string;
  outcome: string;
  instructorNote: string;
};

export type Region = {
  name: string;
  fullName: string;
  slug: string;
  province: string;
  provinceShort: string;
  provinceSlug: string;
  kind: "구" | "시" | "군" | "특별자치시";
};

type ProvinceSeed = {
  name: string;
  short: string;
  slug: string;
  regions: string[];
};

export const qualifications: Qualification[] = [
  {
    name: "전기기사",
    slug: "electric-engineer-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/electric-engineer/",
    examFocus: "필기 5과목의 개념 연결과 실기 단답·계산 문제 대응",
    studyFlow: ["기초 전기수학", "필기 이론", "기출 반복", "실기 집중"],
    learner: "비전공자·직장인·전기 분야 취업 준비생",
    outcome: "필기에서 실기까지 끊기지 않는 학습 흐름",
    instructorNote: "전 과목 및 과목별 전문 강의를 학습 단계에 맞춰 선택",
  },
  {
    name: "전기산업기사",
    slug: "electric-industrial-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/electric-industrial/",
    examFocus: "응시자격 확인 이후 필기 과목 정리와 실기 계산·서술 대비",
    studyFlow: ["응시자격 점검", "핵심 개념", "빈출 기출", "실기 훈련"],
    learner: "전기 분야 실무자·전문대 전공자·경력 전환 준비생",
    outcome: "제한된 준비 기간을 고려한 시험 중심 학습",
    instructorNote: "개념 설명과 문제 적용을 함께 확인할 수 있는 강의 선택",
  },
  {
    name: "전기공사기사",
    slug: "electric-construction-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/electric-construction/",
    examFocus: "전기응용·공사재료를 포함한 필기와 견적·시공 실기 대비",
    studyFlow: ["과목 구조 파악", "이론 압축", "공사 기출", "실기 완성"],
    learner: "전기공사업 취업·이직 또는 기사 자격 확장을 준비하는 수험생",
    outcome: "전기기사와 겹치는 과목을 활용한 효율적인 준비",
    instructorNote: "공통 과목과 공사 특화 과목의 학습 비중을 구분",
  },
  {
    name: "전기기능사",
    slug: "electric-technician-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/electric-technician/",
    examFocus: "전기 기초 개념과 필기 객관식, 실기 작업 순서의 반복 숙달",
    studyFlow: ["용어 입문", "필기 핵심", "도면 이해", "작업형 준비"],
    learner: "전기를 처음 배우는 입문자·취업 준비생·기초 자격 취득 희망자",
    outcome: "낯선 전기 용어를 시험 문제와 작업 과정으로 연결",
    instructorNote: "비전공자 눈높이 설명과 반복 가능한 실습 안내를 확인",
  },
  {
    name: "소방설비기사",
    slug: "fire-protection-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/fire-protection/",
    examFocus: "전기·기계 분야 선택에 따른 필기 과목과 실기 서술형 대비",
    studyFlow: ["분야 선택", "원론·법규", "구조·원리", "실기 답안"],
    learner: "소방 안전 분야 취업·이직 또는 관련 자격 확장을 준비하는 수험생",
    outcome: "선택 분야에 맞는 과목 구성과 답안 작성 훈련",
    instructorNote: "소방 이론과 현장 실무 경험을 함께 갖춘 강의인지 확인",
  },
  {
    name: "공기업·NCS",
    slug: "public-enterprise-ncs-academy",
    ctaUrl: "https://engineerlab-guide.netlify.app/public-enterprise-ncs/",
    examFocus: "NCS 직업기초능력과 전기직 전공, 자소서·면접의 병행",
    studyFlow: ["기업·직무 분석", "NCS 기본", "전공 문제", "서류·면접"],
    learner: "전기직 공기업 취업을 준비하는 대학생·졸업생·이직 희망자",
    outcome: "필기 점수와 서류·면접 준비를 일정 안에서 함께 관리",
    instructorNote: "전공 강의와 기업·직무 맞춤 취업 콘텐츠의 연계 확인",
  },
];

const provinceSeeds: ProvinceSeed[] = [
  {
    name: "서울특별시",
    short: "서울",
    slug: "seoul",
    regions: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    name: "부산광역시",
    short: "부산",
    slug: "busan",
    regions: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  },
  {
    name: "대구광역시",
    short: "대구",
    slug: "daegu",
    regions: [
      "중구",
      "동구",
      "서구",
      "남구",
      "북구",
      "수성구",
      "달서구",
      "달성군",
      "군위군",
    ],
  },
  {
    name: "인천광역시",
    short: "인천",
    slug: "incheon",
    regions: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
  },
  {
    name: "광주광역시",
    short: "광주",
    slug: "gwangju",
    regions: ["동구", "서구", "남구", "북구", "광산구"],
  },
  {
    name: "대전광역시",
    short: "대전",
    slug: "daejeon",
    regions: ["동구", "중구", "서구", "유성구", "대덕구"],
  },
  {
    name: "울산광역시",
    short: "울산",
    slug: "ulsan",
    regions: ["중구", "남구", "동구", "북구", "울주군"],
  },
  {
    name: "세종특별자치시",
    short: "세종",
    slug: "sejong",
    regions: ["세종시"],
  },
  {
    name: "경기도",
    short: "경기",
    slug: "gyeonggi",
    regions: [
      "수원시",
      "성남시",
      "의정부시",
      "안양시",
      "부천시",
      "광명시",
      "평택시",
      "동두천시",
      "안산시",
      "고양시",
      "과천시",
      "구리시",
      "남양주시",
      "오산시",
      "시흥시",
      "군포시",
      "의왕시",
      "하남시",
      "용인시",
      "파주시",
      "이천시",
      "안성시",
      "김포시",
      "화성시",
      "광주시",
      "양주시",
      "포천시",
      "여주시",
      "연천군",
      "가평군",
      "양평군",
    ],
  },
  {
    name: "강원특별자치도",
    short: "강원",
    slug: "gangwon",
    regions: [
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "태백시",
      "속초시",
      "삼척시",
      "홍천군",
      "횡성군",
      "영월군",
      "평창군",
      "정선군",
      "철원군",
      "화천군",
      "양구군",
      "인제군",
      "고성군",
      "양양군",
    ],
  },
  {
    name: "충청북도",
    short: "충북",
    slug: "chungbuk",
    regions: [
      "청주시",
      "충주시",
      "제천시",
      "보은군",
      "옥천군",
      "영동군",
      "증평군",
      "진천군",
      "괴산군",
      "음성군",
      "단양군",
    ],
  },
  {
    name: "충청남도",
    short: "충남",
    slug: "chungnam",
    regions: [
      "천안시",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "논산시",
      "계룡시",
      "당진시",
      "금산군",
      "부여군",
      "서천군",
      "청양군",
      "홍성군",
      "예산군",
      "태안군",
    ],
  },
  {
    name: "전북특별자치도",
    short: "전북",
    slug: "jeonbuk",
    regions: [
      "전주시",
      "군산시",
      "익산시",
      "정읍시",
      "남원시",
      "김제시",
      "완주군",
      "진안군",
      "무주군",
      "장수군",
      "임실군",
      "순창군",
      "고창군",
      "부안군",
    ],
  },
  {
    name: "전라남도",
    short: "전남",
    slug: "jeonnam",
    regions: [
      "목포시",
      "여수시",
      "순천시",
      "나주시",
      "광양시",
      "담양군",
      "곡성군",
      "구례군",
      "고흥군",
      "보성군",
      "화순군",
      "장흥군",
      "강진군",
      "해남군",
      "영암군",
      "무안군",
      "함평군",
      "영광군",
      "장성군",
      "완도군",
      "진도군",
      "신안군",
    ],
  },
  {
    name: "경상북도",
    short: "경북",
    slug: "gyeongbuk",
    regions: [
      "포항시",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "경산시",
      "의성군",
      "청송군",
      "영양군",
      "영덕군",
      "청도군",
      "고령군",
      "성주군",
      "칠곡군",
      "예천군",
      "봉화군",
      "울진군",
      "울릉군",
    ],
  },
  {
    name: "경상남도",
    short: "경남",
    slug: "gyeongnam",
    regions: [
      "창원시",
      "진주시",
      "통영시",
      "사천시",
      "김해시",
      "밀양시",
      "거제시",
      "양산시",
      "의령군",
      "함안군",
      "창녕군",
      "고성군",
      "남해군",
      "하동군",
      "산청군",
      "함양군",
      "거창군",
      "합천군",
    ],
  },
  {
    name: "제주특별자치도",
    short: "제주",
    slug: "jeju",
    regions: ["제주시", "서귀포시"],
  },
];

function regionKind(name: string): Region["kind"] {
  if (name === "세종시") return "특별자치시";
  if (name.endsWith("구")) return "구";
  if (name.endsWith("군")) return "군";
  return "시";
}

const regionNameCounts = provinceSeeds
  .flatMap((province) => province.regions)
  .reduce<Record<string, number>>((counts, name) => {
    counts[name] = (counts[name] ?? 0) + 1;
    return counts;
  }, {});

export const regions: Region[] = provinceSeeds.flatMap((province) =>
  province.regions.map((name) => ({
    name,
    fullName:
      regionNameCounts[name] > 1 ? `${province.short} ${name}` : name,
    slug: `${province.short}-${name}`,
    province: province.name,
    provinceShort: province.short,
    provinceSlug: province.slug,
    kind: regionKind(name),
  })),
);

export const provinces = provinceSeeds.map((province) => ({
  name: province.name,
  short: province.short,
  slug: province.slug,
  count: province.regions.length,
}));

export const secretCodeUrl =
  "https://www.engineerlab.co.kr/ee/promotion/2025/partner/index.php?partnerID=e7288";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://engineerlab-academy-guide.vercel.app"
).replace(/\/+$/, "");

export function findRegion(slug: string) {
  const decoded = decodeURIComponent(slug);
  return regions.find((region) => region.slug === decoded);
}

export function findQualification(slug: string) {
  return qualifications.find((qualification) => qualification.slug === slug);
}

export function stableVariant(seed: string, modulo: number) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return hash % modulo;
}
