<template>
  <div class="flex justfy-end">
    <button class="flex items-center py-[6px] bg-[#E9EAEC] px-[10px] rounded-[10px]" v-if="!isLink">
      <slot/>
    </button>
    <NuxtLink :to="to" class="flex items-center py-[6px] bg-[#E9EAEC] px-[10px] rounded-[10px]" v-if="isLink">
      <slot/>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    isLink?: boolean
    to?: string
  }>()
</script>
