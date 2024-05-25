import { defineStore } from "pinia"

type City = {
    id: number
    title: string
    slug: string
    iso_name: string
}

type Country = {
    id: number
    title: string
    slug: string
    iso_name: string
}

type Metro = {
    id: number
    title: string
    slug: string
    iso_name: string
}

type Contact = {
    id: number
    name: string
    color: string
    link: string
}

export const useGlobalData = defineStore('globalData', () => {
    const countries = ref<Country[]>([])
    const getCountryData = computed(() => countries)

    const getCountry = async (params: any = {}) => {
        const {data}: any = await useApiFetch("/api/country", {params})
        const response: any = data.value

        if(response && typeof response == "object" && response?.data)
            countries.value = response.data as Country[]
    }

    const cities = ref<City[]>([])
    const getCityData = computed(() => cities)

    const getCity = async (params: any = {}) => {
        const {data}: any = await useApiFetch("/api/city", {params})
        const response: any = data.value

        if(response && typeof response == "object" && response?.data)
            cities.value = response.data as City[]
    }

    const metro = ref<Metro[]>([])
    const getMetroData = computed(() => metro)

    const getMetro = async (params: any = {}) => {
        const {data}: any = await useApiFetch("/api/metro", {params})
        const response: any = data.value

        if(response && typeof response == "object" && response?.data)
            metro.value = response.data as Metro[]
    }

    const contacts = ref<Contact[]>([])
    const getContacts = computed(() => contacts)

    const getAdditionalContacts = async () => {
        const {data}: any = await useApiFetch("/api/additional_contacts")
        const response: any = data.value

        if(response && typeof response == "object" && response?.data)
            contacts.value = response.data as Contact[]
    }

    return {
        getCityData,
        getCity,

        getCountryData,
        getCountry,

        getMetroData,
        getMetro,

        getContacts,
        getAdditionalContacts
    }
})