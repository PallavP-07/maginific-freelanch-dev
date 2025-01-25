import Image from 'next/image'
import React from 'react'

const SubHeroBanner = (props) => {
  return (
    <>
      <div className="relative  w-full h-[280px] md:h-[360px]  lg:h-[410px]">
        <Image
          className="w-full h-full object-fill"
          src={props.heroBanner}
          alt="hero-banner"
          layout="fill"
        />
        <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
          <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
            <h1 className="border-b-2 font-normal font-sans md:tracking-[5px] border-white w-full md:pb-7 text-6xl md:text-[68px] lg:text-[76px] md:leading-[58px]  ">
              {props.header}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeroBanner;
