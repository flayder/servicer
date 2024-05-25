<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="relative bg-white laptop:bg-white300 border-b border-solid border-gray mb-7 flex my-0 mx-auto      max-w-[1039px] px-4 laptop:max-w-[1524px] laptop:pr-0 laptop:pl-[250px]">
    <LayoutProfileSidebar @close="closeSidebarOnMobile" :show="showMenu" :activeTabID="13" class="hidden laptop:flex" />

    <div class="bg-white pb-7 w-full h-full laptop:min-h-[100vh] laptop:pr-[250px] laptop:pt-10 laptop:pl-[99px]">
      <h2 class="text-36 tracking-tighter font-semibold mb-3">{{ __('Избранное') }}</h2>
      <div class="grid grid-cols-1 gap-2 mb-2 tablet:hidden">
        <ui-card 
          v-for="item in getFavorites" 
          :item="item" 
          :favorite="true"
        />
      </div>
      <div class="hidden tablet:grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-x-2.5 gap-y-8 mb-8">
        <ui-card 
          v-for="item in getFavorites" 
          :item="item" 
          :favorite="true"
        />
      </div>
      <div class="mt-2 w-[100%]">
      <div class="w-[100%] flex justify-center mb-7">
        <ui-button item="medium"
          :backgroundColor="'#E9EAEC'"
          :color="'#14151A'"
          v-if="getCurrentPage < getLastPage"
          @click="setCurrentPageFunction(getCurrentPage + 1)"
        >
          {{ __('Загрузить еще') }}
          <img
            src="/svg/chevron-down.svg"
            width="20"
            height="20"
          />
        </ui-button>
      </div>

      <div class="w-[100%] flex flex-col items-center justify-center gap-3 laptop:flex-row laptop:gap-5" v-if="getLastPage > 1">
        <button class="hidden laptop:block text-16 font-medium tracking-[-1%]" 
          :class="{
            'text-gray400': getCurrentPage == 1,
            'text-pink': getCurrentPage > 1
          }"
          @click="(getCurrentPage > 1) ? setCurrentPageFunction(getCurrentPage - 1, true): ''"
        >
          {{ __('Назад') }}
        </button>
        <Paginator
          @page="pageHandler"
          v-model:first="paginationPage"
          :rows="1"
          :total-records="getLastPage"
          template="PrevPageLink PageLinks NextPageLink"
          unstyled
          :pt="{ root: { class: 'flex bg-transparent rounded-default h-12' }, pages: { class: 'flex items-center justify-center' }, pageButton: ({ context }) => ({ class: context.active ? 'py-3 px-5 bg-gray text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' : 'py-3 px-5 bg-transparent text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' }), nextPageButton: { class: 'hidden' }, previousPageButton: { class: 'hidden' } }"
        />
        <button class="hidden laptop:block text-16 font-medium tracking-[-1%]"
          :class="{
            'text-gray400': getCurrentPage == getLastPage,
            'text-pink': getCurrentPage < getLastPage
          }"
          @click="(getCurrentPage < getLastPage) ? setCurrentPageFunction(getCurrentPage + 1, true): ''"
        >
          {{ __('Далее') }}
        </button>
        <div class="flex items-center gap-10 laptop:hidden">
          <button class="text-16 font-medium tracking-[-1%]"
            :class="{
              'text-gray400': getCurrentPage == 1,
              'text-pink': getCurrentPage > 1
            }"
            @click="(getCurrentPage > 1) ? setCurrentPageFunction(getCurrentPage - 1, true): ''"
          >
          {{ __('Назад') }}
          </button>
          <button class="text-16 font-medium tracking-[-1%]"
            :class="{
              'text-gray400': getCurrentPage == getLastPage,
              'text-pink': getCurrentPage < getLastPage
            }"
            @click="(getCurrentPage < getLastPage) ? setCurrentPageFunction(getCurrentPage + 1, true): ''"
          >
          {{ __('Далее') }}
          </button>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
    middleware: ['auth']
})
const showMenu = ref(false)
const { 
    getFavorites, 
    getFavoritesData,
    getCurrentPage,
    setCurrentPage,
    getLastPage,
    setLastPage
  } = useCatalog()

  const { __ } = useLocale()
  const route = useRoute()
  const code = route.params.id
  const paginationPage = computed(() => getCurrentPage.value - 1)
  const showNextPageBtn = ref(false)
  
  const setCurrentPageFunction = (number = 1, refresh = false) => {
    setCurrentPage(number)

    getFavoritesData(refresh)
  }

  const pageHandler = (page) => {
    setCurrentPageFunction(page.page + 1, true)
  }

const openSidebarOnMobile = () => {
  if (window.innerWidth < 1024)  showMenu.value = true    
}

const closeSidebarOnMobile = () => {
  showMenu.value = false
}

onMounted(() => {
  setTimeout(async () => {
    setCurrentPage(1)
    await getFavoritesData()
  }, 100)
})

</script>