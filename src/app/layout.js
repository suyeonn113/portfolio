import { Albert_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.scss";

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-korean",
  weight: "variable",
  display: "swap",
});

export const metadata = {
  title: "Web Design & Publishing Portfolio",
  description:
    "사용 흐름과 접근성을 설계하고 실제 동작하는 화면으로 구현하는 웹 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${albertSans.variable} ${notoSansKr.variable}`}>
      <body>{children}</body>
    </html>
  );
}
