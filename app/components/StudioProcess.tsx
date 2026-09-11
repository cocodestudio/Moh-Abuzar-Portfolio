"use client";

import { CheckCircle2 } from "lucide-react";

export default function StudioProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      time: "Days 1 — 3",
      desc: "Deep-dive into your core goals, user personas, technical constraints, and product requirements. We align on scope, deliverables, and architecture with zero corporate fluff.",
    },
    {
      num: "02",
      title: "High-Velocity Sprints",
      time: "Weeks 1 — 3",
      desc: "Rapid interactive iterations. You get continuous staging builds, direct Slack/WhatsApp sync, and real-time design reviews so you can test and give feedback as we build.",
    },
    {
      num: "03",
      title: "Production Launch & Scale",
      time: "Final Polish",
      desc: "Pixel-perfect QA, sub-second latency optimization, mobile responsiveness tests, and seamless production deployment. Clean code handoff with complete documentation.",
    },
  ];

  return (
    <section
      id="process"
      className="flex-shrink-0 w-full md:w-[1150px] lg:w-[1300px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-28"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Outpace Section Heading */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
            {"// PROCESS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b]">
            <span className="text-[#a1a1aa] font-medium">Focused. Frictionless.</span> <br />
            <span>Founder-first.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed">
            No 90-day discovery phases or multi-tier bureaucracy. We build with the speed and precision high-growth startups demand.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-3 border-t border-[#e4e4e7]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="touch-card p-6 md:p-8 rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#ff4502]">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#71717a] bg-[#f4f4f5] px-2.5 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#71717a] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f4f4f5] flex items-center gap-2 text-xs font-semibold text-emerald-600">
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
