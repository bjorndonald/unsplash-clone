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
      link: [
        {
          rel: "apple-touch-icon", sizes: "180x180", href: "https://unsplash.com/apple-touch-icon.png",
         
        },{
          rel: "shortcut icon", type: "image/x-icon", href: "https://unsplash.com/apple-touch-icon.png",
         
        },
        {
          rel: "icon", sizes: "32x32", href: "https://unsplash.com/favicon-32x32.png",
          
        },
        {
          rel: "icon", sizes: "16x16", href: "https://unsplash.com/favicon-16x16.png",
        },
        {
          rel: "mask-icon", href:"https://unsplash.com/safari-pinned-tab.svg", color: "#000000"
        },
        {
          rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        }
      ]
    }
  },

  runtimeConfig: {
    accessKey: process.env.ACCESS_KEY,
    apiUrl: process.env.UNSPLASH_API_URL
  },

  modules: ["@nuxt/image"],
})