<script setup lang="ts">
const { openAuth, userType } = useRoot()

const showAddButton = computed(() => {
  return userType.value === 'worker'
})


</script>

<template>
  <div v-click-outside="() => openAuth = false"  class="absolute top-8 left-[-89px] flex flex-col rounded-filter shadow-menu z-50 w-[220px] laptop:hidden">
    <nuxt-link v-if="showAddButton" :to="'/profile/add-new'" class="py-2.5 px-3 bg-pink text-14 font-medium tracking-[-0.5%] text-white100 flex items-center gap-1 rounded-t-filter">
      <img
        src="/svg/plus.svg"
        width="20"
        height="20"
      />
      Добавить анкету
    </nuxt-link>
    <button
      class="py-2.5 px-3 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1"
      @click="openAuth = true"
    >
      <img
        src="/svg/login.svg"
        width="20"
        height="20"
      />
      Войти
    </button>
    <button
      v-if="false"
      class="py-2.5 px-3 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1"
    >
      <img
        src="/svg/profile.svg"
        width="20"
        height="20"
      />
      Профиль
    </button>
    <layout-menu-mobile-categories />
    <layout-menu-mobile-city />
    <layout-menu-mobile-metro />
    <layout-menu-mobile-category-c />
    <layout-menu-mobile-category-a />
    <layout-menu-mobile-category-f />
    <layout-menu-mobile-category-b />
    <layout-menu-mobile-category-e />
    <layout-menu-mobile-category-d />
  </div>
</template>
