/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magnific-directus-2p92s.ondigitalocean.app",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
