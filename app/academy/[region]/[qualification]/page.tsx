import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components";
import { buildDistinctDetailContent } from "../../../detail-content-v2";
import {
  findQualification,
  findRegion,
  qualifications,
  regions,
  secretCodeUrl,
  siteUrl,
} from "../../../site-data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return regions.flatMap((region) =>
    qualifications.map((qualification) => ({
      region: region.slug,
      qualification: qualification.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; qualification: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, qualification: qualificationSlug } = await params;
  const region = findRegion(regionSlug);
  const qualification = findQualification(qualificationSlug);
  if (!region || !qualification) return {};

  const content = buildDistinctDetailContent(region, qualification);
  const canonical = `${siteUrl}/academy/${region.slug}/${qualification.slug}`;

  return {
    title: { absolute: content.title },
    description: content.description,
    keywords: [
      `${region.fullName} ${qualification.name} 학원`,
      `${region.name} ${qualification.name} 인강`,
      `${qualification.name} 학원`,
      `${qualification.name} 온라인 강의`,
    ],
    alternates: { canonical },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: content.title,
      description: content.description,
    },
  };
}

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ region: string; qualification: string }>;
}) {
  const { region: regionSlug, qualification: qualificationSlug } = await params;
  const region = findRegion(regionSlug);
  const qualification = findQualification(qualificationSlug);
  if (!region || !qualification) notFound();

  const content = buildDistinctDetailContent(region, qualification);
  const provinceRegions = regions.filter(
    (item) => item.provinceSlug === region.provinceSlug,
  );
  const regionIndex = provinceRegions.findIndex(
    (item) => item.slug === region.slug,
  );
  const nearbyRegions = Array.from({ length: 4 }, (_, index) => {
    const nextIndex = (regionIndex + index + 1) % provinceRegions.length;
    return provinceRegions[nextIndex];
  }).filter((item) => item.slug !== region.slug);
  const relatedQualifications = qualifications.filter(
    (item) => item.slug !== qualification.slug,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: content.title,
        description: content.description,
        url: `${siteUrl}/academy/${region.slug}/${qualification.slug}`,
        about: [
          { "@type": "Thing", name: qualification.name },
          { "@type": "Place", name: region.fullName },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: region.province,
            item: `${siteUrl}/regions/${region.provinceSlug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${region.fullName} ${qualification.name} 학원`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  const sections = {
    local: (
      <section className="article-section" id="local" key="local">
        <p className="section-kicker">LOCAL SCHEDULE</p>
        <h2>{content.localHeading}</h2>
        <p>{content.localIntro}</p>
        <div className="criteria-grid local-condition-grid">
          {content.localRows.map((item, index) => (
            <article className="criteria-card" key={item.title}>
              <span>LOCAL {String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    ),
    criteria: (
      <section className="article-section" id="criteria" key="criteria">
        <p className="section-kicker">ACADEMY CHECKLIST</p>
        <h2>{content.criteriaHeading}</h2>
        <p>{content.criteriaIntro}</p>
        <div className="criteria-grid">
          {content.criteria.map((item, index) => (
            <article className="criteria-card" key={item.title}>
              <span>CHECK {String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    ),
    plan: (
      <section className="article-section" id="plan" key="plan">
        <p className="section-kicker">STUDY ROADMAP</p>
        <h2>{content.planHeading}</h2>
        <p>{content.planIntro}</p>
        <div className="plan-grid">
          {content.planSteps.map((step, index) => (
            <article className="plan-card" key={step.title}>
              <span>STEP {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>
    ),
    online: (
      <section className="article-section" id="online" key="online">
        <p className="section-kicker">ONLINE ALTERNATIVE</p>
        <h2>{content.onlineHeading}</h2>
        <p>{content.onlineBody}</p>
        <ul className="check-list">
          {content.onlineChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    ),
  };

  return (
    <main>
      <SiteHeader />
      <section className="detail-hero">
        <div className="shell detail-hero-grid">
          <nav className="breadcrumb" aria-label="경로">
            <Link href="/">홈</Link>
            <span>›</span>
            <a href={`/regions/${region.provinceSlug}`}>{region.province}</a>
            <span>›</span>
            <strong>
              {region.fullName} {qualification.name} 학원
            </strong>
          </nav>
          <div className="detail-hero-copy">
            <p className="detail-eyebrow">{content.eyebrow}</p>
            <h1>
              <span>{region.fullName}</span>
              {qualification.name} 학원
            </h1>
            <p className="detail-lead">{content.heroLead}</p>
            <div className="detail-actions">
              <a className="detail-primary" href={qualification.ctaUrl}>
                엔지니어랩 {qualification.name} 인강 보기 →
              </a>
              <a className="detail-secondary" href={secretCodeUrl}>
                시크릿코드 혜택 확인
              </a>
            </div>
          </div>
          <aside className="detail-summary-card">
            <p>{content.scenario.label.toUpperCase()}</p>
            <dl className="summary-list">
              <div>
                <dt>현재 상황</dt>
                <dd>{content.scenario.learner}</dd>
              </div>
              <div>
                <dt>확보할 시간</dt>
                <dd>{content.scenario.availability}</dd>
              </div>
              <div>
                <dt>과정 핵심</dt>
                <dd>{qualification.examFocus}</dd>
              </div>
              <div>
                <dt>주의할 선택</dt>
                <dd>{content.scenario.risk}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="shell detail-layout">
        <article className="detail-content">
          <p className="article-intro">{content.intro}</p>

          {content.sectionOrder.map((section) => sections[section])}

          <section className="article-cta">
            <p>SECRET CODE e7288</p>
            <h2>{content.ctaHeading}</h2>
            <p>{content.ctaBody}</p>
            <div className="detail-actions">
              <a className="detail-primary" href={secretCodeUrl}>
                시크릿코드 쿠폰 받기 →
              </a>
              <a className="detail-secondary" href={qualification.ctaUrl}>
                {qualification.name} 강의 구성 보기
              </a>
            </div>
          </section>

          <section className="article-section" id="questions">
            <p className="section-kicker">BEFORE CONTACT</p>
            <h2>{content.questionsHeading}</h2>
            <ul className="check-list">
              {content.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>

          <section className="article-section" id="faq">
            <p className="section-kicker">FAQ</p>
            <h2>{content.faqHeading}</h2>
            <div className="faq-list">
              {content.faq.map((item) => (
                <article className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
            type="application/ld+json"
          />
        </article>

        <aside className="detail-sidebar">
          <div className="sidebar-sticky">
            <div className="sidebar-card">
              <p>필요한 내용 바로 찾기</p>
              <nav aria-label="문서 목차">
                <a href="#local">통학·학습 일정</a>
                <a href="#criteria">학원 비교 기준</a>
                <a href="#plan">{qualification.name} 준비 순서</a>
                <a href="#online">온라인 강의 활용</a>
                <a href="#questions">상담 질문</a>
                <a href="#faq">자주 묻는 질문</a>
              </nav>
            </div>

            <div className="sidebar-card sidebar-discount">
              <p>엔지니어랩 할인</p>
              <strong>6만원 쿠폰</strong>
              <span>신규 회원은 가입 단계에서 시크릿코드 e7288 입력</span>
              <a href={secretCodeUrl}>혜택 확인하기</a>
            </div>

            <div className="sidebar-card">
              <p>{region.fullName} 다른 자격증</p>
              <div className="sidebar-links">
                {relatedQualifications.slice(0, 4).map((item) => (
                  <a
                    href={`/academy/${region.slug}/${item.slug}`}
                    key={item.slug}
                  >
                    {item.name} 학원
                  </a>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <p>{region.provinceShort} 다른 지역</p>
              <div className="sidebar-links">
                {nearbyRegions.map((item) => (
                  <a
                    href={`/academy/${item.slug}/${qualification.slug}`}
                    key={item.slug}
                  >
                    {item.fullName}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <SiteFooter />
    </main>
  );
}
