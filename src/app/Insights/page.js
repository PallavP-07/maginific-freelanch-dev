"use client";

import { useEffect, useState, useMemo } from "react";
import ContactUs from "@/components/contact/Index";
import HeroBanner from "@/components/herobanner/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import ContentCard from "@/components/card/Index";
import InsightsListData from "@/services/insightsListData";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader/Index";

const InsightsPage = ({ bannerData }) => {
  useEffect(() => {
    console.log("Banner Data:", bannerData); 
  }, [bannerData]);

  const [visibleCards, setVisibleCards] = useState(6);
  const totalCards = 12;

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 3, totalCards));
  };

  return (
    <>
      <HeroBanner
        heroBanner={bannerData?.banner?.background_img?.filename_disk}
        header={bannerData?.banner?.title}
        description={bannerData?.banner?.description}
      />
      <div className="lg:container mx-4 mt-12 lg:mx-auto">
        <DualColorHeader first={"Our latest"} second={"Insights"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20">
          {Array.from({ length: visibleCards }).map((_, i) => (
            <div key={i}>
              <ContentCard pageRedirect={"/insights/:id"} />
            </div>
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
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    let isMounted = true; // ✅ Prevents multiple fetches

    const fetchData = async () => {
      const { bannerData } = await InsightsListData();
      if (isMounted) {
        setBannerData(bannerData);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const MemoizedInsightsPage = useMemo(() => {
    return bannerData ? <InsightsPage bannerData={bannerData} /> : <Loader />;
  }, [bannerData]);

  return MemoizedInsightsPage;
};

export default Index;
