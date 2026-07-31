import {
  provinces,
  qualifications,
  regions,
  secretCodeUrl,
} from "./site-data";
import Link from "next/link";

const popularRegionNames = [
  "서울-강남구",
  "서울-종로구",
  "경기-수원시",
  "경기-성남시",
  "인천-남동구",
  "대전-서구",
  "부산-부산진구",
  "대구-수성구",
];

export default function Home() {
  const popularRegions = popularRegionNames
    .map((slug) => regions.find((region) => region.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <p>
            <span className="shield-mark" aria-hidden="true" />
            전국 학원 정보와 합격 전략을 한 곳에
          </p>
          <div className="utility-links" aria-label="주요 안내">
            <span>학원 선택 기준</span>
            <span>자격증별 맞춤 가이드</span>
            <span>온라인 학습 대안</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-row">
          <Link className="brand" href="/">
            전국 자격증 학원 가이드
          </Link>
          <nav aria-label="주요 메뉴">
            <a href="#regions">지역별 학원 찾기</a>
            <a href="#qualifications">자격증 학습 가이드</a>
            <a className="nav-search" href="#regions" aria-label="지역 찾기">
              <span aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pin-dot" aria-hidden="true" />
              지역 × 자격증 학원 가이드
            </p>
            <h1>
              우리 지역 자격증 학원,
              <br />
              <span>합격까지 이어지는 선택</span>
            </h1>
            <p className="hero-lead">
              통학 여건과 수업 방식부터 필기·실기 대비까지 비교하고,
              온라인 강의를 활용한 학습 대안도 함께 확인해보세요.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href="https://engineerlab-guide.netlify.app/electric-engineer/"
              >
                엔지니어랩 인강 보기
                <span aria-hidden="true">→</span>
              </a>
              <a className="secret-link" href={secretCodeUrl}>
                <span className="tag-mark" aria-hidden="true" />
                시크릿코드 6만원 할인 혜택
                <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>

          <div className="learning-visual" aria-label="합격 중심 학습 설계">
            <div className="circuit-grid" aria-hidden="true" />
            <div className="process-pill">
              <span>✓</span>
              이론 이해 → 문제 적용 → 합격
            </div>
            <div className="diagram-card">
              <p>합격 회로</p>
              <div className="diagram-flow">
                <span>이론</span>
                <i />
                <span>기출</span>
                <i />
                <span>실기</span>
              </div>
              <b>반복 학습으로 빈틈을 연결합니다</b>
            </div>
            <div className="progress-card">
              <p>학습 진도</p>
              <strong>68%</strong>
              <ul>
                <li>전기이론 ✓</li>
                <li>전력공학 ✓</li>
                <li>전기기기 ○</li>
              </ul>
            </div>
            <div className="score-card">
              <p>기출 문제 풀이</p>
              <div className="bar-chart" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong>72%</strong>
            </div>
            <div className="goal-card">
              <span aria-hidden="true">ϟ</span>
              <p>
                <strong>합격까지</strong>
                함께하는 학습 설계
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-section" aria-label="빠른 안내">
        <div className="shell quick-grid">
          <a className="quick-card" href="#regions">
            <span className="quick-icon">◎</span>
            <span>
              <strong>지역 학원 비교</strong>
              <small>통학·시간표·수업 방식을 비교하세요.</small>
            </span>
            <b aria-hidden="true">›</b>
          </a>
          <a className="quick-card" href="#qualifications">
            <span className="quick-icon">▦</span>
            <span>
              <strong>자격증별 학습 계획</strong>
              <small>필기·실기 단계에 맞춰 준비하세요.</small>
            </span>
            <b aria-hidden="true">›</b>
          </a>
          <a
            className="quick-card"
            href="https://engineerlab-guide.netlify.app/electric-engineer/"
          >
            <span className="quick-icon">▷</span>
            <span>
              <strong>온라인 학습 대안</strong>
              <small>통학이 어렵다면 인강을 활용하세요.</small>
            </span>
            <b aria-hidden="true">›</b>
          </a>
        </div>
      </section>

      <section className="content-section" id="qualifications">
        <div className="shell">
          <div className="section-heading">
            <p>QUALIFICATION GUIDE</p>
            <h2>준비 중인 자격증을 선택하세요</h2>
            <span>
              시험 과목과 학습 단계가 다른 만큼, 자격증별 기준으로 학원과
              인강을 비교하는 것이 좋습니다.
            </span>
          </div>
          <div className="qualification-grid">
            {qualifications.map((item, index) => (
              <a className="qualification-card" href={item.ctaUrl} key={item.name}>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.name}</h3>
                <p>{item.examFocus}</p>
                <b>학습 가이드 보기 →</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="region-section" id="regions">
        <div className="shell">
          <div className="section-heading region-heading">
            <p>REGION DIRECTORY</p>
            <h2>전국 시·군·구 학원 가이드</h2>
            <span>
              거주지나 직장과 가까운 지역을 선택한 뒤 준비 중인 자격증의
              수업 방식, 통학 조건, 온라인 학습 대안을 비교해보세요.
            </span>
          </div>
          <div className="popular-regions" aria-label="주요 지역">
            {popularRegions.map((region) =>
              region ? (
                <a
                  href={`/academy/${region.slug}/${qualifications[0].slug}/`}
                  key={region.slug}
                >
                  {region.fullName} 전기기사 학원
                </a>
              ) : null,
            )}
          </div>
          <div className="province-grid">
            {provinces.map((province) => (
              <a
                className="province-card"
                href={`/regions/${province.slug}/`}
                key={province.slug}
              >
                <span>{province.short}</span>
                <strong>{province.name}</strong>
                <small>{province.count}개 시·군·구 안내</small>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="discount-section">
        <div className="shell discount-panel">
          <div>
            <p>ENGINEERLAB SECRET CODE</p>
            <h2>회원가입 전에 시크릿코드 e7288을 확인하세요</h2>
            <span>
              신규 회원은 가입 단계에서 코드를 입력하면 6만원 할인쿠폰을
              받을 수 있습니다. 기존 회원은 전용 페이지에서 로그인 후
              쿠폰을 발급받을 수 있습니다.
            </span>
          </div>
          <a href={secretCodeUrl}>할인쿠폰 받는 방법 보기 →</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <p>전국 자격증 학원 가이드</p>
          <span>
            지역 학원 선택에 필요한 기준과 온라인 학습 정보를 제공합니다.
          </span>
        </div>
      </footer>
    </main>
  );
}
