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
    color: "bg-black",
  },
  Javascript: {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "bg-yellow-400",
  },
  "Node.js": {
    href: "https://nodejs.org/en",
    color: "bg-green-500",
  },
  "TS-Morph": {
    href: "https://ts-morph.com/",
    color: "bg-blue-600",
  },

  "Three.js": {
    href: "https://threejs.org/",
    color: "bg-black",
  },
  "Babylon.js": {
    href: "https://www.babylonjs.com/",
    color: "bg-orange-500",
  },
  GSAP: {
    href: "https://gsap.com/",
    color: "bg-green-500",
  },
  "Hono.js": {
    href: "https://hono.dev/",
    color: "bg-orange-500",
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
  "Shadcn/ui": {
    href: "https://ui.shadcn.com",
    color: "bg-yellow-400",
  },
  Bootstrap: {
    href: "https://getbootstrap.com",
    color: "bg-blue-400",
  },
  "Express.js": {
    href: "https://expressjs.com",
    color: "bg-green-400",
  },

  Firebase: {
    href: "https://firebase.google.com",
    color: "bg-yellow-400",
  },
  "React Native": {
    href: "https://reactnative.dev",
    color: "bg-yellow-500",
  },
  Oidc: {
    href: "https://openid.net",
    color: "bg-yellow-500",
  },
  Zod: {
    href: "https://zod.dev",
    color: "bg-black",
  },
  RazorPay: {
    href: "https://razorpay.com",
    color: "bg-blue-500",
  },

  Redux: {
    href: "https://redux.js.org",
    color: "bg-red-500",
  },
  Zustand: {
    href: "https://zustand-demo.pmnd.rs",
    color: "bg-orange-500",
  },
  "React Query": {
    href: "https://tanstack.com/query/latest",
    color: "bg-pink-400",
  },
  Vite: {
    href: "https://vitejs.dev",
    color: "bg-violet-400",
  },
  Webpack: {
    href: "https://webpack.js.org",
    color: "bg-gray-400",
  },
  PostgreSQL: {
    href: "https://www.postgresql.org",
    color: "bg-indigo-500",
  },
  Docker: {
    href: "https://www.docker.com",
    color: "bg-blue-600",
  },
  Python: {
    href: "https://www.python.org",
    color: "bg-yellow-600",
  },
  CodeBuild: {
    href: "https://aws.amazon.com/codebuild",
    color: "bg-gray-600",
  },
  Bash: {
    href: "https://www.gnu.org/software/bash",
    color: "bg-black",
  },
  AWS: {
    href: "https://aws.amazon.com",
    color: "bg-orange-300",
  },
  "GitHub Actions": {
    href: "https://docs.github.com/en/actions",
    color: "bg-gray-800",
  },
  Jenkins: {
    href: "https://www.jenkins.io",
    color: "bg-red-600",
  },
  GraphQL: {
    href: "https://graphql.org",
    color: "bg-pink-500",
  },
  "Socket.io": {
    href: "https://socket.io",
    color: "bg-black",
  },
  Jest: {
    href: "https://jestjs.io",
    color: "bg-red-400",
  },
  "React Testing Library": {
    href: "https://testing-library.com/docs/react-testing-library/intro/",
    color: "bg-emerald-400",
  },
  PWA: {
    href: "https://web.dev/progressive-web-apps/",
    color: "bg-blue-400",
  },
  Mocha: {
    href: "https://mochajs.org",
    color: "bg-brown-500",
  },

  Apollo: {
    href: "https://www.apollographql.com",
    color: "bg-indigo-400",
  },
  Redis: {
    href: "https://redis.io",
    color: "bg-red-600",
  },
  RabbitMQ: {
    href: "https://www.rabbitmq.com",
    color: "bg-orange-600",
  },

  Sentry: {
    href: "https://sentry.io",
    color: "bg-purple-500",
  },

  Artillery: {
    href: "https://www.artillery.io",
    color: "bg-blue-500",
  },
  Prisma: {
    href: "https://www.prisma.io",
    color: "bg-cyan-500",
  },
  Sequelize: {
    href: "https://sequelize.org",
    color: "bg-teal-400",
  },
  Mongoose: {
    href: "https://mongoosejs.com",
    color: "bg-green-500",
  },
  Kubernetes: {
    href: "https://kubernetes.io",
    color: "bg-blue-700",
  },
  Terraform: {
    href: "https://www.terraform.io",
    color: "bg-purple-600",
  },
  "Drizzle ORM": {
    href: "https://orm.drizzle.team",
    color: "bg-green-600",
  },
  "Claude AI": {
    href: "https://claude.ai",
    color: "bg-yellow-400",
  },
  "OpenAI API": {
    href: "https://platform.openai.com/docs",
    color: "bg-gray-700",
  },
  ESLint: {
    href: "https://eslint.org",
    color: "bg-purple-400",
  },
  Prettier: {
    href: "https://prettier.io",
    color: "bg-pink-300",
  },
  "Google Analytics": {
    href: "https://analytics.google.com",
    color: "bg-indigo-600",
  },
  Lighthouse: {
    href: "https://developer.chrome.com/docs/lighthouse/overview/",
    color: "bg-green-400",
  },
  OAuth: {
    href: "https://oauth.net",
    color: "bg-gray-600",
  },
  HLS: {
    href: "https://www.npmjs.com/package/hls.js/v/1.0.3-0.canary.7275",
    color: "bg-blue-600",
  },
  "DASH.js": {
    href: "https://dashjs.org/",
    color: "bg-blue-600",
  },
} as const;

export const primaryTechStack: (keyof typeof techStack)[] = [
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Javascript",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "React Native",
  "Hono.js",
  "Git",
  "AWS",
  "Jenkins",
  "Redis",
  "Redux",
  "Webpack",
  "GraphQL",
  "Vite",
  "Prettier",
];
