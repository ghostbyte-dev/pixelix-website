import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPlausibleProxy({
  customDomain: "https://plausible.ghostbyte.dev",
  scriptName: "script.hash.outbound-links",
})(nextConfig);
