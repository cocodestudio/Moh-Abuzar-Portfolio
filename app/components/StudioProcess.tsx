"use client";

import { CheckCircle2 } from "lucide-react";

export default function StudioProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      time: "Days 1 — 3",
      desc: "We define your core product goals, essential features, and tech roadmap. Clear milestones, transparent deliverables, and zero corporate fluff.",
    },
    {
      num: "02",
      title: "Sprints & Live Staging",
      time: "Weeks 1 — 3",
      desc: "Rapid development cycles with continuous preview links and direct chat updates. You test and validate working software every single week.",
    },
    {
      num: "03",
      title: "Launch & Production Scale",
      time: "Final Polish",
      desc: "Rigorous speed QA, mobile checks, and smooth production deployment. Complete code ownership, documentation, and clean handoff.",
    },
  ];

  return (
    <section
      id="process"
      className="flex-shrink-0 w-full md:w-[1100px] lg:w-[1260px] min-h-screen md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-8 md:px-10 lg:px-12 pt-20 sm:pt-22 md:pt-24 pb-24 sm:pb-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="my-auto w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
        
        {/* Outpace Section Heading */}
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
            {"// SIMPLE 3-STEP PROCESS"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
            <span className="text-[#a1a1aa] font-medium">How we collaborate.</span> <br />
            <span>From idea to launch.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed">
            No 90-day bureaucratic discovery phases. We move with the speed, transparency, and precision that high-growth startups demand.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 lg:gap-5 pt-2 border-t border-[#e4e4e7]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="touch-card p-4 sm:p-5 lg:p-6 rounded-2xl md:rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#ff4502]">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#71717a] bg-[#f4f4f5] px-2.5 py-0.5 rounded-full">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-[#f4f4f5] flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Fluff Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
