import {
  buildDetailContent as buildLegacyDetailContent,
  type DetailPageContent,
} from "./detail-content";
import {
  stableVariant,
  type Qualification,
  type Region,
} from "./site-data";

type Scenario = DetailPageContent["scenario"];
type ContentContext =
  | "intro"
  | "local"
  | "criteria"
  | "plan"
  | "online"
  | "faq";

export type DistinctDetailPageContent = DetailPageContent & {
  localIntro: string;
  ctaHeading: string;
  ctaBody: string;
  questionsHeading: string;
  faqHeading: string;
};

function pick<T>(items: T[], seed: string, salt: string): T {
  return items[stableVariant(`${seed}|${salt}`, items.length)];
}

function normalizeSentence(text: string) {
  return text.trim().replace(/[.!?]+$/u, "");
}

const endingVariants: Array<[RegExp, string[]]> = [
  [
    /확인하세요$/u,
    ["확인해보세요", "등록 전에 확인해두세요", "상담할 때 확인하세요"],
  ],
  [
    /살펴보세요$/u,
    [
      "구체적으로 살펴보세요",
      "실제 운영 방식을 확인해보세요",
      "자신의 일정에 대입해보세요",
    ],
  ],
  [
    /비교하세요$/u,
    [
      "비교해보세요",
      "대조해보세요",
      "따져보세요",
    ],
  ],
  [
    /질문하세요$/u,
    ["구체적으로 물어보세요", "등록 전에 답을 받아두세요", "직접 문의해보세요"],
  ],
  [/정합니다$/u, ["정해둡니다", "우선 결정합니다", "먼저 확정합니다"]],
  [
    /익힙니다$/u,
    [
      "익혀둡니다",
      "문제에 적용할 수 있게 익힙니다",
      "다시 설명할 수 있을 때까지 익힙니다",
    ],
  ],
  [
    /반복합니다$/u,
    ["여러 차례 되풀이합니다", "간격을 두고 다시 진행합니다", "주기적으로 복습합니다"],
  ],
];

function varyEnding(text: string, seed: string, salt: string) {
  let result = normalizeSentence(text)
    .replace(/비전공자이 통학/gu, "비전공자가 통학")
    .replace(/진도은 피하는/gu, "진도는 피하는")
    .replace(/이해도를 확인이 가능한/gu, "이해도를 확인할 수 있는")
    .replace(/암기만 유지이 가능한/gu, "암기를 유지할 수 있는")
    .replace(/답안에 집중이 가능한/gu, "답안에 집중할 수 있는")
    .replace(/일정을 함께 점검이 가능한/gu, "일정을 함께 점검할 수 있는")
    .replace(/이동 횟수 조정한 뒤/gu, "이동 횟수를 조정한 뒤");

  for (const [pattern, alternatives] of endingVariants) {
    if (pattern.test(result)) {
      result = result.replace(
        pattern,
        pick(alternatives, seed, `${salt}|${pattern.source}`),
      );
      break;
    }
  }
  return result;
}

const prefixes: Record<
  ContentContext,
  Array<
    (
      region: Region,
      qualification: Qualification,
      scenario: Scenario,
    ) => string
  >
