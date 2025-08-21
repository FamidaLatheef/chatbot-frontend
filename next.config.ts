import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("DEBUG in next.config.js:", process.env.OPENAI_API_KEY);
    }
    return config;
  },
};

export default nextConfig;



