<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">    
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-3">{{ __('Мои коллеги') }}</ProfileTitleWrap>

    <h3 class="text-24 leading-10 mt-2 font-semibold">{{ __('Поиск') }}</h3>

    <div class="w-full laptop:w-[307px] mt-2 mb-2">
      <ui-input
        v-model="id"
        :label="__('Поиск по ID Работника')"
        item="searchLarge"
        :placeholder="__('ID работника')"
      >
        <img
          src="/svg/search.svg"
          width="20"
          height="20"
          class="absolute left-3 top-2.5"
        />
        <button 
          @click="searchHandler"
          class="absolute right-5 top-3 text-12 font-medium text-gray100">
          {{ __('Найти') }}
        </button>
      </ui-input>
    </div>

    <div class="flex flex-col gap-5 mb-5">
      <ProfileColleaguesCard 
        buttonType="add"
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
    <profile-card-remove />
    <profile-card-prompt />
  </div>
</template>

<script setup>

const { __ } = useLocale()
const current_page = ref(1)
const last_page = ref(1)
const id = ref('')
const items = ref([])

const getData = async (params = {}, init = true) => {

  params.id = id.value

  const {data} = await useApiFetch(`/api/user/staff`, {
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
})

</script>