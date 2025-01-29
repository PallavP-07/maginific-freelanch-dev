
import { fetchCollectionData } from '@/lib/directus';

const AboutPageData = async () => {
    const { response: AllContent } = await fetchCollectionData('about', {
        fields: ['section_1.*',
            'section_2.*',
            'section_2.rows.*',
            'section_2.rows.img.*',
            'section_3.*',
            'section_3.sections.*',
            'section_4.*',
            'section_4.sections.*',
            'section_4.sections.icon.*']
    });

    const { response: bannerData } = await fetchCollectionData('homepage', {
        fields: ['banner.*', 'banner.icon.*'],
    });
    return {
        bannerData,
        AllContent,
    }
}
export default AboutPageData;
