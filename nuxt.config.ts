// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Unsplash Clone",
      meta: [
        {
          name: "description", content: "This is an unspash done for a coding assesment"
        }
      ],
    }
  },
  runtimeConfig: {
    accessKey: process.env.ACCESS_KEY,
    apiUrl: process.env.UNSPLASH_API_URL
  },
 
})
