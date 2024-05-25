<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

const showMenu = ref(false)

const openSidebarOnMobile = () => {
  if (window.innerWidth < 1024)  showMenu.value = true    
}

const closeSidebarOnMobile = () => {
  showMenu.value = false
}

</script>

<template>
  <section class="relative bg-white laptop:bg-white300 border-b border-solid border-gray mb-7 flex my-0 mx-auto      max-w-[1039px] px-4 laptop:max-w-[1524px] laptop:pr-0 laptop:pl-[250px]">
    <LayoutProfileSidebar @close="closeSidebarOnMobile" :show="showMenu" :activeTabID="11" class="hidden laptop:flex" />

    <div class="bg-white w-full h-full laptop:min-h-[100vh] laptop:pr-[250px]">
      <ProfileNotifications @openSidebar="openSidebarOnMobile" />
    </div>
  </section>
</template>
