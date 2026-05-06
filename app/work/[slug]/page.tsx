import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header } from "../../../components/site-chrome";
import {
  getNextProject,
  getProjectBySlug,
  projects,
  type Project
} from "../../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

function detailRows(project: Project) {
  return [
    ["Project Name", project.title],
    ["Timeframe", project.year],
    ["Role", project.role],
    ["Category", project.category.join(" / ")],
    ["Type", project.type]
  ];
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found - Atena Studio"
    };
  }

  return {
    title: `${project.title} - Atena Studio`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = getNextProject(project.slug);

  return (
    <>
      <Header />
      <main className="project-detail-page scroll-effect-layer">
        <section
          aria-labelledby="project-title"
          className="project-detail-hero"
        >
          <div className="project-detail-hero-card">
            <Image
              alt={`${project.title} hero image`}
              className="project-detail-hero-image"
              fill
              priority
              sizes="100vw"
              src={project.heroImage}
            />
            <div className="project-detail-hero-shade" />
            <p className="project-detail-index">
              Project {String(projectIndex + 1).padStart(2, "0")} /{" "}
              {project.category[0]}
            </p>
            <h1 className="project-detail-title" id="project-title">
              {project.title}
            </h1>
          </div>
        </section>

        <section
          aria-labelledby="project-introduction"
          className="project-detail-intro layout-grid"
        >
          <div className="project-intro-copy">
            <span className="project-eyebrow">Introduction</span>
            <p id="project-introduction">{project.intro}</p>
          </div>
          <aside aria-label="Project details" className="project-details-panel">
            <h2>Details</h2>
            <dl>
              {detailRows(project).map(([label, value]) => (
                <div className="project-detail-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {project.gallery.length > 0 ? (
          <section
            aria-label={`${project.title} imagery`}
            className="project-media-section"
          >
            <div className="project-media-grid">
              {project.gallery.map((image, index) => (
                <figure
                  className="project-media-item"
                  data-layout={image.layout ?? "landscape"}
                  key={`${image.src}-${index}`}
                >
                  <Image
                    alt={image.alt}
                    className="project-media-image"
                    fill
                    sizes={
                      image.layout === "wide"
                        ? "100vw"
                        : "(max-width: 767px) 100vw, 33vw"
                    }
                    src={image.src}
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="project-next-section">
          <Link
            aria-label={`Next project: ${nextProject.title}`}
            className="project-next-link"
            href={nextProject.href}
          >
            <span>
              <span className="project-next-kicker">Next project</span>
              <span className="project-next-title">{nextProject.title}</span>
            </span>
            <span aria-hidden="true" className="project-next-arrow">
              →
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
