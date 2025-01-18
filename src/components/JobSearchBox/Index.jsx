import React from 'react'
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
const JobSearchBox = () => {
    return (
        <>
            <div className='flex flex-col  justify-between items-center gap-5   md:flex-row bg-white px-10 pt-5 pb-10   rounded-md  drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] '>
                <div className='flex flex-col gap-4  w-full '>
                    <div className='flex flex-col md:flex-row justify-between  w-full gap-4'>
                        <div className='w-full'>
                            <Label htmlFor="Job Title" className="font-semibold text-lg leading-10 text-gray-800">Job Title</Label>
                            <Input type="text" placeholder="Enter a Job Title or a Keyword"className=' placeholder:text-[#D0D0D0]'  />
                        </div>

                        <div className='w-full'>
                            <Label htmlFor="Location" className="font-semibold text-lg leading-10 text-gray-800">Location</Label>
                            <Input type="text" placeholder="Enter your Location" className=' placeholder:text-[#D0D0D0]'  />
                        </div>

                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-end gap-4'>
                        <div className='w-full'>
                            <Label htmlFor="Filter" className="font-semibold text-lg leading-10 text-gray-800">Filter</Label>
                            <Select className='z-50 bg-white'>
                                <SelectTrigger className='text-[#D0D0D0]'>
                                    <SelectValue  placeholder="Date Posted" />
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
                <div className='flex md:flex-col space-y-8  gap-6  h-full'>


                    <Button className="px-8 py-2 mt-8 md:mt-10 w-2/3  md:w-full  bg-[#026534] text-white rounded-[3px] text-[16px] leading-5 font-semibold">
                        Search Job
                    </Button>


                    <Button className=" md:w-full px-6 w-1/3  py-2 bg-transparent  text-[#01331A] border-[#01331A] border rounded-[3px] text-[18px] leading-5 font-normal">
                        Reset Filters
                    </Button>



                </div>
            </div>

        </>
    )
}

export default JobSearchBox