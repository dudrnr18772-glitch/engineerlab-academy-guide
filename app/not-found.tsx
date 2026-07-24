import { SiteFooter, SiteHeader } from "./components";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="directory-hero">
        <div className="shell directory-title">
          <p className="section-kicker">PAGE NOT FOUND</p>
          <h1>요청하신 학원 가이드를 찾을 수 없습니다</h1>
          <p>
            지역 또는 자격증 주소가 변경되었을 수 있습니다. 전국 지역
            디렉터리에서 다시 선택해주세요.
          </p>
          <div className="detail-actions">
            <Link className="detail-primary" href="/#regions">
              지역별 가이드 보기 →
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
