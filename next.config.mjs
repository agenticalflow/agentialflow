/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/agentialflow',
  assetPrefix: '/agentialflow/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig