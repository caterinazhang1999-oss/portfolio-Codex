export type ProjectCategory =
  | "Brand identity"
  | "Digital design"
  | "Game design"
  | "Vibe coding"
  | "OTHER";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  type: string;
  category: ProjectCategory[];
  image: string;
  workImage: string;
  workTitle?: string;
  workMeta?: string;
  workYear?: string;
  workHref?: string;
  heroImage: string;
  hoverImages: string[];
  description: string;
  intro: string;
  gallery: {
    alt: string;
    layout?: "portrait" | "landscape" | "wide" | "square";
    src: string;
  }[];
  href: string;
};

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

export const projects: Project[] = [
  {
    slug: "noir-supply",
    title: "Noir Supply",
    year: "2026",
    role: "Identity / Packaging",
    type: "Brand System",
    category: ["Brand identity"],
    image: "/project-01.png",
    workImage: "/work-project-01.png",
    workTitle: "URKA BIG",
    workMeta: "Web design/UI,UX design/Brand identity",
    workYear: "2025",
    workHref:
      "https://www.behance.net/gallery/244151495/URKA-Visual-Experience-Upgrade-and-Website-Design",
    heroImage: "/work-project-01.png",
    hoverImages: [
      previewSwatch("#f05f57", "#3943b7", "#fff7e8"),
      previewSwatch("#19a974", "#f7c948", "#0a0a0a"),
      previewSwatch("#f8b6d2", "#62c6ff", "#ffffff")
    ],
    description:
      "A restrained visual identity for a premium materials studio, built around severe typography and tactile monochrome surfaces.",
    intro:
      "Noir Supply builds a severe, tactile brand world for a premium materials studio, using monochrome restraint, dense typography, and quiet packaging details to make the system feel deliberate before it feels decorative.",
    gallery: [
      {
        alt: "Noir Supply identity surface",
        layout: "landscape",
        src: "/project-01.png"
      },
      {
        alt: "Noir Supply brand application",
        layout: "wide",
        src: "/work-project-01.png"
      }
    ],
    href: "/work/noir-supply"
  },
  {
    slug: "ledger-north",
    title: "Ledger North",
    year: "2025",
    role: "UI / Art Direction",
    type: "Digital Product",
    category: ["Digital design", "Vibe coding"],
    image: "/project-02.png",
    workImage: "/work-project-02.png",
    workHref:
      "https://www.behance.net/gallery/244144689/Luxury-Cruise-Website-Concept-(Case-Study-Silversea)",
    heroImage: "/work-project-02.png",
    hoverImages: [
      previewSwatch("#6c63ff", "#101820", "#ffffff"),
      previewSwatch("#ffb000", "#073b4c", "#f7f4ef"),
      previewSwatch("#2ec4b6", "#ff3366", "#050505")
    ],
    description:
      "A finance dashboard concept with editorial hierarchy, quiet data density, and a cinematic product reveal.",
    intro:
      "Ledger North turns dense financial information into an editorial product experience, balancing quiet data hierarchy, precise interaction moments, and a cinematic reveal system that keeps the interface calm under pressure.",
    gallery: [
      {
        alt: "Ledger North digital product overview",
        layout: "landscape",
        src: "/project-02.png"
      },
      {
        alt: "Ledger North interface presentation",
        layout: "wide",
        src: "/work-project-02.png"
      }
    ],
    href: "/work/ledger-north"
  },
  {
    slug: "signal-room",
    title: "Signal Room",
    year: "2025",
    role: "Campaign / Motion",
    type: "Launch Design",
    category: ["Digital design", "Game design"],
    image: "/project-03.png",
    workImage: "/work-project-03.png",
    workHref:
      "https://www.behance.net/gallery/244137467/La-forma-della-tempo-",
    heroImage: "/work-project-03.png",
    hoverImages: [
      previewSwatch("#d7263d", "#1b998b", "#f5f1e8"),
      previewSwatch("#ff9f1c", "#2d3047", "#ffffff"),
      previewSwatch("#9b5de5", "#00bbf9", "#fefefe")
    ],
    description:
      "A launch language for an audio platform using modular frames, compressed type, and controlled luminous accents.",
    intro:
      "Signal Room creates a launch language for an audio platform, using modular framing, compressed typography, and controlled luminous accents to make every campaign touchpoint feel rhythmic and direct.",
    gallery: [
      {
        alt: "Signal Room launch design billboard",
        layout: "landscape",
        src: "/project-03.png"
      },
      {
        alt: "Signal Room campaign system",
        layout: "wide",
        src: "/work-project-03.png"
      }
    ],
    href: "/work/signal-room"
  },
  {
    slug: "arc-atelier",
    title: "Arc Atelier",
    year: "2024",
    role: "Brand / Web",
    type: "Portfolio System",
    category: ["Brand identity", "Digital design"],
    image: "/project-04.png",
    workImage: "/work-project-04.png",
    heroImage: "/work-project-04.png",
    hoverImages: [
      previewSwatch("#4d908e", "#111111", "#f2f2f2"),
      previewSwatch("#f94144", "#f9c74f", "#151515"),
      previewSwatch("#577590", "#90be6d", "#ffffff")
    ],
    description:
      "A digital gallery for an architectural practice, balancing calm project photography with precise navigation.",
    intro:
      "Arc Atelier is a portfolio system for an architectural practice, designed around calm project photography, generous pacing, and navigation that feels precise without interrupting the atmosphere of the work.",
    gallery: [
      {
        alt: "Arc Atelier portfolio system",
        layout: "landscape",
        src: "/project-04.png"
      },
      {
        alt: "Arc Atelier brand and web presentation",
        layout: "wide",
        src: "/work-project-04.png"
      }
    ],
    href: "/work/arc-atelier"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
}

export function getPreviousProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[projects.length - 1];
  }

  return projects[(currentIndex - 1 + projects.length) % projects.length];
}

