import Image from 'next/image'
import React from 'react'

export default function ReviewCard() {
  return (
    <>
    <div className='bg-white border-t-[15px] my-6 mx-8 w-full px-9 py-10 border-[#cce0d6] rounded-md  shadow-md'>
        <p className='text-wrap font-medium text-lg leading-8 text-[#373A40] mb-10'>
        “ A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. “
        </p>
       <div className='flex gap-6 items-center'>
        <Image src='/assets/review-persion.png' width={80} height={80} alt='review-log' />
          <div className='flex flex-col '>
            <p className='text-[#006633] mb-2 font-bold text-lg leading-5'>
                John carter
            </p>
            <span className='text-lg leading-5 text-[#373A40] font-normal'>Head of Marketing</span>
          </div>
         
       </div>
    </div>
    <div>

    </div>
    </>
  )
}
