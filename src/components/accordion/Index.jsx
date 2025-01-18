import { Badge } from "@/components/ui/badge"
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
                    <h2 className="text-xl leading-6 font-bold text-[#01331A]">Solutions</h2>
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
                
                        <Badge  key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution}</Badge>
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
                    <h2 className="text-xl leading-6 font-bold text-[#01331A]">Industry Expertise</h2>
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
                     <Badge  key={index} variant="outline" className='text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 inline-block'>{solution}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default function CategoryList() {
    const categories = [
        { title: "Legal & Compliance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Human Resources", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Accounting, Finance & Tax", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Data Procurement & Supply Chain", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Sales", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Customer Success", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Business Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Technology & Engineering", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
        { title: "Product", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. consectetur adipiscing elit, sed do." },
    ];

    return (
        <>

            <div>
                <div className="lg:container  mx-4  lg:mx-auto mt-12 mb-4">
                    <h2 className="text-2xl  md:text-3xl leading-9  font-semibold  text-[#373A40] border-b-2 border-[#CCE0D6] pb-3 mb-7 sm:mb-2 w-full sm:w-full">
                        Industries We <span className=" font-bold text-2xl md:text-3xl leading-9 text-[#01331A]">Serve</span>
                    </h2>

                </div>
                <div className="min-h-screen   md:mx-0  p-4 sm:p-6 lg:py-8 lg:px-0">
                    <div className="mx-auto space-y-2">
                        {categories.map((category, index) => (
                          <div
                          key={index}
                          className="group hover:bg-[#01331A] transition-colors duration-300"
                        >
                          <div className="flex gap-6 md:gap-4 items-center justify-between py-6 sm:space-y-0 lg:container lg:mx-auto">
                            <div className="max-w-5xl group-hover:text-white">
                              <h2 className="leading-6 text-xl font-bold text-[#01331A] group-hover:text-white border-b-2 border-[#CCE0D6] pb-3 mb-4 sm:mb-4 w-full sm:w-96">
                                {category.title}
                              </h2>
                              <p className="text-[16px] font-normal md:w-[50rem] leading-5 text-[#737475] group-hover:text-white">
                                {category.description}
                              </p>
                            </div>
                        
                            {/* SVG Icon */}
                            <div className="self-start sm:self-center group-hover:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10 text-[#01331A] group-hover:text-white transition-colors duration-300 mt-4 lg:mt-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        ))}
                    </div>
                </div>


                {Solutions()}
                {IndustryExpertise()}
            </div>
        </>
    );
}
