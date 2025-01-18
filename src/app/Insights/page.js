import CategoryList from '@/components/accordion/Index'
import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
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
                    <div className="relative  py-20 my-8 w-full h-[60vh] md:h-[40vh] rounded-xl lg:h-[460px]">
                        <Image
                            className="w-full object-cover rounded-xl"
                            src="/HeroBanners/Home_page-hero-banner.png"
                            alt="hero-banner"
                            fill
                        />
                        <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-xl absolute inset-0 flex flex-col justify-between text-white">
                            {/* Top Left Text */}
                            <div className="absolute top-10 left-12">
                                <span className="text-sm font-light leading-10">July 2024</span>
                                <p className="text-[#F9F9F9] font-normal text-lg leading-5 w-40 border-b border-white pb-1">Leadership</p>
                            </div>
                            {/* Bottom Content */}
                            <div className="absolute left-12 bottom-10 right-12 flex justify-between items-end">
                                <div>
                                    <p className="text-[32px] font-bold leading-[44px]">Insight title</p>
                                    <p className="text-[#F9F9F9] text-[14px] font-light leading-5 w-3/4">
                                        Brief description text of insight details. Lorem quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commo. Brief description text of insight details.
                                        Lorem quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo.
                                    </p>
                                </div>
                                <Button className="px-7 py-[5]  text-[16px] font-semibold text-white border-2 border-white bg-opacity-15 bg-slate-100 rounded-md hover:bg-white hover:text-black">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <DualColorHeader first={"Browse all"} second={"Insights"} />
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <div className='w-1/3'>
                        <div className='w-full'>
                            <Label htmlFor="Job Title" className="font-semibold text-lg leading-10 text-gray-800">Search Insights</Label>
                            <Input type="text" placeholder="Enter a Job Title or a Keyword" className=' placeholder:text-[#D0D0D0]' />
                        </div>
                    </div>
                    <div>
                        <div className=' flex  gap-4 items-end '>
                            <div className='w-full'>
                                <Label htmlFor="Filter" className="font-semibold text-lg leading-10 text-gray-800">Filter</Label>
                                <Select className='z-50 bg-white'>
                                    <SelectTrigger className='text-[#D0D0D0]'>
                                        <SelectValue placeholder="Date Posted" />
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
                            <div className='w-full'>
                                <Select>
                                    <SelectTrigger className='text-[#D0D0D0]'>
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
                            <div className='w-full'>
                                <Select>
                                    <SelectTrigger className='text-[#D0D0D0]'>
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
                            <div className='w-full'>
                                <Select>
                                    <SelectTrigger className='text-[#D0D0D0]'>
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
            <Footer />
        </>
    )
}

export default FunctionsPage