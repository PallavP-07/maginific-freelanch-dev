import CustomNavbar from "./index"; // Import the client navbar
import NavbarData from "@/services/main_NavbarData";

export default async function NavbarWrapper() {
  try {
    const { AllContent } = await NavbarData(); // Fetch data on the server
    return <CustomNavbar AllContent={AllContent} />;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    return <CustomNavbar AllContent={null} />; // Handle error gracefully
  }
}