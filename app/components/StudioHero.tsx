"use client";

import { useState } from "react";
import Image from "next/image";
import StudioMarquee from "./StudioMarquee";

export default function StudioHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="flex-shrink-0 w-full md:w-screen md:min-h-screen md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-22 md:pt-24 pb-6 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="w-full md:my-auto max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 lg:gap-10 items-center">

        {/* Left Column: Typography & Craft Identity */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-10">

          {/* Outpace & Fudali Inspired Bold Value Proposition Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b] mb-3 lg:mb-6">
            I help founders build <br />
            <span className="text-[#a1a1aa] font-medium">high-performance web apps</span> <br />
            <span className="text-[#18181b]">that scale &amp; drive revenue.</span>
          </h1>

          {/* Subheading with clear Founder & Engineer Identity */}
          <p className="text-sm sm:text-base lg:text-lg text-[#71717a] font-normal leading-relaxed max-w-xl mb-3 lg:mb-4">
            I am <strong className="text-[#18181b] font-semibold">Moh Abuzar</strong>, Founder of <strong className="text-[#18181b] font-semibold">CoCode Studio</strong>. I partner with ambitious startups and business owners to design, build, and launch production-ready web and mobile platforms — fast, reliably, and with zero agency fluff.
          </p>

          {/* Mobile Quick Action Buttons */}
          <div className="flex items-center gap-2.5 md:hidden w-full pt-1 pb-1">
            <a
              href="tel:+919045757272"
              className="flex-1 btn-primary text-center text-xs font-semibold py-2.5 shadow-sm no-underline"
            >
              Book Call Directly
            </a>
            <a
              href="#work"
              className="flex-1 text-center text-xs font-semibold py-2.5 rounded-full bg-white border border-[#e4e4e7] text-[#18181b] hover:bg-[#f4f4f5] shadow-2xs no-underline"
            >
              View Work ↓
            </a>
          </div>

        </div>

        {/* Right Column: Transparent Portrait on Background with Subtle Water Wave Sheen */}
        <div className="md:col-span-5 flex justify-center items-center relative select-none mt-2 md:mt-0">

          {/* Subtle Studio Radial Halo Backlight */}
          <div className="absolute w-[240px] sm:w-[320px] md:w-[300px] lg:w-[380px] h-[240px] sm:h-[320px] md:h-[300px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#ff4502]/15 via-[#fbbf24]/10 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-pulse" />

          {/* Minimalist Studio Geometry Rings */}
          <div className="absolute w-[260px] sm:w-[340px] md:w-[320px] lg:w-[360px] h-[260px] sm:h-[340px] md:h-[320px] lg:h-[360px] rounded-full border border-[#e4e4e7]/70 pointer-events-none -z-10 animate-spin" style={{ animationDuration: "50s" }} />

          {/* Responsive Portrait Container with Viewport Constraint */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[360px] h-[260px] sm:h-[340px] md:h-[40vh] lg:h-[460px] max-h-[480px] flex items-end justify-center cursor-pointer group water-wave-hover animate-float-3d"
          >
            {/* Seamless Transparent Portrait with bottom fade */}
            <div
              className="relative w-full h-full overflow-hidden transition-all duration-700 ease-out"
              style={{
                maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                transform: isHovered ? "scale(1.015)" : "scale(1)",
              }}
            >
              <Image
                src="/images/hero-portrait.png"
                alt="Moh Abuzar - Founder of CoCode Studio & Senior Software Engineer"
                fill
                priority
                className={`object-contain object-bottom transition-all duration-700 ease-out ${isHovered
                    ? "filter drop-shadow-[0_25px_45px_rgba(255,69,2,0.18)]"
                    : "filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
                  }`}
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Gentle Liquid Water Wave Light Sheen on Hover */}
              <div
                className={`water-sheen absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? "opacity-100 animate-water-wave" : "opacity-0"
                  }`}
                style={{
                  background:
                    "linear-gradient(135deg, transparent 35%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 69, 2, 0.15) 55%, transparent 70%)",
                }}
              />
            </div>

          </div>

        </div>

        {/* Fudali Studio Running Marquee Ribbon */}
        <div className="md:col-span-12 w-full pt-2 lg:pt-3">
          <StudioMarquee />
        </div>

      </div>
    </section>
  );
}
