export interface DocsSeoMetadata {
  description: string;
  title: string;
}

const ENGLISH_DOCS_SEO_METADATA: Readonly<Record<string, DocsSeoMetadata>> = {
  "/docs/react/components": {
    description:
      "Browse accessible PrismUI React components for forms, overlays, navigation, data display, and more, built with React Aria and Tailwind CSS v4.",
    title: "PrismUI React Components – Accessible UI Library",
  },
  "/docs/react/components/button": {
    description:
      "Build accessible React buttons with PrismUI. Explore variants, sizes, icon-only states, custom styles, ripple effects, render props, and BEM classes.",
    title: "PrismUI Button – Accessible React Button Component",
  },
  "/docs/react/components/select": {
    description:
      "Build accessible React select inputs with PrismUI. Explore single and multiple selection, async loading, sections, disabled items, and controlled values.",
    title: "PrismUI Select – Accessible React Select Component",
  },
  "/docs/react/getting-started": {
    description:
      "Meet PrismUI v3, an accessible React UI library built on React Aria and Tailwind CSS v4. Explore its design approach, ecosystem, and common questions.",
    title: "Introduction to PrismUI v3 – React UI Library",
  },
};

export function getDocsSeoMetadata(
  locale: string | undefined,
  unlocalizedPath: string,
): DocsSeoMetadata | undefined {
  return locale === "en" ? ENGLISH_DOCS_SEO_METADATA[unlocalizedPath] : undefined;
}
