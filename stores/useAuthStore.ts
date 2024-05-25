import { defineStore } from "pinia"

type UserType = {
    id: number
    name: string
}

type User = {
    id: number
    name: string
    email: string
    type: UserType
    contacts: any
    status: any[]
    class: any[]
}

type Credentials = {
    type?: string
    login?: string
    password?: string,
    token?: string
}

type ConfirmCredential = {
    code: any
    password?: string,
    password_confirmation?: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const {set} = useGlobalErrors()

    const getCurrentUser = computed(() => user)

    const isLoggedIn = computed(() => !!user.value)

    const fetchUser = async () => {
        const {data}: any = await useApiFetch("/api/user")
        const response: any = data.value
        if(response && typeof response == "object" && response?.data)
            user.value = response.data as User
    }

    const updateUser = async (body: any) => {
        const {data}: any = await useApiFetch("/api/user", {
            method: 'POST',
            body
        })
        const response: any = data.value
        if(response && typeof response == "object" && response?.data)
            user.value = response.data as User

        return Promise.resolve(data)
    }

    const loginRecovery = async (credentials: Credentials) => {
        const login: any = await useApiFetch("/api/login/recovery", {
            method: "POST",
            body: credentials
        })

        return login
    }

    const loginRecoveryConfirm = async (credentials: ConfirmCredential) => {
        const login: any = await useApiFetch("/api/login/recovery-confirm", {
            method: "POST",
            body: credentials
        })

        return login
    }

    const login = async (credentials: Credentials) => {
        const login: any = await useApiFetch("/api/login", {
            method: "POST",
            body: credentials
        })

        saveToken(login.data)

        return login
    }

    const logout = async () => {
        await useApiFetch('/api/logout')

        const token = useCookie('token')
        token.value = null
        user.value = null

        return navigateTo('/')
    }

    const register = async (credentials: Credentials) => {
        const register: any = await useApiFetch("/api/register", {
            method: "POST",
            body: credentials
        })

        saveToken(register.data)

        return register
    }

    const confirm = async (data: ConfirmCredential) => {
        const confirm: any = await useApiFetch("/api/register/confirm", {
            method: "POST",
            body: data
        })

        return confirm
    }

    const accept = async () => {
        const accept: any = await useApiFetch("/api/register/accept", {
            method: "POST"
        })

        return accept
    }

    const saveToken = (data: any) => {
        try {
            if(data.value.status && data.value.data) {
                const authCookie = useCookie('token', {
                    maxAge: 60*24*28,
                    sameSite: true,
                    secure: true,
                })

                authCookie.value = data.value.data
            }
        } catch(e) {
            set({message: 'Ошибка сохранения токена'})
        }
    }

    return {
        getCurrentUser,
        isLoggedIn,
        loginRecovery,
        loginRecoveryConfirm,
        fetchUser,
        updateUser,
        login,
        logout,
        register,
        confirm,
        accept
    }
})