// "use client";

// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { projectContent, ProjectType } from "@/content/projectContent";
// import ProjectCard from "@/components/card/ProjectCard";
// import { projectTypeContent } from "@/constant";
// import { SearchFilters } from "./T";
// import { ProjectCardProps } from "@/types";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// // export default function ProjectsPage() {
// //   const [filter, setFilter] = useState<keyof typeof projectContent | "all">(
// //     "all",
// //   );

// //   const all = [...projectContent.professional, ...projectContent.personal];
// //   const professional = projectContent.professional;
// //   const personal = projectContent.personal;

// //   const getFilteredProjects = () => {
// //     switch (filter) {
// //       case "professional":
// //         return professional;
// //       case "personal":
// //         return personal;
// //       default:
// //         return all;
// //     }
// //   };

// //   const filteredProjects = getFilteredProjects();
// //   const buttonList = [];

// //   return (
// //     <div className="mx-auto max-w-7xl">
// //       <div className="mb-8">
// //         <Button variant="ghost" asChild className="mb-6">
// //           <Link href="/">
// //             <ArrowLeft className="mr-2 h-4 w-4" />
// //             Back to Home
// //           </Link>
// //         </Button>

// //         <h1 className="mb-4 text-4xl font-bold">All Projects</h1>
// //         <p className="text-muted-foreground max-w-3xl text-lg">
// //           A comprehensive collection of my professional and personal projects,
// //           showcasing expertise across various technologies and domains.
// //         </p>
// //       </div>

// //       <div className="mb-8 flex flex-wrap gap-3">
// //         {projectTypeContent.map(({ type, label }) => (
// //           <Button
// //             key={type}
// //             variant={filter === type ? "shadow" : "outline"}
// //             onClick={() => setFilter(type)}
// //             className="flex-1 md:flex-none"
// //           >
// //             {label} ({type === "all" ? all.length : projectContent[type].length}
// //             )
// //           </Button>
// //         ))}
// //         <Button
// //           variant={filter === "all" ? "shadow" : "outline"}
// //           onClick={() => setFilter("all")}
// //           className="flex-1 md:flex-none"
// //         >
// //           All Projects ({all.length})
// //         </Button>
// //         <Button
// //           variant={filter === "professional" ? "shadow" : "outline"}
// //           onClick={() => setFilter("professional")}
// //           className="flex-1 md:flex-none"
// //         >
// //           Professional ({professional.length})
// //         </Button>
// //         <Button
// //           variant={filter === "personal" ? "shadow" : "outline"}
// //           onClick={() => setFilter("personal")}
// //           className="flex-1 md:flex-none"
// //         >
// //           Personal ({personal.length})
// //         </Button>
// //       </div>

// //       <div className="my-4 flex flex-col gap-4">
// //         {filteredProjects.map((project, i) => (
// //           <ProjectCard
// //             key={project.id}
// //             className={i % 2 === 0 ? "lg:flex-row-reverse" : ""}
// //             data={project}
// //           />
// //         ))}
// //       </div>

// //       {filteredProjects.length === 0 && (
// //         <div className="py-12 text-center">
// //           <p className="text-muted-foreground">
// //             No projects found for the selected filter.
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// type TypeValue = "all" | ProjectType;

// function useDebouncedCallback<T extends (...args: any[]) => void>(
//   cb: T,
//   delay = 300,
// ) {
//   const timeoutRef = React.useRef<number | undefined>(undefined);
//   return React.useCallback(
//     (...args: Parameters<T>) => {
//       window.clearTimeout(timeoutRef.current);
//       timeoutRef.current = window.setTimeout(() => cb(...args), delay);
//     },
//     [cb, delay],
//   );
// }

// const allProjects = [
//   ...projectContent.professional,
//   ...projectContent.personal,
// ];

// function useAllTechStacks() {
//   return React.useMemo(() => {
//     const set = new Set<string>();
//     allProjects.forEach((p) => p.techStackList?.forEach((t) => set.add(t)));
//     return Array.from(set).sort((a, b) => a.localeCompare(b));
//   }, []);
// }

// export default function Page() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   const allStacks = useAllTechStacks();

