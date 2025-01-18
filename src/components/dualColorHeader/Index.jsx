import React from 'react'

const DualColorHeader =({first,second})=> {
  return (
    <>
     <p className="text-2xl  md:text-[44px] leading-[80px]  font-semibold  text-[#373A40]  mb-1 w-full sm:w-full">
                  {first} <span className=" font-bold text-2xl md:text-[44px] leading-[80px] text-[#006633]">{second}</span>
                </p>
    </>
  )
}

export default DualColorHeader