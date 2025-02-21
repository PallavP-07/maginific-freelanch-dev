import { Badge } from "@/components/ui/badge";
import TypeSelection from "../typeSelection/Index";
import DualColorHeader from "../dualColorHeader/Index";
function Solutions() {
  const solutions = [
    "Executive Search",
    "RPO",
    "Talent Strategy & Advisory",
    "Projects & Contracts",
    "Interim Talent",
    "Projects & Contracts",
    "RaaS",
    "Professional Search",
  ];

  return (
    <div className="  py-8 px-4   ">
      <div className="lg:container lg:mx-auto mx-4 ">
        {/* Title Section */}
        <div className="flex justify-between items-center md:border-b-4 border-[#CCE0D6] pb-3 mb-7">
          <h2 className="text-xl leading-6 font-bold text-[#01331A]">
            Solutions
          </h2>
          <a
            href="#"
            className="text-[16px] leading-4  text-[#01331A] font-semibold "
          >
            Read More &gt;
          </a>
        </div>
        {/* Solutions Buttons */}
        <div className="flex    gap-4 items-center flex-wrap">
          {solutions.map((solution, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block"
            >
              {solution}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustryExpertise() {
  const solutions = [
    "Financial Services ",
    "Technology",
    "Healthcare",
    "Pharmaceuticals & Medical Devices",
    "Non Profit",
    "Consumer",
    "Real Estate",
    "Venture Capital",
    "Private Equity ",
    "Professional Services",
  ];

  return (
    <div className=" py-8 px-4  md:mx-0   mb-8">
      <div className="lg:container lg:mx-auto mx-4">
        {/* Title Section */}
        <div className="flex justify-between items-center md:border-b-4 border-[#CCE0D6] pb-3 mb-7">
          <h2 className="text-xl leading-6 font-bold text-[#01331A]">
            Industry Expertise
          </h2>
          <a
            href="#"
            className="text-[16px] leading-4  text-[#01331A] font-semibold"
          >
            Read More &gt;
          </a>
        </div>
        {/* Solutions Buttons */}
        <div className="flex w-[380px]  md:w-full  gap-4 items-center flex-wrap">
          {solutions.map((solution, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block"
            >
              {solution}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategoryList() {
  const categories = [
    {
      title: "Legal & Compliance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Human Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Accounting, Finance & Tax",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Data Procurement & Supply Chain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Sales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Customer Success",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Business Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Technology & Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
    {
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do.",
    },
  ];

  return (
    <>
      
      
        <div className="min-h-screen   md:mx-0  p-4 sm:p-6 lg:py-8 lg:px-0">
          <div className="mx-auto space-y-2">
            {categories.map((category, index) => (
              <TypeSelection
                title={category.title}
                discription={category.description}
                key={index}
              />
            ))}
          </div>
        </div>
        {Solutions()}
        {IndustryExpertise()}
      
    </>
  );
}