> = {
  intro: [
    (region, qualification) =>
      `이때 ${region.fullName}의 ${qualification.name} 준비 계획을 짤 때`,
    (region, qualification, scenario) =>
      `${region.fullName}에서 ${scenario.label}으로 ${qualification.name}를 공부한다면`,
    (region, qualification) =>
      `${region.fullName}에서 ${qualification.name} 학원과 인강을 비교하려면`,
    (region, qualification, scenario) =>
      `${scenario.label}에 맞춘 ${region.fullName} ${qualification.name} 계획을 실행할 때`,
  ],
  local: [
    (region, qualification) =>
      `${region.fullName}에서 ${qualification.name} 통학 계획을 세울 때`,
    (region, qualification, scenario) =>
      `${region.fullName}의 ${qualification.name} ${scenario.label} 일정을 운영할 때`,
    (region, qualification) =>
      `${qualification.name} 수업을 ${region.fullName} 생활권에서 찾는다면`,
    (region, qualification) =>
      `${region.fullName}의 이동 여건을 ${qualification.name} 준비에 반영하면`,
    (region, qualification, scenario) =>
      `${scenario.label}으로 ${region.fullName}에서 ${qualification.name}를 이어가려면`,
  ],
  criteria: [
    (region, qualification) =>
      `${region.fullName}에서 ${qualification.name} 과정을 비교할 때`,
    (region, qualification, scenario) =>
      `${region.fullName}의 ${scenario.label} 수험생이 ${qualification.name} 학원을 고른다면`,
    (region, qualification) =>
      `${qualification.name} 등록 조건을 ${region.fullName} 기준으로 살펴볼 때`,
    (region, qualification) =>
      `${region.fullName} ${qualification.name} 상담을 진행할 때`,
    (region, qualification, scenario) =>
      `${scenario.label}에 맞는 ${region.fullName} ${qualification.name} 수업을 고른다면`,
  ],
  plan: [
    (region, qualification) =>
      `${region.fullName}의 ${qualification.name} 학습 순서를 짤 때`,
    (region, qualification, scenario) =>
      `${scenario.label}으로 짠 ${region.fullName} ${qualification.name} 계획을 실행할 때`,
    (region, qualification) =>
      `${region.fullName}에서 ${qualification.name} 진도를 이어갈 때`,
    (region, qualification) =>
      `${qualification.name}를 준비하는 ${region.fullName} 수험생이라면`,
    (region, qualification, scenario) =>
      `${region.fullName}의 ${qualification.name} ${scenario.label} 주간표를 운영할 때`,
  ],
  online: [
    (region, qualification) =>
      `${region.fullName}에서 ${qualification.name} 인강을 검토할 때`,
    (region, qualification, scenario) =>
      `${region.fullName}의 ${scenario.label} ${qualification.name} 온라인 학습을 병행한다면`,
    (region, qualification) =>
      `${qualification.name} 온라인 과정을 ${region.fullName} 일정에 맞추려면`,
    (region, qualification) =>
      `${region.fullName} 수험생이 ${qualification.name} 강의를 고른다면`,
    (region, qualification, scenario) =>
      `${scenario.label}으로 ${region.fullName}에서 ${qualification.name} 인강을 활용할 때`,
  ],
  faq: [
    (region, qualification) =>
      `${region.fullName}의 ${qualification.name} 준비 계획을 세울 때`,
    (region, qualification, scenario) =>
      `${region.fullName}에서 ${qualification.name}를 ${scenario.label}으로 공부한다면`,
    (region, qualification) =>
      `${qualification.name} 학원과 인강을 ${region.fullName}에서 비교할 경우`,
    (region, qualification) =>
      `${region.fullName} 수험생이 ${qualification.name} 일정을 운영할 때`,
    (region, qualification, scenario) =>
      `${scenario.label}에 맞춘 ${region.fullName} ${qualification.name} 학습이라면`,
  ],
};

function hasPageContext(
  text: string,
  region: Region,
  qualification: Qualification,
) {
  return (
    text.includes(region.fullName) &&
    text.includes(qualification.name)
  );
}

function distinctSentence(
  text: string,
  context: ContentContext,
  region: Region,
  qualification: Qualification,
  scenario: Scenario,
  seed: string,
  salt: string,
) {
  const core = varyEnding(text, seed, salt);
  if (hasPageContext(core, region, qualification)) return `${core}.`;

  if (context === "faq" && core === "가능합니다") {
    return `${region.fullName}에서도 ${qualification.name} 학원과 인강을 함께 이용할 수 있습니다.`;
  }
  if (context === "faq" && core === "그렇습니다") {
    return `${region.fullName}에서 ${qualification.name}를 준비할 때도 이 확인이 필요합니다.`;
  }

  const prefix = pick(prefixes[context], seed, `prefix|${salt}`)(
    region,
    qualification,
    scenario,
  );
  return `${prefix}, ${core}.`;
}

