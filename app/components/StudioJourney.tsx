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
    year: "2018 — 2023",
    role: "Self-Taught Tech Explorer",
    company: "Early Roots (8th Standard)",
    badge: "SELF-TAUGHT",
    summary:
      "Started exploring coding and tech in 8th standard without any formal IT background. Spent 5 dedicated years mastering software fundamentals, modern web stacks, and system architecture until fully production-ready.",
    achievements: [
      "Started exploring computers & code in 8th grade",
      "Zero formal schooling — purely curiosity-driven mastery",
      "Mastered frontend, backend & full systems by 2023",
    ],
  },
  {
    year: "2023 — 2024",
    role: "Independent Full-Stack Freelancer",
    company: "Global Online Freelancing",
    badge: "COMMERCIAL LAUNCH",
    summary:
      "Stepped into active online freelancing, partnering directly with founders and international clients to engineer commercial web apps, custom platforms, and production-ready digital products.",
    achievements: [
      "Delivered real-world client platforms with zero fluff",
      "End-to-end execution: UI design, APIs & database logic",
      "Maintained 100% client satisfaction and repeat trust",
    ],
  },
  {
    year: "2024 — 2027",
    role: "BCA Computer Applications",
    company: "Shobhit University, Gangoh",
    badge: "ACADEMIC FOUNDATION",
    summary:
      "Pursuing formal Computer Applications (BCA) degree to complement practical engineering expertise with computer science theory, advanced algorithms, and software engineering standards.",
    achievements: [
      "Pursuing BCA degree at Shobhit University, Gangoh",
      "Bridging practical full-stack craft with computer science",
      "Active parallel building alongside academic studies",
    ],
  },
  {
    year: "2025 — Present",
    role: "Founder & Lead Architect",
    company: "CoCode Studio",
    badge: "STUDIO FOUNDER",
    summary:
      "Founded CoCode Studio to partner directly with founders and ambitious startups — architecting and shipping high-performance web & mobile platforms that drive real revenue.",
    achievements: [
      "Architecting end-to-end web & mobile platforms",
      "Direct senior founder access with zero agency overhead",
      "99.8% on-time milestone delivery for client platforms",
    ],
  },
];

export default function StudioJourney() {
  return (
    <section
      id="journey"
      className="flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex flex-col justify-start md:justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-22 md:pt-24 pb-24 sm:pb-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="my-auto w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">From passionate builder</span> <br />
              <span>to studio founder.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-xs font-medium">
            A consistent track record of building production software, scaling architectures, and helping founders launch products that win.
          </p>
        </div>

        {/* Horizontal Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4 lg:gap-4.5 pt-2 border-t border-[#e4e4e7]">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="touch-card p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#ff4502] bg-[#ff4502]/10 px-2.5 py-0.5 rounded-full">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-0.5 leading-snug">
                  {m.role}
                </h3>
                <p className="text-xs font-semibold text-[#71717a] mb-2.5">
                  {m.company}
                </p>

                <p className="text-xs text-[#71717a] leading-relaxed mb-3">
                  {m.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f4f4f5] space-y-1">
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
