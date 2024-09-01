import { cn } from "@/lib/utils";
import React from "react";

const BlinkCircle = ({
  blinkClassName,
  dotClassName,
}: {
  blinkClassName?: string;
  dotClassName?: string;
}) => {
  return (
    <span
      className={cn(
        "relative mr-2 flex h-4 w-4 items-center justify-center",
        blinkClassName,
      )}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
      <span
        className={cn(
          "relative inline-flex h-3 w-3 rounded-full bg-green-400",
          dotClassName,
        )}
      ></span>
    </span>
  );
};

export default BlinkCircle;