function distinctParagraph(
  text: string,
  context: ContentContext,
  region: Region,
  qualification: Qualification,
  scenario: Scenario,
  seed: string,
  salt: string,
) {
  return text
    .split(/(?<=[.!?])\s+/u)
    .filter(Boolean)
    .map((sentence, index) =>
      distinctSentence(
        sentence,
        context,
        region,
        qualification,
        scenario,
        seed,
        `${salt}|${index}`,
      ),
    )
    .join(" ");
}

function distinctQuestion(
  question: string,
  region: Region,
  qualification: Qualification,
  seed: string,
  salt: string,
) {
  let cleaned = question
    .replace(/^(?:[^:]+:\s*)/u, "")
    .replaceAll(`${region.fullName}에서 `, "")
    .replaceAll(`${region.fullName}의 `, "")
    .replaceAll(`${region.fullName} `, "")
    .replaceAll(`${qualification.name}를 `, "")
    .replaceAll(`${qualification.name}을 `, "")
    .replace(/^\s*(?:에서|의|은|는|이|가|을|를|와|과)\s*/u, "")
    .replace(/\s{2,}/gu, " ")
    .trim();

  if (cleaned.startsWith(`${qualification.name} `)) {
    cleaned = cleaned.slice(qualification.name.length + 1);
  }

  return pick(
    [
      `${region.fullName} ${qualification.name} 상담에서 확인할 내용: ${cleaned}`,
      `${region.fullName}에서 ${qualification.name} 과정을 알아볼 때, ${cleaned}`,
      `${qualification.name}를 준비하는 ${region.fullName} 수험생이라면, ${cleaned}`,
      `${region.fullName} 생활권의 ${qualification.name} 학원에 ${cleaned}`,
      `${region.fullName} ${qualification.name} 등록 전, ${cleaned}`,
    ],
    seed,
    salt,
  ).replace(/\?*$/u, "?");
}

