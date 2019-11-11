const envConfig = require(`./config/${process.env.NODE_ENV}`)
const plugins = []
if (process.env.NODE_ENV !== 'production') {
  plugins.push('~/plugins/axios')
}
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Coder211 - Coder Tech Talk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e86100' },
  /*
   ** Global CSS
   */
  css: [
    'static/style.css',
    'static/font/font-awesome/css/all.min.css',
    'static/font/lato/font.css'
  ], // REMOVE ANT DESIGN
  // css: ['ant-design-vue/dist/antd.css'], // REMOVE ANT DESIGN
  /*
   ** Plugins to load before mounting the App
   */
  plugins, // REMOVE ANT DESIGN
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: envConfig.API_URL
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    filenames: {
      chunk: '[name].js'
    },
    extend(config, ctx) {
      // const path = require('path');
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.devtool = '#source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: ['@nuxtjs/dotenv'],
  server: {
    port: 3001
  }
}
