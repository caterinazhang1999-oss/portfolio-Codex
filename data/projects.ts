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
  featuredDescription?: string;
  featuredMeta?: string;
  featuredRole?: string;
  featuredTitle?: string;
  workTitle?: string;
  workMeta?: string;
  workYear?: string;
  workHref?: string;
  workOrder?: number;
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
    category: ["Digital design"],
    image: "/project-01.png",
    workImage: "/work-project-01.png",
    featuredDescription:
      "Redefining the URKA–BIG brand relationship and building a clearer path from local design engagement to event conversion and post-event creative connection.",
    featuredMeta: "2025",
    featuredRole: "Digital design",
    featuredTitle: "URKA BIG",
    workTitle: "URKA BIG",
    workMeta: "Web design/UI,UX design/Brand identity",
    workYear: "2025",
    workHref:
      "https://www.behance.net/gallery/244151495/URKA-Visual-Experience-Upgrade-and-Website-Design",
    heroImage: "/work-project-01.png",
    hoverImages: [
      "/urka-hover-01.png",
      "/urka-hover-02.png",
      "/urka-hover-03.jpg",
      "/urka-hover-04.png"
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
    category: ["Digital design"],
    image: "/project-02.png",
    workImage: "/work-project-02.png",
    featuredDescription:
      "Cruise Project: Brand Extension and User Booking Flow Design",
    featuredMeta: "2025",
    featuredRole: "Digital design",
    featuredTitle: "Silevrsea",
    workTitle: "Silversea",
    workMeta: "Digital design",
    workHref:
      "https://www.behance.net/gallery/244144689/Luxury-Cruise-Website-Concept-(Case-Study-Silversea)",
    heroImage: "/work-project-02.png",
    hoverImages: [
      "/silversea-hover-01.png",
      "/silversea-hover-02.png",
      "/silversea-hover-03.png",
      "/silversea-hover-04.png"
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
    category: ["Brand identity"],
    image: "/signal-room-feature.jpg",
    workImage: "/work-project-03.png",
    featuredDescription:
      "A game-based learning project inspired by the TV series Blossoms Shanghai. This project is created solely for personal learning and design practice, with no commercial purpose. If any copyright issue arises, the related content can be removed immediately.",
    featuredMeta: "2024",
    featuredRole: "Game design / case study",
    featuredTitle: "Bloom",
    workTitle: "La Forma del tempo",
    workMeta: "Branding,Art direction",
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
    category: ["Brand identity"],
    image: "/project-04.png",
    workImage: "/work-project-04.png",
    workTitle: "The Bear",
    workMeta: "Branding",
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
  },
  {
    slug: "archive-05",
    title: "Redo",
    year: "2023",
    role: "Brand / Art Direction",
    type: "Identity System",
    category: ["Digital design"],
    image: "/work-redo.jpg",
    workImage: "/work-redo.jpg",
    workTitle: "Redo",
    workMeta: "UI/UX/Branding",
    workYear: "2023",
    heroImage: "/work-redo.jpg",
    hoverImages: [
      previewSwatch("#141414", "#3f3f46", "#f4f4f1"),
      previewSwatch("#101820", "#6c63ff", "#ffffff"),
      previewSwatch("#1b1b1b", "#f05f57", "#fff7e8")
    ],
    description:
      "A focused identity study built around compact typography, bold framing, and adaptable campaign assets.",
    intro:
      "Archive 05 expands the work archive with a focused identity study, balancing compact typography, bold framing, and adaptable campaign assets for a flexible visual system.",
    gallery: [
      {
        alt: "Redo identity overview",
        layout: "landscape",
        src: "/work-redo.jpg"
      },
      {
        alt: "Redo work presentation",
        layout: "wide",
        src: "/work-redo.jpg"
      }
    ],
    href: "/work/archive-05"
  },
  {
    slug: "archive-06",
    title: "Bloom",
    year: "2024",
    role: "UI / Experience",
    type: "Digital Product",
    category: ["Game design"],
    image: "/work-bloom.jpg",
    workImage: "/work-bloom.jpg",
    workTitle: "Bloom",
    workMeta: "Game design /UI design",
    workYear: "2024",
    heroImage: "/work-bloom.jpg",
    hoverImages: [
      previewSwatch("#0a0a0a", "#4698ff", "#f4f4f1"),
      previewSwatch("#111111", "#2ec4b6", "#ffffff"),
      previewSwatch("#1f2937", "#ffb000", "#f7f4ef")
    ],
    description:
      "A digital interface direction shaped around clear product storytelling, structured content, and precise visual pacing.",
    intro:
      "Archive 06 frames a digital interface direction around clear product storytelling, structured content, and precise visual pacing across responsive screens.",
    gallery: [
      {
        alt: "Bloom digital interface overview",
        layout: "landscape",
        src: "/work-bloom.jpg"
      },
      {
        alt: "Bloom product presentation",
        layout: "wide",
        src: "/work-bloom.jpg"
      }
    ],
    href: "/work/archive-06"
  },
  {
    slug: "archive-07",
    title: "Eventin",
    year: "2026",
    role: "Campaign / Visual System",
    type: "Art Direction",
    category: ["Digital design"],
    image: "/work-eventin.png",
    workImage: "/work-eventin.png",
    workTitle: "Eventin",
    workMeta: "UI/UX design",
    workYear: "2026",
    heroImage: "/work-eventin.png",
    hoverImages: [
      previewSwatch("#171717", "#d7263d", "#f5f1e8"),
      previewSwatch("#111111", "#9b5de5", "#fefefe"),
      previewSwatch("#0f172a", "#ff9f1c", "#ffffff")
    ],
    description:
      "A campaign direction using high-contrast imagery, direct messaging, and modular graphic frames.",
    intro:
      "Archive 07 builds a campaign direction with high-contrast imagery, direct messaging, and modular graphic frames that can stretch from print to digital touchpoints.",
    gallery: [
      {
        alt: "Eventin campaign visual",
        layout: "landscape",
        src: "/work-eventin.png"
      },
      {
        alt: "Eventin campaign presentation",
        layout: "wide",
        src: "/work-eventin.png"
      }
    ],
    href: "/work/archive-07"
  },
  {
    slug: "benedizione-doriente",
    title: "BENEDIZIONE D‘ORIENTE",
    year: "2026",
    role: "Brand identity / Packing / Illustation",
    type: "Brand Identity",
    category: ["Brand identity"],
    image: "/work-benedizione.jpg",
    workImage: "/work-benedizione.jpg",
    workTitle: "BENEDIZIONE D‘ORIENTE",
    workMeta: "Brand identity,Packing ,Illustation",
    workYear: "2026",
    heroImage: "/work-benedizione.jpg",
    hoverImages: [
      previewSwatch("#3d0605", "#9d1f17", "#f5e7d2"),
      previewSwatch("#1f0504", "#6f0f0b", "#ffffff"),
      previewSwatch("#5f0a08", "#2a0605", "#d9a66b")
    ],
    description:
      "A brand identity and packaging illustration project shaped around Eastern visual motifs, deep red atmosphere, and refined editorial pacing.",
    intro:
      "BENEDIZIONE D‘ORIENTE frames a Chinese Baijiu blind box identity through rich red tones, illustrated cultural references, and packaging-led storytelling.",
    gallery: [
      {
        alt: "BENEDIZIONE D‘ORIENTE brand identity cover",
        layout: "wide",
        src: "/work-benedizione.jpg"
      },
      {
        alt: "BENEDIZIONE D‘ORIENTE packaging identity presentation",
        layout: "landscape",
        src: "/work-benedizione.jpg"
      }
    ],
    href: "/work/benedizione-doriente"
  },
  {
    slug: "archive-08",
    title: "Portfolio",
    year: "2025",
    role: "Brand / Editorial",
    type: "Brand System",
    category: ["Vibe coding"],
    image: "/work-portfolio.png",
    workImage: "/work-portfolio.png",
    workTitle: "Portfolio",
    workMeta: "Vibe coding",
    workYear: "2025",
    heroImage: "/work-portfolio.png",
    hoverImages: [
      previewSwatch("#111111", "#4d908e", "#f2f2f2"),
      previewSwatch("#151515", "#f94144", "#ffffff"),
      previewSwatch("#0b0b0b", "#90be6d", "#f4f4f1")
    ],
    description:
      "An editorial brand system with restrained layouts, tactile detail, and a quiet visual rhythm.",
    intro:
      "Archive 08 develops an editorial brand system with restrained layouts, tactile detail, and a quiet visual rhythm across applications.",
    gallery: [
      {
        alt: "Portfolio editorial brand system",
        layout: "landscape",
        src: "/work-portfolio.png"
      },
      {
        alt: "Portfolio brand presentation",
        layout: "wide",
        src: "/work-portfolio.png"
      }
    ],
    href: "/work/archive-08"
  },
  {
    slug: "archive-09",
    title: "Upwrd",
    year: "2026",
    role: "Interaction / Prototype",
    type: "Vibe Coding",
    category: ["Digital design"],
    image: "/project-02.png",
    workImage: "/work-upwrd.png",
    workTitle: "Upwrd",
    workMeta: "UX/UI/Branding",
    workYear: "2026",
    workOrder: 0,
    heroImage: "/work-project-02.png",
    hoverImages: [
      previewSwatch("#050505", "#62c6ff", "#ffffff"),
      previewSwatch("#111111", "#19a974", "#f7c948"),
      previewSwatch("#101820", "#ff3366", "#fefefe")
    ],
    description:
      "An interactive prototype exploring lightweight motion, product atmosphere, and rapid front-end iteration.",
    intro:
      "Archive 09 explores an interactive prototype through lightweight motion, product atmosphere, and rapid front-end iteration.",
    gallery: [
      {
        alt: "Archive 09 interactive prototype",
        layout: "landscape",
        src: "/project-02.png"
      },
      {
        alt: "Archive 09 digital presentation",
        layout: "wide",
        src: "/work-project-02.png"
      }
    ],
    href: "/work/archive-09"
  },
  {
    slug: "archive-10",
    title: "Scam",
    year: "2022",
    role: "Game / Visual Direction",
    type: "Game Design",
    category: ["Brand identity", "Game design"],
    image: "/project-03.png",
    workImage: "/work-scam-identity.jpg",
    workTitle: "Scam",
    workMeta: "Game design/graphic design",
    workYear: "2022",
    heroImage: "/work-project-03.png",
    hoverImages: [
      previewSwatch("#0a0a0a", "#577590", "#ffffff"),
      previewSwatch("#111111", "#f9c74f", "#151515"),
      previewSwatch("#1b1b1b", "#00bbf9", "#fefefe")
    ],
    description:
      "A visual direction study for game-like experiences, using bold contrast, compact systems, and atmospheric assets.",
    intro:
      "Scam studies visual direction for game-like experiences, using bold contrast, compact systems, and atmospheric assets to support interaction.",
    gallery: [
      {
        alt: "Scam game visual direction",
        layout: "landscape",
        src: "/project-03.png"
      },
      {
        alt: "Scam visual system presentation",
        layout: "wide",
        src: "/work-project-03.png"
      }
    ],
    href: "/work/archive-10"
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
  "Digital Design",
  "Brand Identity",
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
