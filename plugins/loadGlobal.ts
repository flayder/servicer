export default defineNuxtPlugin(async (nuxtApp) => {
    const gl = useGlobalData()

    if(gl.getCityData.value.length == 0) {
        await gl.getCity()
    }
})
