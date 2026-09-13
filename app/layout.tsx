import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "./components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f9f9f8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mohabuzar.dev"),
  title: "Moh Abuzar — Senior Software Engineer & Founder @ CoCode Studio",
  description:
    "I help founders build high-performance web apps that scale and drive revenue. 10+ production-deployed projects shipped, commercial client impact, zero agency fluff.",
  keywords: [
    "Moh Abuzar",
    "CoCode Studio",
    "Founder",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web App Development",
    "SaaS MVP",
  ],
  authors: [{ name: "Moh Abuzar" }],
  creator: "Moh Abuzar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohabuzar.dev",
    title: "Moh Abuzar — Senior Software Engineer & Founder @ CoCode Studio",
    description:
      "I help founders build high-performance web apps that scale and drive revenue. Zero agency fluff.",
    siteName: "Moh Abuzar Portfolio",
    images: [
      {
        url: "/images/hero-portrait.png",
        width: 1200,
        height: 1500,
        alt: "Moh Abuzar",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#f9f9f8] text-[#18181b] flex flex-col relative overflow-x-hidden selection:bg-[#ff4502] selection:text-white">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
