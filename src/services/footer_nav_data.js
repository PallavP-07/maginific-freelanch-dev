
import { fetchCollectionData } from '@/lib/directus';

const FooterNavData = async () => {
    const { response: AllContent } = await fetchCollectionData('footer_navigation', {
        fields: ['*','facebook_icon.icon.*','twitter_icon.icon.*','linkedin_icon.icon.*','youtube_icon.icon.*']
    });
    return {
        AllContent,
    }
}
export default FooterNavData;
