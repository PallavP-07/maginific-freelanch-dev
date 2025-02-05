"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCollectionData } from "@/lib/directus";

const MainLogo = ({ color }) => {
  const [logos, setLogos] = useState({ dark: null, main: null });

  useEffect(() => {
    const fetchLogos = async () => {
      const { response: LogoData } = await fetchCollectionData("appearence", {
        fields: ["logo_dark.*", "logo_main.*"],
      });

      setLogos({
        dark: LogoData?.logo_dark?.filename_disk
          ? `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${LogoData.logo_dark.filename_disk}`
          : null,
        main: LogoData?.logo_main?.filename_disk
          ? `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${LogoData.logo_main.filename_disk}`
          : null,
      });
    };

    fetchLogos();
  }, []);

  const selectedLogo =
    color?.toLowerCase() === "dark" ? logos.dark : logos.main;

  if (!selectedLogo) return null; // Avoid rendering an empty image tag

  return (
    <Image
      src={selectedLogo}
      alt="Main Logo"
      width={0}
      height={0}
      priority
      className="w-[140px] h-auto"
    />
  );
};

export default MainLogo;
