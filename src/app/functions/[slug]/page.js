import CustomAccordion from "@/components/accordions/Index";
import ContentCard from "@/components/card/Index";
import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import HeaderWithCta from "@/components/headerWithCta";
import LongParaContent from "@/components/longParaSection/LongParaContentSection";
import SubHeroBanner from "@/components/SubHeroBanner/Index";
import TextImageBox from "@/components/textImageBox/TextImageSection";
import { Badge } from "@/components/ui/badge";
import { fetchCollectionDataBySlug } from "@/lib/directus";
import ExpertiseDetails from "@/services/expertiseDetailsData";
import FunctionListData from "@/services/functionalExpertiseListData";
import FunctionsDetails from "@/services/functionsDetailsData";
import InsightsDetailsContent from "@/services/insightDetailsData";
import SolutionDetails from "@/services/solutionsDetails";
import { splitTextByWord } from "@/utils/splitText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RenderParaSection = ({ bgColor, title, discription, titleColor }) => {
  return (
    <>
      <div
        className={`text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 flex flex-col gap-5 ${bgColor} `}
      >
        <h1
          className={`font-semibold text-[32px] lg:leading-9 ${
            titleColor ? titleColor : "text-[#01331A]"
          }`}
        >
          {title}
        </h1>
        <p className="text-[#737475] font-normal text-lg leading-6">
          {discription}{" "}
        </p>
      </div>
    </>
  );
};

