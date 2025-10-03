import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/js/script.hash.outbound-links.js",
        destination:
          "https://plausible.ghostbyte.dev/js/script.hash.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.ghostbyte.dev/api/event",
      },
    ];
  },
};

export default nextConfig;
