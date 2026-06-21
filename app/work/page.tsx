"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FloatingCursorLabel,
  type CursorLabelState
} from "../../components/floating-cursor-label";
import { Footer, Header, reveal } from "../../components/site-chrome";
import {
  categoryFilterValues,
  categoryToSlug,
  getCategoryFromSlug,
  projectCategories,
  projects,
  type Project,
  type WorkFilterCategory
} from "../../data/projects";

type ActiveCategory = WorkFilterCategory;

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
  const workHref = project.workHref ?? project.href;
  const workTitle = project.workTitle ?? project.title;
  const workMeta =
    project.workMeta ?? `${project.category.join(" / ")} · ${project.type}`;
  const workYear = project.workYear ?? project.year;

  return (
    <motion.a
      {...reveal}
      className="work-project-row"
      href={workHref}
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
          src={project.workImage}
        />
      </div>
      <div className="work-project-info">
        <h2 className="work-project-title">{workTitle}</h2>
        <p className="work-project-meta">{workMeta}</p>
      </div>
      <span className="work-project-year">{workYear}</span>
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

  useEffect(() => {
    const syncCategoryFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveCategory(getCategoryFromSlug(params.get("category")));
    };

    syncCategoryFromUrl();
    window.addEventListener("popstate", syncCategoryFromUrl);

    return () => {
      window.removeEventListener("popstate", syncCategoryFromUrl);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return projects;
    }

    const dataCategory = categoryFilterValues[activeCategory];

    return projects.filter((project) =>
      project.category.includes(dataCategory)
    );
  }, [activeCategory]);

  const showProjectCursor = (project: Project) => {
    setCursorLabel((current) => ({
      ...current,
      text: `${project.workTitle ?? project.title} · VIEW PROJECT`,
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

  const updateActiveCategory = (category: ActiveCategory) => {
    setActiveCategory(category);
    hideProjectCursor();

    const slug = categoryToSlug[category];
    const nextUrl = category === "ALL" ? "/work" : `/work?category=${slug}`;
    window.history.pushState(null, "", nextUrl);
  };

  return (
    <>
      <Header />
      <div className="work-page">
        <main>
          <section className="work-hero-section layout-grid scroll-effect-layer">
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
                    updateActiveCategory(category);
                  }}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.section>

          <section aria-label="Work projects" className="work-list scroll-effect-layer">
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
