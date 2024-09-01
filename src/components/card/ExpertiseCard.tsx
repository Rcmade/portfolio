import { LucideIcon } from "lucide-react";
import React from "react";

interface ExpertiseCardProps {
  Icon: LucideIcon | React.ElementType;
  text: string;
}
const ExpertiseCard = ({ Icon, text }: ExpertiseCardProps) => {
  return (
    <figure className="flex flex-1 md:flex-none p-2 flex-col items-center justify-center rounded-xl bg-secondary max-lg:py-5 md:size-[120px]">
      <Icon className="h-12 w-12 text-primary" />
      <figcaption className=" text-center text-sm">
        {text}
      </figcaption>
    </figure>
  );
};

export default ExpertiseCard;
