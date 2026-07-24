import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "전국 자격증 학원 가이드 | 전기·소방·공기업 학습 정보",
    template: "%s | 전국 자격증 학원 가이드",
  },
  description:
    "전국 시·군·구별 전기기사, 전기산업기사, 전기공사기사, 전기기능사, 소방설비기사, 공기업·NCS 학원 선택 기준과 온라인 강의 정보를 확인하세요.",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "838eo6Gckysvid4iFBUIV3zZJf-CuVtXBw9dNaj20JE",
    other: {
      "naver-site-verification":
        "f6f60e3bbd0f0dad5d3daca711afacf1bf0d6a9e",
      "msvalidate.01": "7CC2274F4DAA4C8A93EB5F4D8259E6A3",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "전국 자격증 학원 가이드",
    title: "전국 자격증 학원 가이드",
    description:
      "우리 지역 자격증 학원 선택 기준과 합격까지 이어지는 온라인 학습 대안을 안내합니다.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "전국 자격증 학원 가이드",
    description:
      "전국 시·군·구별 자격증 학원 선택 기준과 온라인 학습 대안을 확인하세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
