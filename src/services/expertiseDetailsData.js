import { fetchCollectionData } from "@/lib/directus";

const ExpertiseDetails = async () => {
  const { response: expertiseData } = await fetchCollectionData("industry_expertise", {
    fields: ["*"],
  });

  const { response: ExpertiseDetailPageContents } = await fetchCollectionData(
    "industry_expertise_details",
    {
      fields: [
        "*",
        "section_1.sections.*",
        "section_1.*",
        "solutions_call_to_action.*",
        "functional_expertise_call_to_action.*"
      ],
    }
  );
  return {
    expertiseData,
    ExpertiseDetailPageContents,
  };
};
export default ExpertiseDetails;
