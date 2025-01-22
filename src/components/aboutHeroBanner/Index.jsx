import Image from 'next/image'
import React from 'react'

const AboutHeroBanner = () => {
    return (
        <>
            <div className="relative bg-[#105432] w-full h-[560px]">

                <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
                    <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
                        <Image src='/about_hero_logo.svg' alt="logo" width={144} height={144} />
                        <h1 className="w-full md:pb-7 font-bold text-[42px] md:text-[64px] md:leading-[65px] mt-10">
                            We Are Magnific
                        </h1>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-gray-100 py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                    Unlocking Your Strategy with the Right Talent
                </h1>
                <p className="text-gray-600 max-w-3xl">
                    You've got the strategy, we find the talent. For your strategic vision to soar, you need the perfect blend of individuals occupying key roles, fully aligned and committed to its success. That's where Magnific Search comes in. We specialize in sourcing and recruiting talent that propels your organization forward.
                </p>
            </div>
        </>
    )
}

export default AboutHeroBanner