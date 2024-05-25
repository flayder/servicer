import { defineStore } from "pinia"

export const useCatalog = defineStore('catalog', () => {
    const { __ } = useLocale()
    const { set } = useGlobalErrors()
    const auth = useAuthStore()

    const items = ref<any>([])
    const getItems = computed(() => items)

    const favorites = ref<any>([])
    const getFavorites = computed(() => favorites)

    const current_page = ref(1)
    const getCurrentPage = computed(() => current_page)
    const setCurrentPage = (value: number) => current_page.value = value
    const last_page = ref(1)
    const getLastPage = computed(() => last_page)
    const setLastPage = (value: number) => last_page.value = value

    const search = ref<any>('')

    const detail = ref<any>({})
    const getDetail = computed(() => detail)
    const setDetail = (value: any) => detail.value = value

    const filters = ref<any>([])
    const getFilter = computed(() => filters)

    const category = ref<any>({})
    const getCategory = computed(() => category)

    const params = ref<any>({})

    const getItemsData = async (init = true, pars: any = {}, code = null) => {
        var allParams = {
            ...useRoute().query,
            ...pars
        }

        if(code) {
            allParams.code = code
        } else {
            const route = useRoute()
            if(route.params?.id)
                allParams.code = route.params.id
        }

        if(current_page.value > 1) {
            allParams.page = current_page.value
        }

        if(search.value) {
            allParams.search = search.value
        }

        params.value = allParams

        const {data}: any = await useApiFetch("/api/profiles", {
            params: allParams
        })

        const response: any = data.value

        if(response && typeof response == "object" && response?.data) {
            if(init)
                items.value = response.data
            else {
                response.data.map((item: any) => {
                    items.value.push(item)
                })
            }

            current_page.value = response.meta.current_page
            last_page.value = response.meta.last_page
        }

        return Promise.resolve(response)
    }

    const getFavoritesData = async (init = true, params: any = {}) => {
        if(current_page.value > 1) {
            params.page = current_page.value
        }
        
        const {data}: any = await useApiFetch("/api/user/favorites", {
            params
        })

        const response: any = data.value

        if(response && typeof response == "object" && response?.data) {
            if(init)
                favorites.value = response.data
            else {
                response.data.map((item: any) => {
                    favorites.value.push(item)
                })
            }

            current_page.value = response.meta.current_page
            last_page.value = response.meta.last_page
        }

        return Promise.resolve(response)
    }

    const getFilterData = async () => {
        const {data}: any = await useApiFetch("/api/profiles/filter", {
            params: params.value
        })

        const response: any = data.value

        if(response && typeof response == "object" && response?.data) {
            filters.value = response.data
        } else if(filters.value.length > 0) {
            filters.value = []
        }

        return Promise.resolve(true)
    }

    const toggleFavorite = async (id: number, favorite = false) => {
        const {data} = await useApiFetch("/api/user/favorite", {
            method: 'POST',
            body: {favorite_id: id}
        })

        const response: any = data.value
        if(response && typeof response == "object") {
            if(response.data.status) {
                set({
                    success: true,
                    message: __('Анкета успешно добавлена в избранное')
                })
            } else {
                set({
                    success: true,
                    message: __('Анкета успешно удалена из избранного')
                })
            }
        }

        await auth.fetchUser()
        if(favorite) {
            current_page.value = 1
            await getFavoritesData()
        }
    }

    const toggleStaff = async (id: number, decline = false) => {
        const {data} = await useApiFetch("/api/user/staff", {
            method: 'POST',
            body: {
                staff_id: id,
                decline
            }
        })

        const response: any = data.value
        if(response && typeof response == "object") {
            if(response.data.status) {
                set({
                    success: true,
                    message: __('Анкета успешно добавлена к списку коллег')
                })
            } else {
                set({
                    success: true,
                    message: __('Анкета успешно удалена из списка коллег')
                })
            }
        }
    }

    const getDetailData = async (id: number) => {
        const {data}: any = await useApiFetch(`/api/profiles/${id}`)

        const response: any = data.value

        if(response && typeof response == "object") {
            
            if(
              !response.data ||
              response.data &&
              (
                !response.data.is_shown ||
                !response.data.is_active ||
                response.data.is_arhived
              )
            ) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Page Not Found',
                    fatal: true,
                })
            }

            detail.value = response.data
        }
        return Promise.resolve(response)
    }

    const getCategoryData = async (code: any) => {
        const {data}: any = await useApiFetch(`/api/profile_category/${code}`)

        const response: any = data.value

        if(response && typeof response == "object") {
            if(
              !response.data
            ) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Page Not Found',
                    fatal: true,
                })
            }

            category.value = response.data 
        }
        return Promise.resolve(response)
    }

    const setCategory = (value: any) => category.value = value

    return {
        getItems,
        getItemsData,

        getFavorites,
        getFavoritesData,

        search,

        getDetail,
        getDetailData,
        setDetail,

        getCategory,
        getCategoryData,
        setCategory,

        getFilterData,
        getFilter,

        getCurrentPage,
        setCurrentPage,

        getLastPage,
        setLastPage,

        toggleFavorite,
        toggleStaff
    }
})