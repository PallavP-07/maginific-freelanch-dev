
import { fetchCollectionData } from '@/lib/directus';

const SolutionListData = async () => {
    const { response: AllContent } = await fetchCollectionData('solutions_list', {
        fields: ['*',"functional_expertise_call_to_action.*","industry_expertise_call_to_action.*"]
    });
    const { response: bannerData } = await fetchCollectionData('solutions_list', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    return {
        AllContent,
        bannerData
    }
}
export default SolutionListData;
