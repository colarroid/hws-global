import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * /community was the organisations page until it was renamed. Nothing
   * indexes the site yet, but the old address has been in emails and in a
   * demo, and an organisation we are asking for ten minutes of its time
   * should not be met with a 404.
   */
  async redirects() {
    return [
      { source: "/community", destination: "/for-organisations", permanent: true },
    ];
  },
};

export default nextConfig;
