"use client";

import { useState } from "react";
import Image from "next/image";
import StudioMarquee from "./StudioMarquee";

export default function StudioHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="flex-shrink-0 w-full md:w-[1150px] lg:w-[1300px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-28 overflow-visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Typography & Craft Identity */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Outpace & Fudali Inspired Bold Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#18181b] mb-6">
            Ship products that <br />
            <span className="text-[#a1a1aa] font-medium">raise money and</span> <br />
            <span className="text-[#18181b]">convert users.</span>
          </h1>

          {/* Subheading with exact Founder & Software Engineer Identity */}
          <p className="text-base sm:text-lg text-[#71717a] font-normal leading-relaxed max-w-xl mb-8">
            I am <strong className="text-[#18181b] font-semibold">Moh Abuzar</strong>, Founder of <strong className="text-[#18181b] font-semibold">CoCode Studio</strong> and Senior Software Engineer. I partner with founders to build high-velocity web platforms, modern UI/UX design systems, and robust full-stack architectures.
          </p>

          {/* Credibility / Tech Stack List */}
          <div className="flex flex-col gap-2.5 pt-6 border-t border-[#e4e4e7] w-full max-w-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] font-mono">
              Core Technologies &amp; Architecture:
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-[#71717a]">
              <span className="text-[#18181b] font-semibold">Next.js 16</span>
              <span className="text-[#d4d4d8]">•</span>
              <span className="text-[#18181b] font-semibold">React 19</span>
              <span className="text-[#d4d4d8]">•</span>
              <span>TypeScript</span>
              <span className="text-[#d4d4d8]">•</span>
              <span>Node.js</span>
              <span className="text-[#d4d4d8]">•</span>
              <span>Tailwind CSS</span>
              <span className="text-[#d4d4d8]">•</span>
              <span>3D WebGL</span>
              <span className="text-[#d4d4d8]">•</span>
              <span>PostgreSQL</span>
            </div>
          </div>

        </div>

        {/* Right Column: Transparent Portrait on Background with Subtle Water Wave Sheen */}
        <div className="md:col-span-5 flex justify-center items-center relative select-none mt-4 md:mt-0">
          
          {/* Subtle Studio Radial Halo Backlight */}
          <div className="absolute w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#ff4502]/15 via-[#fbbf24]/10 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-pulse" />

          {/* Minimalist Studio Geometry Rings */}
          <div className="absolute w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full border border-[#e4e4e7]/70 pointer-events-none -z-10 animate-spin" style={{ animationDuration: "50s" }} />

          {/* Stable Portrait Container (No Mouse-Tilt Jitter) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[320px] sm:max-w-[400px] h-[450px] sm:h-[530px] flex items-end justify-center cursor-pointer group water-wave-hover"
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
                className={`object-contain object-bottom transition-all duration-700 ease-out ${
                  isHovered
                    ? "filter drop-shadow-[0_25px_45px_rgba(255,69,2,0.18)]"
                    : "filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
                }`}
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Gentle Liquid Water Wave Light Sheen on Hover */}
              <div
                className={`water-sheen absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  isHovered ? "opacity-100 animate-water-wave" : "opacity-0"
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
        <div className="md:col-span-12 w-full pt-2 md:pt-4">
          <StudioMarquee />
        </div>

      </div>
    </section>
  );
}
