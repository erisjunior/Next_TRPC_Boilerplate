import './src/application/config/env/index.js'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: [] },
  experimental: {
    esmExternals: false
  }
}

export default config
