import { Inter } from "next/font/google";
import "./globals.css";

import CustomNavbar from "@/components/navbar";
import Footer from "@/components/footer/Index";
import NavbarWrapper from "@/components/navbar/NavBarWrapper";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
});
// Metadata for your app
export const metadata = {
  title: "Magnific",
  description: "Tomorrow's talent, Today.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={inter.variable}
        
      >
        <NavbarWrapper />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
