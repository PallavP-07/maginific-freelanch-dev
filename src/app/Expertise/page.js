import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import Footer from "@/components/footer/Index";
import HeroBanner from "@/components/heroBanner/Index.jsx";
import ExpertiseListData from "@/services/expertiseListData";
import React from "react";

const ExpertisePage = async () => {
  const { bannerData } = await ExpertiseListData();
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

export default ExpertisePage;
