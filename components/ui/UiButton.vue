<script setup lang="ts">
withDefaults(defineProps<{
  backgroundColor?: string,
  color?: string,
  item?: string,
  to?: string,
  width?: string,
  disabled?: boolean,
  onclick?: () => void,
}>(), {
  backgroundColor: 'rgb(255, 24, 95)',
  color: 'rgba(255, 255, 255, 0.9)',
  item: 'small',
  to: '',
  width: '',
  disabled: false,
  onclick: () => {},
})
</script>

<template>
  <a
    v-if="to"
    target="_blank"
    :href="to"
    :item="item"
    :class="[
      'hover:opacity-[0.8]',
      item === 'small' ? 'p-1.5 flex items-center justify-center gap-1 rounded-default w-7 min-w-fit laptop:w-full text-12 font-medium laptop:pl-2.5 laptop:pr-[14px] laptop:h-full' : '',
      item === 'large' ? 'py-2.5 pl-3 pr-4 flex items-center justify-center gap-1 h-10 rounded-xl text-14 tracking-[-0.5%] font-medium text-black100 bg-white' : '',
      item === 'medium' ? 'py-2.5 pl-4 pr-3 flex items-center gap-1 h-10 rounded-xl text-14 tracking-[-0.5%] font-medium text-black100 bg-gray' : '',
      item === 'little' ? 'py-1.5 px-1.5 flex items-center justify-center rounded-default h-7' : '',
      item === 'big' ? 'py-2.5 px-2.5 flex items-center justify-center rounded-xl h-10' : '',
      item === 'card' ? 'py-1.5 pl-[14px] pr-2.5 flex items-center gap-1 rounded-default text-12 font-medium' : '',
    ]"
    :style="{ backgroundColor: backgroundColor, color: color, width: width }"
  >
    <slot />
  </a>

  <button
    v-else
    :disabled="disabled"
    :item="item"
    @click="onclick"
    :class="[
      'hover:opacity-[0.8]',
      item === 'small' ? 'p-1.5 flex items-center justify-center gap-1 rounded-default w-7 min-w-fit laptop:w-full text-12 font-medium laptop:pl-2.5 laptop:pr-[14px] laptop:h-full' : '',
      item === 'large' ? 'py-2.5 pl-3 pr-4 flex items-center justify-center gap-1 h-10 rounded-xl text-14 tracking-[-0.5%] font-medium text-black100 bg-white backdrop-blur-[50px]' : '',
      item === 'medium' ? 'py-2.5 pl-4 pr-3 flex items-center gap-1 h-10 rounded-xl text-14 tracking-[-0.5%] font-medium text-black100 bg-gray' : '',
      item === 'little' ? 'py-1.5 px-1.5 flex items-center justify-center rounded-default h-7' : '',
      item === 'big' ? 'py-2.5 px-2.5 flex items-center justify-center rounded-xl h-10' : '',
      item === 'card' ? 'py-1.5 pl-[14px] pr-2.5 flex items-center gap-1 rounded-default text-12 font-medium' : '',
    ]"
    :style="{ backgroundColor: backgroundColor, color: color, width: width }"
  >
    <slot />
  </button>
</template>
