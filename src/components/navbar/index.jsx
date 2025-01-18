"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import clsx from "clsx";
const renderDropDownMenu = () => {
  return (
    <>
      <div className="rounded-b-lg  shadow-inner w-[1336px] bg-white text-black  py-6 px-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -z-20 translate-y-[-100%] transition-all duration-500 invisible group-hover:visible">
        <div className="lg:container lg:mx-auto mx-6">
          <h2 className="text-2xl md:text-xl flex leading-[65px]  font-semibold  text-[#01331A] border-b-2 border-[#CCE0D6] pb-2 mb-4 sm:mb-2 w-full sm:w-full">
            Solution &gt;

          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8   text-sm text-gray-700">
            <p>Legal & Compliance</p>
            <p>Data Procurement & Supply Chain</p>
            <p>Customer Success</p>
            <p>Product</p>
            <p>Human Resources</p>
            <p>Sales</p>
            <p>Business Development</p>
            <p>Cyber Security</p>
            <p>Accounting, Finance & Tax</p>
            <p>Marketing</p>
            <p>Technology & Engineering</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default function CustomNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false); // Track if a menu is hovered
  const [openDropdown, setOpenDropdown] = React.useState(null);
   // Track the open dropdown (null if none)
   const [showMobileMenu, setShowMobileMenu] = React.useState(false);
   const [showMobileSubMenu, setShowMobileSubMenu] = React.useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setIsHovered(!isHovered)
    setIsScrolled(!isScrolled)
    setShowMobileSubMenu(false);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || openDropdown || isHovered) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openDropdown, isHovered]);

  return (
    <nav
      className={cn(
        "fixed top-0   z-50 transition-all duration-300 w-full",
        (isScrolled || isHovered) ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      )}
    >
      <div className="lg:container lg:mx-auto mx-6 flex items-center justify-between lg:py-5">
        {/* Logo */}
        <Link href="/" legacyBehavior className="lg:w-1/3">
          <Image
            src={isScrolled || isHovered ? "/navblogo.svg" : "/navwlogo.svg"}
            alt="nav-logo"
            width={120}
            height={120}
          />
        </Link>

        {/* Navigation Menu */}
        <div className="lg:w-2/3 lg:flex lg:justify-between lg:items-center lg:gap-5">
          <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-6  ">
            {/* About */}
            <li>
              <Link
                href="/about-us"
                className={cn(
                  "hover:font-semibold  font-normal text-[16px] ",
                  isScrolled || isHovered && "hover:text-black hover:font-semibold font-normal text-[16px]"
                )}
              >
                About
              </Link>
            </li>

            {/* Solutions Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when hovering
              onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when not hovering
            >
              <a
                className={cn(
                  "bg-transparent flex items-center font-normal text-[16px] hover:bg-transparent  hover:font-semibold",
                  isScrolled || isHovered && "hover:text-black hover:font-semibold"
                )}
              >
                Solutions
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
              </a>
              {/* Show dropdown on hover */}
              <div
                className={cn(
                  "absolute left-[-570px] top-[51px]  "
                )}
              >
                {/* {renderDropDownMenu()} */}

              </div>
            </li>

            {/* Expertise Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when hovering
              onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when not hovering
            >
              <a
                className={cn(
                  "bg-transparent tracking-[1px] flex items-center font-normal text-[16px] hover:bg-transparent  hover:font-semibold",
                  isScrolled || isHovered && "hover:text-black hover:font-semibold"
                )}
              >
                Expertise
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
              </a>
              {/* Show dropdown on hover */}
              <div
                className={cn(
                  "absolute left-[-680px] top-[51px] "
                )}
              >
                {/* {renderDropDownMenu()} */}
              </div>
            </li>

            {/* Insights */}
            <li>
              <Link
                href="/Insights"
                className={cn(
                  "hover:font-semibold hover:text-white font-normal text-[16px]",
                  isScrolled && "hover:text-black hover:font-semibold"
                )}
              >
                Insights
              </Link>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#" legacyBehavior>
              <a
                className={cn(
                  "px-3 py-[8px] rounded-[60px] text-[16px] border hover:bg-white hover:border-gray-900 hover:text-black tracking-[1px] font-medium leading-5",
                  isScrolled || isHovered
                    ? "bg-transparent text-black border-gray-700"
                    : "bg-gray-100 bg-opacity-20 border-white"
                )}
              >
                Browse Jobs
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a
                className={cn(
                  "px-3 py-[8px] rounded-3xl tracking-[1px] text-[16px] font-semibold border transition-all duration-300 leading-5 ",
                  isScrolled || isHovered
                    ? "bg-[#026534] text-white border-transparent hover:bg-[#0e3a25] hover:border-white"
                    : "bg-[#026534] text-white border-[#026534] hover:bg-[#0e3b25] hover:text-white hover:border-white"
                )}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        {/* mobile hamburger menu */}
        <div className="lg:hidden">
          <svg
         
           onClick={toggleMobileMenu}
            className={`bars ${showMobileMenu ? "active" : ""}`}
            viewBox="0 0 100 100"
            // onClick={(e) => e.target.classList.toggle('active')}
          >
            <path
              className={`line top ${isScrolled ? 'stroke-black' : 'stroke-white'}`}  // Apply conditional class
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className={`line middle ${isScrolled ? 'stroke-black' : 'stroke-white'}`}  // Apply conditional class
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className={`line bottom ${isScrolled ? 'stroke-black' : 'stroke-white'}`}  // Apply conditional class
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
          <div
              className={clsx(
                "fixed inset-0 z-50 overflow-y-auto bg-gray-100 w-full   md:w-1/2  top-[80px] left-0  transition-transform ease-in-out duration-500 flex flex-col justify-between",
                
                showMobileMenu ? 'translate-x-0 md:w-1/2' : '-translate-x-full md:1/2 '
              )}
            >
           <div className="px-8 py-10  max-h-[100vh] flex flex-col gap-16">
            <ul className="text-[24px]  leading-10 text-[#01331A] font-semibold">
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
         
        </div>
      </div>
    </nav>
  );
}
