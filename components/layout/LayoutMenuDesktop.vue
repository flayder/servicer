<script setup lang="ts">
import { menuCategory2, menuCategory3, menuCategory4, menuCategory1, menuCategory5, menuCategory6 } from '~/constants/navigation'
</script>

<template>
  <div class="hidden absolute top-10 left-[-89px] laptop:flex rounded-filter shadow-menu z-50 bg-white">
    <div class="flex flex-col w-[170px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 1
      </h5>
      <nuxt-link
        v-for="nav in menuCategory1"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col w-[220px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 4
      </h5>
      <nuxt-link
        v-for="nav in menuCategory2"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col w-[170px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 6
      </h5>
      <nuxt-link
        v-for="nav in menuCategory3"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col w-[144px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 5
      </h5>
      <nuxt-link
        v-for="nav in menuCategory4"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col w-[168px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 2
      </h5>
      <nuxt-link
        v-for="nav in menuCategory5"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col w-[170px]">
      <h5 class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium text-gray300 tracking-[-0.5%] w-full">
        Set 3
      </h5>
      <nuxt-link
        v-for="nav in menuCategory6"
        :key="nav.name"
        :to="nav.path"
        class="py-2.5 px-4 border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
      >
        {{ nav.name }}
      </nuxt-link>
    </div>
  </div>
</template>
