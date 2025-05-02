
import { fetchCollectionData } from '@/lib/directus';

const InsightsDetailsContent = async () => {
    const { response: InsightsSubPageContent } = await fetchCollectionData('insights', {
        fields: ['*',"img.*","tags.tags_id.*","tags.*"],
    });
    return {
        InsightsSubPageContent,
    }
}
export default InsightsDetailsContent;
