import Image from 'next/image'
import React from 'react'
import NavigationMenuDemo from '@/components/navbar/index'
import { Button } from '../ui/button';
const LandingHeroBanner = ({ bannerData }) => {
  return (
    <>
      <NavigationMenuDemo />
      <div className="relative  w-full h-[780px] md:h-[680px] lg:h-[780px]">
        <Image
          className="w-full object-fill h-100 "
          src={`https://magnific-directus-2p92s.ondigitalocean.app/assets/${bannerData.background_img.filename_disk}`}
          alt="hero-banner"
          layout="fill"

        />
        <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
          <div className=" lg:container lg:mx-auto text-center flex flex-col justify-center items-center">
            <h1 className=" text-white text-[40px] font-medium  md:text-[56px] lg:text-[76px] lg:leading-[60px] lg:mb-4">
              {bannerData.title}
            </h1>
            <h1 className="bg-gradient-to-r from-[#77BE9A]  to-white inline-block text-transparent bg-clip-text text-[48px] md:text-[60px] font-bold lg:text-[76px] ">{bannerData.subtitle}.</h1>
            <span className="text-lg font-normal break-words leading-9">
            Driving impact through careers, innovation through industries and growth across continents. And it all starts with our people. 
            </span>
            <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-6 mt-6 md:mt-16'>
              <Button className="px-8 py-5  w-full mt-6 md:mt-0   hover:bg-[#0e3a24]  bg-[#026534] text-white rounded-[3px] text-lg leading-[22px] font-semibold">
                Explore Opportunities
              </Button>
              <Button className="px-7 py-[17px]  text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-[3px] hover:bg-white hover:text-black">
                Advance Your Organization
              </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default LandingHeroBanner;
