import Image from 'next/image'
import React from 'react'
import NavigationMenuDemo from '@/components/navbar/index'
import { Button } from '../ui/button';
const LandingHeroBanner = (props) => {
  return (
    <>
      <NavigationMenuDemo />
      <div className="relative  w-full h-[60vh] md:h-[40vh] lg:h-[680px]">
        <Image
          className="w-full object-fill h-100 "
          src='/HeroBanners/Home_page-hero-banner.png'
          alt="hero-banner"
          layout="fill"
          
        />
        <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
          <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
            <h1 className=" text-white font-bold text-[76px] leading-[60px] mb-12 ">
            Tomorrow’s Talent, 
            </h1>
            <h1 className="bg-gradient-to-r from-[#77BE9A]  to-white inline-block text-transparent bg-clip-text font-bold text-[76px] leading-[60px]">Today.</h1>
            <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-sans  xl:text-[16px] font-light leading-6 text-wrap text-center mt-4 md:mt-8">
            Driving impact through careers, innovation through industries and growth across continents. And it all starts with our people. 
            </span>
            <div className='flex justify-between gap-6 my-12'>
                <Button className="px-8 py-2    w-full mt-6 md:mt-0     bg-[#026534] text-white rounded-[3px] text-[16px] leading-5 font-semibold">
                Explore Opportunities
                                        </Button>
                <Button className="px-7 py-[5]  text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-md hover:bg-white hover:text-black">
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
