// components/CategoryList.js


// components/Solutions.js
function Solutions() {
    const solutions = [
        "Executive Search",
        "RPO",
        "RaaS",
        "Talent Strategy & Advisory",
        "Interim Talent",
        "Projects & Contracts",
        "Professional Search",
    ];

    return (
        <div className="mx-4 md:mx-0 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title Section */}
                <div className="flex justify-between items-center md:border-b-2 border-[#CCE0D6] pb-4 mb-6">
                    <h2 className="text-xl leading-6 font-bold text-[#01331A]">Solutions</h2>
                    <a
                        href="#"
                        className="text-[16px] leading-4  text-[#01331A] font-semibold "
                    >
                        Read More &gt;
                    </a>
                </div>
                {/* Solutions Buttons */}
                <div className="flex  md:w-[800px]  gap-5 items-center flex-wrap">
                    {solutions.map((solution, index) => (
                        <p
                            key={index}
                            className="bg-gray-100 bg-opacity-40 text-[#737475] font-semibold text-lg leading-[44px] sm:text-base py-1 px-2 border  rounded-lg  transition inline-block"
                        >
                            {solution}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

function IndustryExpertise() {
    const solutions = [
        "Technology",
        "Healthcare",
        "Non Profit",
        "Private Equity ",
        "Financial Services ",
        "Pharmaceuticals & Medical Devices",
        "Professional Services",
        "Consumer",
        "Real Estate",
        "Venture Capital",

    ];

    return (
        <div className=" py-8 px-4 mx-4 md:mx-0 sm:px-6 lg:px-8 mb-8">
            <div className="max-w-5xl mx-auto">
                {/* Title Section */}
                <div className="flex justify-between items-center md:border-b-2 border-[#CCE0D6] pb-4 mb-6">
                    <h2 className="text-xl leading-6 font-bold text-[#01331A]">Industry Expertise</h2>
                    <a
                        href="#"
                        className="text-[16px] leading-4  text-[#01331A] font-semibold"
                    >
                        Read More &gt;
                    </a>
                </div>
                {/* Solutions Buttons */}
                <div className="flex w-[380px]  md:w-[800px]  gap-4 items-center flex-wrap">
                    {solutions.map((solution, index) => (
                        <p
                            key={index}
                            className="bg-gray-100 bg-opacity-40 text-[#737475] font-semibold text-[16px] leading-[44px] sm:text-base py-1 px-2 border  rounded-md  transition inline-block"
                        >
                            {solution}
                        </p>
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
                <div className="max-w-5xl mx-4 lg:mx-auto mt-12 mb-4">
                    <h2 className="text-2xl md:text-3xl leading-9  font-semibold  text-[#373A40] border-b-2 border-[#CCE0D6] pb-2 mb-4 sm:mb-2 w-full sm:w-full">
                        Industries We <span className=" font-bold text-2xl md:text-3xl leading-9 text-[#01331A]">Serve</span>
                    </h2>

                </div>
                <div className="min-h-screen mx-4 md:mx-0 text-[#01331A] p-4 sm:p-6 lg:py-8 lg:px-0">
                    <div className="mx-auto space-y-2">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex gap-6 md:gap-4 items-center justify-between py-6 sm:space-y-0 hover:bg-[#01331A] "
                            >
                                {/* Title and description */}
                                <div className="lg:pl-40 hover:text-white">
                                    <h2 className="leading-6 text-xl font-bold border-b-2  border-[#CCE0D6] pb-4 mb-5 sm:mb-3 w-full sm:w-96 hover:text-white">
                                        {category.title}
                                    </h2>
                                    <p className="text-[16px] font-normal leading-5 text-gray-400 text-wrap">{category.description}</p>
                                </div>

                                {/* SVG Icon */}
                                <div className="self-start sm:self-center lg:pr-40 hover:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10 text-[#01331A] hover:text-white mt-20 md:mt-4 lg:mt-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"

                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
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
