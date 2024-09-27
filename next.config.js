/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.cdn.ensonhaber.com",
      },
      {
        hostname: "assets-global.100-files.com",
      },
    ],
  },
  // distDir: "build",
};

module.exports = nextConfig;
