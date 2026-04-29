"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

function previewSwatch(from: string, to: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${from}"/>
          <stop offset="1" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#g)"/>
      <rect x="84" y="84" width="632" height="632" fill="none" stroke="${accent}" stroke-opacity=".28" stroke-width="2"/>
      <circle cx="400" cy="400" r="168" fill="${accent}" fill-opacity=".18"/>
      <path d="M188 544h424M188 256h424" stroke="${accent}" stroke-opacity=".34" stroke-width="18"/>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const projects = [
  {
    title: "Noir Supply",
    year: "2026",
    role: "Identity / Packaging",
    type: "Brand System",
    image: "/project-01.png",
    hoverImages: [
      previewSwatch("#f05f57", "#3943b7", "#fff7e8"),
      previewSwatch("#19a974", "#f7c948", "#0a0a0a"),
      previewSwatch("#f8b6d2", "#62c6ff", "#ffffff")
    ],
    description:
      "A restrained visual identity for a premium materials studio, built around severe typography and tactile monochrome surfaces."
  },
  {
    title: "Ledger North",
    year: "2025",
    role: "UI / Art Direction",
    type: "Digital Product",
    image: "/project-02.png",
    hoverImages: [
      previewSwatch("#6c63ff", "#101820", "#ffffff"),
      previewSwatch("#ffb000", "#073b4c", "#f7f4ef"),
      previewSwatch("#2ec4b6", "#ff3366", "#050505")
    ],
    description:
      "A finance dashboard concept with editorial hierarchy, quiet data density, and a cinematic product reveal."
  },
  {
    title: "Signal Room",
    year: "2025",
    role: "Campaign / Motion",
    type: "Launch Design",
    image: "/project-03.png",
    hoverImages: [
      previewSwatch("#d7263d", "#1b998b", "#f5f1e8"),
      previewSwatch("#ff9f1c", "#2d3047", "#ffffff"),
      previewSwatch("#9b5de5", "#00bbf9", "#fefefe")
    ],
    description:
      "A launch language for an audio platform using modular frames, compressed type, and controlled luminous accents."
  },
  {
    title: "Arc Atelier",
    year: "2024",
    role: "Brand / Web",
    type: "Portfolio System",
    image: "/project-04.png",
    hoverImages: [
      previewSwatch("#4d908e", "#111111", "#f2f2f2"),
      previewSwatch("#f94144", "#f9c74f", "#151515"),
      previewSwatch("#577590", "#90be6d", "#ffffff")
    ],
    description:
      "A digital gallery for an architectural practice, balancing calm project photography with precise navigation."
  }
];

type Project = (typeof projects)[number];

const capabilities = [
  "Brand Identity",
  "Digital Design",
  "Game Design",
  "Vibe coding"
];

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
} as const;

