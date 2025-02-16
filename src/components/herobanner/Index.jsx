import Image from 'next/image'
import React from 'react'

const HeroBanner = (props) => {
  return (
    <div className="relative  w-full h-[60vh] md:h-[40vh] lg:h-[560px]">
      <Image
        className="w-full h-[60vh] md:h-[40vh] lg:h-[560px] object-fill"
        src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${props.heroBanner}`}
        alt="hero-banner"
       width={100}
       height={100}
      />
      <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
        <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
          <h1 className="border-b-2 font-normal font-sans tracking-[5px] border-white w-full md:pb-7 text-[52px] md:text-[76px] md:leading-[52px]  ">
            {props.header}
          </h1>
          <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-sans xl:text-[16px] font-light leading-6 text-wrap text-center mt-4 md:mt-7">
            {props.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
