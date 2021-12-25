export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stickman\'s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    head: {
      // script: [
      //   {
      //     type: 'text/javascript',
      //     src: "/js/jquery.min.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/bootstrap.min.js",
      //     body: true
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/jquery.easing.min.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/swiper.min.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/jquery.magnific-popup.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/chart.min.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/wow.min.js",
      //     body: true,
      //   },
      //   {
      //     type: 'text/javascript',
      //     src: "/js/scripts.js",
      //     body: true,
      //   },
      // ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/css/swiper.css',
    '@/assets/css/magnific-popup.css',
    '@/assets/css/animate.min.css',
    '@/assets/css/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true, //hidden css
  }
}
