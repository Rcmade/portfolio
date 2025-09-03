// "use client";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";

// type TypeValue = "all" | "professional" | "personal";

// export type FiltersProps = {
//   query: string;
//   onQueryChange: (v: string) => void;
//   typeValue: TypeValue;
//   onTypeChange: (v: TypeValue) => void;
//   allStacks: string[];
//   selectedStacks: string[];
//   onToggleStack: (stack: string) => void;
//   onClearStacks: () => void;
// };

// export function SearchFilters({
//   query,
//   onQueryChange,
//   typeValue,
//   onTypeChange,
//   allStacks,
//   selectedStacks,
//   onToggleStack,
//   onClearStacks,
// }: FiltersProps) {
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//         <Input
//           value={query}
//           onChange={(e) => onQueryChange(e.target.value)}
//           placeholder="Search by title, description, features, or tech..."
//           className="md:max-w-xl"
//           aria-label="Search projects"
//         />

//         <div className="flex items-center gap-2">
//           <Segmented
//             options={[
//               { value: "all", label: "All" },
//               { value: "professional", label: "Professional" },
//               { value: "personal", label: "Personal" },
//             ]}
//             value={typeValue}
//             onChange={(v) => onTypeChange(v as TypeValue)}
//           />

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline">
//                 Tech stack{" "}
//                 {selectedStacks.length > 0 ? `(${selectedStacks.length})` : ""}
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-56">
//               <DropdownMenuLabel>Filter by tech</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               {allStacks.map((stack) => (
//                 <DropdownMenuCheckboxItem
//                   key={stack}
//                   checked={selectedStacks.includes(stack)}
//                   onCheckedChange={() => onToggleStack(stack)}
//                 >
//                   {stack}
//                 </DropdownMenuCheckboxItem>
//               ))}
//               <DropdownMenuSeparator />
//               <div className="px-2 pb-2">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   onClick={onClearStacks}
//                   className="w-full"
//                 >
//                   Clear tech filters
//                 </Button>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Segmented({
//   options,
//   value,
//   onChange,
// }: {
//   options: { value: string; label: string }[];
//   value: string;
//   onChange: (v: string) => void;
// }) {
//   return (
//     <div className="inline-flex rounded-md border p-1">
//       {options.map((opt) => {
//         const active = value === opt.value;
//         return (
//           <button
//             key={opt.value}
//             type="button"
//             onClick={() => onChange(opt.value)}
//             className={cn(
//               "rounded-md px-3 py-1.5 text-sm transition-colors",
//               active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
//             )}
//             aria-pressed={active}
//           >
//             {opt.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// }
