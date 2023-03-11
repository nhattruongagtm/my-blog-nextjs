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
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

};

module.exports = withPlugins([[withImages]], nextConfig);
