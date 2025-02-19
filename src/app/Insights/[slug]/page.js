import ContentCard from '@/components/card/Index'
import DualColorHeader from '@/components/dualColorHeader/Index'

import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

function SubPage() {
  return (
    <>
      <div className="flex  flex-col md:flex-row justify-between    h-auto md:h=[400px] lg:h-[480px]">
        <div className=" py-12 px-6 md:py-0 md:px-0 md:w-1/2 h-full flex justify-center items-center">
          <div className=' md:mt-20 lg:mt-36 flex justify-center flex-col w-full md:w-2/3  lg:ml-28 '>
            <span className="text-sm font-normal text-[#737475]">July 2024</span>
            <h1 className="text-3xl  lg:text-[46px] mb-5 font-semibold leading-[40px] lg:leading-[60px] text-[#373A40] mt-2">
              Insights sub-page heading here
            </h1>
            <div className="flex flex-wrap gap-4 justify-start my-4">
            <Badge  variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>Healthcare</Badge>
            <Badge  variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>Technology</Badge>
            <Badge  variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>Other</Badge>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2  ">
          <Image
            src="/assets/insights-sub-page-banner.png"
            alt="insight-sub-banner"
            className='w-full h-full object-fill '
            width={100}
            height={100}
          />
        </div>




      </div>
      <div className='lg:container  mx-6 mb-20  lg:mx-auto'>
        <div className=" text-[#373A40]   py-20 border-b-2 border-[#CCE0D6] mb-10">
          <div className="mx-auto space-y-10">
            {/* Section: What is Healthcare Technology? */}
            <div>
              <h2 className="text-lg sm:text-2xl font-bold leading-6 text-[#006633]">
                What is Healthcare Technology?
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-[#373A40]">
            {`    Healthcare technology refers to any IT tools or software designed to boost hospital
                and administrative productivity, give new insights into medicines and treatments, or
                improve the overall quality of healthcare provided. Today's healthcare industry is a
                $2 trillion behemoth at a crossroads. Currently being weighed down by crushing costs
                and red tape, the industry is looking for ways to improve in nearly every imaginable
                area. That's where healthtech comes in. Tech-infused tools are being integrated into
                every step of the healthcare experience to counteract two key trouble spots: quality
                and efficiency.`}
              </p>
            </div>

            {/* Section: Benefits of Health-tech */}
            <div>
              <h2 className="text-lg sm:text-2xl font-bold leading-6 text-[#006633]">
                Benefits of Health-tech
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-[#373A40]">
                Healthtech has the potential to trim the fat from our traditional healthcare scene.
                Skyrocketing costs, unbearable wait times, inefficiencies in drug development, and
                limited access to insurance and healthcare providers are all being improved (or at
                least addressed) through tech-infused care.
              </p>
            </div>

            {/* Section: Healthtech Improves Efficiency */}
            <div>
              <h2 className="text-lg sm:text-2xl font-bold leading-6 text-[#006633]">
                Healthtech Improves Efficiency
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-[#373A40]">
                The way we purchase healthcare is becoming more accessible to a wider group of people
                through the insurance technology industry, sometimes called insurtech. Patient
                waiting times are declining and hospitals are more efficiently staffed thanks to
                artificial intelligence and predictive analytics. Even surgical procedures and
                recovery times are being reduced thanks to ultra-precise robots that assist in
                surgeries and make some procedures less invasive.
              </p>
            </div>

            {/* Section: Healthtech Promotes Quality Care */}
            <div>
              <h2 className="text-lg sm:text-2xl font-bold leading-6 text-[#006633]">
                Healthtech Promotes Quality Care
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-[#373A40]">
                Expanding access to healthcare and improving hospital operations is fantastic, but
                how exactly are innovators accomplishing this feat? Healthcare technology companies
                have provided a much-needed jolt of efficiency by tailoring experiences to the
                individual. These companies realize there’s no one-size-fits-all approach to proper
                care, so personalization is key. By personalizing everything from insurance payments
                to diets and sleep patterns, healthtech companies are working to improve human health
                and reduce much of the unnecessary strain on the industry.
              </p>
            </div>
          </div>
        </div>
        <div className='lg:mb-28 lg:mt-14'>
          <div className='text-center  md:text-left '>
            <DualColorHeader first={"Related "} second={"Content"} style={'text-5xl'} />
          </div>
          <div className='grid grid-cols-1 w-full md:grid-cols-3  md:mx-0 my-8 md:my-8 gap-8 md:gap-5 '>
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </div>
      </div>

    </>
  )
}

export default SubPage