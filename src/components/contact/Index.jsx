import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <div className="relative h-[30vh]  md:h-[315px] lg:h-[300px] bg-black">
      <div className="absolute inset-0 flex items-center justify-end">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>
        <Image 
          src="/contact-banner.png" 
          width={300} 
          height={500} 
          className="object-cotaien md:w-[400px]   lg:w-[600px]  h-full hidden md:block" 
          alt="Contact Us Banner" 
          loading="lazy"  // lazy loading for better performance
        />
      </div>
      {/* The gradient overlay on top */}
      <div className="absolute flex justify-start px-10 md:px-20 lg:ml-[110px] items-center inset-0 ">
        <div className="border-l-4 border-white pl-5  flex flex-col gap-2 md:gap-0 ">
          <span className="text-white font-light text-lg leading-5 md:text-base ">Have any Question?</span>
          <h2 className="text-white  text-3xl lg:text-[44px] leading-[54px] md:mb-6 tracking-[2px]">
            Contact Us Today
          </h2>
          <button className="bg-[#026534] w-40 rounded-sm text-xl px-5 py-3 leading-6 font-semibold tracking-widest text-white hover:bg-green-800 transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
