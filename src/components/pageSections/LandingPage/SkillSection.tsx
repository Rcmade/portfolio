import LogoButton from "@/components/button/LogoButton";
import ExpertiseCard from "@/components/card/ExpertiseCard";
import LinesIcon from "@/icons/LinesIcon";
import ResponsiveIcon from "@/icons/ResponsiveIcon";
import { CodeXml, Layers3, Server, Unplug } from "lucide-react";
import React from "react";

const SkillSection = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col justify-center md:gap-x-14 lg:gap-x-[4.5rem] gap-y-16 md:flex-row">
        <ExpertiseCard Icon={CodeXml} text="Web Dev Services" />
        <ExpertiseCard Icon={Layers3} text="Custom MERN Solutions" />
        <ExpertiseCard Icon={ResponsiveIcon} text="Responsive Design" />
        <ExpertiseCard
          Icon={Unplug}
          text={`API Integrations`}
        />
        <ExpertiseCard Icon={Server} text="Full-Stack Projects" />
      </div>
      <LinesIcon className="h-52 w-full lg:h-64 max-w-full lg:w-[50rem]" />
      <LogoButton className="pointer-events-none -mt-4 select-none text-9xl" />
    </div>
  );
};

export default SkillSection;
