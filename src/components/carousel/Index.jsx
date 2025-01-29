"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../card/reviewCard/Index";
import { LeftArrowWhite, RightArrowWhite } from "@/assets/Icons";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-30px] md:left-[-40px] z-10 w-10 h-10 flex items-center justify-center   rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
    onClick={onClick}
  >
    <LeftArrowWhite />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] md:right-[-40px] z-10 w-10 h-10 flex items-center justify-center  rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
    onClick={onClick}
  >
    <RightArrowWhite />
  </div>
);

const ResponsiveCarousel = ({ Data }) => {

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#2A2B2F] text-center w-full py-40">
      <div className=" relative">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] text-white md:font-bold font-medium leading-5 mb-14">
          {Data?.title}
        </h2>
        <div className="relative mx-6 md:mx-20 ">
          <Slider {...settings}>
            {Data?.testimonials?.map((item, i) => (
              <div key={i} className=" px-4 md:px-16 lg:px-2">
                <ReviewCard testimonial={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
