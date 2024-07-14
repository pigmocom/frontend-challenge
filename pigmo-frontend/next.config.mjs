/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreDuringBuilds: true,
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
