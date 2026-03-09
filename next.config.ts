import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pharmacycouncil.org",
      },
    ],
  },
};

export default nextConfig;
