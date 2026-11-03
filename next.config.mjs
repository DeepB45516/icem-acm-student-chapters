/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === "1" || Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV);
const basePath = isVercel ? "" : (process.env.NEXT_PUBLIC_BASE_PATH || "/icem-acm");

const nextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

