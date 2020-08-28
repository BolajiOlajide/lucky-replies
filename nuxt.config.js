import dotenv from 'dotenv'

dotenv.config()

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: ['~/assets/css/main.css'],
  render: {
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  privateRuntimeConfig: {
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_API_SECRET_KEY: process.env.TWITTER_API_SECRET_KEY,
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN
  }
}
