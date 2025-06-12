"use client"
import { splitTextByWord } from "@/utils/splitText";
import React, { useState } from "react";
import DualColorHeader from "../dualColorHeader/Index";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";


const HomeJobSearchBar = ({jobSearchSectionData}) => {
     const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const title = jobSearchSectionData?.job_search_section?.title || "";
  const [firstPart, secondPart] = splitTextByWord(title, "Today");

    const handleSearch = () => {
    const params = new URLSearchParams();
    if (jobTitle) params.append("title", jobTitle);
    if (location) params.append("location", location);

    router.push(`/browse-jobs?${params.toString()}`);
  };
  return (
    <div className="lg:container px-6 py-12 md:py-16 lg:py-20 lg:mx-auto w-full">
      <div className="pb-6">
        <DualColorHeader first={firstPart} second={`${secondPart}.`} />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 mt-8 w-full">
        <div className="w-full">
          <Label
            htmlFor="Job Title"
            className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
          >
            {jobSearchSectionData?.job_search_section?.form_items[0]?.title}
          </Label>
          <Input
            type="text"
            placeholder={
              jobSearchSectionData?.job_search_section?.form_items[0]
                ?.placeholder
            }
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
          />
        </div>
        <div className="w-full">
          <Label
            htmlFor="Location"
            className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
          >
            {jobSearchSectionData?.job_search_section?.form_items[1]?.title}
          </Label>
          <Input
            type="text"
            placeholder={
              jobSearchSectionData?.job_search_section?.form_items[1]?.title
            }
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
          />
        </div>
        <div className="flex flex-col md:gap-2 gap-5 md:w-1/3 w-full mt-8">
          <div>
            <Button onClick={handleSearch} className="px-8 py-5 bg-[#026534] text-white w-full md:w-40 rounded-[3px] text-[18px] leading-5 font-semibold">
              {jobSearchSectionData?.job_search_section?.submit_btn?.title}
            </Button>
          </div>
          <Link
            href="/browse-jobs"
            className="font-semibold text-[20px] leading-7 border-b-2 border-[#006633] text-center py-1 text-[#006633] mx-auto"
          >
            {
              jobSearchSectionData?.job_search_section?.call_to_actions[0]
                ?.title
            }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeJobSearchBar;
