
import { fetchCollectionData } from '@/lib/directus';

const InsightsDetailsContent = async () => {
    const { response: InsightsSubPageContent } = await fetchCollectionData('insights', {
        fields: ['*',"img.*","tags.tags_id.*","tags.*"],
    });
    const { response: bannerData } = await fetchCollectionData('insights_list', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    return {
        InsightsSubPageContent,
        bannerData
    }
}
export default InsightsDetailsContent;
