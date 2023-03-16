const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

// /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: "next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  reactStrictMode: true,
  fs: false,
  images: {
    domains: [
      "cf.shopee.sg",
      "images.unsplash.com",
      "media.istockphoto.com",
      "plus.unsplash.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/blog",
  //       permanent: true,
  //     },
  //   ];
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
