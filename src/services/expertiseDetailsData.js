import { fetchCollectionData } from "@/lib/directus";

const ExpertiseDetails = async () => {
  const { response: expertiseData } = await fetchCollectionData("industry_expertise", {
    fields: ["*"],
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
    expertiseData,
    ExpertiseContents,
  };
};
export default ExpertiseDetails;
