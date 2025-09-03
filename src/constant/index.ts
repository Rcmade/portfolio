import { ProjectType } from "@/content/projectContent";

export const RAY_LOGO_PUBLIC_URL =
  "https://res.cloudinary.com/du1fpl9ph/image/upload/v1725374897/ray-portfolio/tw4zgyhz4h9j1vhnwehr.png";

export const projectTypeContent: {
  type: ProjectType | "all";
  label: string;
}[] = [
  {
    type: "personal",
    label: "Personal",
  },
  {
    type: "professional",
    label: "Professional",
  },
  {
    type: "all",
    label: "All",
  },
];
