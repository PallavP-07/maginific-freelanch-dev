import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "../card/reviewCard/Index";

export function ResponsiveCarousel() {
    const reviews = Array.from({ length: 9 }); // Example: Replace with actual data or API response

    return (
        <div className="bg-[#2A2B2F] text-center p-20 ">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] text-white font-bold leading-tight py-12">
                What Our Clients are Saying
            </h2>
            <Carousel className="  mx-auto">
                {/* Carousel Content */}
                <CarouselContent className=" ">
                    {reviews.map((_, index) => (
                        <CarouselItem
                            key={index} className="   lg:basis-1/3"
                        >
                            <div className="">
                                <ReviewCard />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ResponsiveCarousel;
