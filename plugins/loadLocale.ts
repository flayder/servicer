export default defineNuxtPlugin(async (nuxtApp) => {
    const locale = useLocale()

    await locale.getLocalData()
})
