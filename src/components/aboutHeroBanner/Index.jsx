import Image from 'next/image'
import React from 'react'

const AboutHeroBanner = ({ banner }) => {

    return (
        <>
            <div className="relative bg-[#105432] w-full h-[560px]">
                <div className=" bg-gradient-to-r from-black/50 via-black/80 to-black/50 absolute inset-0 flex items-center justify-center text-white text-center">
                    <div className=" container mx-auto flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">
                        <Image src={`https://magnific-directus-2p92s.ondigitalocean.app/assets/${banner?.icon?.filename_disk}`} alt="logo" width={144} height={144} />
                        <h1 className="w-full md:pb-7 font-bold text-[42px] md:text-[64px] md:leading-[65px] mt-10">
                            {banner?.title}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHeroBanner