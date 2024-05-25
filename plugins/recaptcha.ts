import {VueReCaptcha} from 'vue-recaptcha-v3'

export default defineNuxtPlugin({
    name: 'recaptcha',
    enforce: 'pre',
    async setup(nuxtApp) {
        const config = useRuntimeConfig()
        nuxtApp.vueApp.use(VueReCaptcha, {
            siteKey: config.public.RECAPTCHA_SITE_KEY as string,
            loaderOptions: {
                autoHideBadge: false,
                explicitRenderParameters: {
                    badge: 'bottomright',
                }
            },
        });
    }
})
