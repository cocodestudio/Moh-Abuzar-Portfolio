"use client";

import Image from "next/image";

export default function StudioAbout() {
  const metrics = [
    { value: "₹5L+", label: "Client Value Generated", desc: "Commercial & freelance impact" },
    { value: "10+", label: "Production Projects Deployed", desc: "Client, college & live apps" },
    { value: "100%", label: "Milestone Success Rate", desc: "Founder speed with zero fluff" },
    { value: "7+ Years", label: "Active in Code & Tech", desc: "Self-taught roots to studio" },
  ];

  return (
    <section
      id="about"
      className="flex-shrink-0 w-full md:w-screen md:min-h-screen md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-0 md:pt-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="w-full md:my-auto max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">

        {/* Left Column: Seamless Transparent Portrait 2 */}
        <div className="md:col-span-5 flex justify-center items-center relative select-none">

          {/* Ambient Studio Lighting Glow */}
          <div className="absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-gradient-to-tr from-[#ff4502]/15 via-[#fbbf24]/10 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-pulse" />

          <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[360px] h-[260px] sm:h-[340px] md:h-[40vh] lg:h-[460px] max-h-[480px] flex items-end justify-center group animate-float-3d">

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
            <div className="absolute bottom-3 left-2 right-2 bg-white/95 backdrop-blur-md border border-[#e4e4e7] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-md shadow-black/5 z-20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4502] block mb-0.5">
                Founder Philosophy
              </span>
              <p className="text-xs font-semibold text-[#18181b] leading-tight">
                &ldquo;Great software isn&apos;t built by corporate committees. It is forged by obsessive builders who treat your vision like their own company: zero fluff, relentless execution, and code built to dominate.&rdquo;
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Narrative & Big Numbers */}
        <div className="md:col-span-7 flex flex-col items-start text-left">

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b] mb-4 lg:mb-6">
            Software engineer &amp; founder. <br />
            <span className="text-[#a1a1aa] font-medium">Building products that actually ship.</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm lg:text-base text-[#71717a] leading-relaxed mb-5 lg:mb-6 max-w-xl">
            <p>
              You do not need a 20-person agency, endless sprint meetings, or junior developers learning on your dime. You need an experienced full-stack partner who treats your product like their own.
            </p>
            <p>
              I am <strong className="text-[#18181b] font-semibold">Moh Abuzar</strong>, Founder of <strong className="text-[#18181b] font-semibold">CoCode Studio</strong>. Active in software development since 2018, I have engineered and deployed 10+ production projects across commercial client contracts, collegiate platforms, and independent web products — delivering clean architecture on time, on budget, and with zero agency fluff.
            </p>
          </div>

          {/* Big Metric Numbers */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full max-w-xl pt-4 lg:pt-5 border-t border-[#e4e4e7]">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#18181b]">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#18181b] mt-0.5">
                  {m.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#a1a1aa] font-mono">
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
