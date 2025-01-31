
import ContactUs from '@/components/contact/Index'
import HeroBanner from '@/components/herobanner/Index'
import React from 'react'
import JobPostingCard from "@/components/jobPostingCard/Index"
import JobSearchBox from '@/components/JobSearchBox/Index'
import JobListData from '@/services/jobs_listData'
import { RenderPagination } from '@/components/CustomPagination/Index' 


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





const BrowseJobs = async () => {
    const {bannerData,AllContent} = await JobListData();
    console.log(AllContent);
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
                <RenderPagination/>
            </div>
            <ContactUs />
     
        </>

    )
}

export default BrowseJobs