import { Github, LinkedinIcon, Mail } from "lucide-react";

export const contactLinks = [
  {
    Icon: Mail,
    href: `mailto:${process.env.CONTACT_EMAIL}`,
    title: process.env.CONTACT_EMAIL,
  },
  {
    Icon: Github,
    href: process.env.CONTACT_GITHUB,
    title: "GitHub",
  },
  {
    Icon: LinkedinIcon,
    href: process.env.CONTACT_LINKEDIN,
    title: "LinkedIn",
  },
];

export const techStack = [
  {
    href: "https://nextjs.org",
    label: "Next.js",
    color: "bg-red-400",
  },
  {
    href: "https://reactjs.org",
    label: "React",
    color: "bg-yellow-400",
  },
  {
    href: "https://git-scm.com",
    label: "Git",
    color: "bg-orange-400",
  },
  {
    href: "https://figma.com",
    label: "Figma",
    color: "bg-rose-400",
  },
  {
    href: "https://www.mysql.com",
    label: "MySQL",
    color: "bg-purple-400",
  },
  {
    href: "https://www.typescriptlang.org",
    label: "TypeScript",
    color: "bg-rose-400",
  },
  {
    href: "https://tailwindcss.com",
    label: "Tailwind CSS",
    color: "bg-yellow-400",
  },
  {
    href: "https://www.mongodb.com",
    label: "MongoDB",
    color: "bg-cyan-400",
  },
  {
    href: "https://convex.dev",
    label: "Convex",
    color: "bg-cyan-400",
  },
  {
    href: "https://ui.shadcn.com",
    label: "shadcn/ui",
    color: "bg-yellow-400",
  },
];