"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../card/reviewCard/Index";
import { LeftArrowWhite, RightArrowWhite } from "@/assets/Icons";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-30px] z-10 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
    onClick={onClick}
  >
    <LeftArrowWhite />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] z-10 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
    onClick={onClick}
  >
    <RightArrowWhite />
  </div>
);

export function ResponsiveCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#2A2B2F] text-center w-full py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] text-white font-bold leading-tight mb-8">
          What Our Clients are Saying
        </h2>
        <div className="relative">
          <Slider {...settings}>
            <div className="p-4">
              <ReviewCard />
            </div>
            <div className="p-4">
              <ReviewCard />
            </div>
            <div className="p-4">
              <ReviewCard />
            </div>
            <div className="p-4">
              <ReviewCard />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
