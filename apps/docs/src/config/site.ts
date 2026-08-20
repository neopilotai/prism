import {__BASE_URL__, __CDN_URL__} from "@/utils/env";

export const siteConfig = {
  authors: [
    {
      name: "HeroUI",
      url: "https://x.com/hero_ui",
    },
  ],
  cdnUrl: __CDN_URL__,
  creator: "khulnasoft",
  description:
    "Beautiful, accessible React UI components built on React Aria and Tailwind CSS v4. The modern alternative to MUI, Chakra UI, and shadcn/ui for building production-ready applications.",
  figmaCommunityFile: "https://www.figma.com/community/file/1546526812159103429",
  fullName: "HeroUI v3 (Previously NextUI) - Beautiful by default, customizable by design.",
  githubRawUrl:
    "https://raw.githubusercontent.com/khulnasoft/heroui/refs/heads/v3/apps/docs/content/docs",
  githubRepo: "khulnasoft/heroui",
  githubUrl: "https://github.com/khulnasoft/heroui",
  links: {
    discord: "https://discord.gg/9b6yyZKmH4",
    github: "https://github.com/khulnasoft",
    twitter: "https://x.com/hero_ui",
  },
  name: "HeroUI",
  ogImage: `/images/twitter-card.jpg`,
  ogImageNative: `/images/twitter-card-native.jpeg`,
  siteUrl: __BASE_URL__,
  supportEmail: "support@heroui.com",
};

export type SiteConfig = typeof siteConfig;
