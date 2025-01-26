import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
import { ResponsiveCarousel } from "@/components/carousel/Index";
import { renderContatUseComponent } from "./contact-us/page";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ProgressCircle from "@/components/circleProgress/Index";

async function getGlobals() {
  // Fetch data for the banner section
  const bannerData = async () => {
    const data = await directus.request(
      readItems('homepage', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
      })
    );
    return data;
  };

  // Fetch data for the Service Section
  const serviecSectionData = async () => {
    const data = await directus.request(
      readItems('homepage', {
        fields: ['services_section.*'],
      })
    );
    return data;
  };
  const AllContent = async () => {
    const data = await directus.request(
      readItems('homepage', {
        fields: ['services_section.*', 'insights_section.*', 'resources_section.*', 'metrics.*', 'testimonials.*']
      })
    );
    return data;
  };
  return {
    bannerData,
    AllContent,
    serviecSectionData
  };
}

const renderDiscoverInsight = () => {
  return (
    <>
      <div className=" lg:container lg:mx-auto w-full my-20  mb-20">
        <div className=" mx-6 md:mx-20 lg:mx-36">
          <p className="font-medium text-[44px] leading-[54px] text-[#333333]">

            Discover Our Latest
          </p>
          <p className="font-semibold text-[44px] leading-[54px] text-[#026534] mb-12 ">
            Insights</p>

          <div className="grid grid-cols-2 gap-5 md:gap-8 ">
            <div className="flex flex-col gap-5 md:gap-7">
              {/* Card 1 */}
              <div className="bg-[#2A2B2F] text-white  text-center h-[450px]  px-5 py-20 md:px-10 rounded-md w-full">
                <h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-4xl mb-6">Insight One</h2>
                <p className="font-normal md:leading-[28px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-[#CCE0D6] text-gray-800 text-center  px-5 py-20 md:px-10  h-[380px] w-full  rounded-md">
                <h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-3xl mb-6">Insight Three</h2>
                <p className="font-normal leading-[28px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc.</p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-5 md:gap-7">
              {/* Card 3 */}

              <div className="bg-[#D0D0D0] text-[#373A40] text-center  px-5 py-20 md:px-10  h-[380px] w-full   rounded-md">
                <h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-4xl mb-6">Insight Two</h2>
                <p className="font-normal leading-[28px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-[#2A2B2F] text-white text-center  px-5 py-36 md:px-10  h-[450px]  rounded-md">
                <h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-3xl mb-6">Insight Four</h2>
                <p className="font-normal leading-[28px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc.</p>
              </div>
            </div>

          </div>
          <p className="text-[#01331A] font-semibold text-[20px] text-end leading-6 mt-8 ">Browse all Insights &gt;</p>
        </div>
      </div>
    </>
  )
}


const ResourcesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="hidden md:flex bg-[#2A2B2F] text-white md:flex-col md:justify-center md:p-10 lg:p-28 items-center">
        <div className="text-left w-full md:w-auto ">
          <h2 className="text-[39px] font-bold leading-[46px] mb-8">Candidate Resources</h2>
          <p className="mb-8 font-normal text-lg leading-6">
            A comprehensive toolbox of insights and materials to help you unlock your true potential.
          </p>
          <Button className="bg-[#026534] font-medium text-lg leading-5 text-white w-28 px-8 py-[10px] rounded-sm hover:bg-green-700">
            Browse
          </Button>
        </div>
      </div>
      <div className=" bg-cover bg-center relative  w-full h-[480px]" >
        <div className="w-full h-full">
          <Image src='/assets/Resources2.png' alt='content-1' layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover" />
        </div>
        <div className=" flex bg-black/50  text-white flex-col justify-center absolute inset-0 md:hidden px-5 py-20 items-center">
          <div className="text-center w-full md:w-auto">
            <h2 className="text-[32px] font-bold leading-[36px] mb-6">Candidate Resources</h2>
            <p className="mb-6 font-normal text-lg leading-6">
              A comprehensive toolbox of insights and materials to help you unlock your true potential.
            </p>
            <Button className="bg-[#026534] font-semibold text-lg leading-5 text-white w-full px-8 py-[12px] rounded-sm hover:bg-green-700">
              Browse
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-center relative w-full h-[480px]">
        <div className="w-full h-full">
          <Image
            src='/assets/Resources1.png'
            alt='content-1'
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex bg-black/50 text-white flex-col justify-center absolute inset-0 md:hidden px-6 py-20 items-center">
          <div className="text-center w-full md:w-auto">
            <h2 className="text-[40px] font-bold leading-[36px] mb-6">Hiring Resources</h2>
            <p className="mb-6 font-normal text-lg leading-6">
              A data-driven knowledge base to support your best practices and help you build a world-class team.
            </p>
            <Button className="bg-[#026534] font-semibold text-lg leading-5 text-white w-full px-8 py-[10px] rounded-sm hover:bg-green-700">
              Browse
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-[#2A2B2F] text-white md:flex-col md:justify-center md:p-10 lg:p-28 items-center">
        <div className="text-left w-full md:w-auto">
          <h2 className="text-[36px] font-bold leading-[46px] mb-8">Hiring Resources</h2>
          <p className="mb-8 font-normal text-lg leading-6">
            A data-driven knowledge base to support your best practices and help you build a world-class team.
          </p>
          <Button className="bg-[#026534] font-medium text-lg leading-5 text-white w-28 px-8 py-[10px] rounded-sm hover:bg-green-700">
            Browse
          </Button>
        </div>
      </div>
    </div>
  );
};