function SplitHover({ children }: { children: string }) {
  return (
    <span aria-label={children} className="inline-flex gap-[0.01em]">
      {children.split("").map((char, index) => (
        <span className="char-swap h-[1em]" key={`${char}-${index}`}>
          <span style={{ transitionDelay: `${index * 12}ms` }}>
            {char === " " ? "\u00A0" : char}
            <br />
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

function Preloader() {
  return (
    <motion.div
      animate={{ opacity: 0, pointerEvents: "none" }}
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.7, ease: "easeInOut" }}
    >
      <div className="layout-grid absolute inset-0 h-full items-end pb-16 md:pb-24">
        <div className="col-span-2 col-start-2 flex flex-col text-left md:col-start-5">
          <span className="micro-label">Making focused</span>
          <span className="micro-label text-right">visual systems</span>
        </div>
        <div className="col-span-1 col-start-4 self-start pt-16 md:col-start-8 md:pt-32">
          <span className="micro-label block">Atena</span>
          <span className="micro-label block">Studio</span>
        </div>
      </div>
      <div className="relative h-[310px] w-[310px]">
        <div className="absolute inset-10 rounded-full border border-ash/40 [animation:ring-spin_1.4s_ease-in-out_infinite]" />
        <div className="absolute inset-4 rounded-full border border-dashed border-ash/25 [animation:reverse-spin_18s_linear_infinite]" />
        <div className="absolute inset-0 rounded-full border border-ash/10 [animation:ring-spin_28s_linear_infinite]" />
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          className="absolute inset-0 flex items-center justify-center text-sm font-black text-ash"
          transition={{ repeat: Infinity, duration: 1 }}
        >
          100%
        </motion.div>
      </div>
    </motion.div>
  );
}

function Header() {
  const [navHovered, setNavHovered] = useState(false);

  return (
    <header
      className="nav-shell layout-grid fixed left-0 right-0 top-0 z-[1000] h-20 items-start bg-black/90 pt-7 backdrop-blur-md md:pt-8"
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
      <a
        aria-label="Xuan home"
        className="relative col-span-1 h-10 w-9 md:h-11 md:w-10"
        href="#"
      >
        <Image
          alt="Xuan personal logo"
          className="object-contain object-left-bottom"
          fill
          priority
          sizes="40px"
          src="/xuan-symbol-crop.png"
        />
      </a>
      <nav className="col-span-2 col-start-2 mt-[22px] flex justify-center gap-7 md:col-span-2 md:col-start-6 md:mt-[25px] md:gap-10">
        <a className="tight-link" href="#projects">
          Work
        </a>
        <a className="tight-link" href="#about">
          About
        </a>
      </nav>
      <a className="tight-link col-span-1 col-start-4 mt-[22px] justify-self-end md:col-start-12 md:mt-[25px]" href="#contact">
        Contacts
      </a>
      <svg
        aria-hidden="true"
        className="nav-elastic-line pointer-events-none absolute left-0 top-full -mt-px h-12 w-full overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 100 50"
      >
        <motion.path
          animate={{
            d: navHovered ? "M 0 1 Q 50 38 100 1" : "M 0 1 Q 50 1 100 1"
          }}
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
    </header>
  );
}

function ShowreelButton() {
  return (
    <a
      aria-label="Open featured work"
      className="group inline-flex items-center gap-5"
      href="#projects"
    >
      <span className="relative grid h-20 w-20 place-items-center rounded-full">
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-ash/80 [animation:ring-spin_4s_linear_infinite] group-hover:[animation-duration:1.1s]" />
        <Play className="h-5 w-5 fill-ash stroke-ash transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="tight-link hidden leading-[1.35] sm:inline-block">
        Watch
        <br />
        Selected Work
      </span>
    </a>
  );
}

const sectionTitleClass =
  "col-span-4 text-[clamp(38px,5.8vw,92px)] font-semibold leading-[0.94] tracking-[-0.06em] text-white md:col-span-6";

function Hero() {
  return (
    <section className="layout-grid min-h-[560px] items-start pb-10 pt-[132px] md:min-h-[610px] md:pb-6 md:pt-[180px]">
      <motion.div
        {...reveal}
        className="col-span-2 row-start-2 mt-8 md:col-span-2 md:row-start-1 md:mt-0"
      >
        <ShowreelButton />
      </motion.div>
      <motion.div
        {...reveal}
        className="display-title col-span-4 row-start-1 text-white md:col-span-7 md:col-start-3"
      >
        <h1>
          <span className="md:pl-[14%]">Hi,I&apos;am</span>
          <br />
          <span className="md:pl-[14%]">Xuan ZHang</span>
        </h1>
      </motion.div>
      <motion.div
        {...reveal}
        className="col-span-1 col-start-3 row-start-2 mt-8 md:col-start-11 md:row-start-1 md:mt-0"
      >
        <span className="block text-[28px] font-semibold leading-none tracking-[-0.05em] text-ash md:text-[36px]">
          24+
        </span>
        <span className="micro-label mt-3 block">Selected Projects</span>
      </motion.div>
      <motion.div
        {...reveal}
        className="col-span-1 col-start-4 row-start-2 mt-8 md:col-start-12 md:row-start-1 md:mt-0"
      >
        <span className="block text-[28px] font-semibold leading-none tracking-[-0.05em] text-ash md:text-[36px]">
          07
        </span>
        <span className="micro-label mt-3 block">Years Practice</span>
      </motion.div>
    </section>
  );
}

function FeaturedVisual() {
  return (
    <motion.section
      {...reveal}
      className="image-noise relative mx-[var(--page-x)] -mt-8 h-[360px] overflow-hidden bg-[#141414] md:-mt-12 md:h-[700px]"
    >
      <video
        aria-label="Featured motion reel"
        autoPlay
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        src="/hero-showreel.mp4"
      />
    </motion.section>
  );
}

function SectionTitle({
  title
}: {
  title: string;
}) {
  return (
    <motion.div {...reveal} className="layout-grid">
      <h2 className={sectionTitleClass}>{title}</h2>
    </motion.div>
  );
}

function PersonalIntro() {
  return (
    <motion.section
      id="about"
      {...reveal}
      className="layout-grid mt-14 border-t border-ash/20 pt-10 md:mt-20 md:min-h-[560px] md:pt-16"
    >
      <div className="col-span-4 md:col-span-3">
        <div className="image-noise relative aspect-[0.74] overflow-hidden bg-[#101010]">
          <Image
            alt="Atena Studio portrait"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            src="/about-portrait.jpg"
          />
        </div>
        <p className="mt-5 max-w-[18rem] text-[clamp(23px,2.1vw,34px)] font-semibold leading-[0.98] tracking-[-0.06em] text-ash">
          Designing tomorrow,
          <br />
          one vision at a time.
        </p>
      </div>

      <div className="col-span-4 mt-10 md:col-span-8 md:col-start-5 md:mt-0">
        <div className="grid gap-y-14 md:grid-cols-8 md:gap-x-[var(--grid-gap)] md:gap-y-28">
          <div className="md:col-span-3 md:col-start-1">
            <p className="text-[clamp(22px,1.55vw,28px)] font-semibold leading-[1.05] tracking-[-0.05em] text-ash">
              Driven by Design
            </p>
          </div>
          <p className="max-w-[33rem] text-[clamp(20px,1.45vw,27px)] font-semibold leading-[1.35] tracking-[-0.045em] text-ash/78 md:col-span-4 md:col-start-5">
            Every project begins with intent and ends with impact. I bring
            clarity, craft, and vision together, creating work that speaks
            louder than words.
          </p>

          <div className="md:col-span-3 md:col-start-1">
            <p className="text-[clamp(22px,1.55vw,28px)] font-semibold leading-[1.05] tracking-[-0.05em] text-ash">
              Trusted by Brands
            </p>
          </div>
          <ul className="space-y-3 text-[clamp(20px,1.45vw,27px)] font-semibold leading-[1.08] tracking-[-0.045em] text-ash/82 md:col-span-3 md:col-start-5">
            <li>Atelier Norra</li>
            <li>Velin Studio</li>
            <li>Forma Objects</li>
            <li>Kairos Living</li>
            <li>Orion</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

function ProjectPreviewImage({
  project,
  size = "large"
}: {
  project: Project;
  size?: "small" | "large";
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    if (!isHovered || project.hoverImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setPreviewIndex((current) => (current + 1) % project.hoverImages.length);
    }, 950);

    return () => window.clearInterval(interval);
  }, [isHovered, project.hoverImages.length]);

  const startPreview = () => {
    setIsHovered(true);
  };

  const stopPreview = () => {
    setIsHovered(false);
    setPreviewIndex(0);
  };

  return (
    <a
      className={[
        "project-image group relative block overflow-hidden bg-[#151515]",
        size === "small" ? "aspect-[5/4]" : "aspect-[4/3]"
      ].join(" ")}
      href="#contact"
      onBlur={stopPreview}
      onFocus={startPreview}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
    >
      <Image
        alt={`${project.title} project cover`}
        className={[
          "object-cover transition duration-500 ease-out",
          isHovered
            ? "scale-[1.06] blur-[16px] brightness-[0.55]"
            : "scale-100 blur-0 brightness-100"
        ].join(" ")}
        fill
        sizes={
          size === "small"
            ? "(max-width: 768px) 100vw, 34vw"
            : "(max-width: 768px) 100vw, 56vw"
        }
        src={project.image}
      />
      <AnimatePresence>
        {isHovered ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                alt=""
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square w-[42%] min-w-[160px] max-w-[480px] object-cover md:min-w-[220px]"
                exit={{ opacity: 0, scale: 0.97 }}
                initial={{ opacity: 0, scale: 0.94 }}
                key={project.hoverImages[previewIndex]}
                src={project.hoverImages[previewIndex]}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </a>
  );
}

function ProjectCard({
  className = "",
  project,
  size = "large"
}: {
  className?: string;
  project: Project;
  size?: "small" | "large";
}) {
  return (
    <motion.article
      {...reveal}
      className={["project-card", className].join(" ")}
    >
      <ProjectPreviewImage project={project} size={size} />
      <div className="mt-5">
        <h3 className="text-[clamp(23px,2.1vw,34px)] font-semibold leading-[0.98] tracking-[-0.06em] text-ash">
          {project.title}
        </h3>
        <p className="mt-3 text-[clamp(17px,1.25vw,22px)] font-semibold leading-[1.15] tracking-[-0.045em] text-ash/80">
          {project.year} / {project.type}
        </p>
        <p className="mt-6 max-w-[34rem] text-[15px] font-semibold leading-[1.45] tracking-[-0.02em] text-ash/70 md:text-[16px]">
          {project.description}
        </p>
        <p className="mt-4 text-[clamp(17px,1.25vw,22px)] font-semibold leading-[1.15] tracking-[-0.045em] text-ash/80">
          {project.role}
        </p>
      </div>
    </motion.article>
  );
}

function ProjectsEditorial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const projectGroups = [
    {
      id: "launch-systems",
      largeProject: projects[1],
      smallProject: projects[0]
    },
    {
      id: "brand-spaces",
      largeProject: projects[3],
      smallProject: projects[2]
    }
  ];

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrevious(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    updateScrollState();

    if (!track) {
      return;
    }

    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollProjects = (direction: "next" | "previous") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      behavior: "smooth",
      left: direction === "next" ? track.clientWidth : -track.clientWidth
    });
  };

  return (
    <div className="selected-projects mt-14 border-t border-ash/20 pt-10 md:mt-20 md:pt-16">
      <motion.div
        {...reveal}
        className="projects-header mb-12 md:mb-16"
      >
        <div className="carousel-controls">
          <button
            aria-label="Previous project group"
            className="carousel-button"
            disabled={!canPrevious}
            onClick={() => scrollProjects("previous")}
            type="button"
          >
            <ArrowLeft className="h-5 w-5 stroke-[2.4]" />
          </button>
          <button
            aria-label="Next project group"
            className="carousel-button"
            disabled={!canNext}
            onClick={() => scrollProjects("next")}
            type="button"
          >
            <ArrowRight className="h-5 w-5 stroke-[2.4]" />
          </button>
        </div>

        <div className="projects-intro">
          <h3>
            Selected work shaped through identity, interface, and visual
            systems.
          </h3>
          <p>
            Project groups move as complete editorial spreads, preserving the
            contrast between focused studies and larger visual anchors.
          </p>
        </div>
      </motion.div>

      <div className="projects-carousel" aria-label="Selected projects carousel">
        <div className="projects-track" ref={trackRef}>
          {projectGroups.map((group, index) => (
            <div
              className={[
                "project-group",
                index % 2 === 1 ? "project-group--offset" : ""
              ].join(" ")}
              key={group.id}
            >
              <ProjectCard
                className="project-card--small"
                project={group.smallProject}
                size="small"
              />
              <ProjectCard
                className="project-card--large"
                project={group.largeProject}
                size="large"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="pt-24 md:pt-36">
      <SectionTitle title="About" />
      <PersonalIntro />
      <motion.div
        id="projects"
        {...reveal}
        className="layout-grid mt-24 md:mt-36"
      >
        <h2 className={sectionTitleClass}>Selected projects</h2>
      </motion.div>
      <ProjectsEditorial />
    </section>
  );
}

function Capabilities() {
  return (
    <section className="relative py-24 md:py-40" id="capabilities">
      <motion.div {...reveal} className="layout-grid items-start">
        <h2 className={sectionTitleClass}>Capabilities</h2>
        <a
          className="tight-link col-span-2 col-start-3 mt-3 justify-self-end md:col-span-2 md:col-start-11 md:mt-4"
          href="#projects"
        >
          All works
        </a>
      </motion.div>
      <motion.div
        {...reveal}
        className="mx-[var(--page-x)] mt-14 border-t border-ash/15 md:mt-20"
      >
        {capabilities.map((capability, index) => (
          <div
            className="group grid grid-cols-4 border-b border-ash/15 py-6 md:grid-cols-12 md:py-9"
            key={capability}
          >
            <span className="micro-label col-span-1">0{index + 1}</span>
            <h3 className="col-span-3 text-[clamp(34px,6vw,102px)] font-semibold leading-[0.9] tracking-[-0.06em] text-ash transition-transform duration-500 group-hover:translate-x-3 md:col-span-8 md:col-start-3">
              <SplitHover>{capability}</SplitHover>
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="layout-grid relative min-h-[760px] overflow-hidden border-t border-ash/25 pb-10 pt-16 md:min-h-[820px] md:pt-20"
      id="contact"
    >
      <motion.div
        {...reveal}
        className="col-span-4 md:col-span-4"
      >
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
          <a className="transition-opacity hover:opacity-70" href="#projects">
            Work
          </a>
          <a className="transition-opacity hover:opacity-70" href="#about">
            About
          </a>
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
          <a className="transition-opacity hover:opacity-70" href="https://behance.net" rel="noreferrer" target="_blank">
            Behance
          </a>
          <a className="transition-opacity hover:opacity-70" href="https://linkedin.com" rel="noreferrer" target="_blank">
            Linkedin
          </a>
          <a className="transition-opacity hover:opacity-70" href="https://instagram.com" rel="noreferrer" target="_blank">
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

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <FeaturedVisual />
        <Projects />
        <Capabilities />
        <Footer />
      </main>
    </>
  );
}
