import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import AosProvider from "@/components/motion/AosProvider";
import "./globals.scss";

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata = {
  title: "Web Publisher · UI Implementation Portfolio",
  description:
    "질문과 관찰로 사용 목적을 파악하고, 이해하기 쉬운 화면 구조로 구현하는 웹퍼블리셔 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${albertSans.variable} ${pretendard.variable}`}>
      <body>
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
