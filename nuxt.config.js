// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "",
    title: "Edgistify",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/logo E.png' },
    //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-pluginsw
  plugins: [
    // { src: '~plugins/axios.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ["@nuxtjs/vuetify", { treeShake: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // ['nuxt-gmaps', {
    //   key: 'AIzaSyAwhcAlWyjKjsAaInnzcgj7D1g0JEuj5j8',
    //   //you can use libraries: ['places']
    // }],
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    // 'nuxt-material-design-icons'
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
  ],
  router: {
    // middleware: ['roles']
  },
  axios: {
    // proxy: true,
    proxy: false,
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3333/api/v1' : 'http://13.127.176.132:3333/api/v1',
  },

  // proxy: {
  //   '/api_c/': { target: process.env.BASE_API_URL, pathRewrite: { '^/api_c/': '/' }, changeOrigin: true },
  //   '/api_w/': { target: process.env.BASE_WH_URL, pathRewrite: { '^/api_w/': '/' }, changeOrigin: true },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en'
  //   }
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  // content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: false,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3,
  //         backgroundColor: "#01A699"
  //       },
  //       light: {
  //         primaryColor: "#01A699",
  //         disableColor: "#AAAAAA",
  //         backgroundColor: "#01A699",
  //         grayBackground: "#F2F3F4",
  //         hoverColor: "#007070",
  //         trialColor: "#EEF8F7",
  //         fontColor: "#474747",
  //         inActiveColor: "#474747",
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^vue2-google-maps($|\/)/]
  },
  server: {
    port: process.env.NODE_ENV === "development" ? "3000" : "3000", // default: 3000
    host: process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0", // default: localhost
  },
};
