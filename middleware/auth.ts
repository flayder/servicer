export default defineNuxtRouteMiddleware((to, from) => {
    if(!process.server) {
        const auth = useAuthStore()
        setTimeout(async () => {
            const token = useCookie('token')
            if(token && !auth.isLoggedIn) {
                await auth.fetchUser()
            }
            if(!auth.isLoggedIn) {
                return navigateTo('/login', {redirectCode: 401})
            } else {
                const user: any = auth.getCurrentUser.value;
                if(to.path != '/register-confirm' && !user.is_active) {
                    return navigateTo('/register-confirm')
                }
            
                if(to.path != '/register-accept' && user.is_active && user.type.id == 2 && !user.accepted) {
                    return navigateTo('/register-accept')
                }
            }
        }, 1000)
    }
})
