const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/fonts/font-awesome.min.css',
    '~/assets/css/fonts/ionicons.min.css',
    '~/assets/css/fonts/simple-line-icons.min.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuebar'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? 'oxec0uQyPdv8TsebHM7rrgtt' : '4OP7mqK3dAYQzuvunj7EtAtt', 
      cacheProvider: "memory" 
    }],
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    // Vuetify options
    theme: {
      primary: '#8dc63f'
    }
  },
  generate: {
    routes: function () {
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=oxec0uQyPdv8TsebHM7rrgtt&cv=' + Math.floor(Date.now() / 1e3))
      .then(res => {
        const projects = res.data.stories.map(x => x.full_slug)
        // generating routes
        return [
          ...projects
        ]
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
