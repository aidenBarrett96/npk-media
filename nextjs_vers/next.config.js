const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const nextImages = {
  images: {
    domains: ['a.storyblok.com']
  }
}


// remove before going live
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/npk-sitemap.xml',
        destination: '/api/npk-sitemap'
      }
    ]
  }
}


module.exports = withPlugins([
  [withImages],
  [withBundleAnalyzer],
  [nextImages]
], nextConfig)