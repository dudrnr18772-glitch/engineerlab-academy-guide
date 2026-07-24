import type { Qualification, Region } from "./site-data";
import { stableVariant } from "./site-data";

type Criterion = {
  title: string;
  text: string;
};

type PlanStep = {
  title: string;
  detail: string;
};

type EditorialProfile = {
  angle: string;
  outcome: string;
  courseDescription: string;
  instructorDescription: string;
  stages: PlanStep[];
  criteria: Criterion[];
  questions: string[];
  faq: Array<{ question: string; answer: string }>;
};

type StudyScenario = {
  label: string;
  learner: string;
  availability: string;
  rhythm: string;
  priority: string;
  risk: string;
};

type LocalProfile = {
  heading: string;
  body: string;
  check: string;
};

export type DetailPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  heroLead: string;
  intro: string;
  scenario: StudyScenario;
  localHeading: string;
  localBody: string;
  localCheck: string;
  localRows: Array<{ title: string; text: string }>;
  criteriaHeading: string;
  criteriaIntro: string;
  criteria: Criterion[];
  planHeading: string;
  planIntro: string;
  planSteps: PlanStep[];
  onlineHeading: string;
  onlineBody: string;
  onlineChecks: string[];
  questions: string[];
  faq: Array<{ question: string; answer: string }>;
  sectionOrder: Array<"local" | "criteria" | "plan" | "online">;
};

