import CustomAccordion from '@/components/accordions/Index';
import ContentCard from '@/components/card/Index';
import ContactUs from '@/components/contact/Index'
import DualColorHeader from '@/components/dualColorHeader/Index';
import HeaderWithCta from '@/components/headerWithCta';
import LongParaContent from '@/components/longParaSection/LongParaContentSection';
import SubHeroBanner from '@/components/SubHeroBanner/Index'
import TextImageBox from '@/components/textImageBox/TextImageSection';
import { Badge } from '@/components/ui/badge';
import { fetchCollectionDataBySlug } from '@/lib/directus';
import ExpertiseDetails from '@/services/expertiseDetailsData';
import FunctionsDetails from '@/services/functionsDetailsData';
import SolutionDetails from '@/services/solutionsDetails';
import Image from 'next/image';
import Link from 'next/link';
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
        <h1 className='font-semibold text-[32px] lg:leading-9 text-[#01331A]'>Unlocking Excellence in Professional & Technology Services with Magnific Search</h1>
      
        <p className='text-[#737475] font-normal text-lg leading-6'>{`In today's dynamic landscape, professional and technology services firms face unprecedented challenges and opportunities. At Magnific Search, we specialize in helping organizations like yours navigate these complexities by identifying top-tier talent that drives growth, fosters innovation, and propels success.`}</p>
        <p className='text-[#737475] font-normal text-lg leading-6'>
       {` The realm of professional services is undergoing a profound transformation, driven by changing client expectations and technological advancements. Magnific Search's Professional Services Practice is dedicated to redefining leadership in this space. We collaborate with firms across strategy consulting, financial advisory, and human capital management to identify leaders who excel at driving collaboration, shaping culture, and delivering value-driven solutions. Our tailored approach ensures that you have the right talent in place to navigate the evolving demands of your industry.`}</p>
      </div>
    </>
  )
}
const RenderWhyChooseMagnific = ({data}) => {
  return (
    <>
      <div className='bg-[#13432b] relative text-white'>
        <div className='bg-gradient-to-r from-black/70 to-transparent  flex flex-col text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 '>
          <h1 className='font-semibold text-[40px] leading-[48px] text-white mb-3'>{data?.title}</h1>
          <p className='mb-10'
           dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  justify-center text-white ">
            {data?.sections.map((item, index) => (
              <div
                key={index}
                className="border-2 border-white px-6 py-8 rounded-md"
              >
                <h3 className="text-xl font-bold leading-6 mb-6">{item.title}</h3>
                <p className="text-[#F9F9F9] text-[16px] leading-5 font-light"
                 dangerouslySetInnerHTML={{ __html: item.description}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

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


const RenderAreaOfExpertise =()=>{
  return(
    <>
    <div className='lg:container lg:mx-auto lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40'>
     <h1 className='text-[#006633] font-medium text-4xl leading-9 mb-10'>
     Our Areas of Expertise 
     </h1>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
      <CustomAccordion title={"Strategy and Management Consulting"} content={"Strategy and Management Consulting"}/>
      <CustomAccordion title={"Financial Advisory & Transaction Services"} content={" IT Consulting and Digital Transformation"}/>
      <CustomAccordion title={" IT Consulting and Digital Transformation"} content={" IT Consulting and Digital Transformation"}/>
      <CustomAccordion title={"Software Engineering & Digital Services"} content={"Software Engineering & Digital Services "}/>
      <CustomAccordion title={"Business Process Outsourcing & Managed Services"} content={"Human Capital Management & Talent Development"}/>
      <CustomAccordion title={"Human Capital Management & Talent Development"} content={" Human Capital Management& Talent Development"}/>
      <CustomAccordion title={"Legal Services and Law Firms"} content={"Legal Services and Law Firms"}/>
     </div>
    </div>
    </>
  )
}
const SubPage = async({ params }) => {
    const { slug } = await params;
    let expertiseData = null;
    if (slug) {
      const response = await fetchCollectionDataBySlug("industry_expertise", slug, {
        fields: ["*", "dynamic_section_1.rows.*", "dynamic_section_1.rows.img.*"],
      });
      expertiseData = response.response;
    }
    const {ExpertiseDetailPageContents} = await ExpertiseDetails();
    const { SoluDetails } = await SolutionDetails();
  
  const {functionalDetailsData} = await FunctionsDetails();
  return (
    <>
      <SubHeroBanner heroBanner={'/HeroBanners/solutions-hero-banner.png'} header={expertiseData[0].title} />
      <LongParaContent details={expertiseData[0].details} />
      {expertiseData[0]?.dynamic_section_1?.rows?.map((data, i) => (
        <TextImageBox
          key={i}
          title={data.title}
          description={data.description}
          imageSrc={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}`}
          orientation={data.orientation}
        />
      ))}
      <RenderAreaOfExpertise/>
      <RenderWhyChooseMagnific data={ExpertiseDetailPageContents?.section_1} />
      <div className=" lg:my-20  lg:container lg:mx-auto">
        <div>

        <HeaderWithCta
          heading={ExpertiseDetailPageContents.functional_expertise_heading}
          cta={ExpertiseDetailPageContents?.functional_expertise_call_to_action}
        />
                 {functionalDetailsData?.map((functions, i) => (
            <Link
              key={i}
              href={`/functions/${functions?.slug}`}
              className="mr-2 mb-2 inline-block"
            >
              <Badge
                variant="outline"
                className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2"
              >
                {functions?.title}
              </Badge>
            </Link>
          ))}
        </div>
        <div>
        <HeaderWithCta
          heading={ExpertiseDetailPageContents.solutions_heading}
          cta={ExpertiseDetailPageContents?.solutions_call_to_action}
        />
        {SoluDetails?.map((solution, i) => (
            <Link
              key={i}
              href={`/solutions/${solution?.slug}`}
              className="mr-2 mb-2 inline-block"
            >
              <Badge
                variant="outline"
                className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2"
              >
                {solution?.title}
              </Badge>
            </Link>
          ))}
        </div>
 
      </div>
      <RelatedContentSection />
      <ContactUs />
    </>
  )
}

export default SubPage