const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = {
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './src/assets/logo2.png'
      }),
      new SitemapPlugin('https://www.vihanti.com',
        [
          '/',
          '/about',
          '/careers',
          '/contact',
          '/privacy',
          '/services',
          '/terms'
        ],
        {
          fileName: 'sitemap.xml',
          lastMod: true,
          changeFreq: 'monthly'
        }
      )
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
