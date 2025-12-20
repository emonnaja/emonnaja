import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emonnprjkt.b-cdn.net",
        pathname: "/images/**",
      }
    ],
  },
};

export default nextConfig;
