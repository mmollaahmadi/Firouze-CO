/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['xrbax.com'],
  },
  experimental: {
    outputStandalone: true,
  }, 
};

module.exports = nextConfig;