const RelatedContentSection = ({ title, insightsDetails }) => {
  const [firstPart, secondPart] = splitTextByWord(title, "Content");
  let topThreeInsights = [""];
  if (insightsDetails.length > 3) {
     topThreeInsights =  [...insightsDetails].sort(() => Math.random() - 0.5).slice(0, 3);
  }
  return (
    <>
      <div className="lg:container lg:mx-auto mx-4">
        <div className="text-center md:text-left lg:mb-10">
          <DualColorHeader
            first={firstPart}
            second={secondPart}
            style={"text-5xl"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-0 my-8 md:my-8 gap-8 md:gap-5 md:pb-10 lg:pb-20">
          {topThreeInsights.map((item) => (
            <ContentCard
              key={item.id}
              pageRedirect={`/insights/${item.id}`}
              data={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const RenderEnPowerFuture = () => {
  const backendText =
    "In the ever-changing world of technology, success hinges on innovation, agility, and visionary leadership. Partner with Magnific to unlock the full potential of your organization & lead the charge in shaping the future of technology.";

  const splitIntoIncrementalLines = (text ,totalLines) => {
    const totalLength = text.length;
    const weights = Array.from({ length: totalLines }, (_, i) => i + 1);
    const totalWeight = weights.reduce((a, b) => a + b, 0); 

    const lengths = weights.map(w => Math.floor((w / totalWeight) * totalLength));

    // Fix rounding errors (distribute remainder)
    const actualTotal = lengths.reduce((a, b) => a + b, 0);
    let remainder = totalLength - actualTotal;
    let i = 0;
    while (remainder > 0) {
      lengths[i % totalLines]++;
      i++;
      remainder--;
    }

    // Split the text into those lengths
    const result = [];
    let start = 0;
    for (const len of lengths) {
      result.push(text.slice(start, start + len).trim());
      start += len;
    }

    return result;
  };

  const lines = splitIntoIncrementalLines(backendText, 5);
  return (
    <>
      <div className="bg-black w-full py-24 ">
        <div className="lg:container lg:mx-auto flex items-end">
          <div className="w-[70%] ">
            <h1 className="text-white font-semibold lg:leading-[60px] text-[48px]">
              Embrace the Future with Magnific Search
            </h1>
          </div>
          <div className="text-right text-white text-xl leading-7">
            <p>
              {lines.map((line, index) => (
                <span
                  key={index}
                  className="block"
                  style={{ marginLeft: `${index * 2}px` }} // Staggered effect
                >
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const RenderAreaOfExpertise = () => {
  return (
    <>
      <div className="lg:container lg:mx-auto lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40">
        <h1 className="text-[#006633] font-medium text-4xl leading-9 mb-6">
          Global Reach, Local Insight
        </h1>
        <p className="font-normal text-lg leading-6 text-[#737475] mb-16">{`As technology recruitment experts, we operate across major hubs worldwide, combining a global mindset with local talent intelligence to facilitate impactful hires. Whether you're seeking leadership in:`}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10  ">
          <CustomAccordion
            title={"Strategy and Management Consulting"}
            content={"Strategy and Management Consulting"}
          />
          <CustomAccordion
            title={"Financial Advisory & Transaction Services"}
            content={" IT Consulting and Digital Transformation"}
          />
          <CustomAccordion
            title={" IT Consulting and Digital Transformation"}
            content={" IT Consulting and Digital Transformation"}
          />
          <CustomAccordion
            title={"Software Engineering & Digital Services"}
            content={"Software Engineering & Digital Services "}
          />
          <CustomAccordion
            title={"Business Process Outsourcing & Managed Services"}
            content={"Human Capital Management & Talent Development"}
          />
          <CustomAccordion
            title={"Human Capital Management & Talent Development"}
            content={" Human Capital Management& Talent Development"}
          />
          <CustomAccordion
            title={"Legal Services and Law Firms"}
            content={"Legal Services and Law Firms"}
          />
        </div>
      </div>
    </>
  );
};
const SubPage = async ({ params }) => {
  const { slug } = await params;
  let functionsDetailsContent = null;
  if (slug) {
    const response = await fetchCollectionDataBySlug(
      "functional_expertise",
      slug,
      {
        fields: [
          "*",
          "dynamic_section_1.rows.*",
          "dynamic_section_1.rows.img.*",
        ],
      }
    );
    functionsDetailsContent = response.response;
  }
  const { AllContent } = await FunctionListData();
  const { SoluDetails } = await SolutionDetails();
  const { expertiseData } = await ExpertiseDetails();
   const { InsightsSubPageContent } = await InsightsDetailsContent();
  return (
    <>
      <SubHeroBanner
        heroBanner={"/HeroBanners/solutions-hero-banner.png"}
        header={functionsDetailsContent[0].title}
      />
      <LongParaContent details={functionsDetailsContent[0]?.details} />
      {functionsDetailsContent[0]?.dynamic_section_1?.rows?.map((data, i) => (
        <TextImageBox
          key={i}
          title={data.title}
          description={data.description}
          imageSrc={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}`}
          orientation={data.orientation}
        />
      ))}
      <RenderAreaOfExpertise />
      <RenderParaSection
        bgColor={"bg-[#F9F9F9]"}
        titleColor={"text-[#006633]"}
        title={"Driving Transformational Growth"}
        discription={
          "The digital revolution sweeping the global economy places a premium on leaders who possess the vision and adaptability to thrive amidst uncertainty. At Magnific Search, our Technology Executive Search practice leverages over 30 years of experience to identify exceptional talent for technology-driven organizations. From visionary CEOs to dynamic sales leaders and technical directors, we connect forward-thinking individuals with organizations poised to revolutionize the technological landscape."
        }
      />
      <RenderEnPowerFuture />
      <div className=" lg:my-20  lg:container lg:mx-auto">
        <div>
          <HeaderWithCta
            heading={AllContent?.indistry_expertise_heading}
            cta={AllContent?.industry_expertise_call_to_action}
          />
          {expertiseData?.map((expertise, i) => (
            <Link
              key={i}
              href={`/expertise/${expertise?.slug}`}
              className="mr-2 mb-2 inline-block"
            >
              <Badge
                variant="outline"
                className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2"
              >
                {expertise?.title}
              </Badge>
            </Link>
          ))}
        </div>
        <div>
          <HeaderWithCta
            heading={AllContent.solutions_heading}
            cta={AllContent?.solutions_call_to_action}
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
        <RelatedContentSection
        title={AllContent?.releated_content_heading}
        insightsDetails={InsightsSubPageContent}
      />
      <ContactUs />
    </>
  );
};

export default SubPage;
