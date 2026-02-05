import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // Yeh line sabse important hai static deployment ke liye
  images: {
    unoptimized: true, // Shared hosting par image optimization support nahi hota
  },
};

export default nextConfig;
