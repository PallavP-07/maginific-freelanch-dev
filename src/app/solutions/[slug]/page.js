import ContentCard from '@/components/card/Index';
import ContactUs from '@/components/contact/Index'
import DualColorHeader from '@/components/dualColorHeader/Index';
import SubHeroBanner from '@/components/SubHeroBanner/Index'
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react'

function Solutions() {
  const solutions = [
    "Executive Search",
    "RPO",
    "Talent Strategy & Advisory",
    "Projects & Contracts",
    "Interim Talent",
    "Projects & Contracts",
    "RaaS",
    "Professional Search",
  ];

  return (
    <div className="  py-8 px-4  lg:my-16">
      <div className=" mx-4 lg:mx-0">
        {/* Title Section */}
        <div className="flex justify-between items-center md:border-b-4 border-[#CCE0D6] pb-3 mb-7">
          <h2 className="text-xl leading-6 font-bold text-[#01331A]">Functional Expertise</h2>
          <a
            href="#"
            className="text-[16px] leading-4  text-[#01331A] font-semibold "
          >
            Read More &gt;
          </a>
        </div>
        {/* Solutions Buttons */}
        <div className="flex    gap-4 items-center flex-wrap">
          {solutions.map((solution, index) => (

            <Badge key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustryExpertise() {
  const solutions = [
    "Financial Services ",
    "Technology",
    "Healthcare",
    "Pharmaceuticals & Medical Devices",
    "Non Profit",
    "Consumer",
    "Real Estate",
    "Venture Capital",
    "Private Equity ",
    "Professional Services",

  ];

  return (
    <div className=" py-8 px-4 md:px-0 md:py-0 md:pb-28   mx-4 lg:mx-0  mb-8 lg:my-16 border-b-4 border-[#CCE0D6]">
      <div className=" mx-4 lg:mx-0">
        {/* Title Section */}
        <div className="flex justify-between items-center md:border-b-4 border-[#CCE0D6] pb-3 mb-7">
          <h2 className="text-xl leading-6 font-bold text-[#01331A]">Industry Expertise</h2>
          <a
            href="#"
            className="text-[16px] leading-4  text-[#01331A] font-semibold"
          >
            Read More &gt;
          </a>
        </div>
        {/* Solutions Buttons */}
        <div className="flex w-[380px]  md:w-full  gap-4 items-center flex-wrap">
          {solutions.map((solution, index) => (
            <Badge key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}


const RenderParaSection = () => {
  return (
    <>
      <div className='text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 flex flex-col gap-5'>
        <h1 className='font-semibold text-[32px] lg:leading-9 text-[#01331A]'>Redefining Executive Search</h1>
        <p className='text-[#737475] font-light italic text-3xl'>Finding transformative leaders to shape the future of our clients.</p>
        <p className='text-[#737475] font-normal text-lg leading-6'>Executive transitions are pivotal moments, and the right leader can chart a course that propels your organization to new heights. We understand that it takes more than just experience to drive success. Our approach goes beyond identifying candidates with the right skills; we focus on finding individuals who seamlessly fit your organization's culture and possess the influence to inspire change and rally teams around their vision.</p>
        <p className='text-[#737475] font-normal text-lg leading-6'>
          Our relationship-based methodology sets us apart, enabling us to execute searches with exemplary speed, sophistication, and precision. Leveraging tech-enabled assessments, we navigate through the haystack to pinpoint the perfect match for your unique needs. And our commitment doesn't end with placement – we provide ongoing consultative expertise to ensure long-term success.</p>
        <p className='text-[#737475] font-normal text-lg leading-6'>
          In a landscape where leadership requirements continually evolve, the need for high-performing executives remains constant. At Magnific Search, we combine deep industry and functional knowledge with a proven search and assessment process to identify leaders who not only meet your organization's specific needs but also leave a lasting impact.</p>
        <p className='text-[#737475] font-normal text-lg leading-6'>
          Our comprehensive finalist assessment for senior leadership roles ensures a complete evaluation of candidates' expertise, leadership abilities, and cultural fit. And beyond placement, we offer services like CEO and senior executive onboarding, team effectiveness, and ongoing leadership development to set your leaders up for long-term success.</p>
      </div>
    </>
  )
}
const RenderWhyChooseMagnific = () => {
  const items = [
    {

      description:
        "Partnering with Magnific Search means gaining access to unparalleled expertise, extensive networks, and a track record of success. With a global presence spanning over 70 offices across 30 countries, we bring specialized industry, functional, and geographic knowledge to every assignment. Our commitment to client success is evident in the relationships we build, the insights we provide, and the results we deliver.",
    },
    {

      description:
        "At Magnific Search, we understand the significance of finding the right leaders. Our personalized approach, rigorous assessment methods, and ongoing support ensure that you not only find exceptional talent but also cultivate a leadership team that drives sustained success. Trust Magnific Search to guide you towards transformative leadership appointments that secure your organization's future.",
    },

  ];
  return (
    <>
      <div className='bg-[#13432b] relative '>
        <div className='bg-gradient-to-r from-black/70 to-transparent  flex flex-col text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 '>
          <h1 className='font-semibold text-[40px] leading-[48px] text-white mb-12'>Why Choose Magnific Search?</h1>


          <div className="flex flex-col md:flex-row   justify-center text-white ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`pb-10  md:py-4 pr-5   m-4 md:w-[360px]  lg:w-[420px] my-4 ${(index === 0 || index === 2 || (index - 3) % 4 === 0) ? "border-b-2 md:border-b-0 md:border-r-2 border-[#CCE0D6]" : ""
                  }`}
              >
                {/* <h3 className="text-xl font-bold leading-6 mb-8">{item.title}</h3> */}
                <p className="text-[#F9F9F9] text-16px leading-5 font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
const RenderCardBox = () => {
  return (
    <>
      <div className='w-full flex h-[360px] lg:h-[480px] bg-[#F9F9F9]'>
        <div className=' pl-10 pr-2 py-10  lg:pl-40 lg:pr-20 lg:py-40 w-full md:w-2/3'>
          <h1 className='font-medium text-[28px] md:text-xl lg:text-[32px] leading-8 text-[#006633] mb-4 lg:mb-7'>
            Executive Search Process
          </h1>
          <p className='font-normal  md:text-[14px] lg:text-[16px] leading-5 text-[#737475]'>Our goal is to be trusted advisors throughout every phase of the search process. From establishing search priorities to completing the search, we provide a thorough and tailored approach that exceeds client expectations. With five main phases, including search strategy development, candidate evaluation, and post-placement support, we ensure a seamless and thorough process from start to finish.</p>
        </div>
        <div className=' hidden md:block '>
          <Image src='/assets/content-img-2.png' alt='content' width={100} height={100} className='w-full h-full object-fill' />
        </div>
      </div>
    </>
  )
}
const RelatedContentSection = () => {
  return (
    <>
      <div className='lg:container lg:mx-auto mx-4'>
        <div className='text-center md:text-left lg:mb-10'>
          <DualColorHeader first={"Related "} second={"Content"} style={'text-5xl'} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-0 my-8 md:my-8 gap-8 md:gap-5 md:pb-10 lg:pb-20'>
          <ContentCard pageRedirect={'/insights/:id'} />
          <ContentCard  pageRedirect={'/insights/:id'}/>
          <ContentCard pageRedirect={'/insights/:id'} />
        </div>
      </div>
    </>
  )
}

const SubPage = () => {
  return (
    <>
      <SubHeroBanner heroBanner={'/HeroBanners/solutions-hero-banner.png'} header={'Executive Search'} />
      <RenderParaSection />
      <RenderCardBox />
      <RenderWhyChooseMagnific />
      <div className=' lg:my-20  lg:container lg:mx-auto'>
      {Solutions()}
      {IndustryExpertise()}
      </div>
      <RelatedContentSection />
      <ContactUs />
    </>
  )
}

export default SubPage