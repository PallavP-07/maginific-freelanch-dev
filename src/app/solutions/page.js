import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import Footer from "@/components/footer/Index";
import HeroBanner from "@/components/heroBanner/Index";
import SolutionListData from "@/services/solutionListData";
import React from "react";

const SolutonsPage = async () => {
  const { bannerData } = await SolutionListData();
  return (
    <>
      <HeroBanner
        heroBanner={bannerData?.banner?.background_img?.filename_disk}
        header={bannerData?.banner?.title}
        description={bannerData?.banner?.description}
      />
      <CategoryList />
      <ContactUs />
      <Footer />
    </>
  );
};

export default SolutonsPage;
