import CategoryList from "@/components/accordion/Index";
import ContactUs from "@/components/contact/Index";
import Footer from "@/components/footer/Index";
import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
import ReviewCard from "@/components/card/reviewCard/Index";
import { ResponsiveCarousel } from "@/components/carousel/Index";
import { renderContatUseComponent } from "./contact-us/page";
import directus from "@/lib/directus";
import { readFile, readItems } from "@directus/sdk";
import CircularProgress from "@/components/circleProgress/Index";
import DualColorHeader from "@/components/dualColorHeader/Index";

// async function getGlobals() {
//   // return directus.request(	readFile('a76ee45a-30ae-4199-9533-2e2727d7eb8c', {
// 	// 	fields: ['filename_download.*','*'],
// 	// }));
//   const bannerData =()=>{
//     return directus.request(	readItems('homepage', {
//       fields: ['*'],
//     }));    
//   }
//   return{
//     bannerData,
//   }
// }
async function getGlobals() {
  // Fetch data for the banner section
  const bannerData = async () => {
    const data = await directus.request(
      readItems('homepage', {
        fields: ['banner.background_img.filename_disk','banner.title','banner.description','banner.subtitle'],
      })
    );
    return data;
  };
  const Id = await bannerData()
  // const fetchImageData = async (Id)=>{
  //   console.log(Id)
  //   const data =await directus.request(readFile(`${Id.banner.background_img}`,{
  //     fields:['*']
  //   }));
  //   return data
  // }
  // const bannerImgData= await fetchImageData(Id)
  return {
    // bannerImgData,
    bannerData
  };
}

export default async function Home() {
  const globals = await getGlobals();
   const banner = await globals.bannerData();

 
  console.log(banner)
  return (
    <>
      <LandingHeroBanner bannerData={banner.banner} />
      <div className="bg-[#F9F9F9] flex flex-col md:flex-row justify-between py-40 lg:container lg:mx-auto ">
        <div className="flex flex-col gap-5 w-1/3">
          <p className="text-[#373A40] font-bold text-[44px] leading-[52px] flex-wrap">Driven By Data</p>
          <span className="text-lg leading-[26px] font-normal break-words">
            Unlike some, our entire methodology is powered by data. We’ve built a data platform to ensure we provide the best service for our clients.
          </span>
        </div>
        <div className="flex   justify-between gap-4 ">
          <CircularProgress label="Customer satisfaction" value="50" totalValue='100' />
          <CircularProgress label="Customer satisfaction" value="75" totalValue='100' />
          <CircularProgress label="Customer satisfaction" value="90" totalValue='100' />
        </div>
      </div>
      <div className="lg:container lg:mx-auto">

<DualColorHeader first={"Why choose "} second={"Magnific?"}/>
<p className="mt-4 font-normal text-lg leading-6">With global reach and localized expertise, we understand the impact that exceptional talent can have. From leadership and management, all the way to bright-eyed associates, we’re by your side, selecting the very best talent to unleash your growth and overcome all obstacles. </p>
     <h2 className="text-[#D0D0D0] font-bold text-[46px] leading-[54px] mt-20">Explore our...</h2>
      </div>
      <ResponsiveCarousel />

      {renderContatUseComponent()}

    </>
  );
}
