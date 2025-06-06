
import { fetchCollectionData } from '@/lib/directus';

const FunctionListData = async () => {
    const { response: AllContent } = await fetchCollectionData('functional_expertise_list', {
        fields: ['*',"industry_expertise_call_to_action.*","solutions_call_to_action.*"]
    });
    const { response: bannerData } = await fetchCollectionData('functional_expertise_list', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    return {
        AllContent,
        bannerData
    }
}
export default FunctionListData;
