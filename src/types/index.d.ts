import { techStack } from "@/content/aboutMeContent";

type TechStack = typeof techStack;
type TechStackEntry = TechStack[keyof TechStack];
type TechStack = Record<string, TechStackEntry>;

export type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  projectTitle: string;
  projectLink: string;
  description: string;
  techStackList: Array<keyof TechStack>;
  type?: "LINK" | "VIEW";
  subImgs?: string[];
};