//   // Read initial values from URL
//   const initialQuery = searchParams.get("q") ?? "";
//   const initialType = (searchParams.get("type") as TypeValue) || "all";
//   const initialStacksFromMulti = searchParams.getAll("stack"); // multi param: ?stack=A&stack=B
//   const initialStacksFromComma = (searchParams.get("stacks") ?? "")
//     .split(",")
//     .map((s) => s.trim())
//     .filter(Boolean);
//   const initialStacks = (
//     initialStacksFromMulti.length > 0
//       ? initialStacksFromMulti
//       : initialStacksFromComma
//   ).filter((s) => allStacks.includes(s));

//   const [query, setQuery] = React.useState(initialQuery);
//   const [typeValue, setTypeValue] = React.useState<TypeValue>(initialType);
//   const [selectedStacks, setSelectedStacks] =
//     React.useState<string[]>(initialStacks);

//   // Keep local state in sync if URL changes externally
//   React.useEffect(() => {
//     setQuery(initialQuery);
//     setTypeValue(initialType);
//     setSelectedStacks(initialStacks);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [initialQuery, initialType, searchParams.toString()]);

//   // Helper to push current state to URL (preserve on reload/share)
//   const updateURL = React.useCallback(
//     (next: { q?: string; type?: TypeValue; stacks?: string[] }) => {
//       const params = new URLSearchParams(searchParams.toString());
//       if (typeof next.q === "string") {
//         if (next.q) params.set("q", next.q);
//         else params.delete("q");
//       }
//       if (typeof next.type === "string") {
//         if (next.type) params.set("type", next.type);
//         else params.delete("type");
//       }
//       if (next.stacks) {
//         // clear existing stack params
//         params.delete("stack");
//         params.delete("stacks");
//         next.stacks.forEach((s) => params.append("stack", s));
//       }
//       router.replace(`${pathname}?${params.toString()}`, { scroll: false });
//     },
//     [pathname, router, searchParams],
//   );

//   const debouncedUpdateQuery = useDebouncedCallback((val: string) => {
//     updateURL({ q: val });
//   }, 300);

//   const onQueryChange = (val: string) => {
//     setQuery(val);
//     debouncedUpdateQuery(val);
//   };

//   const onTypeChange = (val: TypeValue) => {
//     setTypeValue(val);
//     updateURL({ type: val });
//   };

//   const onToggleStack = (stack: string) => {
//     setSelectedStacks((prev) => {
//       const next = prev.includes(stack)
//         ? prev.filter((s) => s !== stack)
//         : [...prev, stack];
//       updateURL({ stacks: next });
//       return next;
//     });
//   };

//   const onClearStacks = () => {
//     setSelectedStacks([]);
//     updateURL({ stacks: [] });
//   };

//   const filteredList: ProjectCardProps[] = React.useMemo(() => {
//     const source =
//       typeValue === "all"
//         ? [...projectContent.professional, ...projectContent.personal]
//         : projectContent[typeValue as ProjectType];

//     const q = query.trim().toLowerCase();
//     const hasQ = q.length > 0;
//     const hasStacks = selectedStacks.length > 0;

//     return source.filter((p) => {
//       const matchesQuery = !hasQ
//         ? true
//         : [
//             p.title,
//             p.description,
//             ...(p.implemented ?? []),
//             ...(p.techStackList ?? []),
//           ]
//             .join(" ")
//             .toLowerCase()
//             .includes(q);

//       const matchesStacks = !hasStacks
//         ? true
//         : selectedStacks.some((s) => (p.techStackList ?? []).includes(s)); // ANY match; change to .every for ALL match

//       return matchesQuery && matchesStacks;
//     });
//   }, [query, selectedStacks, typeValue]);

//   return (
//     <main className="mx-auto w-full max-w-6xl px-4 py-8">
//       <header className="mb-6">
//         <h1 className="text-2xl font-semibold text-balance">Projects</h1>
//         <p className="text-muted-foreground text-sm">
//           Search and filter by project type and tech stack. Your filters persist
//           in the URL.
//         </p>
//       </header>

//       <SearchFilters
//         query={query}
//         onQueryChange={onQueryChange}
//         typeValue={typeValue as "all" | "professional" | "personal"}
//         onTypeChange={onTypeChange}
//         allStacks={allStacks}
//         selectedStacks={selectedStacks}
//         onToggleStack={onToggleStack}
//         onClearStacks={onClearStacks}
//       />

//       <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredList.map((p) => (
//           <ProjectCard key={p.id} data={p} />
//         ))}
//       </section>

//       {filteredList.length === 0 ? (
//         <div className="text-muted-foreground mt-10 text-center text-sm">
//           No projects match your current filters.
//         </div>
//       ) : null}
//     </main>
//   );
// }
