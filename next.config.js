/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
    ];
  },
  // distDir: "build",
};

module.exports = nextConfig;
