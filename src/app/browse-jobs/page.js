import ContactUs from "@/components/contact/Index";
import HeroBanner from "@/components/herobanner/Index";
import React from "react";
import JobPostingCard from "@/components/jobPostingCard/Index";
import JobSearchBox from "@/components/JobSearchBox/Index";
import JobListData from "@/services/jobs_listData";
import { RenderPagination } from "@/components/CustomPagination/Index";
import Loader from "@/components/loader/Index";
import JobDetailsData from "@/services/jobDetailsData";

const BrowseJobs = async () => {
  const { bannerData, AllContent } = await JobListData();
  const { JobDetails } = await JobDetailsData();

  if (!AllContent || !bannerData) {
    return (
      <div>
        <Loader />
      </div>
    ); 
  }
  return (
    <>
      <HeroBanner
        heroBanner={bannerData?.banner?.background_img?.filename_disk}
        header={bannerData?.banner?.title}
        description={bannerData?.banner?.description}
      />

      {/* Wrapper for the JobSearchBar */}
      <div className="relative lg:container w-full flex justify-center items-center lg:mx-auto">
        {/* Positioning the search bar in the bottom half of the HeroBanner */}
        <div className="absolute w-[400px] -bottom-44 md:w-[768px] lg:w-[985px]  md:-bottom-48 lg:-bottom-32">
          <JobSearchBox />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="lg:container mx-4 lg:mx-auto mt-[200px] md:mt-56 lg:mt-40">
        <h1 className=" lg:mx-0 text-[#006633]  font-bold text-xl leading-[66px] my-5">
          {AllContent?.sub_heading}
        </h1>

        <div className="flex-col flex  gap-6">
          {JobDetails?.map((JobDetails) => (
            <JobPostingCard
              id={JobDetails.id}
              key={JobDetails.sort}
              title={JobDetails.title}
              department={JobDetails.industry?.title}
              description={JobDetails.details}
              team={JobDetails.company_employees_number}
              postTime={JobDetails.date_posted}
              jobType={JobDetails.job_type}
              location={JobDetails.location?.title}
              minExp={JobDetails.min_experience}
              maxExp={JobDetails.max_experience}
            />
          ))}
        </div>
        <RenderPagination />
      </div>
      <ContactUs />
    </>
  );
};

export default BrowseJobs;
