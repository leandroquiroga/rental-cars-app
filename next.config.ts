import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "er35jb760n.ufs.sh",
        port: "",
        pathname: "/**"
      },
    ]
  }
};

export default nextConfig;
