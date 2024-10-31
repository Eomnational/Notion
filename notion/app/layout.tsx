import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "我的 Next.js 应用",
  description: "这是一个基于 Next.js 的示例应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link rel="stylesheet" href="path/to/your/styles.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
         
        </header>
        <main>{children}</main>
        <footer>
         
        </footer>
      </body>
    </html>
  );
}

