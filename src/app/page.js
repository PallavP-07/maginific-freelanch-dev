import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import Footer from "@/components/footer/Index";
import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
import ReviewCard from "@/components/card/reviewCard/Index";
import { ResponsiveCarousel } from "@/components/carousel/Index";
import { renderContatUseComponent } from "./contact-us/page";




export default async function Home() {

  return (
    <>

      <LandingHeroBanner />
      <ResponsiveCarousel />
      {renderContatUseComponent()}
    
    </>
  );
}
