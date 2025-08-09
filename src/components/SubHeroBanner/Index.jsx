import Image from "next/image";
import React, { useMemo } from "react";

const SubHeroBanner = ({ heroBanner, header }) => {
  const length = header.length;

  const { fontSize, leading } = useMemo(() => {
    if (length <= 20) {
      return {
        fontSize: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        leading: "leading-tight",
      };
    } else if (length <= 40) {
      return {
        fontSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        leading: "leading-tight",
      };
    } else if (length <= 80) {
      return {
        fontSize: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        leading: "leading-snug",
      };
    }
    return {
      fontSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
      leading: "leading-snug",
    };
  }, [length]);

  return (
    <div className="relative w-full h-[280px] md:h-[360px] lg:h-[480px]">
      <Image
        className="object-fill"
        src={heroBanner}
        alt="Hero banner"
        fill
        sizes="100vw"
        priority
      />
      <div className="bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1
            className={`${fontSize} ${leading} font-normal font-sans border-b-2 border-white pb-2 sm:pb-3 md:pb-4 lg:pb-6 mx-auto max-w-full break-words`}
          >
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SubHeroBanner;
