"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projectContent } from "@/content/projectContent";
import ProjectCard from "@/components/card/ProjectCard";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<keyof typeof projectContent | "all">(
    "all",
  );

  const all = [...projectContent.professional, ...projectContent.personal];
  const professional = projectContent.professional;
  const personal = projectContent.personal;

  const getFilteredProjects = () => {
    switch (filter) {
      case "professional":
        return professional;
      case "personal":
        return personal;
      default:
        return all;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="mb-4 text-4xl font-bold">All Projects</h1>
          <p className="text-muted-foreground max-w-3xl text-lg">
            A comprehensive collection of my professional and personal projects,
            showcasing expertise across various technologies and domains.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <Button
            variant={filter === "all" ? "shadow" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Projects ({all.length})
          </Button>
          <Button
            variant={filter === "professional" ? "shadow" : "outline"}
            onClick={() => setFilter("professional")}
          >
            Professional ({professional.length})
          </Button>
          <Button
            variant={filter === "personal" ? "shadow" : "outline"}
            onClick={() => setFilter("personal")}
          >
            Personal ({personal.length})
          </Button>
        </div>

        <div className="my-4 flex flex-col gap-4">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              className={i % 2 === 0 ? "lg:flex-row-reverse" : ""}
              data={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
