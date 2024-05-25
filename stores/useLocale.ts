import { defineStore } from "pinia"

export const useLocale = defineStore('locale', () => {
    const locale = ref<object>({})
    const getLocale = computed(() => locale)

    const getLang = () => {
        var lang = "ru"
        const cookie = useCookie('lang')
        
        if(cookie.value)
            lang = cookie.value

        return lang
    }

    const setLang = (lang: string) => {
        const langCookie = useCookie('lang', {
            maxAge: 60*24*28,
            sameSite: true,
            secure: true,
        })

        langCookie.value = lang

        getLocalData()
    }

    const getLocalData = async () => {
        const {data}: any = await useApiFetch("/api/locale", {
            params: {lang: getLang()}
        })

        const response: any = data.value

        if(response && typeof response == "object" && response?.data)
            locale.value = response.data as object
    }

    const __ = (data: any) => {
        if(locale.value.hasOwnProperty(data)) {
            //console.log('here')
            const json: any = locale.value
            return json[data]
        }

        return data
    } 

    return {
        getLocale,
        getLang,

        setLang,
        getLocalData,

        __
    }
})