export const projectCategories = [
  "ALL",
  "Brand Identity",
  "Digital Design",
  "Game Design",
  "Vibe coding",
  "OTHER"
] as const;

export type WorkFilterCategory = (typeof projectCategories)[number];

export const categorySlugMap: Record<string, WorkFilterCategory> = {
  all: "ALL",
  "brand-identity": "Brand Identity",
  "digital-design": "Digital Design",
  "game-design": "Game Design",
  other: "OTHER",
  "vibe-coding": "Vibe coding"
};

export const categoryToSlug: Record<WorkFilterCategory, string> = {
  ALL: "all",
  "Brand Identity": "brand-identity",
  "Digital Design": "digital-design",
  "Game Design": "game-design",
  OTHER: "other",
  "Vibe coding": "vibe-coding"
};

export const categoryFilterValues: Record<
  Exclude<WorkFilterCategory, "ALL">,
  ProjectCategory
> = {
  "Brand Identity": "Brand identity",
  "Digital Design": "Digital design",
  "Game Design": "Game design",
  OTHER: "OTHER",
  "Vibe coding": "Vibe coding"
};

export function getCategoryFromSlug(slug: string | null | undefined) {
  if (!slug) {
    return "ALL";
  }

  return categorySlugMap[slug] ?? "ALL";
}

export const capabilities = [
  "Brand Identity",
  "Digital Design",
  "Game Design",
  "Vibe coding"
];

export const capabilityTrailImages: Record<string, string[]> = {
  "Brand Identity": [
    "/work-project-01.png",
    "/work-project-04.png",
    "/project-01.png"
  ],
  "Digital Design": [
    "/work-project-02.png",
    "/work-project-01.png",
    "/work-project-03.png"
  ],
  "Game Design": [
    "/work-project-03.png",
    "/work-project-02.png",
    "/project-03.png"
  ],
  "Vibe coding": [
    "/work-project-04.png",
    "/work-project-02.png",
    "/work-project-01.png"
  ]
};
