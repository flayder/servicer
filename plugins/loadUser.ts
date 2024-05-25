export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()

    const token = useCookie('token')
    if(token.value && !auth.isLoggedIn) {
        await auth.fetchUser()
    }
})
