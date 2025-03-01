
import { fetchCollectionData } from '@/lib/directus';

const ExpertiseListData = async () => {
    const { response: AllContent } = await fetchCollectionData('industry_expertise_list', {
        fields: ['*',"functional_expertise_call_to_action.*","solutions_call_to_action.*"]
    });
    const { response: bannerData } = await fetchCollectionData('industry_expertise_list', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    return {
        AllContent,
        bannerData
    }
}
export default ExpertiseListData;
