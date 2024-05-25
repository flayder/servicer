import { defineStore } from "pinia"

type Error = {
    id?: string
    success?: boolean
    message: string
}

export const useGlobalErrors = defineStore('globalErrors', () => {
    const errors = ref<Error[]>([])
    const timeout = 5000

    const getErrors = computed(() => errors.value)

    const set = (error: Error) => {
        const id = Math.random().toString(36).slice(2)
        error.id = id
        
        errors.value.push(error)
        setTimeout(() => {
            clear(id)
        }, timeout)

        return errors
    }

    const clear = (id: string) => {
        errors.value.map((item: Error, key: number) => {
            if(item.id == id) {
                errors.value.splice(key, key + 1)
            }
        })
    }

    return {getErrors, set}
})