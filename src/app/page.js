// import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
// import ResponsiveCarousel from "@/components/carousel/Index";
import dynamic from "next/dynamic";
import { RenderContactUseComponent } from "./contact/page";
// import DualColorHeader from "@/components/dualColorHeader/Index";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ProgressCircle from "@/components/circleProgress/Index";
import HomePageData from "@/services/homePageData";
import { splitTextByWord } from "@/utils/splitText";
import ContactFormData from "@/services/contactFormData";
import { cleanHTML } from "@/utils/cleanHTML";
import InsightsDetailsContent from "@/services/insightDetailsData";
const LandingHeroBanner = dynamic(
  () => import("../components/LandingHeroBanner/Index")
);
const ResponsiveCarousel = dynamic(
  () => import("../components/carousel/Index")
);
const DualColorHeader = dynamic(
  () => import("../components/dualColorHeader/Index")
);
const HomeJobSearchBar = dynamic(
  () => import("../components/HomeSearchBar/Index")
);
const renderDiscoverInsight = (insightSectionData, latestInsights) => {
  const title = insightSectionData?.insights_section?.title || "";
  const [firstPart, secondPart] = title
    .split("Insights")
    .map((part, i) => (i === 0 ? part.trim() : "Insights"));
  return (
    <>
      <div className=" lg:container lg:mx-auto w-full my-20  mb-20">
        <div className=" mx-6 md:mx-20 lg:mx-36">
          <p className="font-medium text-[44px] leading-[54px] text-[#333333]">
            {firstPart}
          </p>
          <p className="font-semibold text-[44px] leading-[54px] text-[#026534] mb-12 ">
            {secondPart}
          </p>
          <div className="grid grid-cols-2 gap-5 md:gap-8 h-full">
            <div className="flex flex-col gap-5 md:gap-7 h-[820px]">
              {latestInsights.slice(0, 2)?.map((item, i) => (
                <div
                  key={i}
                  className={`${i === 1 ? "h-[55%]" : "h-[45%]"} relative w-full rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:drop-shadow-md cursor-pointer`}
                >
                  <Link href={`/insights/${item.id}`}>
                    {/* Background Image */}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item?.img?.filename_disk}`}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                      priority
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 ${
                        i === 1
                          ? "bg-[#CCE0D6]/60 text-gray-800"
                          : "bg-black/60 text-white"
                      } flex flex-col justify-start items-center text-center px-5 py-12 md:px-10 transition-all duration-300`}
                    >
                      <h2 className="font-semibold text-[20px] md:text-3xl lg:text-4xl mb-2">
                        {item.title}
                      </h2>
                      <p className="font-normal leading-[26px] text-[15px] line-clamp-3 max-w-xl">
                        {cleanHTML(item?.details)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 md:gap-7 h-[820px]">
              {latestInsights.slice(-2)?.map((item, i) => (
                <div
                  key={i}
                  className={`${i === 1 ? "h-[45%]" : "h-[55%]"} relative w-full rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:drop-shadow-md cursor-pointer`}
                >
                  <Link href={`/insights/${item.id}`}>
                    {/* Background Image */}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item?.img?.filename_disk}`}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                      priority
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 ${
                        i === 1
                          ? "bg-black/70 text-white"
                          : "bg-[#D0D0D0]/60 text-slate-800"
                      } flex flex-col justify-start items-center text-center px-5 py-12 md:px-10 transition-all duration-300`}
                    >
                      <h2 className="font-semibold text-[20px] md:text-3xl lg:text-4xl mb-2">
                        {item.title}
                      </h2>
                      <p className="font-normal leading-[26px] text-[15px] line-clamp-3 max-w-xl">
                        {cleanHTML(item?.details)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="flex flex-col w-full gap-5 md:gap-7">
              {lastTwoCards?.map((item, i) => (
                <div
                  key={i}
                  className={` ${
                    item?.sort === 2
                      ? "bg-[#D0D0D0] text-[#373A40]"
                      : "bg-[#2A2B2F] text-white "
                  }   text-center  px-5 py-20 md:px-10   w-full  rounded-md`}
                >
                  <h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-3xl lg:text-4xl mb-6">
                    {item.title}
                  </h2>
                  <p className="font-normal leading-[28px] text-[16px]">
                    {cleanHTML(item?.description)}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
          <p className="text-[#01331A] font-semibold text-[20px] text-end leading-6 mt-8 ">
            <Link href="/insights">Browse all Insights &gt;</Link>
          </p>
        </div>
      </div>
    </>
  );
};

const ResourceSection = ({
  title,
  description,
  imageSrc,
  buttonText,
  orientation,
}) => {
  const isTextLeft = orientation === "text-left-image-right"; // Check for the correct API value

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Conditionally Render Text Block on the Left or Right */}
      {isTextLeft && (
        <TextBlock
          title={title}
          description={description}
          buttonText={buttonText}
        />
      )}

      {/* Image Block with Overlay Text for Mobile */}
      <div className="bg-cover bg-center relative w-full h-[480px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          className="object-cover"
        />
        <OverlayText
          title={title}
          description={description}
          buttonText={buttonText}
        />
      </div>

      {!isTextLeft && (
        <TextBlock
          title={title}
          description={description}
          buttonText={buttonText}
        />
      )}
    </div>
  );
};

// Text Block for Desktop & Tablet
const TextBlock = ({ title, description, buttonText }) => (
  <div className="hidden md:flex bg-[#2A2B2F] text-white flex-col justify-center p-10 lg:p-28 items-center">
    <div className="text-left w-full md:w-auto">
      <h2 className="text-[36px] font-bold leading-[46px] mb-8">{title}</h2>
      <div
        className="mb-8 font-normal text-lg leading-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {buttonText?.href && (
        <Link
          href={buttonText.href}
          className="bg-[#026534] font-medium text-lg text-white w-28 px-8 py-[10px] rounded-sm hover:bg-green-700"
        >
          {buttonText.title}
        </Link>
      )}
    </div>
  </div>
);

// Overlay Text for Mobile View
const OverlayText = ({ title, description, buttonText }) => (
  <div className="flex bg-black/50 text-white flex-col justify-center absolute inset-0 md:hidden px-6 py-20 items-center">
    <div className="text-center w-full">
      <h2 className="text-[32px] font-bold leading-[36px] mb-6">{title}</h2>
      <div
        className="mb-6 font-normal text-lg leading-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {buttonText?.href && (
        <Link
          href={buttonText.href}
          className="bg-[#026534] font-semibold  text-lg text-white w-full px-8 py-[12px] rounded-sm hover:bg-green-700"
        >
          {buttonText.title}
        </Link>
      )}
    </div>
  </div>
);

const progressSection = (matrixSectionData) => {
  const title = matrixSectionData?.metrics?.data_metrics_section_title || "";
  const [firstPart, secondPart] = title
    .split("Data")
    .map((part, i) => (i === 0 ? part.trim() : "Data"));
  return (
    <>
      <div className="bg-[#F9F9F9] w-full overflow-hidden h-auto  ">
        <div className="flex flex-col md:flex-row justify-between py-16 md:py-28 lg:py-40 mx-6 lg:container lg:mx-auto">
          <div className="flex flex-col gap-5 text-center md:text-left mb-8 md:mb-0 w-full">
            <p className="text-[#373A40] font-bold text-[32px] md:text-[34px] lg:text-[44px] lg:leading-[53px] flex-wrap">
              {firstPart}{" "}
              <span className="text-[#006633] md:text-[#092015]">
                {secondPart}
              </span>
            </p>
            <span
              className="text-lg leading-[26px] font-normal break-words"
              dangerouslySetInnerHTML={{
                __html:
                  matrixSectionData?.metrics?.data_metrics_section_description,
              }}
            />
          </div>
          <div className="flex  justify-center flex-wrap md:flex-nowrap gap-4   md:justify-between md:gap-1 ">
            {matrixSectionData?.metrics?.data_metrics_section_metrics_items.map(
              (item) => (
                <ProgressCircle
                  key={item.sort}
                  value={item.name}
                  text={item.suffix}
                  subtext={cleanHTML(item?.description)}
                  percentage={item.percentage}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const renderWhyChooseUs = (services) => {
  return (
    <>
      {services?.map((item, i) => (
        <div className="flex justify-between md:gap-4 lg:gap-16 my-20" key={i}>
          <div className="hidden md:block md:w-1/2 rounded-md  drop-shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item?.img?.filename_disk}`}
              alt="wy-us"
              width={400}
              height={356}
              className="drop-shadow-lg w-full border-t-[12px]  border-[#01331A] h-[360px] object-fill grayscale rounded-md"
            />
          </div>
          <div className=" w-full md:w-1/2 ">
            <div className="flex justify-between items-center   mb-7">
              <h2 className=" md:text-2xl lg:text-3xl leading-8 font-bold text-[#01331A]">
                {item.title}
              </h2>
              {item?.call_to_actions?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.href || "#"}
                  className="text-[16px] leading-4  text-[#01331A] font-semibold"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            <div className="flex gap-[18px] flex-wrap">
              {item?.tags.map((solution, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block"
                >
                  {solution.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const renderWhyChooseMagnific = (
  whyMagnificSectionData,
  serviceSectionData
) => {
  const title = whyMagnificSectionData?.why_magnific_section?.title || "";
  const [firstPart, secondPart] = splitTextByWord(title, "Magnific?");

  return (
    <div className=" w-full h-full bg-[url('/circle-bg.svg')] bg-no-repeat bg-right ">
      <div className=" mx-6 lg:container lg:mx-auto py-20">
        <div className="">
          <DualColorHeader first={firstPart} second={secondPart} />
        </div>
        <p className="mt-4 text-[#373A40] font-normal  text-lg leading-6">
          {cleanHTML(whyMagnificSectionData?.why_magnific_section?.description)}
        </p>
        <h2 className="text-[#D0D0D0] font-bold text-[46px] leading-[54px] my-20">
          {serviceSectionData?.services_section?.title}
        </h2>
        {serviceSectionData?.services_section?.services && (
          <>
            {renderWhyChooseUs(serviceSectionData?.services_section?.services)}
          </>
        )}
      </div>
    </div>
  );
};
export default async function Home() {
  const {
    bannerData,
    serviceSectionData,
    jobSearchSection,
    matrixSection,
    whyMagnificSection,
    insightSection,
    testimonialsSection,
    resourcesSection,
  } = await HomePageData();
  const { Contact_Form_data } = await ContactFormData();
  const { InsightsSubPageContent } = await InsightsDetailsContent();
  const latestInsights = InsightsSubPageContent.slice(-4);

  return (
    <>
      <LandingHeroBanner bannerData={bannerData.banner} />
      <HomeJobSearchBar jobSearchSectionData={jobSearchSection} />
      {progressSection(matrixSection)}
      {renderWhyChooseMagnific(whyMagnificSection, serviceSectionData)}
      <ResponsiveCarousel Data={testimonialsSection.testimonials} />
      {renderDiscoverInsight(insightSection, latestInsights)}
      <div>
        {resourcesSection?.resources_section?.rows.map((resource) => (
          <ResourceSection
            key={resource.id}
            title={resource.title}
            description={resource.description}
            imageSrc={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${resource?.img?.filename_disk}`}
            buttonText={resource.call_to_actions[0]}
            orientation={resource.orientation}
          />
        ))}
      </div>
      <div className="lg:mx-10">
        {RenderContactUseComponent(Contact_Form_data)}
      </div>
    </>
  );
}
