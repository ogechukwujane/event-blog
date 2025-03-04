// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ["../app/assets/styles/global.css"],
});
