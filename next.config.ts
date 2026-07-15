import type { NextConfig } from "next";

const isGithub = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithub ? "/veda0013391" : "",
  assetPrefix: isGithub ? "/veda0013391/" : "",
};

export default nextConfig;