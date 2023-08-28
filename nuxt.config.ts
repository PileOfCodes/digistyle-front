// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                dir: 'rtl',
                lang: 'fa'
            }
        }
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/tailwind.css'
    ],
    modules: [
        "@nuxtjs/tailwindcss",
        '@formkit/nuxt',
        "nuxt-lodash",
        '@nuxt/image',
        'nuxt-icon',
        'nuxt-swiper',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
    ], 
    runtimeConfig: {
        public: {
            apiBase : 'http://127.0.0.1:8000/api'
        }
    }
})
