import AvailableButton from "@/components/button/AvailableButton";
import { Button } from "@/components/ui/button";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import RightArrowsIcon from "@/icons/RightArrowsIcon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-16 flex items-center justify-between px-2 md:my-48">
      <RightArrowsIcon className="hidden h-auto w-52 md:block" />
      <div className="flex flex-col items-center gap-8">
        <AvailableButton />
        <h1 className="flex max-w-4xl flex-col text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Hi I&apos;m a
          <span>
            <span className="mx-2 bg-linear-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
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
        <Button
          asChild
          variant="shadow"
          size="lg"
          className="text-2xl font-medium flex gap-2 items-center"
        >
          <Link href={"/projects"}>
            View All Projects <ArrowRight />
          </Link>
        </Button>
      </div>
      <LeftArrowIcon className="hidden h-auto w-72 md:block" />
    </div>
  );
};

export default HeroSection;
