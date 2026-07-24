import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";
import {
  provinces,
  qualifications,
  regions,
  siteUrl,
} from "../../site-data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return provinces.map((province) => ({ province: province.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ province: string }>;
}): Promise<Metadata> {
  const { province: provinceSlug } = await params;
  const province = provinces.find((item) => item.slug === provinceSlug);
  if (!province) return {};
  const title = `${province.name} 전기·소방 자격증 학원 지역별 안내`;
  const description = `${province.name} 시·군·구별 전기기사, 전기산업기사, 전기공사기사, 전기기능사, 소방설비기사, 공기업·NCS 학원 선택 가이드를 확인하세요.`;
  const canonical = `${siteUrl}/regions/${province.slug}`;
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ province: string }>;
}) {
  const { province: provinceSlug } = await params;
  const province = provinces.find((item) => item.slug === provinceSlug);
  if (!province) notFound();

  const localRegions = regions.filter(
    (region) => region.provinceSlug === province.slug,
  );

  return (
    <main>
      <SiteHeader />
      <section className="directory-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="경로">
            <Link href="/">홈</Link>
            <span>›</span>
            <span>지역별 학원</span>
            <span>›</span>
            <strong>{province.name}</strong>
          </nav>
          <div className="directory-title">
            <p className="section-kicker">REGION DIRECTORY</p>
            <h1>{province.name} 자격증 학원 가이드</h1>
            <p>
              {province.name}의 {localRegions.length}개 시·군·구를 기준으로
              준비 중인 자격증을 선택해 통학 시간, 수업 구성, 복습 방식과
              온라인 강의 활용법을 비교해보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="directory-section">
        <div className="shell region-directory-grid">
          {localRegions.map((region) => (
            <article className="region-directory-card" key={region.slug}>
              <h2>{region.fullName}</h2>
              <div className="region-qualification-links">
                {qualifications.map((qualification) => (
                  <a
                    href={`/academy/${region.slug}/${qualification.slug}`}
                    key={qualification.slug}
                  >
                    {region.fullName} {qualification.name} 학원
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
