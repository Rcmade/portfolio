import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ProjectHeading from "@/components/headings/ProjectHeading";
import LinkBadge from "@/components/badge/LinkBadge";
import { getTechStackEntries } from "@/lib/utils/dataFormateUtils";
import { techStack } from "@/content/aboutMeContent";
import { ProjectCardProps, TechStack } from "@/types";
import { cn } from "@/lib/utils";
import ProjectViewCarousel from "../carousel/ProjectViewCarousel";


const ProjectCard = ({
  imageSrc,
  imageAlt,
  projectTitle,
  projectLink,
  description,
  techStackList,
  className,
  type,
  subImgs,
}: ProjectCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn(
        "group flex flex-col justify-between rounded-lg text-card-foreground shadow-lg dark:shadow-xs dark:shadow-primary/50 lg:flex-row",
        className,
      )}
    >
      <div className="flex w-full p-4">
        {type === "VIEW" && (subImgs || [])?.length > 0 ? (
          <ProjectViewCarousel subImgs={subImgs || []} />
        ) : (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              className="rounded-md object-contain"
            />
          </div>
        )}
      </div>
      <div className="items- w-full lg:flex lg:border-l lg:p-4">
        <div>
          <div className="flex flex-col space-y-1.5 pb-3 pt-0">
            <ProjectHeading type={type} href={projectLink}>
              {projectTitle}
            </ProjectHeading>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {Object.keys(getTechStackEntries(techStackList)).map((label) => {
              const { href, color } =
                techStack[label as keyof typeof techStack];
              return (
                <LinkBadge
                  key={label}
                  href={href}
                  label={label}
                  color={color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
