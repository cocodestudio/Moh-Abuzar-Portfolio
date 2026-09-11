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
  title: "Moh Abuzar — Product Design & Full-Stack Engineering Studio",
  description:
    "Senior full-stack engineer and UI/UX product architect building high-impact digital experiences, web apps, and modern design systems for venture-backed startups and visionary founders.",
  keywords: [
    "Moh Abuzar",
    "Portfolio",
    "Product Designer",
    "Full-Stack Developer",
    "UI/UX Architect",
    "Next.js",
    "React",
    "Design Studio",
  ],
  authors: [{ name: "Moh Abuzar" }],
  creator: "Moh Abuzar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohabuzar.dev",
    title: "Moh Abuzar — Product Design & Full-Stack Engineering Studio",
    description:
      "Senior full-stack engineer and UI/UX product architect building high-impact digital experiences.",
    siteName: "Moh Abuzar Studio",
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
