import { cn } from "@/lib/utils";
import React from "react";

interface CenterHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}
const CenterHeading = ({ className, text, ...rest }: CenterHeadingProps) => {
  return (
    <h1 
      className={cn(
        "w-full bg-gradient-to-r py-1 from-sky-300 to-purple-500 bg-clip-text text-center text-5xl font-bold text-transparent",
        className,
      )}
      {...rest}
    >
      {text}
    </h1>
  );
};

export default CenterHeading;
