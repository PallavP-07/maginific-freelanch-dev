
import { fetchCollectionData } from '@/lib/directus';

const ContactPageData = async () => {
    const { response: AllContent } = await fetchCollectionData('contact_page', {
        fields: ['*']
    });
    const { response: bannerData } = await fetchCollectionData('contact_page', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    const { response: dunmyFormData } = await fetchCollectionData('contact_form_data', {
        fields: ['*']
    });
    return {
        AllContent,
        bannerData,
        dunmyFormData
    }
}
export default ContactPageData;
