import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "cdn.yoursite.com", // optional (if you add a custom domain later)
      // },
    ],
  }
};

export default nextConfig;
