<template>
  <header class="laptop:py-2.5 z-10">
    <div class="container">
      <div class="hidden laptop:flex items-center justify-between">
        <div class="flex items-center gap-6 text-12 font-medium">
          <layout-city-dropdown />
          <layout-metro-dropdown />
          <!-- <layout-menu-mobile-city absolute /> -->
          <!-- <layout-menu-mobile-metro absolute /> -->
        </div>
        <ui-select
          v-model="selectedLang"
          :options="lang"
          options-label="name"
        />
      </div>
      <div class="py-2.5 laptop:flex laptop:justify-between laptop:items-center">
        <div class="flex items-center">
          <nuxt-link class="block w-[89px] shrink-0" to="/">
            <img
              src="/svg/logo.svg"
              width="89"
              class="w-[89px] h-auto block"
            >
          </nuxt-link>
          <div class="relative px-2.5 min-w-fit">
            <ui-button @click="openMenu = !openMenu">
              <img
                v-if="openMenu"
                src="/svg/close.svg"
                width="16"
                height="16"
              />
              <img
                v-else
                src="/svg/menu.svg"
                width="16"
                height="16"
              />
              <span class="hidden laptop:block">Меню</span>
            </ui-button>
            <div v-if="openMenu" @click="openMenu = false" class="fixed top-0 left-0 w-full h-full z-10"></div>
            <layout-menu-mobile v-if="openMenu" />
            <layout-menu-desktop v-if="openMenu" />
          </div>
          <ui-input
            v-model="search"
            item="search"
            :placeholder="__('Имя, ID, Телефон...')"
            @enter="searchHandler"
          >
            <img
              src="/svg/search.svg"
              width="16"
              height="16"
              class="absolute left-2.5 top-1.5"
            />
            <button 
              @click="searchHandler"
              class="hidden laptop:block absolute right-[14px] top-1.5 text-12 font-medium text-gray100">
              {{ __('Найти') }}
            </button>
          </ui-input>
          <div class="pl-[5px] laptop:pl-2.5 min-w-fit">
            <ui-button
              background-color="rgb(233, 234, 236)"
              color="rgb(20, 21, 26)"
              to="/map"
            >
              <img
                src="/svg/map.svg"
                width="16"
                height="16"
              />
              <span class="hidden laptop:block">На карте</span>
            </ui-button>
          </div>
        </div>
        <div class="hidden laptop:flex items-center gap-2.5">
          <HeaderLogin />
          
          <!-- <ui-button
            v-if="!showAddButton"
            background-color="rgb(233, 234, 236)"
            color="rgb(20, 21, 26)"
          >
            <img
              src="/svg/profile.svg"
              width="16"
              height="16"
            />
            <span>Профиль</span>
          </ui-button> -->
          <ui-button v-if="showAddButton" :to="'/profile/add-new'">
            <img
              src="/svg/plus.svg"
              width="16"
              height="16"
            />
            <span>Добавить анкету</span>
          </ui-button>
        </div>
      </div>
    </div>
    <nav class="relative nav pl-4 py-1.5 w-full laptop:overflow-x-auto laptop:max-w-[1524px] laptop:px-[250px]">
      <button class="hidden" @click="toggleNavMobile">
        <img src="/svg/menu-dark.svg" alt="">
      </button>
      <ul :class="{ show: navOpen }" class="header-links flex gap-[14px] justify-between items-center">
        <li
          v-for="nav in navigation"
          :key="nav.name"
          class="flex items-center gap-1 text-12 font-medium min-w-fit"
        >
          <nuxt-link
            :to="nav.path"
            class="flex items-center gap-1"
          >
            <img
              v-if="nav.img"
              :src="nav.img"
              width="16"
              height="16"
            />
            {{ nav.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { navigation } from '~/constants/navigation'
// import type { Select } from '~/types'
const { __ } = useLocale()
const { getItemsData } = useCatalog()
const route = useRoute()
const router = useRouter()
const search = ref('')

const auth = useAuthStore()

const { openAuth, userType } = useRoot()

onMounted(() => {
  setTimeout(() => {
    if(route.query?.search) {
      search.value = route.query.search
    }
  }, 100)
})

const searchHandler = (event) => {
  if(route.path == '/catalog')
    getItemsData()
  return navigateTo({
    path: '/catalog',
    query: {search: search.value}
  })
}

const showAddButton = computed(() => {
  return auth.isLoggedIn && auth.getCurrentUser.value.type.id == 2
})

const openMenu = ref(false)
const navOpen = ref(false)  

const toggleNavMobile = () => {
  navOpen.value = !navOpen.value
}

const selectedLang = ref({ name: 'ru' })
const lang = ref([
  { name: 'ru' },
  { name: 'en' }
])
</script>

<style scoped lang="scss">
.nav::-webkit-scrollbar {
  height: 0px;
}

.header-links {
  @media (max-width: 1024px) {
    @apply shadow-menu;

    li {
      font-size: 14px;
      padding: 10px 12px;

      a {
        justify-content: flex-end;
      }

      &:not(:last-child) {
        border-bottom: 1px solid #9EA2AD;
      }
    }

    position: absolute;
    flex-direction: column;
    z-index: 2;
    border-radius: 20px;
    gap: 0;

    justify-items: flex-start;
    background: #fff;
    align-items: stretch;
    visibility: hidden;
    pointer-events: none;

    &.show{
      visibility: visible;
      pointer-events: all;
    }
  }
}


</style>
