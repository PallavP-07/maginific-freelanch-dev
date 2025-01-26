import CustomAccordion from '@/components/accordions/Index';
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

const RenderParaSection = ({ bgColor, title, discription, titleColor }) => {
  return (
    <>
      <div className={`text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 flex flex-col gap-5 ${bgColor} `}>
        <h1 className={`font-semibold text-[32px] lg:leading-9 ${titleColor ? titleColor : 'text-[#01331A]'}`}>{title}</h1>
        <p className='text-[#737475] font-normal text-lg leading-6'>{discription} </p>
      </div>
    </>
  )
}
const RenderCardBox = () => {
  return (
    <>
      <div className='w-full md:grid md:grid-cols-2 h-[360px] lg:h-[480px] bg-[#F9F9F9]'>
        <div className=' md:px-16  flex flex-col justify-center '>
          <h1 className='font-medium text-[28px] md:text-xl lg:text-[30px] leading-8 text-[#006633] mb-4 lg:mb-6'>
            Empowering Technology Innovators
          </h1>
          <p className='font-normal  md:text-[14px] lg:text-[16px] leading-5 text-[#737475]'>In the fast-paced world of technology services, agility and innovation are paramount. Magnific Search's Technology Services Practice specializes in identifying leaders who not only understand the latest technological trends but also possess the strategic vision to leverage them effectively. Whether you're in IT consulting, digital transformation, or software engineering, we partner with you to recruit executives who can drive innovation, capitalize on emerging opportunities, and propel your organization to new heights.</p>
        </div>
        <div className=' hidden md:block '>
          <Image src='/assets/content-img-2.png' alt='content' width={100} height={100} className='w-full h-full object-fill' />
        </div>
      </div>
      <div className='w-full md:grid md:grid-cols-2 h-[360px] lg:h-[480px] bg-[#F9F9F9]'>
        <div className=' hidden md:block  '>
          <Image src='/assets/content-img-1.png' alt='content' width={100} height={100} className='w-full h-full object-fill' />
        </div>
        <div className='md:px-16  flex flex-col justify-center '>
          <h1 className='font-medium text-[28px] md:text-xl lg:text-[30px] leading-8 text-[#006633] mb-4 lg:mb-7'>
            Driving Growth and Transformation
          </h1>
          <p className='font-normal  md:text-[14px] lg:text-[16px] leading-5 text-[#737475]'>Once we've identified potential candidates, it's time to make your organization irresistible to them. Leveraging our personal networks, we spread the word about your organization, positioning it as the ultimate destination for skilled mid to upper-level managers. Our strategic approach ensures that your talent pool is not just filled, but enriched with individuals who align seamlessly with your organization's culture and goals.</p>
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
          <ContentCard pageRedirect={'/insights/:id'} />
          <ContentCard pageRedirect={'/insights/:id'} />
        </div>
      </div>
    </>
  )
}

const RenderEnPowerFuture = () => {
  return (
    <>
      <div className='bg-black w-full py-24 '>
        <div className='lg:container lg:mx-auto flex justify-between'>
          <div className='w-[46%]'>
            <h1 className='text-white font-semibold lg:leading-[56px] text-[46px]'>Embrace the Future with Magnific Search</h1>
          </div>
          <div className='w-1/2 text-right'>
            <p className='text-xl leading-6 font-normal text-white'>
              In the ever-changing
              world of technology, success
              hinges on innovation, agility, and
              visionary leadership. Partner with Magnific
              to unlock the full potential of your organization
              & lead the charge in shaping the future of technology.
            </p>
          </div>
        </div>


      </div>
    </>
  )
}
const RenderAreaOfExpertise = () => {
  return (
    <>
      <div className='lg:container lg:mx-auto lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40'>
        <h1 className='text-[#006633] font-medium text-4xl leading-9 mb-6'>
          Global Reach, Local Insight
        </h1>
        <p className='font-normal text-lg leading-6 text-[#737475] mb-16'>As technology recruitment experts, we operate across major hubs worldwide, combining a global mindset with local talent intelligence to facilitate impactful hires. Whether you're seeking leadership in:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10  '>
          <CustomAccordion title={"Strategy and Management Consulting"} content={"Strategy and Management Consulting"} />
          <CustomAccordion title={"Financial Advisory & Transaction Services"} content={" IT Consulting and Digital Transformation"} />
          <CustomAccordion title={" IT Consulting and Digital Transformation"} content={" IT Consulting and Digital Transformation"} />
          <CustomAccordion title={"Software Engineering & Digital Services"} content={"Software Engineering & Digital Services "} />
          <CustomAccordion title={"Business Process Outsourcing & Managed Services"} content={"Human Capital Management & Talent Development"} />
          <CustomAccordion title={"Human Capital Management & Talent Development"} content={" Human Capital Management& Talent Development"} />
          <CustomAccordion title={"Legal Services and Law Firms"} content={"Legal Services and Law Firms"} />
        </div>
      </div>
    </>
  )
}
const SubPage = () => {
  return (
    <>
      <SubHeroBanner heroBanner={'/HeroBanners/solutions-hero-banner.png'} header={'Technology'} />
      <RenderParaSection title={"Empower Your Technology Journey with Magnific Search"} discription={"In today's dynamic B2B technology landscape, competition is fierce—from entrenched incumbents to agile startups and global titans. At Magnific Search, we offer a unique blend of global perspective and nuanced understanding tailored to every stage of your company's evolution."} />
      <RenderCardBox />
      <RenderAreaOfExpertise />
      <RenderParaSection bgColor={'bg-[#F9F9F9]'} titleColor={'text-[#006633]'} title={"Driving Transformational Growth"} discription={"The digital revolution sweeping the global economy places a premium on leaders who possess the vision and adaptability to thrive amidst uncertainty. At Magnific Search, our Technology Executive Search practice leverages over 30 years of experience to identify exceptional talent for technology-driven organizations. From visionary CEOs to dynamic sales leaders and technical directors, we connect forward-thinking individuals with organizations poised to revolutionize the technological landscape."} />
      <RenderEnPowerFuture />
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