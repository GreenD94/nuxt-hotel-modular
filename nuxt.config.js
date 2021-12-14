import moduelePath from "./modulePath"

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  plugins: [
    '~/plugins/axios',
    '~/plugins/authCan'
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hotel-frontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css',

  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],


  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'mdbvue/nuxt',
    //'~/modules/users/index.js',
    ...moduelePath
  ],

  components: [
    '~/components',
    //{ path: '~/modules/users/components'}
  ],

  bootstrapVue: {
    icons: true
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          user: { url: '/api/login', method: 'get', }
        },
        user: {
          property: 'data',
        },
      },
    },
    redirect: {
      home: false
    },
  },

  axios: {

    credentials: true,
    baseURL: 'http://localhost:8000/api',
  },

  // mode: "spa",




  components: true,

  build: {
    extend(config, ctx) { },
    transpile: [
      'mdbvue/lib/components'
    ]
  },
  mdbvue: {
    // icons: false,
    // roboto: false,
    // css: false,
    // bootstrap: false
  },
  router: {
    middleware: ['auth']
  },

}