const editorialProfiles: Record<string, EditorialProfile> = {
  "electric-engineer-academy": {
    angle:
      "회로이론·제어공학, 전력공학, 전기기기, 전기자기학, 설비기준을 실기 계산과 연결하는 과정",
    outcome: "필기 다섯 과목의 개념을 실기 답안까지 이어가는 것",
    courseDescription:
      "전기기사 과정은 과목별 개념을 따로 암기하기보다 회로와 기기, 전력의 관계를 이해한 뒤 기출과 실기로 확장하는 흐름이 중요합니다.",
    instructorDescription:
      "엔지니어랩에서는 김상훈·조경필 강사의 전 과목 과정과 이진우·이슬찬·김성민 강사의 과목별 강의를 학습 단계에 맞춰 살펴볼 수 있습니다.",
    stages: [
      {
        title: "전기수학·회로 진단",
        detail:
          "복소수, 삼각함수, 회로 계산에서 막히는 지점을 먼저 찾아 필기 진도를 따라갈 기초를 만듭니다.",
      },
      {
        title: "필기 5과목 연결",
        detail:
          "과목별 핵심 개념을 정리하되 회로·기기·전력에서 반복되는 원리와 공식을 함께 묶어 학습합니다.",
      },
      {
        title: "회차별 기출 반복",
        detail:
          "맞힌 문제도 풀이 근거를 확인하고, 계산 실수와 개념 혼동을 구분해 오답 기록을 남깁니다.",
      },
      {
        title: "실기 단답·계산 전환",
        detail:
          "필기 합격 뒤 시작하지 말고 단답 용어와 계산형 풀이 순서를 미리 익혀 실기 공백을 줄입니다.",
      },
    ],
    criteria: [
      {
        title: "5과목 완주 구조",
        text: "특정 과목만 길어지지 않도록 시험일까지 필기 전 과목을 끝내는 진도표가 있는지 확인하세요.",
      },
      {
        title: "계산 과정 설명",
        text: "공식 암기만 제시하지 않고 단위, 부호, 식의 전개 과정을 설명하는 수업인지 살펴보세요.",
      },
      {
        title: "실기 전환 시점",
        text: "필기 수업이 끝난 뒤 실기 개강을 기다리지 않도록 연계 일정과 선행 자료를 확인하세요.",
      },
      {
        title: "과목별 보완",
        text: "회로·기기·전력 등 취약 과목만 다시 들을 수 있는 복습 수단과 질문 방식을 비교하세요.",
      },
      {
        title: "기출 해설 밀도",
        text: "정답 확인을 넘어 오답 선택지와 계산 실수까지 짚어주는지 샘플 수업에서 확인하세요.",
      },
      {
        title: "비전공자 진입",
        text: "전기 용어와 기초 수학을 별도로 보완할 입문 과정이 있는지 확인하세요.",
      },
    ],
    questions: [
      "필기 5과목의 전체 진도는 목표 시험 몇 주 전에 끝나나요?",
      "전기수학이나 회로 기초가 부족할 때 이용할 입문 수업이 있나요?",
      "필기 수강생이 실기 과정으로 이어질 때 별도 비용과 일정은 어떻게 되나요?",
      "과목별 질문 답변과 오답 상담은 어떤 방식으로 받을 수 있나요?",
      "기출문제는 연도별·단원별 중 어떤 순서로 다루나요?",
      "결석한 수업을 시험 전까지 다시 볼 수 있나요?",
    ],
    faq: [
      {
        question: "비전공자도 전기기사 공부를 시작할 수 있나요?",
        answer:
          "가능하지만 전기수학과 회로 기초를 건너뛰면 이후 과목에서 같은 부분이 반복해 막힐 수 있습니다. 입문 학습 시간을 먼저 확보하고 필기 진도를 시작하는 편이 안정적입니다.",
      },
      {
        question: "전기기사 실기는 언제부터 준비하는 것이 좋나요?",
        answer:
          "필기 공부 중에도 실기에서 반복되는 용어와 계산 유형을 가볍게 접해두는 것이 좋습니다. 본격적인 답안 연습은 필기 핵심 개념과 기출 풀이가 어느 정도 정리된 뒤 시작하세요.",
      },
    ],
  },
  "electric-industrial-academy": {
    angle:
      "응시자격을 먼저 확인하고 필기 핵심 과목과 실기 계산·서술을 준비하는 과정",
    outcome: "응시 가능 시점과 시험 준비 일정을 어긋나지 않게 맞추는 것",
    courseDescription:
      "전기산업기사는 수업을 고르기 전에 응시자격과 목표 회차를 확정하고, 필기 개념과 실기 준비 시간을 역산해야 불필요한 공백을 줄일 수 있습니다.",
    instructorDescription:
      "엔지니어랩의 전기 분야 강의는 전 과목 흐름과 과목별 보완 수업을 함께 살펴볼 수 있어 현재 수준에 맞춘 구성이 가능합니다.",
    stages: [
      {
        title: "응시자격·회차 확인",
        detail:
          "학력, 경력 등 본인의 응시 조건을 공식 안내에서 확인하고 실제 응시 가능한 시험 회차를 정합니다.",
      },
      {
        title: "필기 핵심 개념 정리",
        detail:
          "회로와 전기기기처럼 계산 비중이 있는 과목은 공식의 의미와 적용 조건을 함께 익힙니다.",
      },
      {
        title: "빈출 유형 압축",
        detail:
          "기출에서 반복되는 유형을 우선 정리하고 오답 원인이 개념인지 계산인지 구분합니다.",
      },
      {
        title: "실기 풀이 훈련",
        detail:
          "계산식과 단위를 빠뜨리지 않는 답안 순서를 만들고 서술형 표현을 반복해 적어봅니다.",
      },
    ],
    criteria: [
      {
        title: "응시자격 상담",
        text: "등록 권유보다 먼저 응시 가능한 회차를 확인하고 준비 일정을 설명하는지 살펴보세요.",
      },
      {
        title: "필기 압축 진도",
        text: "준비 기간에 맞춰 빈출 개념과 기출을 어느 순서로 끝내는지 확인하세요.",
      },
      {
        title: "실기 계산 첨삭",
        text: "정답뿐 아니라 계산식, 단위, 답안 작성 순서를 교정받을 수 있는지 질문하세요.",
      },
      {
        title: "기사 과정과 구분",
        text: "전기기사 공통 자료를 그대로 쓰는지, 산업기사 출제 범위와 난도에 맞춘 설명인지 비교하세요.",
      },
      {
        title: "재수강 범위",
        text: "목표 회차에 불합격했을 때 다시 들을 수 있는 기간과 추가 비용을 확인하세요.",
      },
      {
        title: "기초 보완 자료",
        text: "수학과 회로 기초가 약한 학습자를 위한 선행 자료가 있는지 확인하세요.",
      },
    ],
    questions: [
      "제 응시자격으로 가장 빠르게 지원할 수 있는 시험 회차는 언제인가요?",
      "산업기사 출제 수준에 맞춘 별도 교재와 기출 과정이 있나요?",
      "실기 계산 문제의 답안 과정을 첨삭받을 수 있나요?",
      "필기와 실기를 한 과정으로 등록할 때 수강 기간은 어떻게 이어지나요?",
      "직장인이 진도를 놓쳤을 때 이용할 보강 수업이 있나요?",
      "목표 회차가 바뀌면 수강 기간을 조정할 수 있나요?",
    ],
    faq: [
      {
        question: "전기산업기사는 응시자격부터 확인해야 하나요?",
        answer:
          "그렇습니다. 학력과 경력 등 조건에 따라 응시 가능 시점이 달라질 수 있으므로 반드시 공식 자격 안내에서 본인의 조건을 확인한 뒤 수강 일정을 정하세요.",
      },
      {
        question: "전기기사 강의로 산업기사를 함께 준비해도 되나요?",
        answer:
          "공통 개념은 활용할 수 있지만 출제 범위와 문제 수준, 목표 일정이 다를 수 있습니다. 산업기사 기출과 실기 유형을 별도로 다루는지 확인하는 편이 좋습니다.",
      },
    ],
  },
  "electric-construction-academy": {
    angle:
      "공통 전기 과목과 전기응용·공사재료, 견적·시공 실기를 나누어 준비하는 과정",
    outcome: "전기기사와 겹치는 과목은 활용하고 공사 특화 영역에 시간을 집중하는 것",
    courseDescription:
      "전기공사기사는 전기기사와 겹치는 부분만 보고 접근하면 공사재료와 견적, 시공 관련 문제에서 학습 공백이 생길 수 있습니다.",
    instructorDescription:
      "엔지니어랩에서는 전기 전 과목 강의를 바탕으로 공사 분야에 필요한 이론과 문제풀이를 이어서 검토할 수 있습니다.",
    stages: [
      {
        title: "공통·특화 과목 구분",
        detail:
          "이미 공부한 전기 과목과 새로 익혀야 할 공사재료·전기응용 범위를 나누어 시간을 배분합니다.",
      },
      {
        title: "공사 이론 압축",
        detail:
          "재료의 용도와 공사 방식은 표와 도면을 함께 보며 현장 용어와 시험 표현을 연결합니다.",
      },
      {
        title: "공사 기출 분석",
        detail:
          "반복 출제되는 계산과 시공 유형을 묶고, 전기기사 기출과 다른 출제 관점을 구분합니다.",
      },
      {
        title: "견적·시공 실기",
        detail:
          "계산 순서와 공사 관련 단답을 답안 형식에 맞춰 쓰며 시간 안에 마무리하는 연습을 합니다.",
      },
    ],
    criteria: [
      {
        title: "공사 특화 과목",
        text: "전기응용과 공사재료를 별도 비중으로 다루는지 전체 시간표에서 확인하세요.",
      },
      {
        title: "기사 병행 설계",
        text: "전기기사와 함께 준비한다면 공통 과목을 중복 수강하지 않는 구성인지 비교하세요.",
      },
      {
        title: "견적 계산 연습",
        text: "실기 견적 문제를 풀이 순서와 단위까지 반복하는 과정인지 살펴보세요.",
      },
      {
        title: "시공 용어 설명",
        text: "실무 경험이 적어도 공사 방식과 자재 용도를 이해할 수 있는 설명인지 확인하세요.",
      },
      {
        title: "답안 작성 교정",
        text: "서술형 표현과 계산 과정에서 감점될 부분을 구체적으로 확인할 수 있는지 질문하세요.",
      },
      {
        title: "시험 회차 배치",
        text: "기사 자격을 병행할 경우 필기·실기 일정이 겹치지 않게 계획을 조정해주는지 확인하세요.",
      },
    ],
    questions: [
      "전기기사와 겹치는 과목은 어떤 방식으로 줄여 들을 수 있나요?",
      "전기응용과 공사재료의 수업 비중은 전체 과정에서 어느 정도인가요?",
      "실기 견적 문제를 직접 풀고 첨삭받는 시간이 있나요?",
      "공사 현장 경험이 없어도 이해할 수 있는 도면·자재 설명이 포함되나요?",
      "필기 합격 뒤 실기 과정은 바로 이어지나요?",
      "단답 자료와 모의고사는 수강 과정에 포함되나요?",
    ],
    faq: [
      {
        question: "전기기사 취득 후 전기공사기사를 준비하면 유리한가요?",
        answer:
          "공통 과목의 개념과 문제풀이 경험을 활용할 수 있어 학습 부담을 줄이는 데 도움이 됩니다. 다만 공사재료와 견적·시공 등 특화 영역은 별도 계획이 필요합니다.",
      },
      {
        question: "전기공사기사 실기에서 무엇을 중점적으로 봐야 하나요?",
        answer:
          "견적과 시공 관련 계산, 단답 표현을 답안 형식에 맞게 작성하는 연습이 중요합니다. 알고 있는 내용도 계산 과정이나 단위를 빠뜨리지 않도록 반복해서 써보세요.",
      },
    ],
  },
  "electric-technician-academy": {
    angle:
      "전기 용어와 필기 객관식을 익힌 뒤 도면 해석과 작업 순서를 반복하는 입문 과정",
    outcome: "처음 접하는 전기 개념을 실제 문제와 작업 단계로 바꾸는 것",
    courseDescription:
      "전기기능사는 전기를 처음 배우는 수험생이 많은 만큼, 어려운 이론을 오래 붙잡기보다 필기 핵심과 작업 순서를 단계적으로 반복하는 방식이 잘 맞습니다.",
    instructorDescription:
      "엔지니어랩에서는 비전공자 눈높이의 전 과목 강의를 제공하는 조경필 강사의 과정 등을 통해 필기 개념을 먼저 정리할 수 있습니다.",
    stages: [
      {
        title: "전기 용어 입문",
        detail:
          "전압·전류·저항과 기본 공구 명칭을 익히고 회로 기호를 읽는 연습부터 시작합니다.",
      },
      {
        title: "필기 핵심 문제",
        detail:
          "자주 나오는 개념을 짧게 정리한 뒤 객관식 문제로 바로 확인하며 낯선 표현에 익숙해집니다.",
      },
      {
        title: "도면·배선 순서",
        detail:
          "도면에서 기구와 접속점을 찾고 작업 순서를 말로 설명할 수 있을 때까지 반복합니다.",
      },
      {
        title: "작업형 시간 훈련",
        detail:
          "안전 수칙을 지키면서 제한 시간 안에 결선과 점검을 마치는 연습을 여러 번 진행합니다.",
      },
    ],
    criteria: [
      {
        title: "초보자 설명",
        text: "전기 용어를 이미 안다고 가정하지 않고 기호와 단위부터 설명하는지 샘플 수업을 보세요.",
      },
      {
        title: "실습 장비 시간",
        text: "수강생 한 명이 실제 장비를 사용하는 시간과 반복 실습 횟수를 확인하세요.",
      },
      {
        title: "도면 해석 과정",
        text: "완성 회로를 보여주는 데 그치지 않고 도면에서 작업 순서를 찾는 방법을 다루는지 살펴보세요.",
      },
      {
        title: "안전·오류 점검",
        text: "결선 오류를 찾는 순서와 작업 중 지켜야 할 안전 기준을 반복해서 익히는지 확인하세요.",
      },
      {
        title: "보충 실습",
        text: "정규 수업 외에 부족한 작업을 다시 연습할 시간과 장비가 제공되는지 질문하세요.",
      },
      {
        title: "필기·실기 간격",
        text: "필기 합격 뒤 작업형 연습이 끊기지 않도록 실기 개강 시기와 기간을 확인하세요.",
      },
    ],
    questions: [
      "전기를 처음 배우는 사람을 위한 기초 수업이 별도로 있나요?",
      "실기 장비는 한 명이 얼마나 오래 사용할 수 있나요?",
      "정규 시간 외 보충 실습이 가능한가요?",
      "공구와 재료 비용은 수강료에 포함되나요?",
      "도면을 처음 읽는 단계부터 작업 순서를 설명하나요?",
      "실기 모의시험은 몇 차례 진행하나요?",
    ],
    faq: [
      {
        question: "전기기능사는 비전공자가 바로 시작해도 되나요?",
        answer:
          "기초 용어부터 배우면 시작할 수 있습니다. 필기에서 회로 기호와 기본 개념을 익히고, 실기는 도면과 작업 순서를 여러 번 반복할 시간을 확보하세요.",
      },
      {
        question: "전기기능사 실기는 온라인 강의만으로 가능한가요?",
        answer:
          "도면 이해와 작업 순서 예습에는 도움이 되지만 실제 공구와 장비를 다루는 반복 연습이 필요합니다. 실습 장소와 장비 이용 시간을 별도로 확보하는 편이 안전합니다.",
      },
    ],
  },
  "fire-protection-academy": {
    angle:
      "전기·기계 분야를 구분하고 소방원론·법규·구조원리와 실기 답안을 이어가는 과정",
    outcome: "선택 분야에 맞는 과목과 답안 연습을 한 흐름으로 준비하는 것",
    courseDescription:
      "소방설비기사는 전기와 기계 분야의 과목 및 실기 유형이 다르므로, 분야 선택을 먼저 확정한 뒤 공통 과목과 전공 영역의 비중을 나눠야 합니다.",
    instructorDescription:
      "엔지니어랩에서는 소방 전기 분야의 심승아 강사와 전기·기계 분야를 다루는 이종오 강사의 강의를 선택 분야에 맞춰 살펴볼 수 있습니다.",
    stages: [
      {
        title: "전기·기계 분야 선택",
        detail:
          "보유 전공과 실무 방향, 추가 자격 계획을 고려해 응시 분야를 먼저 정합니다.",
      },
      {
        title: "원론·법규 기반",
        detail:
          "공통 개념과 법규 수치를 단순 암기하지 말고 설비의 목적과 연결해 정리합니다.",
      },
      {
        title: "구조·원리 이해",
        detail:
          "선택 분야의 설비 구성과 작동 과정을 도식으로 확인하며 계산과 용어를 함께 익힙니다.",
      },
      {
        title: "실기 서술·계산",
        detail:
          "채점 기준에 맞는 핵심 표현과 계산 과정을 제한 시간 안에 쓰는 연습을 반복합니다.",
      },
    ],
    criteria: [
      {
        title: "분야별 강의 구분",
        text: "소방 전기와 기계 과정의 강사, 교재, 실기 일정이 명확히 나뉘어 있는지 확인하세요.",
      },
      {
        title: "법규 업데이트",
        text: "수강 기간 중 개정 사항을 어떤 방식으로 반영하고 공지하는지 질문하세요.",
      },
      {
        title: "구조·원리 도식",
        text: "설비 작동 과정을 그림과 계통도로 설명해 암기 부담을 줄이는 수업인지 살펴보세요.",
      },
      {
        title: "실기 답안 표현",
        text: "서술형 핵심어와 계산식을 직접 쓰고 피드백받는 과정이 있는지 확인하세요.",
      },
      {
        title: "현장 사례 활용",
        text: "설비를 처음 접하는 수험생도 이해할 수 있도록 실제 작동 맥락을 설명하는지 비교하세요.",
      },
      {
        title: "공통 과목 재활용",
        text: "다른 분야를 추가 취득할 때 공통 과목과 기존 학습 자료를 어떻게 활용할지 확인하세요.",
      },
    ],
    questions: [
      "소방 전기와 기계 중 제 전공·경력에 맞는 분야는 무엇인가요?",
      "법규 개정 내용은 수강 중 어떤 방식으로 업데이트되나요?",
      "실기 서술형 답안을 직접 첨삭받을 수 있나요?",
      "설비 구조를 도식이나 현장 사례로 설명하는 수업이 포함되나요?",
      "필기와 실기 교재는 분야별로 구분되어 있나요?",
      "한 분야 취득 후 다른 분야를 준비할 때 활용할 수 있는 과정이 있나요?",
    ],
    faq: [
      {
        question: "소방설비기사 전기와 기계 중 무엇을 선택해야 하나요?",
        answer:
          "현재 전공과 실무 경험, 취업 방향, 추후 추가 취득 계획을 함께 보세요. 두 분야의 과목 구성과 실기 유형을 먼저 비교한 뒤 자신이 지속해서 공부할 수 있는 쪽을 정하는 편이 좋습니다.",
      },
      {
        question: "소방 법규는 어떻게 공부하는 것이 효율적인가요?",
        answer:
          "수치만 따로 외우기보다 설비의 목적과 적용 대상을 함께 묶어 정리하세요. 개정 가능성이 있으므로 시험을 준비하는 시점의 최신 기준도 확인해야 합니다.",
      },
    ],
  },
  "public-enterprise-ncs-academy": {
    angle:
      "지원 기업을 정하고 NCS 직업기초, 전기직 전공, 자기소개서와 면접을 병행하는 취업 과정",
    outcome: "기업별 전형 일정 안에서 필기와 서류·면접 준비를 함께 끝내는 것",
    courseDescription:
      "공기업·NCS 준비는 문제풀이만 오래 하는 것보다 지원 기업의 전형과 전공 반영 범위를 먼저 좁히고, 서류와 면접까지 주간 계획에 넣는 방식이 효율적입니다.",
    instructorDescription:
      "엔지니어랩에서는 김상훈 강사의 전기직 전공 강의와 윤성훈 강사의 기업·직무 맞춤 자기소개서·면접 콘텐츠를 함께 살펴볼 수 있습니다.",
    stages: [
      {
        title: "기업·직무 범위 설정",
        detail:
          "채용 일정과 필기 과목, 전공 반영 비중을 확인해 우선 지원할 기업군을 정합니다.",
      },
      {
        title: "NCS 영역별 진단",
        detail:
          "모의 문제로 시간 부족과 오답이 많은 영역을 구분하고 필요한 영역부터 학습합니다.",
      },
      {
        title: "전기직 전공 문제",
        detail:
          "기사 수준 개념을 채용형 문제 속도에 맞게 다시 정리하고 계산 문제 풀이 시간을 줄입니다.",
      },
      {
        title: "서류·면접 연결",
        detail:
          "직무 경험과 전공 역량을 자기소개서에 정리하고 예상 질문에 근거를 들어 답하는 연습을 합니다.",
      },
    ],
    criteria: [
      {
        title: "기업별 범위",
        text: "지원 기업에 따라 NCS 영역과 전공 출제 범위를 구분해 학습 계획을 세워주는지 확인하세요.",
      },
      {
        title: "시간 관리 훈련",
        text: "정답률뿐 아니라 문항별 풀이 시간과 건너뛸 문제를 판단하는 연습이 포함되는지 살펴보세요.",
      },
      {
        title: "전기직 전공 연계",
        text: "자격증 이론을 채용 필기 유형과 속도에 맞게 전환하는 문제풀이가 있는지 확인하세요.",
      },
      {
        title: "서류 피드백",
        text: "기업명만 바꾼 자기소개서가 아니라 직무 경험의 근거와 문장 구조를 교정받는지 비교하세요.",
      },
      {
        title: "면접 실전성",
        text: "지원 기업과 직무를 반영한 꼬리 질문 및 답변 피드백이 가능한지 질문하세요.",
      },
      {
        title: "채용 일정 관리",
        text: "여러 기업의 접수·필기·면접 일정이 겹칠 때 우선순위를 조정할 수 있는지 확인하세요.",
      },
    ],
    questions: [
      "지원 기업별 NCS 영역과 전기직 전공 범위를 구분해주나요?",
      "문제풀이 시간과 오답 영역을 진단하는 모의시험이 있나요?",
      "전기기사 공부 내용을 공기업 전공 필기에 어떻게 연결하나요?",
      "자기소개서는 기업·직무별로 피드백받을 수 있나요?",
      "면접에서 전공 질문과 경험 질문을 함께 연습하나요?",
      "채용 일정이 겹칠 때 학습 우선순위를 조정해주나요?",
    ],
    faq: [
      {
        question: "공기업 NCS와 전기직 전공은 함께 준비해야 하나요?",
        answer:
          "지원 기업의 필기 구성을 먼저 확인해야 합니다. 두 영역을 모두 반영한다면 한쪽을 끝낸 뒤 다른 쪽을 시작하기보다 주간 시간을 나누어 병행하는 편이 공백을 줄일 수 있습니다.",
      },
      {
        question: "전기기사 자격증 공부가 공기업 전공 필기에 도움이 되나요?",
        answer:
          "핵심 개념을 이해하는 데 도움이 되지만 채용 필기는 문제 구성과 요구 속도가 다를 수 있습니다. 지원 기업의 출제 범위에 맞춘 전공 문제풀이를 별도로 진행하세요.",
      },
    ],
  },
};

