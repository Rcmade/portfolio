import { alertVariants } from "@/components/ui/alert";
import { techStack } from "@/content/aboutMeContent";
import contactSchema from "@/zod/contactSchema";
import { z } from "zod";

type TechStack = typeof techStack;
type TechStackEntry = TechStack[keyof TechStack];
type TechStack = Record<string, TechStackEntry>;
export type AlertVarientT = "default" | "destructive";

export type ProjectCardProps = {
  id: string;
  title: string;
  links: Record<string, string>;
  images: string[];
  description: string;
  implemented: string[];
  techStackList: Array<keyof TechStack>;
  startDate?: string;
  endDate?: string;
};
// {
//   imageSrc: string;
//   imageAlt: string;
//   projectTitle: string;
//   projectLink: string;
//   description: string;
//   techStackList: Array<keyof TechStack>;
//   type?: "LINK" | "VIEW";
//   subImgs?: string[];
// };

export type ContactSchemaT = z.infer<typeof contactSchema>;
