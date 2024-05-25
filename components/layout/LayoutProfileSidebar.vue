<template>
  <div v-if="show" @click="$emit('close')" class="fixed top-0 left-0 w-full h-full z-10"></div>

  <aside class="sidebar laptop:px-0 pl-4 laptop:pr-10" :class="{ 'show-mobile': show }" >
    <button @click="$emit('close')" class="laptop:hidden w-6 text-gray absolute right-6 top-6">
      <img class="w-full h-full" src="/svg/cross.svg" alt="">
    </button>

    <SidebarItem v-for="(link, idx) in currentSidebar" :key="idx" :link="link" :isActive="link.link === route.path" />
  </aside>
</template>

<script setup>

defineProps({activeTabID: 0, show: false})

import { sidebarWorker, sidebarClient } from '~/constants/navigation';

const auth = useAuthStore()
const route = useRoute()
const { userType } = useRoot()


const currentSidebar = computed(() => {
  return auth.isLoggedIn && auth.getCurrentUser.value.type.id == 2 ? sidebarWorker.value : sidebarClient.value
})

</script>