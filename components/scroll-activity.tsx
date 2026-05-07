"use client";

import { useEffect } from "react";

export function ScrollActivity() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollTimeout: number | undefined;

    const clearScrollState = () => {
      document.body.classList.remove("is-scrolling", "scroll-up", "scroll-down");
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY
          ? "scroll-down"
          : currentScrollY < lastScrollY
            ? "scroll-up"
            : "";

      document.body.classList.add("is-scrolling");
      document.body.classList.toggle("scroll-down", direction === "scroll-down");
      document.body.classList.toggle("scroll-up", direction === "scroll-up");

      lastScrollY = currentScrollY;

      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      scrollTimeout = window.setTimeout(clearScrollState, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      clearScrollState();
    };
  }, []);

  return <div aria-hidden="true" className="scroll-bottom-blur" />;
}
