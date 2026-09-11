"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const emptySubscribe = () => () => {};

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Instant scroll to top on every navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScrolling({ children }: { children: ReactNode }) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const pathname = usePathname();

  // Instant scroll on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  if (!mounted) {
    return (
      <>
        <RouteScrollReset />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.1,
        infinite: false,
        syncTouch: true,
      }}
    >
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}
