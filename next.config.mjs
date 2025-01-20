/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'magnific-directus-2p92s.ondigitalocean.app',
          pathname: '/assets/**', // Allows paths under /assets
        },
      ],
    },
  };
  
  export default nextConfig;
  