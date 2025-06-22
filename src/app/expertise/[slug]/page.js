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
import FunctionsDetails from "@/services/functionsDetailsData";
import InsightsDetailsContent from "@/services/insightDetailsData";
import SolutionDetails from "@/services/solutionsDetails";
import { splitTextByWord } from "@/utils/splitText";
import Link from "next/link";
import React from "react";

const RenderWhyChooseMagnific = ({ data }) => {
  return (
    <>
      <div className="bg-[#13432b] relative text-white">
        <div className="bg-gradient-to-r from-black/70 to-transparent  flex flex-col text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 ">
          <h1 className="font-semibold text-[40px] leading-[48px] text-white mb-3">
            {data?.title}
          </h1>
          <p
            className="mb-10"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  justify-center text-white ">
            {data?.sections.map((item, index) => (
              <div
                key={index}
                className="border-2 border-white px-6 py-8 rounded-md"
              >
                <h3 className="text-xl font-bold leading-6 mb-6">
                  {item.title}
                </h3>
                <p
                  className="text-[#F9F9F9] text-[16px] leading-5 font-light"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>
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
const RenderAreaOfExpertise = () => {
  return (
    <>
      <div className="lg:container lg:mx-auto lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40">
        <h1 className="text-[#006633] font-medium text-4xl leading-9 mb-10">
          Our Areas of Expertise
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
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
  let expertiseData = null;
  if (slug) {
    const response = await fetchCollectionDataBySlug(
      "industry_expertise",
      slug,
      {
        fields: [
          "*",
          "dynamic_section_1.rows.*",
          "dynamic_section_1.rows.img.*",
        ],
      }
    );
    expertiseData = response.response;
  }
  const { ExpertiseDetailPageContents } = await ExpertiseDetails();
  const { SoluDetails } = await SolutionDetails();
 const { InsightsSubPageContent } = await InsightsDetailsContent();
  const { functionalDetailsData } = await FunctionsDetails();
  return (
    <>
      <SubHeroBanner
        heroBanner={"/HeroBanners/solutions-hero-banner.png"}
        header={expertiseData[0].title}
      />
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
      <RenderAreaOfExpertise />
      <RenderWhyChooseMagnific data={ExpertiseDetailPageContents?.section_1} />
      <div className=" lg:my-20  lg:container lg:mx-auto">
        <div>
          <HeaderWithCta
            heading={ExpertiseDetailPageContents.functional_expertise_heading}
            cta={
              ExpertiseDetailPageContents?.functional_expertise_call_to_action
            }
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
      <RelatedContentSection
        title={ExpertiseDetailPageContents?.releated_content_heading}
        insightsDetails={InsightsSubPageContent}
      />
      <ContactUs />
    </>
  );
};

export default SubPage;
