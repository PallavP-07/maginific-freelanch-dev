import Image from 'next/image'
import React from 'react'

export default function ReviewCard({ testimonial }) {

  return (<>
    <div className='bg-white border-t-[15px]  w-full px-9 py-10 border-[#cce0d6] rounded-md  shadow-md'>
      <p className='text-wrap text-left font-medium text-lg leading-8 text-[#373A40] mb-10'>
        {testimonial?.message?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
      </p>
      <div className='flex gap-6 items-center text-left'>
        <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${testimonial?.client_img?.filename_disk}`} width={80} height={80} alt='review-log' className='rounded-full' />
        <div className='flex flex-col '>
          <p className='text-[#006633] mb-2 font-bold text-lg leading-5'>
            {testimonial?.client_name}
          </p>
          <span className='text-lg leading-5 text-[#373A40] font-normal'>{testimonial?.client_role}</span>
        </div>
      </div>
    </div>
  </>);
}
