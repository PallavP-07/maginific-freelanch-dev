import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestInsightsCard = ({ data }) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Date(data?.publish_date).toLocaleDateString(
    "en-US",
    options
  );
  const secondParagraphMatch = data.details.match(/<p>(.*?)<\/p>/g);
  const secondParagraph =
    secondParagraphMatch && secondParagraphMatch[1]
      ? secondParagraphMatch[1].replace(/<[^>]*>/g, "")
      : "";

  return (
    <div className="py-12 border-b-2 border-[#CCE0D6] mb-4">
      <div className="relative py-20 my-8 w-full h-[60vh] md:h-[40vh] rounded-xl lg:h-[460px]">
        <Image
          className="w-full object-cover rounded-xl"
          src={
            `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}` ||
            `/placeholder.png`
          }
          alt="hero-banner"
          fill
        />
        <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-xl absolute inset-0 flex flex-col justify-between text-white">
          {/* Top Left Text */}
          <div className="absolute top-6 left-6 md:top-10 md:left-12">
            <span className="text-xs md:text-sm font-light leading-6 md:leading-10">
              {formattedDate}
            </span>
            <p className="text-[#F9F9F9] font-normal text-sm md:text-lg leading-4 md:leading-5 w-28 md:w-40 border-b border-white pb-1">
              {data?.tags[0]?.tags_id?.title}
            </p>
          </div>

          {/* Bottom Content */}
          <div className="absolute left-6 bottom-6 right-6 md:left-12 md:bottom-10 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
            <div>
              <p className="text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[44px]">
                {data?.title}
              </p>
              <p
                className="text-[#F9F9F9] text-[12px] line-clamp-3 md:text-[14px] font-light leading-5 mt-2 md:mt-0 w-full md:w-3/4"
                dangerouslySetInnerHTML={{ __html: secondParagraph }}
              />
            </div>
            <Link
              href={`/insights/${data.id}`}
              className="px-6 py-2 lg:w-[62%] text-[14px] md:text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-md hover:bg-white hover:text-black"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsightsCard;
