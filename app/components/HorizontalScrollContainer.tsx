"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useLenis } from "lenis/react";
import StudioNavbar from "./StudioNavbar";
import MobileDock from "./MobileDock";

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  onOpenResume?: () => void;
}

const sectionIds = ["hero", "services", "tech", "work", "journey", "about", "contact"];

export default function HorizontalScrollContainer({
  children,
  onOpenResume,
}: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetScrollRef = useRef(0);
  const animIdRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const mobileProgressFillRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDesktop, setIsDesktop] = useState(false);
  const lenis = useLenis();

  // Real-time desktop horizontal scroll progress & active section updater (zero layout thrashing, direct DOM)
  const updateScrollProgress = useCallback((scrollLeft: number) => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    const clamped = Math.min(100, Math.max(0, progress));

    // Direct DOM manipulation: 100% real-time, zero React re-render latency, zero CSS transition delay
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${Math.max(clamped, 2)}%`;
    }
    if (mobileProgressFillRef.current) {
      mobileProgressFillRef.current.style.width = `${clamped}%`;
    }

    // Detect active section using offsetLeft without forced layout reflow
    const currentScroll = scrollLeft + container.clientWidth * 0.35;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetLeft <= currentScroll) {
        const nextId = sectionIds[i];
        setActiveSection((prev) => (prev !== nextId ? nextId : prev));
        break;
      }
    }
  }, []);

  // Check screen size for desktop horizontal scroll
  useEffect(() => {
    const checkScreen = () => {
      const isDesk = window.innerWidth >= 768;
      setIsDesktop(isDesk);
      if (isDesk && containerRef.current) {
        updateScrollProgress(containerRef.current.scrollLeft);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [updateScrollProgress]);

  // Update progress and active section on native scroll events
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isDesktop) {
      updateScrollProgress(container.scrollLeft);
    } else {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, progress));
      if (mobileProgressFillRef.current) {
        mobileProgressFillRef.current.style.width = `${clamped}%`;
      }

      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          if (elTop <= scrollPos) {
            const nextId = sectionIds[i];
            setActiveSection((prev) => (prev !== nextId ? nextId : prev));
            break;
          }
        }
      }
    }
  }, [isDesktop, updateScrollProgress]);

  // Desktop wheel listener: converts vertical mouse wheel into silky smooth horizontal scroll
  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    targetScrollRef.current = container.scrollLeft;

    const smoothScrollLoop = () => {
      const current = container.scrollLeft;
      const diff = targetScrollRef.current - current;
      if (Math.abs(diff) > 0.4) {
        const next = current + diff * 0.18;
        container.scrollLeft = next;
        updateScrollProgress(next);
        animIdRef.current = requestAnimationFrame(smoothScrollLoop);
      } else {
        container.scrollLeft = targetScrollRef.current;
        updateScrollProgress(targetScrollRef.current);
        animIdRef.current = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // If modal or dropdown is active, don't intercept
      const target = e.target as HTMLElement | null;
      if (target?.closest(".modal-scroll")) return;

      // Translate vertical or horizontal delta to silky smooth horizontal scroll
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 0.5) {
        e.preventDefault();
        const maxScroll = container.scrollWidth - container.clientWidth;
        const multiplier = Math.abs(delta) > 40 ? 1.15 : 1.0;
        targetScrollRef.current = Math.max(
          0,
          Math.min(maxScroll, targetScrollRef.current + delta * multiplier)
        );
        if (!animIdRef.current) {
          animIdRef.current = requestAnimationFrame(smoothScrollLoop);
        }
      }
    };

    const syncScroll = () => {
      if (!animIdRef.current) {
        targetScrollRef.current = container.scrollLeft;
        updateScrollProgress(container.scrollLeft);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("scroll", syncScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      container.removeEventListener("scroll", syncScroll);
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [isDesktop, updateScrollProgress]);

  // Attach scroll listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isDesktop) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isDesktop, handleScroll]);

  // Navigate directly to section on click (Desktop & Mobile)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const isDesk = typeof window !== "undefined" && window.innerWidth >= 768;

    if (isDesk && containerRef.current) {
      const container = containerRef.current;
      const targetLeft = el.offsetLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const boundedTarget = Math.max(0, Math.min(maxScroll, targetLeft));

      targetScrollRef.current = boundedTarget;

      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }

      const smoothNavLoop = () => {
        const current = container.scrollLeft;
        const diff = targetScrollRef.current - current;
        if (Math.abs(diff) > 0.5) {
          const next = current + diff * 0.18;
          container.scrollLeft = next;
          updateScrollProgress(next);
          animIdRef.current = requestAnimationFrame(smoothNavLoop);
        } else {
          container.scrollLeft = targetScrollRef.current;
          updateScrollProgress(targetScrollRef.current);
          animIdRef.current = null;
        }
      };

      animIdRef.current = requestAnimationFrame(smoothNavLoop);
    } else {
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -85,
          duration: 1.0,
        });
      } else {
        const targetTop = el.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }
    }
    setActiveSection(id);
  };

  // Interactive scrubbing: click anywhere along the track to jump smoothly
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = e.currentTarget;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = ratio * maxScroll;
    targetScrollRef.current = targetScroll;

    if (animIdRef.current) {
      cancelAnimationFrame(animIdRef.current);
    }

    const smoothNavLoop = () => {
      const current = container.scrollLeft;
      const diff = targetScrollRef.current - current;
      if (Math.abs(diff) > 0.5) {
        const next = current + diff * 0.18;
        container.scrollLeft = next;
        updateScrollProgress(next);
        animIdRef.current = requestAnimationFrame(smoothNavLoop);
      } else {
        container.scrollLeft = targetScrollRef.current;
        updateScrollProgress(targetScrollRef.current);
        animIdRef.current = null;
      }
    };

    animIdRef.current = requestAnimationFrame(smoothNavLoop);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#f9f9f8] overflow-x-hidden md:h-screen md:overflow-hidden">
      
      {/* Studio Header */}
      <StudioNavbar
        onNavigate={scrollToSection}
        onOpenResume={onOpenResume}
        activeSection={activeSection}
      />

      {/* Main Track Container */}
      <div
        ref={containerRef}
        id="horizontal-scroll"
        className="relative w-full h-full flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto md:overflow-y-hidden no-scrollbar"
      >
        {children}
      </div>

      {/* Floating Action Dock (Mobile Only) */}
      <MobileDock
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={onOpenResume}
      />

      {/* Mobile Live Progress Bar (Top) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-[#e4e4e7]/60 pointer-events-none">
        <div
          ref={mobileProgressFillRef}
          className="h-full bg-[#ff4502] will-change-[width]"
          style={{ width: "0%" }}
        />
      </div>

      {/* Bottom Horizontal Progress Bar (Desktop) */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 px-6 lg:px-12 py-3.5 items-center justify-between pointer-events-none bg-gradient-to-t from-[#f9f9f8] via-[#f9f9f8]/90 to-transparent">
        
        {/* Section Pill Breadcrumb */}
        <div className="pointer-events-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff4502] animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#18181b]">
            {activeSection.toUpperCase()}
          </span>
          <span className="text-xs text-[#a1a1aa] font-mono">
            / 0{sectionIds.indexOf(activeSection) + 1}
          </span>
        </div>

        {/* Scroll Bar Track with Interactive Scrubbing */}
        <div className="pointer-events-auto flex items-center">
          <div
            onClick={handleTrackClick}
            className="w-56 sm:w-64 lg:w-80 h-1.5 hover:h-2 bg-[#e4e4e7] hover:bg-[#d4d4d8] rounded-full overflow-hidden cursor-pointer transition-all relative flex items-center"
            title="Click to jump along the timeline"
          >
            <div
              ref={progressBarRef}
              className="h-full bg-[#ff4502] rounded-full will-change-[width]"
              style={{ width: "2%" }}
            />
          </div>
        </div>

        {/* Horizontal Scroll Hint */}
        <div className="text-xs font-mono text-[#a1a1aa] flex items-center gap-1.5">
          <span>SCROLL HORIZONTALLY</span>
          <span className="text-[#ff4502]">→</span>
        </div>

      </div>

    </div>
  );
}