const studyScenarios: StudyScenario[] = [
  {
    label: "평일 저녁형",
    learner: "퇴근 뒤 일정한 시간을 확보할 수 있는 직장인",
    availability: "평일 저녁 60~90분과 주말 한 차례",
    rhythm: "짧은 이론 학습 뒤 같은 날 10~20문제로 이해도를 확인",
    priority: "결석 시 다시보기와 모바일 복습",
    risk: "야간 수업 뒤 복습 시간이 사라지는 일정",
  },
  {
    label: "주말 집중형",
    learner: "평일 일정이 불규칙하고 주말에 긴 시간을 낼 수 있는 수험생",
    availability: "주말 반나절과 평일 짧은 오답 복습",
    rhythm: "주말에 새 단원을 학습하고 평일에는 기출·암기만 유지",
    priority: "긴 수업의 진도량보다 평일 복습 자료",
    risk: "한 주를 건너뛰면 진도가 크게 벌어지는 구성",
  },
  {
    label: "출퇴근 분산형",
    learner: "이동 시간과 자투리 시간을 학습에 활용하려는 직장인",
    availability: "출퇴근 중 개념 복습과 귀가 후 문제풀이",
    rhythm: "모바일로 이론을 나누어 듣고 책상에서는 계산·답안에 집중",
    priority: "배속, 이어보기, 모바일 재생",
    risk: "보기만 하고 직접 문제를 풀지 않는 학습",
  },
  {
    label: "비전공 입문형",
    learner: "관련 용어와 계산이 아직 낯선 비전공자",
    availability: "기초 과정에 별도 시간을 배정한 단계형 일정",
    rhythm: "용어·공식의 의미를 익힌 뒤 쉬운 문제부터 난도를 높이는 방식",
    priority: "입문 강의와 질문 답변",
    risk: "기초를 생략하고 기출 정답만 외우는 진도",
  },
  {
    label: "단기 회차형",
    learner: "목표 시험 회차까지 준비 기간이 비교적 짧은 수험생",
    availability: "매일 일정한 학습 시간과 주간 모의 점검",
    rhythm: "빈출 개념과 기출을 먼저 끝내고 취약 영역을 압축 보완",
    priority: "목표 회차에 맞춘 종강일과 실전 훈련",
    risk: "완벽한 이론 이해에 머물러 기출 시작이 늦어지는 일정",
  },
  {
    label: "재도전 보완형",
    learner: "이전 시험의 점수와 오답 기록을 갖고 다시 준비하는 수험생",
    availability: "취약 과목 중심의 선택 학습과 주기적인 전 범위 점검",
    rhythm: "이미 아는 단원은 빠르게 확인하고 반복 오답에 시간을 집중",
    priority: "과목별 선택 수강과 모의시험",
    risk: "처음부터 모든 강의를 다시 들어 취약점 보완이 늦어지는 방식",
  },
  {
    label: "실기 강화형",
    learner: "필기 개념은 갖췄지만 계산·서술·작업에서 막히는 수험생",
    availability: "직접 쓰고 풀거나 작업하는 시간을 우선 확보한 일정",
    rhythm: "완성 답안을 보기 전에 먼저 풀고 피드백 뒤 같은 유형을 재풀이",
    priority: "첨삭, 실습, 제한 시간 훈련",
    risk: "해설 시청을 실제 답안 연습으로 착각하는 학습",
  },
  {
    label: "취업 병행형",
    learner: "자격 준비와 입사지원 일정을 함께 관리해야 하는 취업 준비생",
    availability: "자격 학습일과 서류·면접 준비일을 나눈 주간 일정",
    rhythm: "시험 진도와 채용 일정을 한 달 단위로 함께 점검",
    priority: "자격 과정과 취업 콘텐츠의 연결",
    risk: "채용 공고가 나올 때마다 학습 계획이 중단되는 일정",
  },
];

