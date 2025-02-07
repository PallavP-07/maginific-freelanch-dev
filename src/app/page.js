import LandingHeroBanner from "@/components/LandingHeroBanner/Index";
import ResponsiveCarousel from "@/components/carousel/Index";
import { renderContatUseComponent } from "./contact/page";
import DualColorHeader from "@/components/dualColorHeader/Index";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ProgressCircle from "@/components/circleProgress/Index";
import HomePageData from '@/services/homePageData'
import ContactUsCompData from "@/services/ContactUsComp";

const renderDiscoverInsight = (insightSectionData) => {
	const title = insightSectionData?.insights_section?.title || "";
	const [firstPart, secondPart] = title.split("Insights").map((part, i) => i === 0 ? part.trim() : "Insights");
	const firstTwoCards = insightSectionData?.insights_section?.cards?.slice(0, 2);
	const lastTwoCards = insightSectionData?.insights_section?.cards?.slice(2, 4)
	return (
		<>
			<div className=" lg:container lg:mx-auto w-full my-20  mb-20">
				<div className=" mx-6 md:mx-20 lg:mx-36">
					<p className="font-medium text-[44px] leading-[54px] text-[#333333]">
						{firstPart}
					</p>
					<p className="font-semibold text-[44px] leading-[54px] text-[#026534] mb-12 ">
						{secondPart}</p>
					<div className="grid grid-cols-2 gap-5 md:gap-8 ">
						<div className="flex flex-col gap-5 md:gap-7">
							{firstTwoCards?.map((item, i) => (
								<>
									<div key={i} className={` ${item?.sort === 1 ? 'bg-[#CCE0D6] text-gray-800 h-[380px]' : 'bg-[#2A2B2F] text-white  h-[450px]'}   text-center  px-5 py-20 md:px-10   w-full  rounded-md`}>
										<h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-3xl lg:text-4xl mb-6">{item.title}</h2>
										<p className="font-normal leading-[28px] text-[16px]">{item.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}</p>
									</div>
								</>
							))}
						</div>
						<div className="flex flex-col w-full gap-5 md:gap-7">
							{lastTwoCards?.map((item, i) => (
								<>
									<div key={i} className={` ${item?.sort === 2 ? 'bg-[#D0D0D0] text-[#373A40] h-[380px]' : 'bg-[#2A2B2F] text-white h-[450px]'}   text-center  px-5 py-20 md:px-10   w-full  rounded-md`}>
										<h2 className="font-semibold leading-4 md:leading-7 text-[20px] md:text-3xl lg:text-4xl mb-6">{item.title}</h2>
										<p className="font-normal leading-[28px] text-[16px]">{item.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}</p>
									</div>
								</>
							))}
						</div>
					</div>
					<p className="text-[#01331A] font-semibold text-[20px] text-end leading-6 mt-8 ">Browse all Insights &gt;</p>
				</div>
			</div>
		</>
	)
}


