import { cn } from "@/lib/utils";
import React from "react";

interface CenterHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}
const CenterHeading = ({ className, text, ...rest }: CenterHeadingProps) => {
  return (
    <h1
      className={cn(
        "w-full bg-linear-to-r py-1 from-primary to-primary/45 bg-clip-text text-center text-5xl font-bold text-transparent",
        // "from-primary w-full to-primary/45 inline-block max-w-full bg-gradient-to-r bg-clip-text text-center text-4xl font-black text-transparent dark:to-purple-700",
        className,
      )}
      {...rest}
    >
      {text}
    </h1>
  );
};

export default CenterHeading;
