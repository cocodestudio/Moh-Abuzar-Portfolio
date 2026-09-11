"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./Icons";

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
  liveUrl: string;
  githubUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "nexus-ai",
    title: "NexusAI Multimodal Studio",
    category: "AI Agent Platform",
    client: "Nexus Labs (Series A)",
    year: "2025",
    summary:
      "Autonomous AI agent orchestration interface featuring real-time streaming tokens, voice synthesis, interactive canvas whiteboard, and sub-100ms vector search.",
    impact: "$14M Series A • 45K Active Daily Agents",
    tags: ["Next.js 16", "React 19", "Gemini API", "TypeScript"],
    gradient: "from-[#ff4502]/10 via-[#ff6a3d]/5 to-transparent",
    accent: "#ff4502",
    liveUrl: "https://nexusai-demo.dev",
    githubUrl: "https://github.com",
  },
  {
    id: "hyper-vault",
    title: "HyperVault FinTech Engine",
    category: "Web3 & Financial Telemetry",
    client: "Hyperion Protocol",
    year: "2024",
    summary:
      "High-throughput asset dashboard featuring real-time WebGL interactive charts, multi-chain balance verification, biometric authentication, and enterprise security.",
    impact: "10K TPS Load Tested • $120M TVL",
    tags: ["Three.js", "WebGL", "TypeScript", "PostgreSQL"],
    gradient: "from-[#18181b]/10 via-[#27272a]/5 to-transparent",
    accent: "#18181b",
    liveUrl: "https://hypervault-demo.dev",
    githubUrl: "https://github.com",
  },
  {
    id: "aura-studio",
    title: "AuraStudio 3D Visualizer",
    category: "Spatial E-Commerce & AR",
    client: "Aura Spatial Design",
    year: "2024",
    summary:
      "Photorealistic web-based 3D configurator allowing instant material variations, custom studio HDRI lighting, mobile AR placement, and instant checkout flows.",
    impact: "60 FPS WebGL • 34% Conversion Uplift",
    tags: ["Three.js", "React 19", "Tailwind CSS", "Zustand"],
    gradient: "from-[#f59e0b]/10 via-[#fbbf24]/5 to-transparent",
    accent: "#f59e0b",
    liveUrl: "https://aurastudio-demo.dev",
    githubUrl: "https://github.com",
  },
  {
    id: "pulse-cloud",
    title: "PulseCloud Enterprise Suite",
    category: "Microservices Telemetry",
    client: "Pulse Observability",
    year: "2024",
    summary:
      "Sub-second WebSocket telemetry suite providing live microservice topology graphs, automated anomaly alarms, and real-time event aggregation.",
    impact: "500K Events/Sec • 99.99% Cloud Uptime",
    tags: ["Node.js", "WebSockets", "Docker", "Next.js"],
    gradient: "from-[#10b981]/10 via-[#34d399]/5 to-transparent",
    accent: "#10b981",
    liveUrl: "https://pulsecloud-demo.dev",
    githubUrl: "https://github.com",
  },
];

export default function StudioWork() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveringCard, setHoveringCard] = useState(false);

  const handleCardMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      className="flex-shrink-0 w-full md:w-[1380px] lg:w-[1550px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-28 md:pb-28"
    >
      {/* Outpace-style Floating "View Work" Cursor Badge */}
      {hoveringCard && (
        <div
          className="view-work-cursor hidden md:flex items-center gap-1"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <span>Inspect Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4502]" />
        </div>
      )}

      <div className="flex flex-col gap-6 md:gap-8 w-full">
        
        {/* Section Heading with Safe Top Clearance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
              {"// SELECTED WORK"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">Here&apos;s what</span> <br />
              <span>momentum looks like.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-sm font-normal leading-relaxed">
            A small sample of recent client collaborations across venture-backed AI, FinTech, and 3D web platforms.
          </p>
        </div>

        {/* Work Grid: 4 Side-by-Side Cards on Desktop (Zero Vertical Overlap) & Clean Stack on Mobile */}
        <div
          onMouseMove={handleCardMouseMove}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCase(study)}
              onMouseEnter={() => setHoveringCard(true)}
              onMouseLeave={() => setHoveringCard(false)}
              className="relative studio-card touch-card p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col justify-between overflow-hidden cursor-pointer group hover:border-[#ff4502]/40 transition-all duration-300"
            >
              {/* Subtle Warm Gradient Fill */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Top Meta Bar */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#e4e4e7] text-[10px] font-mono font-semibold text-[#18181b] shadow-2xs truncate max-w-[170px]">
                  {study.category}
                </span>
                <span className="text-xs font-mono text-[#71717a] ml-2 flex-shrink-0">
                  {study.year}
                </span>
              </div>

              {/* Title & Summary */}
              <div className="relative z-10 my-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-2 flex items-center justify-between">
                  <span>{study.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#ff4502] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </h3>
                <p className="text-xs text-[#71717a] line-clamp-2 md:line-clamp-3 leading-relaxed">
                  {study.summary}
                </p>
              </div>

              {/* Bottom Metrics & Tags */}
              <div className="relative z-10 pt-4 border-t border-[#e4e4e7]/80 flex flex-col gap-2.5">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full w-fit">
                  ● {study.impact}
                </span>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/90 border border-[#e4e4e7] text-[#71717a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#ff4502] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Inspect <span>→</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 3D Spatial Case Study Details Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="animate-modal-3d bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto modal-scroll p-6 md:p-8 shadow-2xl border border-[#e4e4e7] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle Gradient Backdrop Sheen */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${selectedCase.gradient} opacity-50 blur-3xl pointer-events-none -z-10`} />

            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] transition-all hover:rotate-90 cursor-pointer z-10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 pr-10">
              <span className="px-3 py-1 rounded-full bg-[#ff4502]/10 text-[#ff4502] text-xs font-mono font-semibold">
                {selectedCase.category}
              </span>
              <span className="text-xs font-mono text-[#a1a1aa]">
                • {selectedCase.year}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#18181b] mb-1">
              {selectedCase.title}
            </h3>

            <p className="text-xs font-mono text-[#71717a] mb-4">
              Client Partner: <strong className="text-[#18181b]">{selectedCase.client}</strong>
            </p>

            <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed mb-5">
              {selectedCase.summary}
            </p>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f9f9f8] border border-[#e4e4e7] mb-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block mb-1">
                Verified Outcome &amp; Impact:
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{selectedCase.impact}</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedCase.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-[#f4f4f5] text-[11px] font-medium text-[#18181b] border border-[#e4e4e7]/60 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedCase.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent touch-card flex items-center gap-2 text-xs font-semibold py-2.5 px-4"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={selectedCase.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary touch-card flex items-center gap-2 text-xs font-semibold py-2.5 px-4"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
