import React from "react";
import JobSearchBox from "@/components/JobSearchBox/Index";
import { Button } from "@/components/ui/button";
import ContactUs from "@/components/contact/Index";
import { fetchCollectionDataWithID } from "@/lib/directus";

const SubPage = async ({ params }) => {
  const { slug } = await params;
  let jobData = null;
  if (slug) {
    const response = await fetchCollectionDataWithID("jobs", slug, {
      fields: ["*", "location.*", "industry.*"],
    });
    jobData = response.response;
  }
  return (
    <>
      <div className="lg:container w-full overflow-hidden    lg:mx-auto">
        <div className=" py-14 mt-20 border-b-2 mx-4 border-[#006633]">
          <JobSearchBox />
        </div>
        <div className="mx-4 my-20">
          <h1 className="font-bold text-[32px] leading-[44px] text-[#006633]">
            {jobData?.title}
          </h1>

          <div className="flex flex-wrap  md:gap-10 lg:gap-0 lg:justify-between lg:w-full  flex-col md:flex-row items-center mt-8   ">
            <div className="w-full md:w-auto grid grid-cols-3 md:grid-cols-5  gap-5">
              <div>
                <p className="text-[#737475] text-lg font-normal leading-6 mb-2">
                  Date Posted
                </p>
                <p className="text-[#373A40] font-semibold leading-6">
                  {new Date(`${jobData?.date_posted}`).toLocaleDateString(
                    "en-CA"
                  )}
                </p>
              </div>
              <div>
                <p className="text-[#737475] text-lg font-normal leading-6 mb-2">
                  Job Type
                </p>
                <p className="text-[#373A40] font-semibold leading-6">
                  {jobData?.job_nature}
                </p>
              </div>
              <div>
                <p className="text-[#737475] text-lg font-normal leading-6 mb-2">
                  Industry
                </p>
                <p className="text-[#373A40] font-semibold leading-6">
                  {jobData?.industry?.title}
                </p>
              </div>
              <div>
                <p className="text-[#737475] text-lg font-normal leading-6 mb-2">
                  Location
                </p>
                <p className="text-[#373A40] font-semibold leading-6">
                  {jobData?.location?.title}
                </p>
              </div>
              <div>
                <p className="text-[#737475] text-lg font-normal mb-2 leading-6">
                  Experience
                </p>
                <p className="text-[#373A40] font-semibold leading-6">
                  {jobData?.min_experience} - {jobData?.min_experience} Years
                </p>
              </div>
            </div>
            <Button className="px-8 py-5  md:w-40  w-full mt-6 md:mt-0     bg-[#026534] text-white rounded-[3px] text-[18px] leading-5 font-semibold">
              Apply
            </Button>
          </div>
          <div>
            <div
              className="text-gray-800 mt-10 md:mt-20"
              dangerouslySetInnerHTML={{ __html: jobData?.details }}
            ></div>
          </div>
          <Button className="px-8 py-2 w-full md:w-40   my-8  bg-[#026534] text-white rounded-[3px] text-[16px] leading-5 font-semibold">
            Apply
          </Button>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default SubPage;
