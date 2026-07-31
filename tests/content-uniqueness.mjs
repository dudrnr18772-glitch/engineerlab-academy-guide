import assert from "node:assert/strict";
import { buildDistinctDetailContent } from "../app/detail-content-v2.ts";
import { qualifications, regions } from "../app/site-data.ts";

const pages = regions.flatMap((region) =>
  qualifications.map((qualification) => ({
    key: `${region.slug}/${qualification.slug}`,
    region,
    qualificationData: qualification,
    qualificationSlug: qualification.slug,
    content: buildDistinctDetailContent(region, qualification),
  })),
);

function occurrenceCount(text, fragment) {
  return text.split(fragment).length - 1;
}

const titles = new Set();
const descriptions = new Set();
for (const page of pages) {
  const { content, qualificationData, region } = page;
  const keyword = `${region.fullName} ${qualificationData.name} 학원`;
  const components = keyword.split(/\s+/u);

  assert.equal(
    occurrenceCount(content.title, keyword),
    1,
    `${page.key}: title must contain the exact keyword once`,
  );
  assert.equal(
    occurrenceCount(content.description, keyword),
    1,
    `${page.key}: description must contain the exact keyword once`,
  );

  for (const component of components) {
    assert.equal(
      occurrenceCount(content.description, component),
      2,
      `${page.key}: description must contain ${component} once in the keyword and once separately`,
    );
  }

  assert.ok(
    content.description.length >= 85 && content.description.length <= 160,
    `${page.key}: description length is ${content.description.length}`,
  );
  titles.add(content.title);
  descriptions.add(content.description);
}

assert.equal(titles.size, pages.length, "detail page titles must be unique");
assert.equal(
  descriptions.size,
  pages.length,
  "detail page descriptions must be unique",
);

function bodyParts(content) {
  return [
    content.heroLead,
    content.intro,
    content.localIntro,
    ...content.localRows.map((item) => item.text),
    content.criteriaIntro,
    ...content.criteria.map((item) => item.text),
    content.planIntro,
    ...content.planSteps.map((item) => item.detail),
    content.onlineBody,
    ...content.onlineChecks,
    content.ctaBody,
    ...content.questions,
    ...content.faq.flatMap((item) => [item.question, item.answer]),
  ];
}

const sentenceOwners = new Map();
for (const page of pages) {
  for (const part of bodyParts(page.content)) {
    const sentences = part
      .split(/(?<=[.!?])\s+/u)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length >= 12);
    for (const sentence of sentences) {
      const owners = sentenceOwners.get(sentence) ?? new Set();
      owners.add(page.key);
      sentenceOwners.set(sentence, owners);
    }
  }
}

const duplicates = [...sentenceOwners.entries()].filter(
  ([, owners]) => owners.size > 1,
);
assert.equal(
  duplicates.length,
  0,
  `cross-page duplicate sentences: ${duplicates
    .slice(0, 5)
    .map(([sentence, owners]) => `${sentence} (${[...owners].join(", ")})`)
    .join("\n")}`,
);

function shingles(content, size = 5) {
  const words = bodyParts(content)
    .join(" ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/u)
    .filter(Boolean);
  const result = new Set();
  for (let index = 0; index <= words.length - size; index += 1) {
    result.add(words.slice(index, index + size).join(" "));
  }
  return result;
}

function jaccard(left, right) {
  let intersection = 0;
  for (const value of left) {
    if (right.has(value)) intersection += 1;
  }
  return intersection / (left.size + right.size - intersection);
}

const samples = [];
for (const qualification of qualifications) {
  const group = pages.filter(
    (page) => page.qualificationSlug === qualification.slug,
  );
  for (let index = 0; index < group.length; index += 17) {
    const next = group[(index + 53) % group.length];
    samples.push(
      jaccard(
        shingles(group[index].content),
        shingles(next.content),
      ),
    );
  }
}

const average =
  samples.reduce((total, value) => total + value, 0) / samples.length;
console.log(
  JSON.stringify({
    pages: pages.length,
    uniqueTitles: titles.size,
    uniqueDescriptions: descriptions.size,
    duplicateSentences: duplicates.length,
    sampledPairs: samples.length,
    averageFiveWordJaccard: Number(average.toFixed(4)),
    maximumFiveWordJaccard: Number(Math.max(...samples).toFixed(4)),
  }),
);
