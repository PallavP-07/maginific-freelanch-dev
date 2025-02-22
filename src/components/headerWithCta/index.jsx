import Link from "next/link";
import React from "react";

const HeaderWithCta = ({heading,cta}) => {
  return (
    <div className="flex justify-between items-center md:border-b-4 border-[#CCE0D6] pb-3 mb-7">
      <h2 className="text-xl leading-6 font-bold text-[#01331A]">{heading}</h2>
      <Link
        href={cta.href}
        className="text-[16px] leading-4  text-[#01331A] font-semibold "
      >
        {cta.title}
      </Link>
    </div>
  );
};
export default HeaderWithCta;

