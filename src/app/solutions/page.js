import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Footer from "@/components/footer/Index";
import HeaderWithCta from "@/components/headerWithCta";
import HeroBanner from "@/components/herobanner/Index";
import TypeSelection from "@/components/typeSelection/Index";
import SolutionListData from "@/services/solutionListData";
import SolutionDetails from "@/services/solutionsDetails";
import { splitTextByWord } from "@/utils/splitText";
import React from "react";

const SolutionsPage = async () => {
  const { bannerData, AllContent } = await SolutionListData();
  const { SoluDetails } = await SolutionDetails();
  const HeadingData = ({ heading }) => {
    const [firstPart, secondPart] = splitTextByWord(heading, "You");
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
      {SoluDetails.map((solution, i) => (
        <TypeSelection key={i} title={solution.title} description={solution.short_description} slug={`/solutions/${solution.slug}`} />
      ))}
        <div className=" lg:my-20  lg:container lg:mx-auto">
      <HeaderWithCta
        heading={AllContent.functional_expertise_heading}
        cta={AllContent?.functional_expertise_call_to_action}
      />
      <HeaderWithCta
        heading={AllContent.industry_expertise_heading}
        cta={AllContent?.industry_expertise_call_to_action}
      />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default SolutionsPage;
