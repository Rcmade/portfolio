import ProjectCard from "@/components/card/ProjectCard";
import { projectContent } from "@/content/projectContent";
import React from "react";

const SampleProjectSection = () => {
  const projects = [
    ...projectContent.professional,
    ...projectContent.personal,
  ].filter((p) => p.featured);
  return (
    <div className="my-4 flex flex-col gap-4">
      {projects.map((p, i) => (
        <ProjectCard
          key={p.id}
          className={i % 2 === 0 ? "lg:flex-row-reverse" : ""}
          data={p}
        />
      ))}
    </div>
  );
};

export default SampleProjectSection;
