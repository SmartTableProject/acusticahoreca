import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/acustica-roma",
        destination: "/acustica-ristorante-roma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
