import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/Admin_Dashboard",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
