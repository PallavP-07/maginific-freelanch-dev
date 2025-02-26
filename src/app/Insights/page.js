import InsightsListData from "@/services/insightsListData";
import InsightsPages from "./insightsPageData"; // Client Component
import InsightsDetailsContent from "@/services/insightDetailsData";

const Page = async () => {
  try {
    const data = await InsightsListData(); // Fetch data on the server
    const { bannerData, AllContent: insightsData } = data || {};
    const banner = bannerData?.banner || {};
    const {InsightsSubPageContent} = await InsightsDetailsContent();
    return <InsightsPages banner={banner} insightsData={insightsData || []} insightsDetailPage={InsightsSubPageContent} />;
  } catch (error) {
    console.error("Error fetching insights:", error);
    return <p className="text-center text-red-500">Failed to load insights.</p>;
  }
};

export default Page;
