const path = require('path')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/logo2.png'
      }),
      process.env.NODE_ENV === 'production' ? new PrerenderSPAPlugin({
        // Absolute path to compiled SPA
        staticDir: path.resolve(__dirname, 'dist'),
        // List of routes to prerender
        routes: [
          '/',
          '/about',
          '/careers',
          '/contact',
          '/privacy',
          '/services',
          '/terms'
        ]
      }) : () => {},
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
