
import { fetchCollectionData } from '@/lib/directus';

const JobDetailsData = async () => {
    const { response: JobDetails } = await fetchCollectionData('jobs', {
        fields: ['*','location.*','industry.*']
    });
    return {
        JobDetails,
    }
}
export default JobDetailsData;
