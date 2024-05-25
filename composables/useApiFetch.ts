import type { UseFetchOptions } from "nuxt/app"

export const useApiFetch = async <T>(path: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig()
  const {set} = useGlobalErrors()

  let headers: any = {}

  const token = useCookie('token')

  if(token.value) {
    headers['Authorization'] = `Bearer ${token.value as string}`
  }

  const response = await useFetch(`${config.public.API_URL}${path}`, {
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
  const data: any = response.error.value?.data

  if(data && data?.errors) {
    for(let level in data.errors) {
      let error: any = ''
      if(typeof level == "string") {
        error += `${error} `
      }
      if(Array.isArray(data.errors[level])) {
        for(let level2 in data.errors[level]) {
          let err: any = `${error}${data.errors[level][level2]}`
          set({message: err})
        }
      } else if(typeof data.errors[level] == "string") {
        set({message: `${error}${data.errors[level]}`})
      }
    }

    return Promise.resolve({data: {value: data}})
  }

  return Promise.resolve(response)

}
