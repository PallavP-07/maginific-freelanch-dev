
import { fetchCollectionData } from '@/lib/directus';

const InsightsListData = async () => {
    const { response: insightsData } = await fetchCollectionData('insights_list', {
        fields: ['highlighted_insight_heading','more_insights_call_to_action','insights_search_form.*']
    });
    const { response: bannerData } = await fetchCollectionData('insights_list', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    return {
        insightsData,
        bannerData
    }
}
export default InsightsListData;
