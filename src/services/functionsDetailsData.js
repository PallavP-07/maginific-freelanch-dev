import { fetchCollectionData } from "@/lib/directus";

const FunctionsDetails = async () => {
  const { response: functionalDetailsData } = await fetchCollectionData("functional_expertise", {
    fields: ["*","functional_expertise_call_to_action.*","solutions_call_to_action.*"],
  });

  const { response: ExpertiseContents } = await fetchCollectionData(
    "solutions_details",
    {
      fields: [
        "*",
        "section_2.*",
        "functional_expertise_heading.*",
        "industry_expertise_heading.*",
        "industry_expertise_call_to_action.*",
        "functional_expertise_call_to_action.*",
        "section_2.sections.*",
      ],
    }
  );
  return {
    functionalDetailsData,
    ExpertiseContents,
  };
};
export default FunctionsDetails;
