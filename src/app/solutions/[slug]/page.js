import ContentCard from "@/components/card/Index";
import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import HeaderWithCta from "@/components/headerWithCta";
import LongParaContent from "@/components/longParaSection/LongParaContentSection";
import SubHeroBanner from "@/components/SubHeroBanner/Index";
import TextImageBox from "@/components/textImageBox/TextImageSection";
import { Badge } from "@/components/ui/badge";
import { fetchCollectionDataBySlug } from "@/lib/directus";
import SolutionDetails from "@/services/solutionsDetails";
import { splitTextByWord } from "@/utils/splitText";

import React from "react";

const RenderWhyChooseMagnific = ({data}) => {
  return (
    <>
      <div className="bg-[#13432b] relative ">
        <div className="bg-gradient-to-r from-black/70 to-transparent  flex flex-col text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 ">
          <h1 className="font-semibold text-[40px] leading-[48px] text-white mb-12">
          {data?.title}
          </h1>

          <div className="flex flex-col md:flex-row   justify-center text-white ">
            {data.sections.map((item, index) => (
              
              <div
                key={index}
                className={`pb-10  md:py-4 pr-5   m-4 md:w-[360px]  lg:w-[420px] my-4 ${
                  index === 0 || index === 2 || (index - 3) % 4 === 0
                    ? "border-b-2 md:border-b-0 md:border-r-2 border-[#CCE0D6]"
                    : ""
                }`}
              >
                <p className="text-[#F9F9F9] text-16px leading-5 font-normal"
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
const RelatedContentSection = ({title}) => {
     const[firstPart,secondPart]=splitTextByWord(title, 'Content');
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
          <ContentCard pageRedirect={"/insights/:id"} />
          <ContentCard pageRedirect={"/insights/:id"} />
          <ContentCard pageRedirect={"/insights/:id"} />
        </div>
      </div>
    </>
  );
};

const SubPage = async ({ params }) => {
  const { slug } = await params;
  let solData = null;
  if (slug) {
    const response = await fetchCollectionDataBySlug("solutions", slug, {
      fields: ["*", "dynamic_section_1.rows.*", "dynamic_section_1.rows.img.*"],
    });
    solData = response.response;
  }
const {SolutionDetailsContents}= await SolutionDetails();
  return (
    <>
      <SubHeroBanner
        heroBanner={"/HeroBanners/solutions-hero-banner.png"}
        header={"Executive Search"}
      />
      <LongParaContent details={solData[0].details} />
      {solData[0].dynamic_section_1.rows.map((data, i) => (
        <TextImageBox
          key={i}
          title={data.title}
          description={data.description}
          imageSrc={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}`}
          orientation={data.orientation}
        />
      ))}
      <RenderWhyChooseMagnific data={SolutionDetailsContents?.section_2} />
      <div className=" lg:my-20  lg:container lg:mx-auto">
      <HeaderWithCta
        heading={SolutionDetailsContents.functional_expertise_heading}
        cta={SolutionDetailsContents?.functional_expertise_call_to_action}
      />
      <HeaderWithCta
        heading={SolutionDetailsContents.industry_expertise_heading}
        cta={SolutionDetailsContents?.industry_expertise_call_to_action}
      />
      </div>
      <RelatedContentSection title={SolutionDetailsContents?.releated_content_heading} />
      <ContactUs />
    </>
  );
};

export default SubPage;
