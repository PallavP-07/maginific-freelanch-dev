import ContactUsCompData from '@/services/ContactUsComp';
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const ContactUs = async()=> {
  const {AllContent} =await ContactUsCompData();
  return (
    <div className="relative h-[30vh]  md:h-[315px] lg:h-[300px] bg-black">
      <div className="absolute inset-0 flex items-center justify-end">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>
        <Image 
          src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${AllContent?.bg_img?.filename_disk}`}
          width={300} 
          height={500} 
          className="object-cotaien md:w-[430px] lg:w-[600px] h-full hidden md:block" 
          alt="Contact Us Banner" 
          loading="lazy"  
        />
      </div>
      {/* The gradient overlay on top */}
      <div className="absolute flex lg:container lg:mx-auto mx-4 justify-start px-10   items-center inset-0 ">
        <div className="border-l-4  mx-1 border-white pl-5  flex flex-col gap-2 md:gap-0 ">
          <span className="text-white font-light text-lg leading-5 md:text-base ">{AllContent?.sub_title}</span>
          <h2 className="text-white  text-3xl lg:text-[44px] leading-[54px] md:mb-6 tracking-[2px]">
         {AllContent?.title}
          </h2>
          <Link href={AllContent?.call_to_action?.href}>
          <Button className="bg-[#026534] w-40 rounded-sm text-xl px-8 py-4 leading-6 font-semibold  text-white hover:bg-green-800 transition-all">
            {AllContent?.call_to_action?.title}
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
