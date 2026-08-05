import { withPlausibleProxy } from "next-plausible";

/* const nextConfig: NextConfig = {
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
}; */

export default withPlausibleProxy({
  src: "https://plausible.ghostbyte.dev/js/script.hash.outbound-links.js",
})({});