const localProfiles: Record<Region["kind"], LocalProfile[]> = {
  구: [
    {
      heading: "생활 동선 안에서 끝까지 다닐 수 있는지",
      body: "구 안의 거리만 보지 말고 실제 수업 시작 시각의 이동과 귀가 시간을 함께 재보세요.",
      check: "왕복 이동, 수업, 귀가 후 복습까지 한 저녁 안에 가능한지 확인",
    },
    {
      heading: "인접 지역까지 넓혔을 때 얻는 것과 잃는 것",
      body: "선택지가 늘어도 이동 시간이 길어지면 평일 문제풀이 시간이 먼저 줄어듭니다.",
      check: "가까운 반과 인접 지역 반의 주간 이동 시간을 같은 기준으로 비교",
    },
    {
      heading: "야간반 종료 뒤 실제 귀가 시간",
      body: "시간표의 종료 시각보다 환승과 대기 시간을 포함한 귀가 시각이 수강 지속성을 좌우합니다.",
      check: "수업이 있는 날에도 최소 복습 시간을 남길 수 있는지 계산",
    },
    {
      heading: "직장·학교에서 학원까지 이어지는 경로",
      body: "집에서의 거리보다 평소 출발 지점에서 바로 이동할 수 있는지가 더 중요할 수 있습니다.",
      check: "평일 출발지와 주말 출발지를 나누어 통학 경로 확인",
    },
  ],
  시: [
    {
      heading: "같은 시 안에서도 달라지는 왕복 시간",
      body: "주소상 거리가 가까워도 수업 시간대의 교통과 환승에 따라 실제 이동 부담은 달라집니다.",
      check: "평일 저녁과 주말 수업의 왕복 시간을 각각 확인",
    },
    {
      heading: "인근 도시 학원까지 비교할 때의 기준",
      body: "강사진과 개강 횟수만 보지 말고 한 달 동안 이동에 쓰는 총시간까지 비교하세요.",
      check: "주간 수업 횟수에 왕복 시간을 곱해 온라인 학습과 비교",
    },
    {
      heading: "필기와 실기의 통학 방식을 다르게",
      body: "필기는 온라인으로 반복하고 실기나 첨삭이 필요한 시기에만 현장 수업을 이용할 수도 있습니다.",
      check: "각 시험 단계에서 현장 피드백이 꼭 필요한 범위를 구분",
    },
    {
      heading: "개강일보다 중요한 종강 시점",
      body: "수업이 시작되는 날짜뿐 아니라 목표 시험 전에 복습 기간이 남는지 확인해야 합니다.",
      check: "종강 뒤 기출·모의시험에 쓸 수 있는 주 수를 계산",
    },
  ],
  군: [
    {
      heading: "정규반 개강 시기와 이동 거리",
      body: "선택 가능한 반이 많지 않다면 목표 회차와 개강일이 맞는지부터 확인하는 편이 현실적입니다.",
      check: "다음 개강을 기다릴 때 생기는 학습 공백과 온라인 시작 시점을 비교",
    },
    {
      heading: "교통비까지 포함한 전체 준비 비용",
      body: "수강료가 비슷해도 장거리 이동이 반복되면 교통비와 학습 시간 차이가 커질 수 있습니다.",
      check: "월 교통비와 이동 시간을 수강료에 더해 비교",
    },
    {
      heading: "이론은 온라인, 필요한 실습은 현장",
      body: "기본 이론을 온라인으로 진행하고 실습·첨삭·모의시험만 이동하는 방식도 검토할 수 있습니다.",
      check: "현장 참여가 필요한 날짜를 미리 모아 이동 횟수 조정",
    },
    {
      heading: "날씨와 일정 변화에도 유지되는 방식",
      body: "원거리 통학이 어려운 날에도 진도가 멈추지 않도록 복습 수단과 보강 정책을 확인하세요.",
      check: "결석 시 강의 다시보기와 다음 실습 참여 방법 확인",
    },
  ],
  특별자치시: [
    {
      heading: "생활권에 맞는 수업 시간대",
      body: "이동 경로에 따라 통학 시간이 달라지므로 수업 시작·종료 시각을 기준으로 비교하세요.",
      check: "평일 저녁과 주말의 실제 이동 시간을 각각 계산",
    },
    {
      heading: "정규반과 온라인 학습의 조합",
      body: "시간표가 맞지 않으면 반복 수강이 가능한 이론 과정과 필요한 현장 수업을 나누어 볼 수 있습니다.",
      check: "현장 피드백이 필요한 단계와 혼자 반복할 단계를 구분",
    },
    {
      heading: "시험일까지 확보되는 주간 시간",
      body: "학원 이름보다 매주 지속할 수 있는 공부 시간을 먼저 정해야 진도 이탈을 줄일 수 있습니다.",
      check: "수업 시간을 제외한 기출·복습 시간을 주간표에 먼저 배치",
    },
  ],
};

