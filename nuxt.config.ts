// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@sidebase/nuxt-session',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-primevue',
  ],
  plugins: [
    {src: "~/plugins/recaptcha.ts"}
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-green/theme.css',
    'primeicons/primeicons.css'
  ],
  primevue: {
    components: {
      include: [
        'Dropdown',
        'Breadcrumb',
        'Slider',
        'Accordion',
        'AccordionTab',
        'Checkbox',
        'RadioButton',
        'Paginator',
        'Dialog',
        'TabView',
        'TabPanel',
        'MultiSelect',
        'FileUpload',
        'Calendar',
        'InputMask',
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  devtools: { enabled: true }
})
