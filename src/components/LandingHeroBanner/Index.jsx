import Image from 'next/image'
import React from 'react'
import NavigationMenuDemo from '@/components/navbar/index'
import { Button } from '../ui/button';
const LandingHeroBanner = ({ bannerData }) => {
  return (
    <>
      <NavigationMenuDemo />
      <div className="relative  w-full h-[60vh] md:h-[40vh] lg:h-[680px]">
        <Image
          className="w-full object-fill h-100 "
          src={`https://magnific-directus-2p92s.ondigitalocean.app/assets/${bannerData.background_img.filename_disk}`}
          alt="hero-banner"
          layout="fill"

        />
        <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
          <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
            <h1 className=" text-white text-[40px] font-medium md:font-bold lg:text-[76px] lg:leading-[60px] md:mb-12 ">
              {bannerData.title}
            </h1>
            <h1 className="bg-gradient-to-r from-[#77BE9A]  to-white inline-block text-transparent bg-clip-text text-[48px] font-medium md:font-bold md:text-[76px] md:leading-[60px]">{bannerData.subtitle}.</h1>
            <span className="text-[16px] mt-2 font-normal  md:text-[16px] lg:text-[16px] font-sans  xl:text-[16px] md:font-light leading-6 text-wrap text-center  lg:mt-8">
              {bannerData.description}
            </span>
            <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-6 my-6'>
              <Button className="px-8 py-[10px]  w-full mt-6 md:mt-0     bg-[#026534] text-white rounded-[3px] text-lg leading-[22px] font-semibold">
                Explore Opportunities
              </Button>
              <Button className="px-7 py-[5]  text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-[3px] hover:bg-white hover:text-black">
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
