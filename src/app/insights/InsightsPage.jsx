"use client";
import { useState } from "react";
import HeroBanner from "@/components/herobanner/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";
import ContentCard from "@/components/card/Index";
import { Button } from "@/components/ui/button";
import { splitTextByWord } from "@/utils/splitText";
import LatestInsightsCard from "@/components/latestInsightsCard";

const InsightsClientPage = ({ banner, insightsData, insightsDetailPage }) => {
  const [visibleCards, setVisibleCards] = useState(10);

  const { background_img, title, description } = banner || {};
  const highlightedTitle = insightsData?.highlighted_insight_heading || "";
  const [firstPart, secondPart] = splitTextByWord(highlightedTitle, "Insights");

  // Defensive check early return
  if (!Array.isArray(insightsDetailPage) || insightsDetailPage.length === 0) {
    return (
      <>
        <HeroBanner
          heroBanner={background_img?.filename_disk}
          header={title}
          description={description}
        />
        <div className="lg:container mx-4 mt-12 lg:mx-auto">
          <p className="text-center">No insights available.</p>
        </div>
      </>
    );
  }

  const latestInsight = insightsDetailPage[insightsDetailPage.length - 1];
  const remainingInsights = insightsDetailPage.slice(0, -1);
  const visibleInsights = remainingInsights.slice(0, visibleCards);
  const hasMoreToShow = visibleCards < remainingInsights.length;

  return (
    <>
      <HeroBanner
        heroBanner={background_img?.filename_disk}
        header={title}
        description={description}
      />
      <div className="lg:container mx-4 mt-12 lg:mx-auto">
        <DualColorHeader first={firstPart} second={secondPart} />

        <LatestInsightsCard data={latestInsight} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20">
          {visibleInsights.map((item) => (
            <ContentCard
              key={item.id}
              pageRedirect={`/insights/${item.id}`}
              data={item}
            />
          ))}
        </div>

        {hasMoreToShow && (
          <div className="text-center my-20">
            <Button
              className="px-8 py-3 bg-[#026534] hover:bg-[#01331A] text-white w-full md:w-40 rounded-[3px] text-[16px] leading-5 font-semibold"
              onClick={() => setVisibleCards((prev) => prev + 3)}
            >
              More Insights
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default InsightsClientPage;