const progressSection = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] w-full overflow-hidden h-auto  ">
        <div className="flex flex-col md:flex-row justify-between py-16 md:py-28 lg:py-40 mx-6 lg:container lg:mx-auto">
          <div className="flex flex-col gap-5 text-center md:text-left mb-8 md:mb-0 w-full">
            <p className="text-[#373A40] font-bold text-[32px] md:text-[34px] lg:text-[44px] lg:leading-[53px] flex-wrap">Driven By <span className="text-[#006633] md:text-[#092015]">Data</span></p>
            <span className="text-lg leading-[26px] font-normal break-words">
              Unlike some, our entire methodology is powered by data. We’ve built a data platform to ensure we provide the best service for our clients.
            </span>
          </div>
          <div className="flex  justify-center flex-wrap md:flex-nowrap gap-4   md:justify-between md:gap-1 ">
            <ProgressCircle value={"50"} text="%" subtext="Customer satisfaction" />
            <ProgressCircle value={"85"} text="%" subtext="Company growth" />
            <ProgressCircle value={'7,000'} text="" subtext="Successful candidates" />
          </div>
        </div>

      </div>
    </>
  )
}

const renderJobSearchBar = () => {
  return (
    <>
      <div className="lg:container px-6 py-12 md:py-16 lg:py-20 lg:mx-auto w-full">
        <div className="pb-6">
          <DualColorHeader first={"Find Your Next Opportunity"} second={"Today."} />
        </div>
        <div className="flex flex-col md:flex-row items-start  gap-4 mt-8 w-full ">
          <div className="w-full  ">
            <Label
              htmlFor="Job Title"
              className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
            >
              Job Title
            </Label>
            <Input
              type="text"
              placeholder="Enter a Job Title or a Keyword"
              className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
            />
          </div>
          <div className="w-full ">
            <Label
              htmlFor="Job Title"
              className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
            >
              Location
            </Label>
            <Input
              type="text"
              placeholder="Enter a Job Title or a Keyword"
              className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
            />
          </div>
          <div className="flex flex-col md:gap-2 gap-5 md:w-1/3 w-full mt-8">
            <div className=''>
              <Button className="px-8 py-5  bg-[#026534] text-white w-full md:w-40   rounded-[3px] text-[18px] leading-5 font-semibold  ">
                Search Jobs
              </Button>
            </div>
            <Link href='/browse-jobs' className="font-semibold text-[20px] leading-7 border-b-2 border-[#006633] text-center py-1    text-[#006633] mx-auto " >Looking to hire?</Link>
          </div>
        </div>
      </div>
    </>
  )
}

const renderwhyChooseUs = () => {
  const solutions = [
    "Executive Search",
    "RPO",
    "RaaS",
    "Interim Talent",
    "Talent Strategy & Advisory",
    "Projects & Contracts",
    "Projects & Contracts",
    "Professional Search",
  ];
  return (
    <>

      <div className="flex justify-between md:gap-4 lg:gap-16 my-20">
        <div className="hidden md:block md:w-1/2 rounded-md  drop-shadow-lg">
          <Image src='/assets/Resources2.png' alt="wy-us" width={400} height={356} className="drop-shadow-lg w-full border-t-[12px]  border-[#01331A] h-[360px] object-fill grayscale rounded-md" />
        </div>
        <div className=" w-full md:w-1/2 ">
          <div className="flex justify-between items-center   mb-7">
            <h2 className=" md:text-2xl lg:text-3xl leading-8 font-bold text-[#01331A]">Industry Expertise</h2>
            <a
              href="#"
              className="text-[16px] leading-4  text-[#01331A] font-semibold"
            >
              Read More &gt;
            </a>
          </div>
          <div className="flex gap-[18px] flex-wrap">
            {solutions.map((solution, index) => (

              <Badge key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution}</Badge>
            ))}
          </div>

        </div>


      </div>

    </>
  )
}
export default async function Home() {
  const globals = await getGlobals();
  const banner = await globals.bannerData();
  const serviecSectionData = await globals.serviecSectionData()


  return (
    <>
      <LandingHeroBanner bannerData={banner.banner} />
      {renderJobSearchBar()}
      {progressSection()}
      <div className=" w-full h-full bg-[url('/circle-bg.svg')] bg-no-repeat bg-right ">
        <div className=" mx-6 lg:container lg:mx-auto py-20">
          <div className="">

            <DualColorHeader first={"Why choose "} second={"Magnific?"} />
          </div>
          <p className="mt-4 text-[#373A40] font-normal  text-lg leading-6">With global reach and localized expertise, we understand the impact that exceptional talent can have. From leadership and management, all the way to bright-eyed associates, we’re by your side, selecting the very best talent to unleash your growth and overcome all obstacles. </p>
          <h2 className="text-[#D0D0D0] font-bold text-[46px] leading-[54px] my-20">Explore our...</h2>
          {renderwhyChooseUs()}
          {renderwhyChooseUs()}
          {renderwhyChooseUs()}
        </div>
      </div>

      <ResponsiveCarousel />
      {renderDiscoverInsight()}
      {ResourcesGrid()}
      <div className="lg:mx-10">

        {renderContatUseComponent()}
      </div>
    </>
  );
}
