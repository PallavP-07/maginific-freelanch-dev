"use client"
import React, { useState } from 'react'
import { Building, PepopeOutLine, Time, Trophy } from '@/assets/Icons'
import { Button } from '@/components/ui/button'
import Link from "next/link";

import Modle from '../modle/Index';
const JobPostingCard = ({ title, dipartment, description, team, postTime, location, expe, onClick,id }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to open dialog
    const openModal = () => {
        setIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };
    const handleFormSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        // Optionally reset the form or handle the data further
        closeModal(); // Close modal after successful form submission
    };



    return (
        <>
            <div className='bg-[#F9F9F9]  rounded-md   flex flex-col  gap-4 md:gap-0 md:flex-row w-full justify-between items-center py-6 px-10'>
                <div className='flex flex-col gap-2 md:border-r-2 md:border-[#D0D0D0] md:pr-[17px] w-full md:w-3/4  lg:w-2/4'>
                    <h2 className='text-xl font-bold leading-[36px] line-clamp-1'>{title}</h2>
                    <span className='text-lg font-light leading-[36px]'>{dipartment}</span>
                    <p className='text-lg text-[#737475] font-normal leading-6 line-clamp-2'
                     dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
                <div className='hidden  lg:flex flex-col pl-8 py-4 gap-1 text-[#737475] lg:w-1/4 text-[16px] font-semibold' >
                    <span className='flex items-center gap-2'><Time />{new Date(`${postTime}`).toLocaleDateString("en-CA")}</span>
                    <span className='flex items-center gap-2'><Building />{location}</span>
                    <span className='flex items-center gap-2'><PepopeOutLine />{team}</span>
                    <span className='flex items-center gap-2'><Trophy />{expe}</span>

                </div>
                <div className='flex flex-col w-full md:items-end  md:w-1/3 lg:w-1/4 gap-4 md:gap-3'>
                    <Button onClick={openModal} className="px-8 py-5 bg-[#026534] text-white w-full md:w-40   rounded-[3px] text-[18px] leading-5 font-semibold  ">
                        Apply
                    </Button>
                    <Link href={`'/browse-jobs/details/${id}'`} >
                        <Button className="px-8 py-5 bg-transparent text-[#01331A] w-full md:w-40 border-[#01331A] border  rounded-[3px] text-[18px] leading-5 font-normal">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
                <Modle isOpen={isOpen} closeModal={closeModal} onSubmit={handleFormSubmit} />
        </>
    )
}

export default JobPostingCard