"use client"

import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const JobSearchBox = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize form state from URL parameters
  const [filters, setFilters] = useState({
    title: searchParams.get("title") || "",
    location: searchParams.get("location") || "",
    datePosted: searchParams.get("datePosted") || "",
    experience: searchParams.get("experience") || "",
    jobType: searchParams.get("jobType") || "",
    industry: searchParams.get("industry") || "",
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault()

    // Create new URLSearchParams object
    const params = new URLSearchParams()

    // Add non-empty filter values to URL
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      }
    })

    // Reset to page 1 when searching
    params.set("page", "1")

    // Navigate to the new URL with filters
    router.push(`${pathname}?${params.toString()}`)
  }

  // Handle reset filters
  const handleReset = () => {
    setFilters({
      title: "",
      location: "",
      datePosted: "",
      experience: "",
      jobType: "",
      industry: "",
    })

    // Navigate to the base URL without filters
    router.push(pathname)
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex flex-col w-full justify-between items-center gap-5 p-6 md:flex-row bg-white md:px-10 md:pt-5 md:pb-10 rounded-md drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]"
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="w-full">
              <Label htmlFor="title" className="font-semibold text-lg leading-10 text-[#2A2B2F]">
                Job Title
              </Label>
              <Input
                type="text"
                name="title"
                value={filters.title}
                onChange={handleInputChange}
                placeholder="Enter a Job Title or a Keyword"
                className="h-10 placeholder:text-[#D0D0D0]"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="location" className="font-semibold text-lg leading-10 text-[#2A2B2F]">
                Location
              </Label>
              <Input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                placeholder="Enter your Location"
                className="h-10 placeholder:text-[#D0D0D0]"
              />
            </div>
          </div>

          <div className="hidden md:flex md:flex-row justify-between items-end gap-4">
            <div className="w-full">
              <Label htmlFor="datePosted" className="font-semibold text-lg leading-10 text-[#2A2B2F]">
                Filter
              </Label>
              <Select
                value={filters.datePosted}
                onValueChange={(value) => handleSelectChange("datePosted", value)}
                className="z-50 bg-white h-10"
              >
                <SelectTrigger className={filters.datePosted ? "text-black" : "text-[#D0D0D0]"}>
                  <SelectValue placeholder="Date Posted" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="last3days">Last 3 Days</SelectItem>
                    <SelectItem value="lastweek">Last Week</SelectItem>
                    <SelectItem value="lastmonth">Last Month</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select
                value={filters.experience}
                onValueChange={(value) => handleSelectChange("experience", value)}
                className="z-50 bg-white h-10"
              >
                <SelectTrigger className={filters.experience ? "text-black" : "text-[#D0D0D0]"}>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectItem value="0-1">0-1 Years</SelectItem>
                    <SelectItem value="1-3">1-3 Years</SelectItem>
                    <SelectItem value="3-5">3-5 Years</SelectItem>
                    <SelectItem value="5-10">5-10 Years</SelectItem>
                    <SelectItem value="10+">10+ Years</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select
                value={filters.jobType}
                onValueChange={(value) => handleSelectChange("jobType", value)}
                className="z-50 bg-white h-10"
              >
                <SelectTrigger className={filters.jobType ? "text-black" : "text-[#D0D0D0]"}>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectItem value="fulltime">Full Time</SelectItem>
                    <SelectItem value="parttime">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select
                value={filters.industry}
                onValueChange={(value) => handleSelectChange("industry", value)}
                className="z-50 bg-white h-10"
              >
                <SelectTrigger className={filters.industry ? "text-black" : "text-[#D0D0D0]"}>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col md:space-y-8 w-full md:w-auto md:gap-6 md:h-full">
          <Button
            type="submit"
            className="px-8 py-5 md:mt-10 w-full md:w-full bg-[#026534] text-white rounded-[3px] text-[18px] leading-5 font-semibold"
          >
            Search Job
          </Button>
          <div className="hidden md:block">
            <Button
              type="button"
              onClick={handleReset}
              className="px-8 py-4 bg-transparent text-[#01331A] border-[#01331A] border rounded-[3px] text-[16px] leading-5 font-normal"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default JobSearchBox
