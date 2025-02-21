"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll to top on route change

  return null;
};

export default ScrollToTop;
