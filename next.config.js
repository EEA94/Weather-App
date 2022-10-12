/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: "ccf9f55b72fa047c570eb9f706cc35d7"
  },
  images: {
    domains: ['openweathermap.org'],
  },
}


module.exports = nextConfig
