/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Pass environment variables explicitly to Next.js
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  // Optional: enable debug logging for env variables
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("DEBUG in next.config.js:", process.env.OPENAI_API_KEY);
    }
    return config;
  },
};

module.exports = nextConfig;


