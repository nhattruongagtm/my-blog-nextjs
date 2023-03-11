const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cf.shopee.sg", "images.unsplash.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
