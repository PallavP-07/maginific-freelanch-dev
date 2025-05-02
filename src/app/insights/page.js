import InsightsListData from "@/services/insightsListData";
import InsightsDetailsContent from "@/services/insightDetailsData";
import InsightsPages from "./InsightsPage";
import ContactUs from "@/components/contact/Index";
export default async function InsightWarper() {
  try {
    const { bannerData, insightsData } = await InsightsListData();
    const { InsightsSubPageContent } = await InsightsDetailsContent();
    return (
      <>
        <InsightsPages
          banner={bannerData?.banner}
          insightsData={insightsData || []}
          insightsDetailPage={InsightsSubPageContent}
        />
        <ContactUs />
      </>
    );
  } catch (error) {
    console.error("Error fetching insights:", error);
    return <p className="text-center text-red-500">Failed to load insights.</p>;
  }
}
