
import { fetchCollectionData } from '@/lib/directus';

const NavbarData = async () => {
    const { response: AllContent } = await fetchCollectionData('main_navigation', {
        fields: ['*']
    });
    return {
        AllContent,
    }
}
export default NavbarData;