const ResourcesGrid = (resourcesSectionData) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 ">
			<div className="hidden md:flex bg-[#2A2B2F] text-white md:flex-col md:justify-center md:p-10 lg:p-28 items-center">
				<div className="text-left w-full md:w-auto ">
					<h2 className="text-[39px] font-bold leading-[46px] mb-8">Candidate Resources</h2>
					<p className="mb-8 font-normal text-lg leading-6">
						A comprehensive toolbox of insights and materials to help you unlock your true potential.
					</p>
					<Button className="bg-[#026534] font-medium text-lg leading-5 text-white w-28 px-8 py-[10px] rounded-sm hover:bg-green-700">
						Browse
					</Button>
				</div>
			</div>
			<div className=" bg-cover bg-center relative  w-full h-[480px]" >
				<div className="w-full h-full">
					<Image src='/assets/Resources2.png' alt='content-1' width={100} height={100} 
						className="w-full h-full object-fill" />
				</div>
				<div className=" flex bg-black/50  text-white flex-col justify-center absolute inset-0 md:hidden px-5 py-20 items-center">
					<div className="text-center w-full md:w-auto">
						<h2 className="text-[32px] font-bold leading-[36px] mb-6">Candidate Resources</h2>
						<p className="mb-6 font-normal text-lg leading-6">
							A comprehensive toolbox of insights and materials to help you unlock your true potential.
						</p>
						<Button className="bg-[#026534] font-semibold text-lg leading-5 text-white w-full px-8 py-[12px] rounded-sm hover:bg-green-700">
							Browse
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-cover bg-center relative w-full h-[480px]">
				<div className="w-full h-full">
					<Image
						src='/assets/Resources1.png'
						alt='content-1'
					   width={100}
					   height={100}

						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex bg-black/50 text-white flex-col justify-center absolute inset-0 md:hidden px-6 py-20 items-center">
					<div className="text-center w-full md:w-auto">
						<h2 className="text-[40px] font-bold leading-[36px] mb-6">Hiring Resources</h2>
						<p className="mb-6 font-normal text-lg leading-6">
							A data-driven knowledge base to support your best practices and help you build a world-class team.
						</p>
						<Button className="bg-[#026534] font-semibold text-lg leading-5 text-white w-full px-8 py-[10px] rounded-sm hover:bg-green-700">
							Browse
						</Button>
					</div>
				</div>
			</div>
			<div className="hidden md:flex bg-[#2A2B2F] text-white md:flex-col md:justify-center md:p-10 lg:p-28 items-center">
				<div className="text-left w-full md:w-auto">
					<h2 className="text-[36px] font-bold leading-[46px] mb-8">Hiring Resources</h2>
					<p className="mb-8 font-normal text-lg leading-6">
						A data-driven knowledge base to support your best practices and help you build a world-class team.
					</p>
					<Button className="bg-[#026534] font-medium text-lg leading-5 text-white w-28 px-8 py-[10px] rounded-sm hover:bg-green-700">
						Browse
					</Button>
				</div>
			</div>
		</div>
	);
};


