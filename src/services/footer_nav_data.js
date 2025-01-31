
import { fetchCollectionData } from '@/lib/directus';

const FooterNavData = async () => {
    const { response: AllContent } = await fetchCollectionData('footer_navigation', {
        fields: ['*','facebook_icon.*','twitter_icon.*','linkedin_icon.*','youtube_icon.*']
    });
    return {
        AllContent,
    }
}
export default FooterNavData;
