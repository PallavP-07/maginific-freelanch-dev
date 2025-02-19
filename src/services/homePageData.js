
import { fetchCollectionData } from '@/lib/directus';

const HomePageData = async () => {
    const { response: bannerData } = await fetchCollectionData('homepage', {
        fields: ['banner.background_img.filename_disk', 'banner.title', 'banner.description', 'banner.subtitle', 'banner.call_to_actions.*'],
    });

    const { response: serviceSectionData } = await fetchCollectionData('homepage', {
        fields: ['services_section.*', 'services_section.services.*', 'services_section.services.call_to_actions.*', 'services_section.services.img.*', 'services_section.services.tags.*'],
    });
    const { response: jobSearchSection } = await fetchCollectionData('homepage', {
        fields: ['job_search_section.*', 'job_search_section.submit_btn.*', 'job_search_section.form_items.*', 'job_search_section.call_to_actions.*'],
    });

    const { response: matrixSection } = await fetchCollectionData('homepage', {
        fields: ['metrics.*'],
    });
    const { response: whyMagnificSection } = await fetchCollectionData('homepage', {
        fields: ['why_magnific_section.*'],
    });
    const { response: insightSection } = await fetchCollectionData('homepage', {
        fields: ['insights_section.*', 'insights_section.cards.*'],
    });
    const { response: testimonialsSection } = await fetchCollectionData('homepage', {
        fields: ['testimonials.*', 'testimonials.testimonials.*'],
    });

    const { response: resourcesSection } = await fetchCollectionData('homepage', {
        fields: ['resources_section.*', 'resources_section.rows.*','resources_section.rows.img.*','resources_section.rows.call_to_actions.*'],
    });

    const { response: AllContent } = await fetchCollectionData('homepage', {
        fields: ['*', 'services_section.*', 'insights_section.*', 'resources_section.*', 'metrics.*', 'testimonials.*', 'testimonials.testimonials.*']
    });
    return {
        bannerData,
        AllContent,
        serviceSectionData,
        jobSearchSection,
        matrixSection,
        whyMagnificSection,
        insightSection,
        testimonialsSection,
        resourcesSection

    }
}

export default HomePageData;
