"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import JobPostingCard from "@/components/jobPostingCard/Index"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const PaginatedJobList = ({ jobDetails, currentPage, pageSize, totalPages, searchParams }) => {
  const router = useRouter()
  const pathname = usePathname()
  const urlSearchParams = useSearchParams()

  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  // Get current page's job listings
  const currentJobs = jobDetails.slice(startIndex, endIndex)

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(urlSearchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const handlePageChange = (pageNumber) => {
    router.push(createPageURL(pageNumber))
  }

  // Show a message when no jobs match the filters
  if (jobDetails.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <div className="py-10 text-center">
          <h3 className="text-xl font-medium text-gray-700">No jobs match your search criteria</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Job Listings */}
      <div className="flex-col flex gap-6">
        {currentJobs.map((jobDetails) => (
          <JobPostingCard
            id={jobDetails.id}
            key={jobDetails.id || jobDetails.sort}
            title={jobDetails.title}
            department={jobDetails.industry?.title}
            description={jobDetails.details}
            team={jobDetails.company_employees_number}
            postTime={jobDetails.date_posted}
            jobType={jobDetails.job_type}
            location={jobDetails.location?.title}
            minExp={jobDetails.min_experience}
            maxExp={jobDetails.max_experience}
          />
        ))}
      </div>

      {/* Only show pagination if there are multiple pages */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => handlePageChange(pageNumber)}
                    isActive={pageNumber === currentPage}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            })}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
