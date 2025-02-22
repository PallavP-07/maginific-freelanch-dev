"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import MainLogo from "../logo";
const subMenuContent = [
  {
    title: "Legal & Compliance ",
  },
  {
    title: "Data Procurement & Supply Chain",
  },
  {
    title: "Customer Success",
  },
  {
    title: "Product",
  },
  {
    title: "Human Resources",
  },
  {
    title: "Sales",
  },
  {
    title: "Business Development",
  },
  {
    title: "Cyber Security",
  },
  {
    title: "Accounting, Finance & Tax",
  },
  {
    title: "Marketing",
  },
  {
    title: "Technology & Engineering",
  },
];
const RenderDropDownMenu = ({ positionLeft }) => {
  return (
    <div
      className={`absolute top-[100%] border-b-lg transform -translate-x-1/2 shadow-inner  hidden group-hover:flex bg-white text-gray-800 w-screen `}
      style={{ left: positionLeft }}
    >
      <div className="lg:container lg:mx-auto my-8">
        <div className="w-full">
          <h2 className="text-[#01331A] pb-3 text-[20px] leading-8 font-semibold border-b-2 border-[#CCE0D6]">
            Solutions &gt;
          </h2>
          <div className="grid grid-cols-4 w-auto py-10 gap-5 ">
            {subMenuContent.map((title, i) => (
              <a
                key={i}
                href="#"
                className="block text-[#737475] hover:text-[#01331A] font-normal text-sm leading-5"
              >
                {title.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomNavbar = (AllContent) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = React.useState(false);
  const router = useRouter();

  const renderMobileNavMenu = () => {
    return (
      <>
        <div
          className={clsx(
            "fixed min-h-screen inset-0 z-50 overflow-y-auto bg-gray-100 w-full md:w-1/2 top-[80px] left-0 transition-transform ease-in-out duration-500 flex flex-col justify-between",

            showMobileMenu
              ? "translate-x-0 md:w-1/2"
              : "-translate-x-full md:w-1/2"
          )}
        >
          <div className="px-8 py-10  ">
            <ul className="text-[24px] leading-10 text-[#01331A] font-semibold flex flex-col gap-[57px]">
              <li>About</li>
              <li>Solution &gt; </li>
              <li>Expertise &gt; </li>
              <li>Functions &gt; </li>
              <li>Insights</li>
              <li>Browse Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
    if (isScrolled == false) {
      setIsScrolled(true);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || isHovered || openDropdown) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered, openDropdown]);

  return (
    <nav
      className={cn(
        "fixed top-0 drop-shadow-md  z-10  w-full",
        isScrolled || isHovered
          ? "bg-white text-black "
          : "bg-transparent text-white "
      )}
    >
      <div
        className={`lg:container lg:mx-auto   flex items-center justify-between ml-6 `}
      >
        <Link href="/" className="lg:w-1/3 cursor-pointer">
          <MainLogo color={isScrolled || isHovered ? "dark" : "main"} />
        </Link>
        {/* Navigation Menu */}
        <div className="lg:w-2/3 lg:flex lg:justify-between lg:items-center lg:gap-5">
          <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-6 lg:leading-[80px] ">
            {AllContent?.AllContent?.navigation_items
              .slice(0, 4)
              .map((item) => (
                <li
                  key={item.sort}
                  className={item.is_expandable ? "relative group" : ""}
                  onMouseEnter={() => item.is_expandable && setIsHovered(true)}
                  onMouseLeave={() => item.is_expandable && setIsHovered(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "font-normal text-[16px] hover:font-semibold",
                      (isScrolled || isHovered) && "hover:font-semibold",
                      item.is_expandable && "flex items-center relative"
                    )}
                  >
                    {item.name}
                    {item.is_expandable && (
                      <svg
                        className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-all duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.is_expandable && isHovered && (
                    <RenderDropDownMenu
                      positionLeft={item.name === "Solutions" ? "100%" : "-20%"}
                    />
                  )}
                </li>
              ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            {AllContent?.AllContent?.navigation_items
              .slice(4, 6)
              .map((item) => (
                <Link
                  key={item.sort}
                  href={item.href}
                  className={
                    item.name === "Browse Jobs"
                      ? cn(
                          "px-3 py-[8px] rounded-[60px] text-[16px] border hover:bg-white hover:border-gray-900 hover:text-black tracking-[1px] font-medium leading-5",
                          isScrolled || isHovered
                            ? "bg-transparent text-black border-gray-700"
                            : "bg-gray-100 bg-opacity-20 border-white"
                        )
                      : cn(
                          "px-3 py-[8px] rounded-3xl tracking-[1px] text-[16px] font-semibold border transition-all duration-300 leading-5 ",
                          isScrolled || isHovered
                            ? "bg-[#026534] text-white border-transparent hover:bg-[#0e3a25] hover:border-white"
                            : "bg-[#026534] text-white border-[#026534] hover:bg-[#0e3b25] hover:text-white hover:border-white"
                        )
                  }
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
        {/* mobile hamburger menu */}
        <div className="lg:hidden">
          <svg
            onClick={toggleMobileMenu}
            className={`bars ${showMobileMenu ? "active" : ""}`}
            viewBox="0 0 100 100"
          >
            <path
              className={`line top ${
                isScrolled ? "stroke-black" : "stroke-white"
              }`} // Apply conditional class
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className={`line middle ${
                isScrolled ? "stroke-black" : "stroke-white"
              }`} // Apply conditional class
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className={`line bottom ${
                isScrolled ? "stroke-black" : "stroke-white"
              }`} // Apply conditional class
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
          {renderMobileNavMenu()}
        </div>
      </div>
    </nav>
  );
};
export default CustomNavbar;
