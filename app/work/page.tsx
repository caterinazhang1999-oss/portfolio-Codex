"use client";

import { useMemo, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FloatingCursorLabel,
  type CursorLabelState
} from "../../components/floating-cursor-label";
import { Footer, Header, reveal } from "../../components/site-chrome";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory
} from "../../data/projects";

type ActiveCategory = (typeof projectCategories)[number];

function WorkProjectRow({
  onCursorEnter,
  onCursorLeave,
  onCursorMove,
  project
}: {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
  onCursorMove: (event: MouseEvent<HTMLElement>) => void;
  project: Project;
}) {
  return (
    <motion.a
      {...reveal}
      className="work-project-row"
      href={project.href}
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
      onMouseMove={onCursorMove}
    >
      <div className="work-project-thumb">
        <Image
          alt={`${project.title} project cover`}
          className="work-project-image object-cover"
          fill
          sizes="(max-width: 767px) 132px, (max-width: 1100px) 24vw, 390px"
          src={project.image}
        />
      </div>
      <div className="work-project-info">
        <h2 className="work-project-title">{project.title}</h2>
        <p className="work-project-meta">
          {project.category.join(" / ")} · {project.type}
        </p>
      </div>
      <span className="work-project-year">{project.year}</span>
    </motion.a>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("ALL");
  const [cursorLabel, setCursorLabel] = useState<CursorLabelState>({
    text: "VIEW PROJECT",
    visible: false,
    x: 0,
    y: 0
  });

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(activeCategory as ProjectCategory)
    );
  }, [activeCategory]);

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
    <>
      <Header />
      <div className="work-page">
        <main>
          <section className="work-hero-section layout-grid">
            <motion.h1 {...reveal} className="work-page-title">
              WORK
            </motion.h1>
            <motion.div {...reveal} className="work-hero-copy">
              <p className="work-hero-lede">
                Selected work shaped through identity, interface, and visual
                systems.
              </p>
              <p className="work-hero-meta">
                A focused archive across brand identity, digital design, game
                design, and vibe coding.
              </p>
            </motion.div>
          </section>

          <motion.section
            {...reveal}
            aria-label="Work filters"
            className="work-filter-bar"
          >
            <div className="work-filter-list">
              {projectCategories.map((category) => (
                <button
                  className={[
                    "work-filter-button",
                    activeCategory === category ? "is-active" : ""
                  ].join(" ")}
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    hideProjectCursor();
                  }}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.section>

          <section aria-label="Work projects" className="work-list">
            {filteredProjects.map((project) => (
              <WorkProjectRow
                key={project.title}
                onCursorEnter={() => showProjectCursor(project)}
                onCursorLeave={hideProjectCursor}
                onCursorMove={moveProjectCursor}
                project={project}
              />
            ))}
          </section>

          <FloatingCursorLabel {...cursorLabel} />
        </main>
        <Footer />
      </div>
    </>
  );
}
