const process = require('process');
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.APP_BASE_URL,
  // @NOTE: Start-time environment variables, can be read from `import '~/lifecycle/config'`
  publicRuntimeConfig: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
  },
};
