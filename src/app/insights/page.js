import InsightsListData from "@/services/insightsListData";
import InsightsPages from "@/components/insightListPage/InsightsPage"; // Client Component
import InsightsDetailsContent from "@/services/insightDetailsData";

const Page = async () => {
  try {
    const { bannerData, AllContent: insightsData } =  await InsightsListData();
    const banner = bannerData?.banner || {};
    const {InsightsSubPageContent} = await InsightsDetailsContent();
    return <InsightsPages banner={banner} insightsData={insightsData || []} insightsDetailPage={InsightsSubPageContent} />;
  } catch (error) {
    console.error("Error fetching insights:", error);
    return <p className="text-center text-red-500">Failed to load insights.</p>;
  }
};

export default Page;
