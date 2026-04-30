"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent
} from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

import {
  FloatingCursorLabel,
  type CursorLabelState
} from "../components/floating-cursor-label";
import { Footer, Header, reveal } from "../components/site-chrome";
import { capabilities, projects, type Project } from "../data/projects";

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
      href={project.href}
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
  onCursorEnter,
  onCursorLeave,
  onCursorMove,
  project,
  size = "large"
}: {
  className?: string;
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
  onCursorMove?: (event: MouseEvent<HTMLElement>) => void;
  project: Project;
  size?: "small" | "large";
}) {
  return (
    <motion.article
      {...reveal}
      className={["project-card", className].join(" ")}
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
      onMouseMove={onCursorMove}
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
  const [cursorLabel, setCursorLabel] = useState<CursorLabelState>({
    text: "VIEW PROJECT",
    visible: false,
    x: 0,
    y: 0
  });
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

  const showProjectCursor = (project: Project) => {
    setCursorLabel((current) => ({
      ...current,
      text: `${project.title} · VIEW PROJECT`,
      visible: true
    }));
  };

  const moveProjectCursor = (event: MouseEvent<HTMLElement>) => {
    setCursorLabel((current) => ({
      ...current,
      x: event.clientX,
      y: event.clientY
    }));
  };

  const hideProjectCursor = () => {
    setCursorLabel((current) => ({
      ...current,
      visible: false
    }));
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
                onCursorEnter={() => showProjectCursor(group.smallProject)}
                onCursorLeave={hideProjectCursor}
                onCursorMove={moveProjectCursor}
                project={group.smallProject}
                size="small"
              />
              <ProjectCard
                className="project-card--large"
                onCursorEnter={() => showProjectCursor(group.largeProject)}
                onCursorLeave={hideProjectCursor}
                onCursorMove={moveProjectCursor}
                project={group.largeProject}
                size="large"
              />
            </div>
          ))}
        </div>
      </div>
      <FloatingCursorLabel {...cursorLabel} />
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
        <Link
          className="tight-link col-span-2 col-start-3 mt-3 justify-self-end md:col-span-2 md:col-start-11 md:mt-4"
          href="/work"
        >
          All works
        </Link>
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
