"use client"

import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import JobPostingCard from "@/components/jobPostingCard/Index"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


const jobData = [
    {
        id: 1,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
    {
        id: 2,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
    {
        id: 3,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
    {
        id: 4,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
    {
        id: 5,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
    {
        id: 6,
        title: "Associate Director - Emerging Businesse",
        dipartment: 'Healthcare',
        discription: 'We are seeking a mission-driven Project Manager to join our Payer Operations team in our New York office.',
        postTime: '2hr ago',
        location: "Onsite",
        team: "100+ Employees",
        expe: '5-7 Years Exp.'
    },
]



export const RenderPagination = () => {
    const [activePage, setActivePage] = useState(1); // Track the active page

    const totalPages = 3;

    const handleNextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePreviousPage} />
                    </PaginationItem>

                    {/* Render Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink href="#" isActive={index + 1 === activePage}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={handleNextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}

export const JobSearchBar = () => {
    return (
        <>
            <div className='flex flex-col  justify-between items-center gap-5  md:flex-row bg-[#F9F9F9]  rounded-md px-8 pb-8 pt-4 drop-shadow-lg max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row justify-between w-full gap-4'>
                        <div className='w-full'>
                            <Label htmlFor="Job Title" className="font-semibold text-lg leading-10 text-gray-800">Job Title</Label>
                            <Input type="text" placeholder="Enter Job Title" />
                        </div>

                        <div className='w-full'>
                            <Label htmlFor="Location" className="font-semibold text-lg leading-10 text-gray-800">Location</Label>
                            <Input type="text" placeholder="Enter Job Title" />
                        </div>

                    </div>
                    <div className='flex justify-between items-end gap-4'>
                        <div className='w-full'>
                            <Label htmlFor="Filter" className="font-semibold text-lg leading-10 text-gray-800">Filter</Label>
                            <Select className='z-50 bg-white'>
                                <SelectTrigger className="w-full  lg:w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='w-full'>
                            <Select>
                                <SelectTrigger className="w-full  lg:w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='w-full'>
                            <Select>
                                <SelectTrigger className="w-full  lg:w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='w-full'>
                            <Select>
                                <SelectTrigger className="w-full  lg:w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                    </div>
                </div>
                <div className='flex md:flex-col space-y-8  gap-6  h-full'>
                   

                        <Button className="px-8 py-2 mt-10  w-2/3 md:w-full  bg-[#026534] text-white rounded-[3px] text-[16px] leading-5 font-semibold">
                            Search Job
                        </Button>
                   

                        <Button className="  w-1/3 md:w-full  py-2 bg-transparent  text-[#01331A] border-[#01331A] border rounded-[3px] text-[18px] leading-5 font-normal">
                            Reset Filters
                        </Button>
                  


                </div>
            </div>

        </>
    )
}
const BrowseJobs = () => {

    return (
        <>
            <HeroBanner
                heroBanner={'/HeroBanners/browse_jobs-hero-banner.png'}
                header={'Browse Jobs'}
                discription={"We are dedicated to helping you find the perfect job that aligns with your skills, experience, and career aspirations. Whether you're seeking a new challenge or looking to advance your career, our comprehensive job listings make it easy to explore a wide range of opportunities."}
            />

            {/* Wrapper for the JobSearchBar */}
            <div className="relative lg:container  w-full  lg:mx-auto">
                {/* Positioning the search bar in the bottom half of the HeroBanner */}
                <div className="absolute -bottom-28 z-20 w-full lg:w-auto ">
                    {JobSearchBar()}
                </div>
            </div>

            {/* Main Content Section */}
            <div className="lg:container lg:mx-auto mt-40">
                <h1 className="mx-4 lg:mx-0 text-[#006633] font-bold text-xl leading-[66px] my-8">
                    Recent Job Postings
                </h1>

                <div className="flex-col mx-4 lg:mx-0 flex gap-6">
                    {jobData?.map((job) => (
                        <JobPostingCard
                            key={job.id}
                            title={job.title}
                            dipartment={job.dipartment}
                            discription={job.discription}
                            team={job.team}
                            postTime={job.postTime}
                            location={job.location}
                            expe={job.expe}
                           
                        />
                    ))}
                </div>

                {RenderPagination()}
               
            </div>

            {/* Footer and Contact Section */}
            <ContactUs />
            <Footer />
        </>

    )
}

export default BrowseJobs