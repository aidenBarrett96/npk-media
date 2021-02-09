const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const nextConfig = {
  // webpack: (config, {isServer}) => {
  //   if (isServer) {
  //     require('./utils/sitemap.tsx')
  //   }
  //   return config
  // }
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
  withImages
], nextConfig)




// module.exports = {
//     webpack: (config, {isServer}) => {
//       if (isServer) {
//         require('./utils/sitemap.tsx')
//       }
//       return config
//     }
//   },
//   withImages({})

// ,
  // { 
  //   images: {
  //     domains: ['https://a.storyblok.com/'],
  //   }
  // }