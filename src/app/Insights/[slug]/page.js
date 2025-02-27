import ContentCard from "@/components/card/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";

import { Badge } from "@/components/ui/badge";
import { fetchCollectionDataWithID } from "@/lib/directus";
import Image from "next/image";
import React from "react";

const SubPage = async ({ params }) => {
  const { slug } = await params;
  let InsightsData = null;
  if (slug) {
    const response = await fetchCollectionDataWithID("insights", slug, {
      fields: ["*", "img.*", "tags.tags_id.*", "tags.*"],
    });
    InsightsData = response.response;
  };
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Date(InsightsData?.publish_date).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[400px] lg:h-[480px]">
        <div className="py-12 px-6 md:py-0 md:px-0 md:w-1/2 h-full flex justify-center items-center">
          <div className="md:mt-20 lg:mt-36 flex justify-center flex-col w-full md:w-2/3 lg:ml-28">
            <span className="text-sm font-normal text-[#737475]">
              {formattedDate}
            </span>
            <h1 className="text-3xl lg:text-[46px] mb-5 font-semibold leading-[40px] lg:leading-[60px] text-[#373A40] mt-2">
              {InsightsData.title}
            </h1>
            <div className="flex flex-wrap gap-4 justify-start my-4">
              {Array.isArray(InsightsData?.tags) &&
              InsightsData.tags.length > 0 ? (
              
                  <Badge
                    // Assuming tagItem has a unique id
                    variant="outline"
                    className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block"
                  >
                    {InsightsData.tags[0]?.tags_id?.title}{" "}
                    {/* Assuming tagItem has a title property */}
                  </Badge>
               
              ) : (
                <span className="text-[#737475]">No tags available</span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src={
              `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${InsightsData?.img?.filename_disk}` ||
              `/placeholder.png`
            }
            className="w-full h-full object-cover"
            alt="Insights"
            fill
          />
        </div>
      </div>
      <div className="lg:container  mx-6 mb-20  lg:mx-auto">
        <div className=" text-[#373A40]   py-20 border-b-2 border-[#CCE0D6] mb-10">
          <div className="mx-auto space-y-10">
            <div
              dangerouslySetInnerHTML={{ __html: InsightsData?.details }}
            ></div>
          </div>
        </div>
        <div className="lg:mb-28 lg:mt-14">
          <div className="text-center  md:text-left ">
            <DualColorHeader
              first={"Related "}
              second={"Content"}
              style={"text-5xl"}
            />
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-3  md:mx-0 my-8 md:my-8 gap-8 md:gap-5 ">
            {/* <ContentCard />
            <ContentCard />
            <ContentCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubPage;
