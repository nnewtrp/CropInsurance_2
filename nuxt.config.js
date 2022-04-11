import colors from 'vuetify/es5/util/colors'
const env = process.env.NODE_ENV || 'development'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Crop Insurance System',
    title: 'Crop Insurance',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-leaflet',
    '@nuxtjs/dotenv',
  ],

  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/index.js'
    }
  ],

  devtool: (env === 'development') ? 'inline-source-map' : false,
  env: {
    baseUrl: process.env.NUXT_URL || 'localhost'
  },
  server: {
    host: process.env.NUXT_HOST || 'localhost' // default: localhost
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.SERVER_URL || '/api',
    credentials: false,
    proxyHeaders: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {icons: 'fa'},
    theme: {
      // dark: true,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#4F7A44',
          accent: '#FAB51E',
          secondary: '#F6E4CF',
          info: '#00CAE3',
          warning: '#FB8C00',
          error: '#FF5252',
          success: '#4CAF50',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
