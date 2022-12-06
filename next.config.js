/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ["rb.gy", "image.tmdb.org"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        // port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "rb.gy",
        // port: "",
        pathname: "/**",
      },
    ],
  },
};