const provinceContext: Record<string, string> = {
  seoul:
    "서울권에서는 자치구 경계를 넘는 선택지도 함께 보되 퇴근 시간대의 실제 이동을 기준으로 판단하세요.",
  busan:
    "부산권에서는 같은 거리라도 생활권과 이동 경로에 따라 시간이 달라질 수 있어 수업 시간대별 동선을 확인하는 편이 좋습니다.",
  daegu:
    "대구권에서는 평일 출발지와 주말 출발지가 다르다면 두 경로를 나누어 통학 부담을 비교하세요.",
  incheon:
    "인천권에서는 지역 안팎의 이동 시간이 길어질 수 있으므로 주간 총 통학 시간을 먼저 계산해보세요.",
  gwangju:
    "광주권에서는 야간반과 주말반의 귀가 시각까지 비교하면 지속 가능한 시간표를 고르기 쉽습니다.",
  daejeon:
    "대전권에서는 직장이나 학교에서 바로 이동하는 경로와 집에서 출발하는 경로를 따로 확인하세요.",
  ulsan:
    "울산권에서는 근무지와 거주지의 동선이 다르다면 수업 요일별 출발 지점을 기준으로 비교하세요.",
  sejong:
    "세종에서는 생활권과 수업 시간대가 맞는지 확인하고 온라인 복습으로 이동 부담을 보완할 수 있는지도 살펴보세요.",
  gyeonggi:
    "경기권에서는 인접 시·군까지 후보가 넓어질 수 있으므로 거리보다 실제 왕복 시간으로 비교하세요.",
  gangwon:
    "강원권에서는 원거리 이동 횟수와 보강 가능 여부가 전체 학습 시간에 미치는 영향을 함께 보세요.",
  chungbuk:
    "충북권에서는 목표 회차에 맞는 개강일과 이동 시간을 함께 확인해 수업 공백을 줄이세요.",
  chungnam:
    "충남권에서는 인접 도시 수업까지 검토할 때 교통비와 주간 이동 시간을 수강 조건에 포함하세요.",
  jeonbuk:
    "전북권에서는 현장 수업이 꼭 필요한 단계와 온라인으로 반복할 단계를 나누면 선택 범위를 넓힐 수 있습니다.",
  jeonnam:
    "전남권에서는 장거리 통학이 필요할 때 수업 횟수보다 한 번의 수업에서 얻는 피드백 범위를 확인하세요.",
  gyeongbuk:
    "경북권에서는 개강 일정과 이동 거리를 함께 보고 필기·실기 단계별 수업 방식을 달리할 수 있습니다.",
  gyeongnam:
    "경남권에서는 인접 시·군의 수업을 비교할 때 실제 귀가 시간과 다음 날 학습 가능 여부까지 계산하세요.",
  jeju:
    "제주권에서는 수업 요일의 이동 여건과 보강 방식을 확인해 학습 진도가 끊기지 않도록 계획하세요.",
};

