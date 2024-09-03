import Link from "next/link";
import React from "react";

const ProjectsLink = ({ text }: { text: string }) => {
  return <Link href="/#projects" className="font-semibold text-primary/80 ml-1" >{text}</Link>;
};

export default ProjectsLink;
