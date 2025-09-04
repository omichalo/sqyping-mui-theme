/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration Next.js 14 - appDir est activé par défaut
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