const introOpenings = [
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region}에서 ${qualification} 학원을 찾는다면 먼저 자신의 학습 가능 시간을 정해야 합니다. ${scenario.learner}이라면 ‘${scenario.label}’ 일정이 현실적인 출발점이 될 수 있습니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region} ${qualification} 학원은 가까운 순서만으로 고르기 어렵습니다. 특히 ${scenario.learner}에게는 ${scenario.availability}을 실제로 지킬 수 있는지가 수강료만큼 중요합니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region}에서 ${qualification} 시험을 준비할 때는 등록보다 주간표를 먼저 만들어보세요. ${scenario.availability}을 기준으로 두면 학원과 인강 중 어느 방식이 맞는지 선명해집니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region} ${qualification} 수업을 비교하는 기준은 현재 상황에 따라 달라집니다. ${scenario.learner}이라면 ${scenario.priority}이 있는지부터 확인하는 편이 좋습니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${qualification} 준비를 ${region}에서 시작하려면 통학 시간과 실제 공부 시간을 따로 계산해야 합니다. ${scenario.label} 학습자는 ${scenario.rhythm}으로 진도를 유지하기 좋습니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region}의 ${qualification} 학원을 알아보는 단계라면 개강일보다 목표 시험일까지 이어지는 흐름을 살펴보세요. ${scenario.learner}에게는 ${scenario.priority}이 중요한 선택 기준입니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region}에서 들을 ${qualification} 과정을 정하기 전, 일주일 동안 반복할 수 있는 공부량부터 확인하세요. ${scenario.availability}이 가능하다면 그 시간 안에서 수업과 복습을 나누어야 합니다.`,
  (region: string, qualification: string, scenario: StudyScenario) =>
    `${region} ${qualification} 학원 선택에서 놓치기 쉬운 부분은 수업 뒤 복습 시간입니다. ${scenario.label} 일정에는 ${scenario.rhythm}이 잘 맞는지 확인해보세요.`,
];

const introMiddles = [
  (profile: EditorialProfile) =>
    `이 시험에서는 ${profile.outcome}이 중요하므로 과정명보다 실제 진도와 문제풀이 방식을 확인해야 합니다.`,
  (profile: EditorialProfile) =>
    `${profile.angle}인지 살펴보면 단순한 강의 시간보다 수업의 적합성을 판단하기 쉽습니다.`,
  (profile: EditorialProfile) =>
    `${profile.courseDescription} 상담할 때 이 흐름이 커리큘럼에 반영되어 있는지 질문해보세요.`,
  (profile: EditorialProfile) =>
    `학습의 핵심은 ${profile.outcome}입니다. 필수 단계가 수강 기간 안에 모두 포함되는지 확인하세요.`,
  (profile: EditorialProfile) =>
    `비교할 때는 ${profile.angle}인지 먼저 보세요. 교재와 보강 정책도 같은 범위로 맞춰야 비용 차이를 제대로 볼 수 있습니다.`,
  (profile: EditorialProfile) =>
    `${profile.courseDescription} 부족한 단계만 온라인 강의로 보완하는 혼합 방식도 선택지가 됩니다.`,
];

const introClosings = [
  (scenario: StudyScenario) =>
    `무엇보다 ${scenario.risk}은 피하고, 매주 지킬 수 있는 진도와 복습량을 기준으로 결정하세요.`,
  (scenario: StudyScenario) =>
    `${scenario.priority}을 확인한 뒤 샘플 수업과 전체 비용을 비교하면 등록 후 생기는 차이를 줄일 수 있습니다.`,
  (scenario: StudyScenario) =>
    `현장 수업의 집중력이 필요한지, ${scenario.rhythm}이 더 필요한지에 따라 오프라인과 온라인의 비중을 정하세요.`,
  (scenario: StudyScenario) =>
    `상담 전에 ${scenario.availability}을 메모해두면 시간표가 실제 생활과 맞는지 바로 판단할 수 있습니다.`,
  (scenario: StudyScenario) =>
    `${scenario.label} 일정이 끝까지 유지되려면 결석 보강, 반복 수강, 질문 답변 방식까지 함께 확인해야 합니다.`,
  (scenario: StudyScenario) =>
    `통학과 수업에 시간을 모두 쓰지 말고 ${scenario.rhythm}이 가능한 복습 여유를 남겨두세요.`,
];

const localRowTemplates: Array<
  (
    region: string,
    qualification: string,
    scenario: StudyScenario,
  ) => { title: string; text: string }
> = [
  (region, _qualification, scenario) => ({
    title: "통학 총시간",
    text: `${region}에서 주간 수업 횟수에 실제 왕복 시간을 곱해보세요. ${scenario.availability} 안에서 복습 시간이 남아야 합니다.`,
  }),
  (_region, qualification, scenario) => ({
    title: "수업 뒤 복습",
    text: `${qualification}는 듣는 시간과 직접 푸는 시간이 모두 필요합니다. ${scenario.rhythm}이 가능한 시간표인지 확인하세요.`,
  }),
  (_region, _qualification, scenario) => ({
    title: "결석 대응",
    text: `${scenario.label} 일정에서는 예기치 않은 공백이 생길 수 있습니다. 다시보기, 대체 수업, 질문 기한을 확인하세요.`,
  }),
  (region, qualification) => ({
    title: "시험 단계별 방식",
    text: `${region}에서 ${qualification} 이론은 온라인으로 반복하고 실기·첨삭만 현장에서 보완하는 구성도 비교해보세요.`,
  }),
  (_region, _qualification, scenario) => ({
    title: "지속 가능성",
    text: `${scenario.risk}을 피하려면 첫 일주일이 아니라 시험 직전까지 유지할 수 있는 진도를 선택해야 합니다.`,
  }),
  (region) => ({
    title: "전체 비용",
    text: `${region} 통학에 드는 교통비와 교재·보강·재수강 비용까지 더한 금액으로 비교하세요.`,
  }),
  (_region, qualification) => ({
    title: "목표 회차",
    text: `${qualification} 종강일 뒤에 기출과 모의시험을 반복할 기간이 남는지 확인하세요.`,
  }),
  (region, _qualification, scenario) => ({
    title: "출발 지점",
    text: `${region} 안에서도 직장·학교·집 중 어디서 출발하는지에 따라 이동 부담이 달라집니다. ${scenario.label} 일정에 맞춰 경로를 재보세요.`,
  }),
];

const planSuffixes = [
  "학습을 마친 날에는 틀린 이유를 한 줄로 남겨 다음 복습 대상을 정하세요.",
  "다음 단계로 넘어가기 전 스스로 설명하거나 직접 풀어 이해 여부를 확인하세요.",
  "일주일에 한 번은 누적 범위를 섞어 풀며 앞부분을 잊지 않았는지 점검하세요.",
  "완벽하게 외울 때까지 기다리지 말고 문제 적용과 개념 보완을 번갈아 진행하세요.",
  "시간을 재어 학습하고 끝난 뒤 정답률보다 막힌 지점을 먼저 기록하세요.",
  "강의를 다시 보기 전 노트 없이 한 번 풀어 현재 기억 수준을 확인하세요.",
];

const sectionOrders: DetailPageContent["sectionOrder"][] = [
  ["local", "criteria", "plan", "online"],
  ["local", "plan", "criteria", "online"],
  ["criteria", "local", "plan", "online"],
  ["plan", "local", "criteria", "online"],
  ["local", "criteria", "online", "plan"],
  ["criteria", "plan", "local", "online"],
];

function pick<T>(items: T[], seed: string, salt: string): T {
  return items[stableVariant(`${seed}|${salt}`, items.length)];
}

function rotate<T>(items: T[], offset: number): T[] {
  return [...items.slice(offset), ...items.slice(0, offset)];
}

function displayQuestion(
  question: string,
  region: Region,
  qualification: Qualification,
) {
  const prefixes = [
    `${region.fullName}에서 상담할 때: `,
    `${qualification.name} 과정 확인: `,
    "등록 전 질문: ",
    "시간표 비교: ",
  ];
  return `${pick(prefixes, `${region.slug}-${qualification.slug}`, question)}${question}`;
}

export function buildDetailContent(
  region: Region,
  qualification: Qualification,
): DetailPageContent {
  const seed = `${region.slug}-${qualification.slug}`;
  const profile = editorialProfiles[qualification.slug];
  const scenario = pick(studyScenarios, seed, "scenario");
  const localProfile = pick(localProfiles[region.kind], seed, "local-profile");
  const context = provinceContext[region.provinceSlug];

  const keyword = `${region.fullName} ${qualification.name} 학원`;
  const titlePatterns = [
    `${keyword} | 통학·인강 비교`,
    `${keyword} | 수업·비용 선택 기준`,
    `${keyword} | 등록 전 확인 사항`,
    `${keyword} | 필기·실기 준비 안내`,
    `${keyword} | 온라인 강의 활용법`,
    `${keyword} | 합격 과정 선택 가이드`,
  ];
  const descriptions = [
    `${keyword} 선택 전 확인할 기준을 정리했습니다. ${region.fullName}의 통학 여건과 ${qualification.name} 시험 흐름을 살펴보고, 학원 수업과 온라인 강의를 비교해보세요.`,
    `${keyword} 정보를 찾는 수험생을 위한 안내입니다. ${region.fullName} 통학 조건과 ${qualification.name} 준비 순서를 확인하고, 학원 수업과 인강의 차이를 비교해보세요.`,
    `${keyword} 등록 전에 살펴볼 내용을 담았습니다. ${region.fullName} 이동 시간, ${qualification.name} 학습 단계, 학원 시간표와 온라인 수강 방식을 함께 비교해보세요.`,
    `${keyword} 선택에 필요한 핵심 기준을 확인하세요. ${region.fullName} 생활권과 ${qualification.name} 시험 대비 흐름을 바탕으로 학원 수업과 인강 활용법을 정리했습니다.`,
    `${keyword} 비교를 시작할 때 참고할 안내입니다. ${region.fullName} 통학 부담, ${qualification.name} 필기·실기 과정, 학원 보강 조건과 온라인 학습 대안을 살펴보세요.`,
    `${keyword} 수강 전 점검할 항목을 안내합니다. ${region.fullName} 이동 여건과 ${qualification.name} 준비 일정을 확인하고, 학원 과정과 인강 구성을 차분히 비교해보세요.`,
  ];

  const localRows = rotate(
    localRowTemplates,
    stableVariant(`${seed}|local-rows`, localRowTemplates.length),
  )
    .slice(0, 4)
    .map((template) =>
      template(region.fullName, qualification.name, scenario),
    );

  const criteria = [
    {
      title: `${scenario.label} 적합성`,
      text: `${scenario.availability}을 기준으로 실제 출석과 복습이 가능한지 시간표를 대입해보세요.`,
    },
    ...rotate(
      profile.criteria,
      stableVariant(`${seed}|criteria`, profile.criteria.length),
    ).slice(0, 4),
  ];

  const planSteps = profile.stages.map((step, index) => ({
    title: step.title,
    detail: `${step.detail} ${pick(planSuffixes, seed, `plan-${index}`)}`,
  }));

  const questions = rotate(
    profile.questions,
    stableVariant(`${seed}|questions`, profile.questions.length),
  )
    .slice(0, 4)
    .map((question) => displayQuestion(question, region, qualification));

  const faqLocalQuestions = [
    {
      question: `${region.fullName} ${qualification.name} 학원은 가까운 곳이 가장 좋은가요?`,
      answer: `가까운 곳이라도 ${scenario.risk}이라면 오래 유지하기 어렵습니다. ${localProfile.check}한 뒤 수업 구성과 보강 조건을 함께 비교하세요.`,
    },
    {
      question: `${region.fullName}에서 학원과 인강을 함께 이용해도 되나요?`,
      answer: `가능합니다. ${localProfile.body} 이론·기출은 반복 수강하고 ${profile.stages[3].title}처럼 직접 피드백이 필요한 단계만 현장 수업으로 보완할 수 있습니다.`,
    },
    {
      question: `${region.fullName}에서 통학 시간을 어떻게 비교해야 하나요?`,
      answer: `${context} 주간 수업 횟수에 왕복 시간을 곱하고, ${scenario.availability} 안에 문제풀이 시간이 남는지 확인하세요.`,
    },
  ];
  const scenarioFaq = {
    question: `${scenario.label} 일정으로 ${qualification.name}를 준비할 때 가장 중요한 점은 무엇인가요?`,
    answer: `${scenario.priority}을 먼저 확인하고 ${scenario.rhythm}으로 학습을 이어가세요. ${scenario.risk}은 피하는 편이 좋습니다.`,
  };
  const discountFaq = {
    question: "엔지니어랩 시크릿코드 e7288은 언제 입력하나요?",
    answer:
      "신규 회원은 회원가입 단계에서 e7288을 입력해야 6만원 할인쿠폰이 자동 발급됩니다. 가입을 마친 뒤에는 코드 입력이 불가하며, 기존 회원은 전용 페이지에 로그인해 쿠폰 배너를 이용할 수 있습니다.",
  };

  return {
    title: pick(titlePatterns, seed, "title"),
    description: pick(descriptions, seed, "description"),
    eyebrow: pick(
      [
        `${scenario.label} 학습자를 위한 지역 학원 비교`,
        `${profile.stages[0].title}부터 시작하는 준비`,
        `${region.fullName} 통학 조건과 온라인 학습 비교`,
        `${qualification.name} 목표 회차를 위한 선택 기준`,
      ],
      seed,
      "eyebrow",
    ),
    heroLead: pick(
      [
        `${scenario.availability}을 기준으로 학원 시간표와 온라인 강의를 비교하고, ${profile.outcome}에 맞는 준비 방식을 찾아보세요.`,
        `${localProfile.body} ${qualification.name}의 ${profile.stages[1].title}부터 ${profile.stages[3].title}까지 이어지는지도 함께 확인하세요.`,
        `${profile.angle}인지 살펴보고 ${scenario.priority}까지 비교하면 시험일까지 유지할 학습 계획을 세울 수 있습니다.`,
        `${region.fullName}의 이동 조건과 ${scenario.label} 일정을 함께 계산해 오프라인 수업과 반복 가능한 인강의 비중을 정해보세요.`,
      ],
      seed,
      "hero",
    ),
    intro: [
      pick(introOpenings, seed, "intro-opening")(
        region.fullName,
        qualification.name,
        scenario,
      ),
      pick(introMiddles, seed, "intro-middle")(profile),
      pick(introClosings, seed, "intro-closing")(scenario),
    ].join(" "),
    scenario,
    localHeading: `${region.fullName}, ${localProfile.heading}`,
    localBody: `${localProfile.body} ${context}`,
    localCheck: localProfile.check,
    localRows,
    criteriaHeading: pick(
      [
        `${region.fullName} ${qualification.name} 학원에서 확인할 다섯 가지`,
        `${qualification.name} 과정명보다 먼저 볼 수업 조건`,
        `${region.fullName} 학원 상담에서 놓치지 말아야 할 기준`,
        `${scenario.label} 수험생의 ${qualification.name} 비교표`,
      ],
      seed,
      "criteria-heading",
    ),
    criteriaIntro: `${profile.angle}인지 확인하면서 ${scenario.priority}과 전체 비용을 같은 조건으로 비교하세요.`,
    criteria,
    planHeading: pick(
      [
        `${qualification.name}, ${profile.stages[0].title}부터 ${profile.stages[3].title}까지`,
        `${scenario.label} 일정에 맞춘 ${qualification.name} 학습 순서`,
        `${qualification.name} 준비를 네 단계로 나누는 방법`,
        `${profile.outcome}을 위한 단계별 계획`,
      ],
      seed,
      "plan-heading",
    ),
    planIntro: `${profile.courseDescription} ${scenario.rhythm}을 주간 계획에 넣으면 강의를 듣는 데서 끝나지 않고 문제 적용까지 이어갈 수 있습니다.`,
    planSteps,
    onlineHeading: pick(
      [
        `${region.fullName} 통학이 부담될 때 살펴볼 엔지니어랩 인강`,
        `${qualification.name} 반복 학습이 필요하다면 온라인 과정 비교`,
        `${scenario.label} 일정에 맞춘 엔지니어랩 활용법`,
        `현장 수업의 빈틈을 채우는 ${qualification.name} 온라인 학습`,
      ],
      seed,
      "online-heading",
    ),
    onlineBody: `${profile.instructorDescription} 반복 수강, 배속, 모바일 학습을 활용할 수 있어 ${scenario.learner}이 통학과 복습 시간을 조정하는 데 도움이 됩니다.`,
    onlineChecks: [
      `${profile.angle}인지 커리큘럼에서 확인`,
      `${scenario.rhythm}이 가능하도록 수강 기간과 모바일 학습 환경 비교`,
      `샘플 강의로 설명 속도와 문제풀이 방식이 현재 수준에 맞는지 점검`,
      `단과·패키지의 포함 강의, 교재, 이용 기간과 할인 적용 후 비용 확인`,
    ],
    questions,
    faq: [
      pick(faqLocalQuestions, seed, "faq-local"),
      ...rotate(
        profile.faq,
        stableVariant(`${seed}|faq-profile`, profile.faq.length),
      ),
      scenarioFaq,
      discountFaq,
    ],
    sectionOrder: pick(sectionOrders, seed, "section-order"),
  };
}
