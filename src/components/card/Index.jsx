import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentCard = ({pageRedirect,data}) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Date(data?.publish_date).toLocaleDateString('en-US', options);
  const secondParagraphMatch = data.details.match(/<p>(.*?)<\/p>/g);
  const secondParagraph = secondParagraphMatch && secondParagraphMatch[1] ? secondParagraphMatch[1].replace(/<[^>]*>/g, '') : '';
  return (
    <>
      <div className="bg-white drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] flex flex-col gap-4 p-4 rounded-[4px]">
        {/* Image Section */}
        <div className="w-full h-[200px] overflow-hidden ">
          <Image
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}` || `/placeholder.png`}
            className="w-full object-cover"
            alt="Insights"
            fill
          />
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg leading-6 text-[#2A2B2F] flex-shrink-0">
        {data?.title}
        </h2>
        {/* Metadata Section */}
        <div className="flex items-center gap-2 text-sm flex-wrap text-[#01331A]">
          <span className="font-semibold ">{formattedDate}</span>
          <span className="font-semibold ">•</span>
          <span className="font-semibold ">  {data?.tags[0]?.tags_id?.title}</span>
        </div>

        {/* Description */}
        <p className="font-normal text-sm leading-5 line-clamp-2 text-gray-600 overflow-hidden text-ellipsis"
          dangerouslySetInnerHTML={{ __html: secondParagraph }}
        />
        {pageRedirect && (
        <Link href={pageRedirect} className="text-[14px] leading-3  text-[#01331A] font-semibold [text-align-last:end]">Read more &gt;</Link>
        )}
      </div>
    </>
  )
}

export default ContentCard