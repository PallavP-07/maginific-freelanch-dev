import CustomNavbar from "./index"; // Import the client navbar
import NavbarData from "@/services/main_NavbarData";
import Loader from '@/components/loader/Index'
export default async function NavbarWrapper() {
 
  try {
    const { AllContent } = await NavbarData(); 
    return <CustomNavbar AllContent={AllContent}/>;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    return <CustomNavbar AllContent={null} />; // Handle error gracefully
  }
}