"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  impact: string;
  tags: string[];
  gradient: string;
  accent: string;
  image: string;
  liveUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "onepathlab",
    title: "OnePathLab LIMS",
    category: "Pathology LIMS SaaS",
    client: "OnePathLab Diagnostics",
    year: "2024-2025",
    summary:
      "Enterprise Laboratory Information Management System (LIMS) automating sample barcodes, pathology reports, patient portals, and automated report dispatch.",
    impact: "Live Pathology SaaS • Zero Paperwork",
    tags: ["Next.js", "LIMS", "Pathology", "SaaS"],
    gradient: "from-[#ff4502]/12 via-[#ff6a3d]/5 to-transparent",
    accent: "#ff4502",
    image: "/images/projects/onepathlab.jpg",
    liveUrl: "https://www.onepathlab.com/",
  },
  {
    id: "vcode-ide",
    title: "VCode Mobile IDE",
    category: "Developer Mobile App",
    client: "CoCode Studio",
    year: "2024",
    summary:
      "Pocket Android mobile IDE engineered for responsive web development with real-time editor syntax highlighting, built-in preview engine, and dev console.",
    impact: "Google Play Console • Mobile Web IDE",
    tags: ["Android", "Flutter", "DevTools", "IDE"],
    gradient: "from-[#3b82f6]/12 via-[#60a5fa]/5 to-transparent",
    accent: "#3b82f6",
    image: "/images/projects/vcode.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.cocode.vcode.ide",
  },
  {
    id: "sr-restro",
    title: "SR Restro App",
    category: "Smart Restaurant & POS",
    client: "CoCode Studio",
    year: "2024",
    summary:
      "Modern digital food ordering and restaurant management platform powering QR table ordering, live KOT kitchen sync, and contactless customer payments.",
    impact: "Production POS • Instant Kitchen Sync",
    tags: ["Mobile App", "Restaurant POS", "FoodTech", "Realtime"],
    gradient: "from-[#f59e0b]/12 via-[#fbbf24]/5 to-transparent",
    accent: "#f59e0b",
    image: "/images/projects/srrestro.svg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.cocode.srrestro",
  },
  {
    id: "entrixo",
    title: "Entrixo Attendance",
    category: "EdTech & Smart Campus",
    client: "CoCode Studio / University",
    year: "2024-2025",
    summary:
      "Smart university lab attendance and anti-proxy validation app featuring location geofencing, hardware device pairing, and instant faculty lab dashboards.",
    impact: "Anti-Proxy Verified • University Lab Deployment",
    tags: ["Android", "Anti-Proxy", "EdTech", "Campus Lab"],
    gradient: "from-[#10b981]/12 via-[#34d399]/5 to-transparent",
    accent: "#10b981",
    image: "/images/projects/entrixo.svg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.cocode.entrixo",
  },
];

export default function StudioWork() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveringCard, setHoveringCard] = useState(false);

  const handleCardMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      className="flex-shrink-0 w-full md:w-screen md:min-h-screen md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-0 md:pt-20 md:pb-16 overflow-visible"
    >
      {/* Floating "Live Project" Cursor Badge */}
      {hoveringCard && (
        <div
          className="view-work-cursor hidden md:flex items-center gap-1.5 z-40 pointer-events-none"
          style={{
            left: `${cursorPos.x + 12}px`,
            top: `${cursorPos.y + 12}px`,
          }}
        >
          <span>Open Live Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4502]" />
        </div>
      )}

      <div className="w-full md:my-auto max-w-7xl mx-auto flex flex-col gap-3.5 md:gap-4 lg:gap-5">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">Real projects.</span> <br />
              <span>Production deployed apps.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-md font-normal leading-relaxed">
            Live SaaS systems, developer tools, and mobile apps built and deployed under CoCode Studio. Click any project to open the live platform or Play Store listing.
          </p>
        </div>

        {/* Work Grid: 4 Cards */}
        <div
          onMouseMove={handleCardMouseMove}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-3.5 lg:gap-4"
        >
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveringCard(true)}
              onMouseLeave={() => setHoveringCard(false)}
              className="relative studio-card touch-card card-3d card-3d-shine p-3.5 sm:p-4 lg:p-4.5 rounded-2xl md:rounded-3xl flex flex-col justify-between overflow-hidden cursor-pointer group hover:border-[#ff4502]/50 hover:shadow-lg transition-all duration-300 no-underline"
              title={`Open ${study.title} in new tab`}
            >
              {/* Subtle Gradient Fill */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Top Bar: Category & Year */}
              <div className="relative z-10 flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#e4e4e7] text-[10px] font-mono font-semibold text-[#18181b] shadow-2xs truncate max-w-[150px]">
                  {study.category}
                </span>
                <span className="text-[11px] font-mono text-[#71717a] ml-2 flex-shrink-0">
                  {study.year}
                </span>
              </div>

              {/* Project Preview Image */}
              <div className="relative z-10 w-full h-32 sm:h-36 md:h-28 lg:h-32 xl:h-36 rounded-xl overflow-hidden mb-2.5 bg-[#f4f4f5] border border-[#e4e4e7]/70 group-hover:border-[#ff4502]/40 transition-colors shadow-2xs">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-2 right-2 bg-black/65 backdrop-blur-xs text-white p-1 rounded-full opacity-80 group-hover:opacity-100 group-hover:bg-[#ff4502] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Title & Summary */}
              <div className="relative z-10 my-1">
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1 flex items-center justify-between">
                  <span className="truncate">{study.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-[#ff4502] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-1" />
                </h3>
                <p className="text-[11px] sm:text-xs text-[#71717a] line-clamp-2 leading-relaxed">
                  {study.summary}
                </p>
              </div>

              {/* Bottom Metrics & Tags */}
              <div className="relative z-10 pt-2.5 border-t border-[#e4e4e7]/80 flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full w-fit truncate max-w-full">
                  ● {study.impact}
                </span>

                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex flex-wrap gap-1">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/90 border border-[#e4e4e7] text-[#71717a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-[#ff4502] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                    Live Link <span>→</span>
                  </span>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
