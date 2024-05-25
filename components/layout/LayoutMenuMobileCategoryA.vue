<script setup lang="ts">
import { menuCategory1 } from '~/constants/navigation'
</script>

<template>
  <ui-accordion
    item="menu"
    header="Set 1"
  >
    <nuxt-link
      v-for="nav in menuCategory1"
      :key="nav.name"
      :to="nav.path"
      class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full last:border-none"
    >
      {{ nav.name }}
    </nuxt-link>
  </ui-accordion>
</template>
