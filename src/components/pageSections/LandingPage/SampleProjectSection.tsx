import ProjectCard from "@/components/card/ProjectCard";
import { projectContent } from "@/content/projectContent";
import React from "react";

const SampleProjectSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {projectContent.map((p, i) => (
        <ProjectCard
          key={p.projectTitle}
          className={i % 2 === 0 ? "lg:flex-row-reverse" : ""}
          description={p.description}
          imageAlt={p.imageAlt}
          type={p.type}
          imageSrc={p.imageSrc}
          projectLink={p.projectLink}
          projectTitle={p.projectTitle}
          subImgs={p?.subImgs}
          techStackList={p.techStackList}
        />
      ))}
    </div>
  );
};

export default SampleProjectSection;
