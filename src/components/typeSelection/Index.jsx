import Link from "next/link";
import React from "react";

const TypeSelection = ({ title, description, slug }) => {
  return (
    <>
      <Link href={slug}>
        <div className="group hover:bg-[#01331A] transition-colors duration-300 my-2">
          <div className="flex gap-6 md:gap-4 items-center justify-between py-6 sm:space-y-0 lg:container lg:mx-auto">
            <div className="max-w-5xl group-hover:text-white">
              <h2 className="leading-6 text-xl font-bold text-[#01331A] group-hover:text-white border-b-2 border-[#CCE0D6] pb-3 mb-4 sm:mb-4 w-full sm:w-96">
                {title}
              </h2>
              <p className="text-[16px] font-normal md:w-[50rem] leading-5 text-[#737475] group-hover:text-white">
                {description}
              </p>
            </div>
            <div className="self-start sm:self-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#01331A] group-hover:text-white transition-colors duration-300 mt-4 lg:mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TypeSelection;
