
import { fetchCollectionData } from '@/lib/directus';

const ContactPageData = async () => {
    const { response: AllContent } = await fetchCollectionData('contact_page', {
        fields: ['*']
    });
    const { response: bannerData } = await fetchCollectionData('contact_page', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });
    return {
        AllContent,
        bannerData
    }
}
export default ContactPageData;
