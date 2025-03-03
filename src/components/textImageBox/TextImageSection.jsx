
import Image from "next/image";
import React from "react";

const TextImageBox = ({ title, description, imageSrc, orientation }) => {
  const isTextLeft = orientation === "text-left-image-right";

  return (
    <div className="w-full grid grid-cols-2 items-center bg-[#F9F9F9]">
      {/* Text Section */}
      <div
        className={`px-6 md:px-10 lg:px-20 flex-1 ${
          isTextLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <h1 className="text-[#006633] font-medium text-2xl md:text-xl lg:text-3xl mb-4 lg:mb-7">
          {title}
        </h1>
        <p
          className="text-[#737475] text-base md:text-sm lg:text-lg leading-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Image Section */}
      <div
        className={`relative w-full h-[250px] md:h-[360px] lg:h-[480px] flex-1 ${
          isTextLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={imageSrc}
          alt={title || "Image"}
          fill
          className="object-cover w-full h-full"
          priority={imageSrc.includes("hero") || imageSrc.includes("banner")} // Optimize images above fold
        />
      </div>
    </div>
  );
};

export default TextImageBox;
