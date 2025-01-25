import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentCard = ({pageRedirect}) => {
  return (
    <>
      <div className="bg-white drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] flex flex-col gap-4 p-4 rounded-[4px]">
        {/* Image Section */}
        <div className="w-full h-[200px] overflow-hidden ">
          <Image
            src="/HeroBanners/contact_us-hero-banner.png"
            className="object-fill w-full h-full"
            alt="card"
            width={332}
            height={200}
          />
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg leading-6 text-[#2A2B2F] flex-shrink-0">
          Enter the Insight title here to give readers an idea
        </h2>

        {/* Metadata Section */}
        <div className="flex items-center gap-2 text-sm flex-wrap text-[#01331A]">
          <span className="font-semibold ">June 2024</span>
          <span className="font-semibold ">•</span>
          <span className="font-semibold ">Specific Category here</span>
        </div>

        {/* Description */}
        <p className="font-normal text-sm leading-5 line-clamp-3 text-gray-600 overflow-hidden text-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adil elit, sed do eiusmod tempor incididunt ut labore et ddsad. If the content
          is too long, it will wrap gracefully without disturbing the layout.
        </p>
        {pageRedirect && (
        <Link href={pageRedirect} className="text-[14px] leading-3  text-[#01331A] font-semibold [text-align-last:end]">Read more &gt;</Link>
        )}
      </div>
    </>
  )
}

export default ContentCard