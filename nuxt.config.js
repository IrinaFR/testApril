export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Тестовое задание',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/scss/style.scss',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/node_modules/bootstrap/dist/js/bootstrap.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
