"use client"

import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import React, { useState } from 'react'
import JobPostingCard from "@/components/jobPostingCard/Index"
import JobSearchBox from '@/components/JobSearchBox/Index'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"



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


const BrowseJobs = () => {

    return (
        <>
            <HeroBanner
                heroBanner={'/HeroBanners/browse_jobs-hero-banner.png'}
                header={'Browse Jobs'}
                discription={"We are dedicated to helping you find the perfect job that aligns with your skills, experience, and career aspirations. Whether you're seeking a new challenge or looking to advance your career, our comprehensive job listings make it easy to explore a wide range of opportunities."}
            />

            {/* Wrapper for the JobSearchBar */}
            <div className="relative lg:container w-full flex justify-center items-center lg:mx-auto">
    {/* Positioning the search bar in the bottom half of the HeroBanner */}
    <div className="absolute w-[400px] md:w-[820px] lg:w-[998px] -bottom-[26rem] md:-bottom-32">
        <JobSearchBox />
    </div>
</div>

            {/* Main Content Section */}
            <div className="lg:container lg:mx-auto mt-120 md:mt-40">
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