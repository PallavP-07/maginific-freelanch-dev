import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import Footer from "@/components/footer/Index";
import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
import ReviewCard from "@/components/card/reviewCard/Index";
import { ResponsiveCarousel } from "@/components/carousel/Index";
import { renderContatUseComponent } from "./contact-us/page";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
	return directus.request(readItems('jobs_list',{
     fields: ['banner.title'],
   
			
  }));
}
 

export default async function Home() {
  const global = await getGlobals();
  console.log(global)
  return (
    <>
      <LandingHeroBanner />
      <ResponsiveCarousel />
      {renderContatUseComponent()}
    
    </>
  );
}
