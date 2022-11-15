/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/nieuws/:slug*',
          destination: '/news/:slug*',
        },
      ],
    };
  },
  basePath: '/nl',
  trailingSlash: true,
};
