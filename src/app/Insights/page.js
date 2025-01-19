
import ContactUs from '@/components/contact/Index'

import HeroBanner from '@/components/herobanner/Index'

import Image from 'next/image'
import React from 'react'
import DualColorHeader from '@/components/dualColorHeader/Index'
import ContentCard from '@/components/card/Index'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const FunctionsPage = () => {
    return (
        <>
            <HeroBanner heroBanner={'/HeroBanners/insights-hero-banner.png'} header={'Insights'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
            <div className='lg:container  mx-4 mt-12 lg:mx-auto'>
                <DualColorHeader first={"Our latest"} second={"Insights"} />

                <div className='py-12 border-b-2 border-[#CCE0D6] mb-4'>
                    <div className="relative py-20 my-8 w-full h-[60vh] md:h-[40vh] rounded-xl lg:h-[460px]">
                        <Image
                            className="w-full object-cover rounded-xl"
                            src="/HeroBanners/Home_page-hero-banner.png"
                            alt="hero-banner"
                            fill
                        />
                        <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-xl absolute inset-0 flex flex-col justify-between text-white">
                            {/* Top Left Text */}
                            <div className="absolute top-6 left-6 md:top-10 md:left-12">
                                <span className="text-xs md:text-sm font-light leading-6 md:leading-10">July 2024</span>
                                <p className="text-[#F9F9F9] font-normal text-sm md:text-lg leading-4 md:leading-5 w-28 md:w-40 border-b border-white pb-1">
                                    Leadership
                                </p>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute left-6 bottom-6 right-6 md:left-12 md:bottom-10 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
                                <div>
                                    <p className="text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[44px]">
                                        Insight title
                                    </p>
                                    <p className="text-[#F9F9F9] text-[12px] md:text-[14px] font-light leading-5 mt-2 md:mt-0 w-full md:w-3/4">
                                        Brief description text of insight details. Lorem quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commo. Brief description text of insight details. Lorem
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo.
                                    </p>
                                </div>
                                <Button className="px-6 py-2 text-[14px] md:text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-md hover:bg-white hover:text-black">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' my-8 md:my-10 lg:my-14'>
                    <DualColorHeader first={"Browse all"} second={"Insights"} />
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:gap-6  items-start md:items-center w-full">
                    {/* Search Input */}
                    <div className="w-full md:w-1/3">
                        <Label
                            htmlFor="Job Title"
                            className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
                        >
                            Search Insights
                        </Label>
                        <Input
                            type="text"
                            placeholder="Enter a Job Title or a Keyword"
                            className="placeholder:text-[#D0D0D0] w-full mt-3 py-3 px-5"
                        />
                    </div>

                    {/* Filter Section */}
                    <div className="w-full gap-5 items-end flex flex-col md:flex-row md:gap-4">
                        {/* Filter Dropdown */}
                        <div className="w-full ">
                            <Label
                                htmlFor="Filter"
                                className="font-bold text-lg leading-5 text-[#2A2B2F] "
                            >
                                Filter
                            </Label>
                            <Select className="z-50 bg-white  ">
                                <SelectTrigger className="text-[#D0D0D0] mt-3 py-3 px-5">
                                    <SelectValue placeholder="Date Posted" />
                                </SelectTrigger>
                                <SelectContent className="bg-white ">
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

                        {/* Experience Dropdown */}
                        <div className="w-full ">
                            <Select>
                                <SelectTrigger className="text-[#D0D0D0] py-3 px-5">
                                    <SelectValue placeholder="Experience" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
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

                        {/* Job Type Dropdown */}
                        <div className="w-full ">
                            <Select>
                                <SelectTrigger className="text-[#D0D0D0] py-3 px-5">
                                    <SelectValue placeholder="Job Type" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
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

                        {/* Industry Dropdown */}
                        <div className="w-full ">
                            <Select>
                                <SelectTrigger className="text-[#D0D0D0] py-3 px-5">
                                    <SelectValue placeholder="Industry" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                </div>
                <div className='text-center my-20'>
                    <Button className="px-8 py-3  bg-[#026534] text-white w-full md:w-40   rounded-[3px] text-[16px] leading-5 font-semibold  ">
                        More Insights
                    </Button>
                </div>
            </div>
            <ContactUs />

        </>
    )
}

export default FunctionsPage