export function buildDistinctDetailContent(
  region: Region,
  qualification: Qualification,
): DistinctDetailPageContent {
  const seed = `${region.slug}-${qualification.slug}`;
  const legacy = buildLegacyDetailContent(region, qualification);
  const scenario = legacy.scenario;
  const contextualize = (
    text: string,
    context: ContentContext,
    salt: string,
  ) =>
    distinctParagraph(
      text,
      context,
      region,
      qualification,
      scenario,
      seed,
      salt,
    );

  const localIntro = `${legacy.localBody} ${legacy.localCheck}해보면 통학과 복습을 모두 감당할 수 있는 선택지만 남길 수 있습니다.`;
  const faq = legacy.faq.map((item, index) => {
    if (index === 3) {
      return {
        question: `${region.fullName}에서 ${scenario.label} 일정으로 ${qualification.name}를 준비할 때 무엇부터 확인해야 하나요?`,
        answer: `${region.fullName} ${qualification.name} 계획에서는 먼저 ${scenario.priority}을 확인하세요. ${region.fullName} ${qualification.name} 주간 공부는 ‘${scenario.rhythm}’을 운영 원칙으로 삼고, 가장 피해야 할 선택은 ${scenario.risk}입니다.`,
      };
    }
    if (index === 4) {
      return {
        question: `${region.fullName} ${qualification.name} 수험생은 시크릿코드 e7288을 언제 입력하나요?`,
        answer: `${region.fullName}에서 ${qualification.name} 인강을 처음 이용한다면 회원가입 단계에서 e7288을 입력해야 6만원 할인쿠폰이 자동 발급됩니다. 이미 가입한 ${region.fullName} ${qualification.name} 수험생은 전용 페이지에 로그인해 쿠폰 배너를 이용할 수 있습니다.`,
      };
    }
    return {
      question: hasPageContext(item.question, region, qualification)
        ? item.question
        : distinctQuestion(
            item.question,
            region,
            qualification,
            seed,
            `faq-question|${index}`,
          ),
      answer: contextualize(item.answer, "faq", `faq-answer|${index}`),
    };
  });

  return {
    ...legacy,
    heroLead: contextualize(legacy.heroLead, "intro", "hero"),
    intro: contextualize(legacy.intro, "intro", "intro"),
    localIntro: contextualize(localIntro, "local", "local-intro"),
    localRows: legacy.localRows.map((item, index) => ({
      ...item,
      title: pick(
        [
          `${item.title} 계산`,
          `${item.title} 점검`,
          `${region.fullName} ${item.title}`,
          `${qualification.name} ${item.title}`,
          `${item.title} 판단`,
        ],
        seed,
        `local-title|${index}`,
      ),
      text: contextualize(item.text, "local", `local-row|${index}`),
    })),
    criteriaIntro: contextualize(
      legacy.criteriaIntro,
      "criteria",
      "criteria-intro",
    ),
    criteria: legacy.criteria.map((item, index) => ({
      ...item,
      title: pick(
        [
          item.title,
          `${item.title} 확인`,
          `${region.fullName} 기준: ${item.title}`,
          `${qualification.name} ${item.title}`,
          `${item.title} 비교`,
        ],
        seed,
        `criteria-title|${index}`,
      ),
      text: contextualize(item.text, "criteria", `criterion|${index}`),
    })),
    planIntro: contextualize(legacy.planIntro, "plan", "plan-intro"),
    planSteps: legacy.planSteps.map((step, index) => ({
      ...step,
      title: pick(
        [
          step.title,
          `${step.title} 구간`,
          `${index + 1}단계 ${step.title}`,
          `${region.fullName} 계획: ${step.title}`,
          `${qualification.name} ${step.title}`,
        ],
        seed,
        `plan-title|${index}`,
      ),
      detail: contextualize(step.detail, "plan", `plan-step|${index}`),
    })),
    onlineBody: contextualize(
      legacy.onlineBody,
      "online",
      "online-body",
    ),
    onlineChecks: legacy.onlineChecks.map((item, index) =>
      contextualize(item, "online", `online-check|${index}`),
    ),
    questions: legacy.questions.map((item, index) =>
      distinctQuestion(
        item,
        region,
        qualification,
        seed,
        `question|${index}`,
      ),
    ),
    faq,
    ctaHeading: pick(
      [
        `${region.fullName} ${qualification.name} 인강의 6만원 쿠폰`,
        `${qualification.name} 결제 전에 보는 ${region.fullName} 할인 안내`,
        `${region.fullName} 수험생이 확인할 ${qualification.name} 쿠폰`,
        `${region.fullName}에서 ${qualification.name} 인강 비용 줄이는 방법`,
        `${qualification.name} 온라인 과정과 시크릿코드 e7288`,
      ],
      seed,
      "cta-heading",
    ),
    ctaBody: `${region.fullName}에서 ${qualification.name} 인강을 결제하기 전에는 시크릿코드 혜택을 확인할 수 있습니다. 신규 회원이 ${region.fullName} ${qualification.name} 학습용 쿠폰을 받으려면 가입 단계에서 e7288을 입력해야 6만원 쿠폰이 자동 발급됩니다. 이미 가입한 ${region.fullName} ${qualification.name} 수험생은 전용 페이지에 로그인한 뒤 ‘특별 할인쿠폰 즉시 받기’ 배너를 선택하면 같은 혜택을 받을 수 있습니다.`,
    questionsHeading: pick(
      [
        `${region.fullName} ${qualification.name} 학원 상담 전에 적어둘 질문`,
        `${qualification.name} 과정을 ${region.fullName}에서 비교하는 네 가지 질문`,
        `${region.fullName} 생활권의 ${qualification.name} 수업에 확인할 내용`,
        `${region.fullName} ${qualification.name} 등록 전 답을 받아둘 항목`,
      ],
      seed,
      "questions-heading",
    ),
    faqHeading: pick(
      [
        `${region.fullName}에서 ${qualification.name}를 준비하며 생기는 질문`,
        `${region.fullName} ${qualification.name} 학원·인강 비교 FAQ`,
        `${qualification.name} 공부를 시작하는 ${region.fullName} 수험생의 궁금증`,
        `${region.fullName} ${qualification.name} 일정과 수강 방식 문답`,
      ],
      seed,
      "faq-heading",
    ),
  };
}
