<script setup>
const props= defineProps({
  absolute: Boolean
})
</script>

<template>
  <ui-accordion
    :item="absolute? 'headerItem' : 'menuCity'"
    src="/svg/location.svg"
    name="Москва"
  >
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Санкт-Петербург
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Нижний Новгород
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Новосибирск
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Казань
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Екатеринбург
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
  </ui-accordion>
</template>
