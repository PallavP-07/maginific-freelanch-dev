import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Footer from "@/components/footer/Index";
import HeaderWithCta from "@/components/headerWithCta";
import HeroBanner from "@/components/herobanner/Index";
import TypeSelection from "@/components/typeSelection/Index";
import { Badge } from "@/components/ui/badge";
import ExpertiseDetails from "@/services/expertiseDetailsData";
import FunctionListData from "@/services/functionalExpertiseListData";
import FunctionsDetails from "@/services/functionsDetailsData";
import SolutionDetails from "@/services/solutionsDetails";
import { splitTextByWord } from "@/utils/splitText";
import Link from "next/link";
import React from "react";

const FunctionsPage = async () => {
  const { bannerData, AllContent } = await FunctionListData();
  const { functionalDetailsData } = await FunctionsDetails();
  const { expertiseData } = await ExpertiseDetails();
  const { SoluDetails } = await SolutionDetails();

  const HeadingData = ({ heading }) => {
    const [firstPart, secondPart] = splitTextByWord(heading, "Serve");
    return (
      <div className="lg:container  mx-4  lg:mx-auto mt-12 mb-4">
        <div className=" border-b-4 border-[#CCE0D6] ">
          <DualColorHeader first={firstPart} second={secondPart} />
        </div>
      </div>
    );
  };
  return (
    <>
      <HeroBanner
        heroBanner={bannerData?.banner?.background_img?.filename_disk}
        header={bannerData?.banner?.title}
        description={bannerData?.banner?.description}
      />
      <HeadingData heading={AllContent.heading} />
      {functionalDetailsData.map((functions, i) => (
        <TypeSelection
          key={i}
          title={functions.title}
          description={functions.short_description}
          slug={`/functions/${functions.slug}`}
        />
      ))}
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
      <ContactUs />
    </>
  );
};

export default FunctionsPage;
