# 엔지니어랩 지역별 자격증 학원 가이드

전국 시·군·구와 6개 자격증 조합으로 구성한 프로그래매틱 SEO 사이트입니다.
모든 상세 경로는 빌드할 때 정적 HTML로 생성되며, Vercel 무료 배포를 기준으로
설정되어 있습니다.

## 주요 경로

- `/` : 홈페이지
- `/regions/[province]/` : 시·도별 지역 안내
- `/academy/[region]/[qualification]/` : 지역·자격증별 학원 가이드
- `/sitemap.xml` : 사이트맵
- `/robots.txt` : 검색엔진 수집 설정

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 확인합니다.

## 정적 빌드

```bash
npm run build
```

빌드가 끝나면 `out` 폴더에 정적 사이트가 생성됩니다.

## Vercel 배포 설정

Vercel에서 GitHub 저장소를 연결하면 Next.js 프로젝트로 자동 인식됩니다.
다음 환경변수를 등록하면 캐노니컬, Open Graph URL, 사이트맵과 robots.txt가
운영 도메인을 기준으로 생성됩니다.

```text
NEXT_PUBLIC_SITE_URL=https://engineerlab-academy-guide.vercel.app
```

현재 코드의 기본 주소도 위 Vercel 주소로 설정되어 있어 환경변수를 등록하지
않아도 동일한 주소가 사용됩니다.
