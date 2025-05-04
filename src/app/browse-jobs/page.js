import ContactUs from "@/components/contact/Index"
import HeroBanner from "@/components/herobanner/Index"
import JobSearchBox from "@/components/JobSearchBox/Index"
import JobListData from "@/services/jobs_listData"
import { PaginatedJobList } from "@/components/CustomPagination/Index"
import Loader from "@/components/loader/Index"
import JobDetailsData from "@/services/jobDetailsData"
import { filterJobs } from "@/utils/job-filter"

const BrowseJobs = async ({ searchParams }) => {
  const page = Number(searchParams?.page) || 1
  const pageSize = 3 // Show 3 jobs per page

  const { bannerData, AllContent } = await JobListData()
  const { JobDetails } = await JobDetailsData()

  if (!AllContent || !bannerData) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  // Filter jobs based on search parameters
  const filteredJobs = filterJobs(JobDetails, searchParams)

  // Calculate total pages based on filtered jobs
  const totalPages = Math.ceil(filteredJobs.length / pageSize)

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
        <div className="absolute w-[400px] -bottom-44 md:w-[768px] lg:w-[945px] md:-bottom-48 lg:-bottom-32">
          <JobSearchBox />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="lg:container mx-4 lg:mx-auto mt-[200px] md:mt-56 lg:mt-40">
        <h1 className="lg:mx-0 text-[#006633] font-bold text-xl leading-[66px] my-5">
          {AllContent?.sub_heading}
          {filteredJobs.length < JobDetails.length && (
            <span className="text-base font-normal text-gray-600 ml-2">({filteredJobs.length} jobs found)</span>
          )}
        </h1>

        <PaginatedJobList
          jobDetails={filteredJobs}
          currentPage={page}
          pageSize={pageSize}
          totalPages={totalPages}
          searchParams={searchParams}
        />
      </div>
      <ContactUs />
    </>
  )
}

export default BrowseJobs
