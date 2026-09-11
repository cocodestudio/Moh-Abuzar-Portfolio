"use client";

import Image from "next/image";

export default function StudioAbout() {
  const metrics = [
    { value: "$25M+", label: "Client Capital Raised", desc: "Across YC, Techstars & Seed" },
    { value: "35+", label: "Production Platforms Shipped", desc: "SaaS, Web3 & Mobile" },
    { value: "99.8%", label: "Milestone Success Rate", desc: "Founder speed with zero fluff" },
    { value: "5+ Years", label: "Software Architecture", desc: "Full-stack, UI/UX & Cloud" },
  ];

  return (
    <section
      id="about"
      className="flex-shrink-0 w-full md:w-[1200px] lg:w-[1350px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Seamless Transparent Portrait 2 */}
        <div className="md:col-span-5 flex justify-center items-center relative select-none">
          
          {/* Ambient Studio Lighting Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#ff4502]/15 via-[#fbbf24]/10 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-pulse" />

          <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[450px] sm:h-[500px] flex items-end justify-center group">
            
            {/* Seamless Portrait Fade */}
            <div
              className="relative w-full h-full"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            >
              <Image
                src="/images/about-portrait.png"
                alt="Moh Abuzar - Founder @ CoCode Studio"
                fill
                className="object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-6 left-2 right-2 bg-white/95 backdrop-blur-md border border-[#e4e4e7] rounded-2xl p-3.5 shadow-md shadow-black/5 z-20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4502] block mb-0.5">
                Leadership Philosophy
              </span>
              <p className="text-xs font-semibold text-[#18181b] leading-tight">
                &ldquo;Senior engineering firepower without the agency bloat or freelance headaches.&rdquo;
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Narrative & Big Numbers */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502] mb-3">
            {"// ABOUT & LEADERSHIP"}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b] mb-6">
            Senior-led engineering &amp; <br />
            <span className="text-[#a1a1aa] font-medium">product architecture.</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#71717a] leading-relaxed mb-8 max-w-xl">
            <p>
              I am <strong className="text-[#18181b] font-semibold">Moh Abuzar</strong>, a software engineer and the Founder of <strong className="text-[#18181b] font-semibold">CoCode Studio</strong>. I partner directly with founders, CTOs, and product leaders who can&apos;t afford to waste months on bloated agency hierarchies.
            </p>
            <p>
              At CoCode Studio, we bridge high-converting aesthetic design with bulletproof code. We don&apos;t just write components; we craft complete user journeys, resilient databases, and interactive web experiences that drive tangible revenue and investor confidence.
            </p>
          </div>

          {/* Big Metric Numbers */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl pt-6 border-t border-[#e4e4e7]">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#18181b]">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#18181b] mt-1">
                  {m.label}
                </span>
                <span className="text-[11px] text-[#a1a1aa] font-mono">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
