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

export const techStack = {
  "Next.js": {
    href: "https://nextjs.org",
    color: "bg-red-400",
  },
  React: {
    href: "https://reactjs.org",
    color: "bg-yellow-400",
  },
  Git: {
    href: "https://git-scm.com",
    color: "bg-orange-400",
  },
  Figma: {
    href: "https://figma.com",
    color: "bg-rose-400",
  },
  MySQL: {
    href: "https://www.mysql.com",
    color: "bg-purple-400",
  },
  TypeScript: {
    href: "https://www.typescriptlang.org",
    color: "bg-rose-400",
  },
  "Tailwind CSS": {
    href: "https://tailwindcss.com",
    color: "bg-yellow-400",
  },
  MongoDB: {
    href: "https://www.mongodb.com",
    color: "bg-cyan-400",
  },
  Convex: {
    href: "https://convex.dev",
    color: "bg-cyan-400",
  },
  "shadcn/ui": {
    href: "https://ui.shadcn.com",
    color: "bg-yellow-400",
  },
  Bootstrap: {
    href: "https://getbootstrap.com",
    color: "bg-blue-400",
  },
  Express: {
    href: "https://expressjs.com",
    color: "bg-green-400",
  },

  "React-Native": {
    href: "https://reactnative.dev",
    color: "bg-yellow-500",
  },
  RazorPay: {
    href: "https://razorpay.com",
    color: "bg-blue-500",
  },
};
