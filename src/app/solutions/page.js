import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Footer from "@/components/footer/Index";
import HeroBanner from "@/components/herobanner/Index";
import SolutionListData from "@/services/solutionListData";
import { splitTextByWord } from "@/utils/splitText";
import React from "react";

const SolutonsPage = async () => {
  const { bannerData,AllContent } = await SolutionListData();
  const HeadingData = ({heading}) => {
    const[firstPart,secondPart]=splitTextByWord(heading, 'You');
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
      <CategoryList />
      <ContactUs />
      <Footer />
    </>
  );
};

export default SolutonsPage;
