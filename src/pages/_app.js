"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/loader/Index";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
        setLoading(true);
      };
      
      const handleComplete = () => {
        setTimeout(() => setLoading(false), 500); // 500ms delay
      };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);



  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
