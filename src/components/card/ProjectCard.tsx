import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ProjectHeading from "@/components/headings/ProjectHeading";
import LinkBadge from "@/components/badge/LinkBadge";
import { getTechStackEntries } from "@/lib/utils/dataFormateUtils";
import { techStack } from "@/content/aboutMeContent";
import { ProjectCardProps } from "@/types";
import { cn } from "@/lib/utils";
import ProjectViewCarousel from "../carousel/ProjectViewCarousel";
import { ExternalLink, Github, Package } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectCard = ({
  className,
  data,
}: { data: ProjectCardProps } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn(
        "group text-card-foreground dark:shadow-primary/50 flex flex-col justify-between rounded-lg shadow-lg lg:flex-row dark:shadow-xs",
        className,
      )}
    >
      <div className="flex w-full p-4">
        {data.type === "VIEW" && (data.images || [])?.length > 0 ? (
          <ProjectViewCarousel imgs={data.images || []} />
        ) : (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={data.images[0]}
              alt={data.title}
              width={700}
              height={500}
              className="rounded-md object-contain"
            />
          </div>
        )}
      </div>
      <div className="w-full space-y-4 lg:border-l lg:p-4">
        <div className="flex flex-col space-y-1.5 pt-0 pb-3">
          <ProjectHeading>{data.title}</ProjectHeading>
          {data.startDate && (
            <p className="text-muted-foreground">
              {data.startDate} {data.endDate ? ` - ${data.endDate}` : ""}
            </p>
          )}
          <p className="text-muted-foreground text-sm">{data.description}</p>
          <div className="text-muted-foreground flex flex-col gap-2">
            <ul className="list-inside list-disc space-y-1">
              {data.implemented.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {Object.keys(getTechStackEntries(data.techStackList)).map((label) => {
            const { href, color } = techStack[label as keyof typeof techStack];
            return (
              <LinkBadge key={label} href={href} label={label} color={color} />
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {data.links.github && (
            <Button size="sm" variant={"shadow"} asChild>
              <Link
                href={data.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {data.links.live && (
            <Button size="sm" variant={"shadow"} asChild>
              <Link
                href={data.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {data.links.npm && (
            <Button size="sm" variant={"shadow"} asChild>
              <Link
                href={data.links.npm}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="mr-2 h-4 w-4" />
                NPM
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
