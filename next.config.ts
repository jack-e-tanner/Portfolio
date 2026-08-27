import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  allowedDevOrigins: ["192.168.4.96"],
};

export default nextConfig;
