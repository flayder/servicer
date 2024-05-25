<script setup>
const props= defineProps({
  absolute: Boolean
})
</script>

<template>
  <ui-accordion
    :item="absolute? 'headerItem' : 'menuMetro'"
    src="/svg/train.svg"
    name="Метро"
  >
    <button class="py-2.5 px-4 bg-white border-b border-t border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Авиамоторная
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Автозаводская
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Академическая
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Алексеевская
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
    <button class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
      Алтуфьево
      <img
        src="/svg/chevron-right-gray.svg"
        width="20"
        height="20"
      />
    </button>
  </ui-accordion>
</template>
