"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface ProjectViewCarouselProps {
  subImgs: string[];
}
const ProjectViewCarousel = ({ subImgs }: ProjectViewCarouselProps) => {
  return (
    <div className="px-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="!max-w-full"
      >
        <CarouselContent className="max-w-full">
          {(subImgs || []).map((img, index) => (
            <CarouselItem key={index}>
              <Image
                src={img}
                alt={img}
                width={700}
                height={500}
                className="rounded-md object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectViewCarousel;
