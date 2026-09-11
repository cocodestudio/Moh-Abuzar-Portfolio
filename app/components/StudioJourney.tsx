"use client";



interface JourneyMilestone {
  year: string;
  role: string;
  company: string;
  badge: string;
  summary: string;
  achievements: string[];
}

const milestones: JourneyMilestone[] = [
  {
    year: "2024 — Present",
    role: "Founder & Lead Software Architect",
    company: "CoCode Studio",
    badge: "FOUNDER MILESTONE",
    summary:
      "Founded CoCode Studio to deliver senior-led full-stack development and UI/UX product design to venture-backed startups and high-growth founders worldwide.",
    achievements: [
      "Partnered with funded startups across YC, Techstars, and top VC portfolios",
      "Helped client partners raise over $25M+ in combined capital",
      "Built 15+ zero-to-one production platforms with 99.8% on-time delivery",
    ],
  },
  {
    year: "2023 — 2024",
    role: "Lead Full-Stack Architect",
    company: "TechNova Cloud",
    badge: "SCALE & PERFORMANCE",
    summary:
      "Spearheaded distributed system architecture and Next.js cloud engineering for high-throughput enterprise SaaS applications.",
    achievements: [
      "Scaled architecture to support 500K+ monthly active users",
      "Achieved 99.99% system availability with sub-second API latency",
      "Mentored engineering pods on TypeScript and clean code best practices",
    ],
  },
  {
    year: "2021 — 2023",
    role: "Senior Creative & Frontend Engineer",
    company: "Vortex Digital",
    badge: "3D & MOTION",
    summary:
      "Engineered high-impact 3D WebGL interfaces, interactive spatial canvases, and modern design systems.",
    achievements: [
      "Reduced Core Web Vitals LCP times by 40% across flagship web properties",
      "Pioneered in-house 3D interactive canvas toolkits",
    ],
  },
  {
    year: "2017 — 2021",
    role: "B.Tech in Computer Science & Engineering",
    company: "University Institute of Technology",
    badge: "ACADEMIC HONORS",
    summary:
      "Graduated First Class with Academic Distinction. Deep theoretical and practical foundation in algorithms, operating systems, and computer graphics.",
    achievements: [
      "President of University Web Innovation & Hackathon Guild",
      "Published research on high-performance data structures",
    ],
  },
];

export default function StudioJourney() {
  return (
    <section
      id="journey"
      className="flex-shrink-0 w-full md:w-[1250px] lg:w-[1400px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-28"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
              {"// SUCCESS JOURNEY"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">From engineer to founder.</span> <br />
              <span>A relentless pursuit of craft.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-xs font-medium">
            How passion for code and design evolved into founding CoCode Studio and architecting software for ambitious founders.
          </p>
        </div>

        {/* Horizontal Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 pt-3 border-t border-[#e4e4e7]">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="touch-card p-5 rounded-2xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#ff4502] bg-[#ff4502]/10 px-2.5 py-1 rounded-full">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1 leading-snug">
                  {m.role}
                </h3>
                <p className="text-xs font-semibold text-[#71717a] mb-4">
                  {m.company}
                </p>

                <p className="text-xs text-[#71717a] leading-relaxed mb-4">
                  {m.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f4f4f5] space-y-1.5">
                {m.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#71717a] leading-tight">
                    <span className="text-[#ff4502] font-bold">▹</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
