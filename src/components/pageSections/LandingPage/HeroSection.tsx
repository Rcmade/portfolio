import AvailableButton from "@/components/button/AvailableButton";
import { Button } from "@/components/ui/button";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import RightArrowsIcon from "@/icons/RightArrowsIcon";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-16 px-2 flex items-center justify-between md:my-48">
      <RightArrowsIcon className="hidden h-auto w-52 md:block" />
      <div className="flex flex-col items-center gap-8">
        <AvailableButton />
        <h1 className="flex max-w-4xl flex-col text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Hi I&apos;m a
          <span>
            <span className="mx-2 bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
              Full Stack
            </span>
            developer
          </span>
          <span>creating modern web apps.</span>
        </h1>

        <p className="max-w-3xl text-center text-lg">
          A full stack developer based in the India. I&apos;m passionate about
          building modern web applications using Next.js, React, and Tailwind
          CSS.
        </p>
      </div>
      <LeftArrowIcon className="hidden h-auto w-72 md:block" />
    </div>
  );
};

export default HeroSection;
