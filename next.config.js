/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Allows images from localhost
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/img/f/**', // Matches /img/f/ and all subpaths
      },
    ],
    // Optional: Cache images for 1 year (adjust as needed)
    minimumCacheTTL: 31536000, // 1 year in seconds
    // Optional: Disable unoptimized images unless explicitly allowed
    unoptimized: false, // Set to true if you need to bypass optimization (e.g., for SVGs)
  },
};

module.exports = nextConfig;