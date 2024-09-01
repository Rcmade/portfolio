import CenterHeading from "@/components/headings/CenterHeading";
import AboutMeSection from "@/components/pageSections/LandingPage/AboutMeSection";
import HeroSection from "@/components/pageSections/LandingPage/HeroSection";
import SampleProjectSection from "@/components/pageSections/LandingPage/SampleProjectSection";
import SkillSection from "@/components/pageSections/LandingPage/SkillSection";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <Separator orientation="horizontal" className="my-4" />
      {/* TODO: Project Section */}
      <CenterHeading text="Projects" />
      <SampleProjectSection />
      <Separator orientation="horizontal" className="relative -z-10 my-4" />
      <CenterHeading text="About Me" />
      <AboutMeSection />
    </div>
  );
};

export default page;
