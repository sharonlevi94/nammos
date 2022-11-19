import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Nammos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/auth-next',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_ENV_API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: "nammos.png",
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    manifest: {
      name: 'Nammos App',
      lang: 'he'
    }
  },

  // Auth module configuration
  auth: {
    redirect: {
      login: '/welcome',
      logout: '/welcome',
      home: '/home'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
          // required: true,
          // type: ''
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          // Get the token of the user from the server
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          // user: false
          // Get the user information from the server
          user: false
          // user: { url: 'auth/find-one', method: 'get', propertyName: 'user' }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    host: 0
  }
}
