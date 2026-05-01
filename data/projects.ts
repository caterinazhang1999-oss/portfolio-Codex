export type ProjectCategory =
  | "Brand identity"
  | "Digital design"
  | "Game design"
  | "Vibe coding";

export type Project = {
  title: string;
  year: string;
  role: string;
  type: string;
  category: ProjectCategory[];
  image: string;
  workImage: string;
  hoverImages: string[];
  description: string;
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
    title: "Noir Supply",
    year: "2026",
    role: "Identity / Packaging",
    type: "Brand System",
    category: ["Brand identity"],
    image: "/project-01.png",
    workImage: "/work-project-01.png",
    hoverImages: [
      previewSwatch("#f05f57", "#3943b7", "#fff7e8"),
      previewSwatch("#19a974", "#f7c948", "#0a0a0a"),
      previewSwatch("#f8b6d2", "#62c6ff", "#ffffff")
    ],
    description:
      "A restrained visual identity for a premium materials studio, built around severe typography and tactile monochrome surfaces.",
    href: "#contact"
  },
  {
    title: "Ledger North",
    year: "2025",
    role: "UI / Art Direction",
    type: "Digital Product",
    category: ["Digital design", "Vibe coding"],
    image: "/project-02.png",
    workImage: "/work-project-02.png",
    hoverImages: [
      previewSwatch("#6c63ff", "#101820", "#ffffff"),
      previewSwatch("#ffb000", "#073b4c", "#f7f4ef"),
      previewSwatch("#2ec4b6", "#ff3366", "#050505")
    ],
    description:
      "A finance dashboard concept with editorial hierarchy, quiet data density, and a cinematic product reveal.",
    href: "#contact"
  },
  {
    title: "Signal Room",
    year: "2025",
    role: "Campaign / Motion",
    type: "Launch Design",
    category: ["Digital design", "Game design"],
    image: "/project-03.png",
    workImage: "/work-project-03.png",
    hoverImages: [
      previewSwatch("#d7263d", "#1b998b", "#f5f1e8"),
      previewSwatch("#ff9f1c", "#2d3047", "#ffffff"),
      previewSwatch("#9b5de5", "#00bbf9", "#fefefe")
    ],
    description:
      "A launch language for an audio platform using modular frames, compressed type, and controlled luminous accents.",
    href: "#contact"
  },
  {
    title: "Arc Atelier",
    year: "2024",
    role: "Brand / Web",
    type: "Portfolio System",
    category: ["Brand identity", "Digital design"],
    image: "/project-04.png",
    workImage: "/work-project-04.png",
    hoverImages: [
      previewSwatch("#4d908e", "#111111", "#f2f2f2"),
      previewSwatch("#f94144", "#f9c74f", "#151515"),
      previewSwatch("#577590", "#90be6d", "#ffffff")
    ],
    description:
      "A digital gallery for an architectural practice, balancing calm project photography with precise navigation.",
    href: "#contact"
  }
];

export const projectCategories = [
  "ALL",
  "Brand identity",
  "Digital design",
  "Game design",
  "Vibe coding"
] as const;

export const capabilities = [
  "Brand Identity",
  "Digital Design",
  "Game Design",
  "Vibe coding"
];
