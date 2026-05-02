"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
} as const;

export function Header() {
  const [navHovered, setNavHovered] = useState(false);
  const [navControlX, setNavControlX] = useState(50);
  const frameRef = useRef<number | null>(null);
  const nextControlXRef = useRef(50);
  const curveX = navHovered ? navControlX : 50;
  const curveY = navHovered ? 118 : 80;
  const glassPath = `M 0 0 H 100 V 80 Q ${curveX} ${curveY} 0 80 Z`;
  const linePath = `M 0 80 Q ${curveX} ${curveY} 100 80`;

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updateCurveControl = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    nextControlXRef.current = Math.min(
      94,
      Math.max(6, ((event.clientX - rect.left) / rect.width) * 100)
    );

    if (frameRef.current) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      setNavControlX(nextControlXRef.current);
      frameRef.current = null;
    });
  };

  return (
    <header
      className="nav-shell layout-grid fixed left-0 right-0 top-0 z-[1000] h-20 items-start pt-7 md:pt-8"
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => {
        setNavHovered(false);
        setNavControlX(50);
      }}
      onMouseMove={updateCurveControl}
    >
      <svg
        aria-hidden="true"
        className="nav-glass-svg pointer-events-none absolute left-0 top-0 h-32 w-full overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 100 128"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="nav-glass-clip">
            <motion.path
              animate={{ d: glassPath }}
              initial={false}
              transition={{
                damping: 13,
                mass: 0.7,
                stiffness: 180,
                type: "spring"
              }}
            />
          </clipPath>
        </defs>
        <foreignObject
          clipPath="url(#nav-glass-clip)"
          height="128"
          width="100"
          x="0"
          y="0"
        >
          <div className="nav-glass-layer" />
        </foreignObject>
        <motion.path
          animate={{ d: linePath }}
          className="nav-elastic-path"
          fill="none"
          initial={false}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
          transition={{
            damping: 13,
            mass: 0.7,
            stiffness: 180,
            type: "spring"
          }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <Link
        aria-label="Xuan home"
        className="relative col-span-1 h-10 w-9 md:h-11 md:w-10"
        href="/"
      >
        <Image
          alt="Xuan personal logo"
          className="object-contain object-left-bottom"
          fill
          priority
          sizes="40px"
          src="/xuan-symbol-crop.png"
        />
      </Link>
      <nav className="col-span-2 col-start-2 mt-[22px] flex justify-center gap-7 md:col-span-2 md:col-start-6 md:mt-[25px] md:gap-10">
        <Link className="tight-link" href="/work">
          Work
        </Link>
        <Link className="tight-link" href="/#about">
          About
        </Link>
      </nav>
      <a
        className="tight-link col-span-1 col-start-4 mt-[22px] justify-self-end md:col-start-12 md:mt-[25px]"
        href="#contact"
      >
        Contacts
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer
      className="layout-grid scroll-effect-layer relative min-h-[760px] overflow-hidden border-t border-ash/25 pb-10 pt-16 md:min-h-[820px] md:pt-20"
      id="contact"
    >
      <motion.div {...reveal} className="col-span-4 md:col-span-4">
        <a
          className="inline-block text-[clamp(58px,6.7vw,118px)] font-semibold leading-[1.05] tracking-[-0.07em] text-ash underline decoration-[0.045em] underline-offset-[0.13em] transition-opacity hover:opacity-70"
          href="mailto:hello@atena.studio"
        >
          Let&apos;s talk
        </a>
      </motion.div>

      <motion.nav
        {...reveal}
        aria-label="Footer navigation"
        className="col-span-2 mt-12 md:col-span-2 md:col-start-7 md:mt-0"
      >
        <p className="mb-8 text-[clamp(22px,1.55vw,28px)] font-semibold leading-none tracking-[-0.05em] text-ash">
          ( Navigate )
        </p>
        <div className="grid gap-3 text-[clamp(22px,1.55vw,28px)] font-semibold leading-[1.05] tracking-[-0.05em] text-ash/86">
          <Link className="transition-opacity hover:opacity-70" href="/work">
            Work
          </Link>
          <Link className="transition-opacity hover:opacity-70" href="/#about">
            About
          </Link>
        </div>
      </motion.nav>

      <motion.div
        {...reveal}
        className="col-span-2 mt-12 md:col-span-2 md:col-start-10 md:mt-0"
      >
        <p className="mb-8 text-[clamp(22px,1.55vw,28px)] font-semibold leading-none tracking-[-0.05em] text-ash">
          ( Find Me )
        </p>
        <div className="grid gap-3 text-[clamp(22px,1.55vw,28px)] font-semibold leading-[1.05] tracking-[-0.05em] text-ash/86">
          <a
            className="transition-opacity hover:opacity-70"
            href="https://behance.net"
            rel="noreferrer"
            target="_blank"
          >
            Behance
          </a>
          <a
            className="transition-opacity hover:opacity-70"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="transition-opacity hover:opacity-70"
            href="https://instagram.com"
            rel="noreferrer"
            target="_blank"
          >
            Ins
          </a>
        </div>
      </motion.div>

      <a
        className="tight-link footer-back-link absolute bottom-10 left-[var(--page-x)] z-20"
        href="#"
      >
        Back to top <span aria-hidden="true">↑</span>
      </a>

      <motion.div
        {...reveal}
        className="pointer-events-none absolute bottom-0 right-[var(--page-x)] h-[clamp(160px,20vw,300px)] w-[min(70vw,820px)] opacity-95"
      >
        <Image
          alt="Zhang Xuan footer wordmark"
          className="object-contain object-right-bottom"
          fill
          sizes="(max-width: 768px) 90vw, 900px"
          src="/xuan-wordmark-crop.png"
        />
      </motion.div>
    </footer>
  );
}
