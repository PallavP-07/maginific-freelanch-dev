import Image from 'next/image'
import React from 'react'

const ContentCard =()=> {
  return (
   <>
   <div className='bg-white shadow-md flex flex-col gap-5 p-3 rounded-sm w-[340px] h-100'>
    <div className=''>
      <Image src='/HeroBanners/contact_us-hero-banner.png' className='object-contanin w-full h-[280px]' alt='card' width={300} height={300}/>
    </div>
     <h2 className='font-bold text-lg leading-5 text-[#2A2B2F]'>Enter the Insight title here to give readers an idea</h2>
     <div className='flex items-center gap-3'>
      <span className='font-semibold text-sm leading-4 text-[#01331A]'>June 2024</span>
      <span className='font-semibold text-sm leading-4 text-[#01331A]'>Specific Category here</span>
     </div>
      <p className='font-normal text-sm leading-4 text-[#737475]'>
      Lorem ipsum dolor sit amet, consectetur adil elit, sed do eiusmod tempor incididunt ut labore et ddsad.  
      </p>
   </div>
   </>
  )
}

export default ContentCard