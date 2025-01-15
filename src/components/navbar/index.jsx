"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CustomNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false); // Track if a menu is hovered
  const [openDropdown, setOpenDropdown] = React.useState(null); // Track the open dropdown (null if none)

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
      <div className="lg:container lg:mx-auto mx-6 flex items-center justify-between py-5">
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
              href="#"
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
                "absolute left-[-400px]  rounded-b-lg top-[53px] w-[1020px] bg-white text-black shadow-lg py-6 px-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible"
              )}
            >
              <div className="mx-auto max-w-7xl px-8 pt-4 pb-6">
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
                "absolute left-[-500px] rounded-b-lg top-[53px] w-[1020px] bg-white text-black shadow-lg py-6 px-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible"
              )}
            >
              <div className="mx-auto max-w-7xl px-8 pt-4 pb-6">
                
                <h2 className="text-2xl md:text-xl flex leading-[65px]  font-semibold  text-[#01331A] border-b-2 border-[#CCE0D6] pb-2  sm:mb-2 w-full sm:w-full">
                Expertise &gt;
              
                    </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 ">
                  <p>Strategy Consulting</p>
                  <p>Market Analysis</p>
                  <p>Brand Management</p>
                  <p>Technology Advisory</p>
                </div>
              </div>
            </div>
          </li>

          {/* Insights */}
          <li>
            <Link
              href="#"
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

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Link href="/" legacyBehavior>
            <Image
              src={isScrolled ? "/HamBlack.svg" : "/HamWhite.svg"}
              alt="ham-burger"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
