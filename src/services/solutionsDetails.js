
import { fetchCollectionData } from '@/lib/directus';

const SolutionDetails = async () => {
    const { response: SoluDetails } = await fetchCollectionData('solutions', {
        fields: ['*']
    });

    const { response: SolutionDetailsContents } = await fetchCollectionData('solutions_details', {
        fields: ['*','section_2.*','functional_expertise_heading.*','industry_expertise_heading.*','industry_expertise_call_to_action.*','functional_expertise_call_to_action.*','section_2.sections.*']
    });
    return {
        SoluDetails,
        SolutionDetailsContents
    }
}
export default SolutionDetails;
