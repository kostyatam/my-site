import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  compress: false,
  trailingSlash: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
