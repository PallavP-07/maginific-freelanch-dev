import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// Configure fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Customize weights as needed
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
