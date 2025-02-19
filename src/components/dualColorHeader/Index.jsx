import React from 'react'
const DualColorHeader = ({ first, second }) => {
  return (
    <p className="text-[23px] md:text-[42px] lg:text-[48px] font-bold text-[#373A40]">
      {first} <span className="font-bold text-[#006633]">{second}</span>
    </p>
  );
};

export default DualColorHeader