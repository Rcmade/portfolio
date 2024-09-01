import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectHeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type?: "LINK"|"VIEW";
  href?: string;
}
const ProjectHeading = ({
  children,
  type="LINK",
  className,
  href = "#",
  ...rest
}: ProjectHeadingProps) => {
  const commonClassName = "flex items-center gap-2 py-1 text-2xl font-bold";
  return type === "LINK" ? (
    <Link
      href={href}
      className={cn(commonClassName, className)}
      target="_blank"
      {...rest}
    >
      {children} <ExternalLink />
    </Link>
  ) : (
    <h1 className={cn(commonClassName, className)} {...rest}>
      {children}
    </h1>
  );
};

export default ProjectHeading;
