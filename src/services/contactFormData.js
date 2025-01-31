
import { fetchCollectionData } from '@/lib/directus';

const ContactFormData = async () => {
    const { response: Contact_Form_data } = await fetchCollectionData('contact_us_form', {
        fields: ['contact_form.*','contact_form.form_items.*']
    });
    return {
        Contact_Form_data,
    }
}
export default ContactFormData;
