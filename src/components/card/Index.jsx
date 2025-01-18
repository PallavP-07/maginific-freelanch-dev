import Image from 'next/image'
import React from 'react'

const ContentCard =()=> {
  return (
   <>
   <div className="bg-white shadow-md flex flex-col gap-4 p-4 rounded-md ">
  {/* Image Section */}
  <div className="w-full h-[200px] overflow-hidden rounded-md">
    <Image
      src="/HeroBanners/contact_us-hero-banner.png"
      className="object-cover w-full h-full"
      alt="card"
      width={332}
      height={200}
    />
  </div>

  {/* Title */}
  <h2 className="font-bold text-lg leading-6 text-gray-800">
    Enter the Insight title here to give readers an idea
  </h2>

  {/* Metadata Section */}
  <div className="flex items-center gap-2 text-sm">
    <span className="font-semibold text-green-800">June 2024</span>
    <span className="font-semibold text-green-800">•</span>
    <span className="font-semibold text-green-800">Specific Category here</span>
  </div>

  {/* Description */}
  <p className="font-normal text-sm leading-5 text-gray-600">
    Lorem ipsum dolor sit amet, consectetur adil elit, sed do eiusmod tempor incididunt ut labore et ddsad.
  </p>
</div>
   </>
  )
}

export default ContentCard