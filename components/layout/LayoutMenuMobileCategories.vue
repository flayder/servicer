<script setup>
import { navigation } from '~/constants/navigation';

</script>

<template>
  <ui-accordion
    item="menuCity"
    src="null"
    name="Категории"
  >
    <nuxt-link :to="item?.path" v-for="item in navigation" :key="item.name" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      <nuxt-img v-if="item.img"
        :src="item.img"
        width="20"
        height="20"
      />
      <span class="w-[20px]" v-else></span>
      {{ item.name }}
    </nuxt-link>
    
  </ui-accordion>
</template>
