import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Footer from "@/components/footer/Index";
import HeaderWithCta from "@/components/headerWithCta";
import HeroBanner from "@/components/herobanner/Index";
import TypeSelection from "@/components/typeSelection/Index";
import FunctionListData from "@/services/functionalExpertiseListData";
import FunctionsDetails from "@/services/functionsDetailsData";
import { splitTextByWord } from "@/utils/splitText";
import React from "react";

const FunctionsPage = async () => {
  const { bannerData,AllContent } = await FunctionListData();
  const { functionalDetails } = await FunctionsDetails();
  const HeadingData = ({ heading }) => {
    const [firstPart, secondPart] = splitTextByWord(heading, "Expertise");
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
        {functionalDetails.map((functions, i) => (
        <TypeSelection key={i} title={functions.title} description={functions.short_description} slug={`/functions/${functions.slug}`} />
      ))}
      <div className=" lg:my-20  lg:container lg:mx-auto">
        <HeaderWithCta
          heading={AllContent.indistry_expertise_heading}
          cta={AllContent?.industry_expertise_call_to_action}
        />
        <HeaderWithCta
          heading={AllContent.solutions_heading}
          cta={AllContent?.solutions_call_to_action}
        />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default FunctionsPage;
