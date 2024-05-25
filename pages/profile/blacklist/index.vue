<template>
  <section class="relative bg-white laptop:bg-white300 border-b border-solid border-gray mb-7 flex my-0 mx-auto      max-w-[1039px] px-4 laptop:max-w-[1524px] laptop:pr-0 laptop:pl-[250px]">
    <LayoutProfileSidebar @close="closeSidebarOnMobile" :show="showMenu" :activeTabID="12" class="hidden laptop:flex" />

    <div class="bg-white pb-7 w-full h-full laptop:min-h-[100vh] laptop:pr-[250px] laptop:pt-10 laptop:pl-[99px]">
      <h2 class="text-36 tracking-tighter font-semibold mb-2">{{ __('Черный список') }}</h2>


      <ui-button
        class="h-12 laptop:w-[386px] w-full"
        type="submit"
        item="large"
        @click="openAddBlacklist = true"
      >
        {{ __('Добавить отзыв') }}
      </ui-button>


      <h2 class="text-36 tracking-tighter font-semibold my-2">{{ __('Поиск') }}</h2>

      <div class="w-full laptop:w-[307px] mb-2">
        <ui-input
          v-model="search.phone"
          :label="__('Поиск по номеру телефона')"
          item="searchLarge"
          :placeholder="__('Телефон')"
        >
          <img
            src="/svg/search.svg"
            width="20"
            height="20"
            class="absolute left-3 top-2.5"
          />
          <button type="button" class="absolute right-5 top-3 text-12 font-medium text-gray100" @click="searchHandler">
            {{ __('Найти') }}
          </button>
        </ui-input>
      </div>

      <div class="w-full laptop:w-[307px] mb-2">
        <ui-input
          v-model="search.telegram"
          :label="__('Поиск по логину в Телеграм')"
          item="searchLarge"
          :placeholder="__('Телеграм')"
        >
          <img
            src="/svg/search.svg"
            width="20"
            height="20"
            class="absolute left-3 top-2.5"
          />
          <button type="button" class="absolute right-5 top-3 text-12 font-medium text-gray100" @click="searchHandler">
            {{ __('Найти') }}
          </button>
        </ui-input>
      </div>


      <div class="flex flex-col gap-2">
        <profile-blacklist-card 
          v-for="item in items"
          :item="item"
        />
      </div>

  

      <div class="mt-2">

        <div class="flex justify-start mb-7">
          <ui-button item="medium"
            :backgroundColor="'#E9EAEC'"
            :color="'#14151A'"
            v-if="showNextPageBtn"
            @click="(search.page < lastPage) ? setCurrentPage(search.page + 1) : ''"
          >
            {{ __('Загрузить еще') }}
            <img
              src="/svg/chevron-down.svg"
              width="20"
              height="20"
            />
          </ui-button>
        </div>
  
        <div class="flex flex-col items-center justify-start gap-3 laptop:flex-row laptop:gap-5" v-if="lastPage > 1">
          <button class="hidden laptop:block text-16 font-medium tracking-[-1%]" 
            :class="{
              'text-gray400': currentPage == 1,
              'text-pink': currentPage > 1
            }"
            @click="(currentPage > 1) ? setCurrentPage(currentPage - 1, true): ''"
          >
            {{ __('Назад') }}
          </button>
          <Paginator
            @page="pageHandler"
            v-model:first="paginationPage"
            :rows="1"
            :total-records="lastPage"
            template="PrevPageLink PageLinks NextPageLink"
            unstyled
            :pt="{ root: { class: 'flex bg-transparent rounded-default h-12' }, pages: { class: 'flex items-center justify-center' }, pageButton: ({ context }) => ({ class: context.active ? 'py-3 px-5 bg-gray text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' : 'py-3 px-5 bg-transparent text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' }), nextPageButton: { class: 'hidden' }, previousPageButton: { class: 'hidden' } }"
          />
          <button class="hidden laptop:block text-16 font-medium tracking-[-1%]"
            :class="{
              'text-gray400': currentPage == lastPage,
              'text-pink': currentPage < lastPage
            }"
            @click="(currentPage < lastPage) ? setCurrentPage(currentPage + 1, true): ''"
          >
            {{ __('Далее') }}
          </button>
          <div class="flex items-center gap-10 laptop:hidden">
            <button class="text-16 font-medium tracking-[-1%]"
              :class="{
                'text-gray400': currentPage == 1,
                'text-pink': currentPage > 1
              }"
              @click="(currentPage > 1) ? setCurrentPage(currentPage - 1, true): ''"
            >
            {{ __('Назад') }}
            </button>
            <button class="text-16 font-medium tracking-[-1%]"
              :class="{
                'text-gray400': currentPage == lastPage,
                'text-pink': currentPage < lastPage
              }"
              @click="(currentPage < lastPage) ? setCurrentPage(currentPage + 1, true): ''"
            >
            {{ __('Далее') }}
            </button>
          </div>
        </div>
      </div>


    </div>

    <form-add-to-blacklist :max-width="true" />
  </section>
</template>

<script setup>

const { __ } = useLocale()

useHead({
  title: __('Черный список')
})
definePageMeta({
    middleware: ['auth']
})

const search = ref({
  phone: "",
  telegram: "",
  page: 1
})

const lastPage = ref(0)

const showNextPageBtn = ref(false)
const currentPage = ref(1)

const pageHandler = (page) => {
  setCurrentPage(page.page + 1, true)
}

const paginationPage = computed(() => currentPage.value - 1)

const items = ref([])

const { openAddBlacklist } = useRoot()

watch(openAddBlacklist, function(val) {
  if(!val) {
    getItems(true)
  }
})

const getItems = async (refresh = false) => {
  const {data} = await useApiFetch("/api/user/blacklists", {
    params: search.value
  })

  if(refresh)
    items.value = []

  if(data.value.meta.hasOwnProperty('last_page')) {
    lastPage.value = data.value.meta.last_page

    if(search.value.page < data.value.meta.last_page)
      showNextPageBtn.value = true
    else 
      showNextPageBtn.value = false
  }

  if(data.value.meta.hasOwnProperty('current_page')) {
    currentPage.value = data.value.meta.current_page
  }

  data.value.data.map(item => {
    items.value.push(item)
  })
}

const searchHandler = () => {
  getItems(true)
}

onMounted(() => {
  setTimeout(async () => {
    await getItems()
  }, 100)
})

const setCurrentPage = (number = 1, refresh = false) => {
  search.value.page = number
  currentPage.value = number

  getItems(refresh)
}

const showMenu = ref(false)

const openSidebarOnMobile = () => {
  if (window.innerWidth < 1024)  showMenu.value = true    
}

const closeSidebarOnMobile = () => {
  showMenu.value = false
}

</script>