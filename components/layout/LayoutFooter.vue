<template>
  <layout-about />
  <layout-hash />
  <footer class="py-7 bg-black200 rounded-t-secondary laptop:py-[52px]">
    <div class="container">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-[50px] laptop:flex-row-reverse laptop:gap-0 laptop:justify-between">
          <nav class="flex flex-col gap-7 laptop:flex-row laptop:gap-10">
            <ul class="flex flex-col gap-1.5">
              <li
                v-for="nav in navigationFooter"
                :key="nav.name"
                class="text-16 text-white100 font-medium tracking-[-1%] hover:text-pink transition"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
              <li
                v-for="nav in pages"
                :key="nav.id"
                class="text-16 text-white100 font-medium tracking-[-1%] hover:text-pink transition"
              >
                <nuxt-link :to="`/page/${nav.slug}`">
                  {{ nav.title }}
                </nuxt-link>
              </li>
            </ul>
            <ul class="flex flex-col gap-1.5">
              <li
                v-for="nav in navigationFooterPolicy"
                :key="nav.name"
                class="text-16 text-white100 font-medium tracking-[-1%] hover:text-pink transition"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="flex flex-col gap-[18px]">
            <img
              src="/svg/logo-white.svg"
              class="w-[141px] h-[45px]"
            >
            <p class="text-14 tracking-[-0.5%] text-white200 w-[237px]">
              2024. Avrora - проект, созданный для удобного поиска
              по всей России.
            </p>
          </div>
        </div>
        <div class="flex items-center gap-7 laptop:gap-0 laptop:justify-between">
          <div class="flex items-center gap-2.5">
            <ui-button
              to="/"
              item="large"
              :backgroundColor="'#fff'"
              :color="'#14151A'"
            >
              <img
                src="/svg/telegram.svg"
                width="16"
                height="16"
              />
              <span>Telegram</span>
            </ui-button>
            <ui-button
              to="/"
              item="large"
              :backgroundColor="'#fff'"
              :color="'#14151A'"
            >
              <img
                src="/svg/twitter.svg"
                width="16"
                height="16"
              />
              <span>Twitter</span>
            </ui-button>
          </div>
          <span class="px-[22px] py-2.5 rounded-third border border-solid border-white bg-transparent text-14 font-medium text-white tracking-[-0.5%] h-10">text</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navigationFooter, navigationFooterPolicy } from '~/constants/navigation'
const config = useRuntimeConfig()
const pages = ref([])

const {data} = await $fetch(`${config.public.API_URL}/api/pages`)

if(data && Array.isArray(data)) {
  data.map(item => {
    pages.value.push(item) 
  })
}

</script>