const progressSection = (matrixSectionData) => {
	const title = matrixSectionData?.metrics?.data_metrics_section_title || "";
	const [firstPart, secondPart] = title.split("Data").map((part, i) => i === 0 ? part.trim() : "Data");

	return (
		<>
			<div className="bg-[#F9F9F9] w-full overflow-hidden h-auto  ">
				<div className="flex flex-col md:flex-row justify-between py-16 md:py-28 lg:py-40 mx-6 lg:container lg:mx-auto">
					<div className="flex flex-col gap-5 text-center md:text-left mb-8 md:mb-0 w-full">
						<p className="text-[#373A40] font-bold text-[32px] md:text-[34px] lg:text-[44px] lg:leading-[53px] flex-wrap">{firstPart} <span className="text-[#006633] md:text-[#092015]">{secondPart}</span></p>
						<span className="text-lg leading-[26px] font-normal break-words">
							{matrixSectionData?.metrics?.data_metrics_section_description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
						</span>
					</div>
					<div className="flex  justify-center flex-wrap md:flex-nowrap gap-4   md:justify-between md:gap-1 ">
						{matrixSectionData?.metrics?.data_metrics_section_metrics_items.map(item => (
							<>
								<ProgressCircle key={item.sort} value={item.name} text={item.suffix} subtext={item.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')} percentage={item.percentage} />
							</>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

const renderJobSearchBar = (jobSearchSectionData) => {

	const title = jobSearchSectionData?.job_search_section?.title || "";
	const parts = title.includes("Today") ? title.split("Today") : [title, ""];
	const firstPart = parts[0]?.trim(); // Safely get the first part
	const secondPart = parts[1]?.trim() ? "Today" : ""; // Safely handle second part
	return (
		<>
			<div className="lg:container px-6 py-12 md:py-16 lg:py-20 lg:mx-auto w-full">
				<div className="pb-6">
					<DualColorHeader first={firstPart} second={`${secondPart}.`} />
				</div>
				<div className="flex flex-col md:flex-row items-start gap-4 mt-8 w-full">
					<div className="w-full">
						<Label
							htmlFor="Job Title"
							className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
						>
							{jobSearchSectionData?.job_search_section?.form_items[0]?.title}
						</Label>
						<Input
							type="text"
							placeholder={jobSearchSectionData?.job_search_section?.form_items[0]?.placeholder}
							className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
						/>
					</div>
					<div className="w-full">
						<Label
							htmlFor="Location"
							className="font-bold text-lg leading-5 text-[#2A2B2F] pb-3"
						>
							{jobSearchSectionData?.job_search_section?.form_items[1]?.title}
						</Label>
						<Input
							type="text"
							placeholder={jobSearchSectionData?.job_search_section?.form_items[1]?.title}
							className="placeholder:text-[#D0D0D0] w-full mt-2 p-5"
						/>
					</div>
					<div className="flex flex-col md:gap-2 gap-5 md:w-1/3 w-full mt-8">
						<div>
							<Button className="px-8 py-5 bg-[#026534] text-white w-full md:w-40 rounded-[3px] text-[18px] leading-5 font-semibold">
								{jobSearchSectionData?.job_search_section?.submit_btn?.title}
							</Button>
						</div>
						<Link
							href="/browse-jobs"
							className="font-semibold text-[20px] leading-7 border-b-2 border-[#006633] text-center py-1 text-[#006633] mx-auto"
						>
							{jobSearchSectionData?.job_search_section?.call_to_actions[0]?.title}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};


const renderwhyChooseUs = (services) => {
	return (
		<>
			{services?.map((item, i) => (
				
					<div className="flex justify-between md:gap-4 lg:gap-16 my-20" key={i}>
						<div className="hidden md:block md:w-1/2 rounded-md  drop-shadow-lg">
							<Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item?.img?.filename_disk}`} alt="wy-us" width={400} height={356} className="drop-shadow-lg w-full border-t-[12px]  border-[#01331A] h-[360px] object-fill grayscale rounded-md" />
						</div>
						<div className=" w-full md:w-1/2 ">
							<div className="flex justify-between items-center   mb-7">
								<h2 className=" md:text-2xl lg:text-3xl leading-8 font-bold text-[#01331A]">{item.title}</h2>
								{item?.call_to_actions?.map((item, i) => (
									<>
										<Link
											key={i}
											href={item?.href || "#"}
											className="text-[16px] leading-4  text-[#01331A] font-semibold"
										>
											{item?.title}
										</Link>
									</>
								))}
							</div>
							<div className="flex gap-[18px] flex-wrap">
								{item?.tags.map((solution, index) => (
									<Badge key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution.title}</Badge>
								))}
							</div>
						</div>
					</div>
				
			))
			}
		</>
	)
}

const renderWhyChooseMagnific = (whyMagnificSectionData,
	serviecSectionData) => {
	const title = whyMagnificSectionData?.why_magnific_section?.title || "";
	const [firstPart, secondPart] = title.split("Magnific?").map((part, i) => i === 0 ? part.trim() : "Magnific?");

	return (
		
			<div className=" w-full h-full bg-[url('/circle-bg.svg')] bg-no-repeat bg-right ">
				<div className=" mx-6 lg:container lg:mx-auto py-20">
					<div className="">
						<DualColorHeader first={firstPart} second={secondPart} />
					</div>
					<p className="mt-4 text-[#373A40] font-normal  text-lg leading-6">
						{whyMagnificSectionData?.why_magnific_section?.description?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}</p>
					<h2 className="text-[#D0D0D0] font-bold text-[46px] leading-[54px] my-20">
						{serviecSectionData?.services_section?.title}</h2>
					{serviecSectionData?.services_section?.services &&
						(
							<>
								{renderwhyChooseUs(serviecSectionData?.services_section?.services)}
							</>
						)
					}
				</div>
			</div>
		
	)
}
export default async function Home() {
	const { bannerData,
		
		serviecSectionData,
		jobSearchSection,
		matrixSection,
		whyMagnificSection,
		insightSection,
		testimonialsSection,
		resourcesSection
	} = await HomePageData();
	return (
		<>
			<LandingHeroBanner bannerData={bannerData.banner} />
			{renderJobSearchBar(jobSearchSection)}
			{progressSection(matrixSection)}
			{renderWhyChooseMagnific(whyMagnificSection, serviecSectionData)}
			<ResponsiveCarousel Data={testimonialsSection.testimonials} />
			{renderDiscoverInsight(insightSection)}
			{ResourcesGrid(resourcesSection)}
			<div className="lg:mx-10">
				{renderContatUseComponent()}
			</div>
		</>
	);
}

