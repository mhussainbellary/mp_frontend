/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  transpilePackages: [
    "@repo/ui",
    "@repo/atoms",
    "@repo/organisms",
  ],
};

export default nextConfig;
