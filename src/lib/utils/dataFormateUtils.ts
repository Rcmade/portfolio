import { techStack } from "@/content/aboutMeContent";
import { TechStack, TechStackEntry } from "@/types";

export function getTechStackEntries(keys: Array<keyof TechStack>) {
  const result: Record<string, TechStackEntry> = {};
  keys.forEach((key) => {
    if (key in techStack) {
      result[key] = techStack[key];
    }
  });
  return result;
}
