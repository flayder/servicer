<template>
  <template v-if="items.length > 0">
    <h3 class="text-24 leading-10 mt-2 font-semibold">{{ __('Коллеги') }}</h3>
    <div class="flex flex-col gap-5">
      <ProfileColleaguesCard 
        v-for="item in items"
        :item="item"
        @click="clickHandler"
      />

    <ui-button
      class=" mt-3"
      item="large"
      width="fit-content"
      color="#14151A"
      backgroundColor="#E9EAEC"
      v-if="current_page < last_page"
      @click="showMore"
    >
      {{ __('Загрузить еще') }}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0001 13.2061C10.2199 13.1998 10.4208 13.1182 10.584 12.9424L15.3552 8.05818C15.4933 7.92006 15.5686 7.74428 15.5686 7.53711C15.5686 7.12277 15.2422 6.79004 14.8278 6.79004C14.627 6.79004 14.4323 6.87165 14.2879 7.01604L10.0064 11.4169L5.71233 7.01604C5.56794 6.87793 5.3796 6.79004 5.17243 6.79004C4.75809 6.79004 4.43164 7.12277 4.43164 7.53711C4.43164 7.74428 4.50698 7.92006 4.64509 8.05818L9.42257 12.9424C9.59208 13.1182 9.78041 13.2061 10.0001 13.2061Z" fill="#0D1126" fill-opacity="0.4"/>
      </svg>          
    </ui-button>
  </div> 
  </template>
</template>

<script setup>
const { __ } = useLocale()
const current_page = ref(1)
const last_page = ref(1)
const items = ref([])

const getData = async (params = {}, init = true) => {
  const {data} = await useApiFetch(`/api/user/both_staff`, {
    params
  })

  const response = data.value
  if(response && typeof response == "object" && response?.data) {
    if(!init) {
      response.data.map(comment => {
        items.value.push(comment)
      })
    } else {
      items.value = response.data
    }
    current_page.value = response.meta.current_page
    last_page.value = response.meta.last_page
  }
}

const searchHandler = async () => {
  await getData()
}

const showMore = async () => {
  await getData({page: current_page.value + 1}, false)
}

const clickHandler = async () => {
  await getData()
}

onMounted(() => {
  setTimeout(async () => {
    await getData()
  }, 100)
})
</script>