
import { fetchCollectionData } from '@/lib/directus';

const ContactUsCompData = async () => {
    const { response: AllContent } = await fetchCollectionData('contact_us_section', {
        fields: ['*','call_to_action.*','bg_img.*']
    });
    return {
        AllContent,
    }
}
export default ContactUsCompData;
