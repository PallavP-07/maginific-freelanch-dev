"use client";

import { use, useState } from "react";
import ContactUs from "@/components/contact/Index";
import HeroBanner from "@/components/heroBanner/Index.jsx";
import DualColorHeader from "@/components/dualColorHeader/Index";
import ContentCard from "@/components/card/Index";
import InsightsListData from "@/services/insightsListData";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader/Index";

const InsightsPage = ({ bannerData, insightsData }) => {
console.log(insightsData)
  const [visibleCards, setVisibleCards] = useState(6);
  const totalCards = Array.isArray(insightsData) ? insightsData.length : 0; // ✅ Ensure insightsData is an array

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 3, totalCards));
  };

  const { banner } = bannerData || {};
  const { background_img, title, description } = banner || {};
  const highlightedTitle = insightsData?.highlighted_insight_heading || "";
  const [firstPart, secondPart] = highlightedTitle
    .split("Insights")
    .map((part, i) => (i === 0 ? part.trim() : "Insights"));
  return (
    <>
      <HeroBanner heroBanner={background_img?.filename_disk} header={title} description={description} />
      <div className="lg:container mx-4 mt-12 lg:mx-auto">
      <DualColorHeader first={firstPart} second={secondPart} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20">
          {(Array.isArray(insightsData) ? insightsData.slice(0, visibleCards) : []).map((item) => (
            <ContentCard key={item.id} pageRedirect={`/insights/${item.id}`} />
          ))}
        </div>

        {visibleCards < totalCards && (
          <div className="text-center my-20">
            <Button
              className="px-8 py-3 bg-[#026534] hover:bg-[#01331A] text-white w-full md:w-40 rounded-[3px] text-[16px] leading-5 font-semibold"
              onClick={handleShowMore}
            >
              More Insights
            </Button>
          </div>
        )}
      </div>
      <ContactUs />
    </>
  );
};

const Index = () => {
  const { bannerData,AllContent } = use(InsightsListData());

  if (!bannerData) {
    return <Loader />; 
  }

  return <InsightsPage bannerData={bannerData} insightsData={AllContent} />;
};


export default Index;
