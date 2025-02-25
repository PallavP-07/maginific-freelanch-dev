import CustomNavbar from "./index"; // Import the client navbar
import NavbarData from "@/services/main_NavbarData";
import ExpertiseDetails from "@/services/expertiseDetailsData";
import FunctionsDetails from "@/services/functionsDetailsData";
import SolutionDetails from "@/services/solutionsDetails";
export default async function NavbarWrapper() {
 
  try {
    const { AllContent } = await NavbarData(); 
    const { expertiseData } = await ExpertiseDetails();
    const {functionalDetailsData} = await FunctionsDetails();
    const { SoluDetails } = await SolutionDetails();
    return <CustomNavbar AllContent={AllContent} solutionSubPage={SoluDetails} expertiseSubPage={expertiseData} FunctionsSubPage={functionalDetailsData} />;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    return <CustomNavbar AllContent={null} />; // Handle error gracefully
  }
}