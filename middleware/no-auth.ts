export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()

    if(auth.isLoggedIn) {
        return navigateTo('/profile', {redirectCode: 401})
    }
})
