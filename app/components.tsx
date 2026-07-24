import { secretCodeUrl } from "./site-data";
import Link from "next/link";

export function SiteHeader() {
  return (
    <>
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
            <Link href="/#regions">지역별 학원 찾기</Link>
            <Link href="/#qualifications">자격증 학습 가이드</Link>
            <Link
              className="nav-search"
              href="/#regions"
              aria-label="지역 찾기"
            >
              <span aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-inner">
        <p>전국 자격증 학원 가이드</p>
        <span>
          지역 학원 선택에 필요한 기준과 온라인 학습 정보를 제공합니다.
        </span>
        <a href={secretCodeUrl}>시크릿코드 혜택 안내</a>
      </div>
    </footer>
  );
}
