<template>
  <label>
    <textarea
      v-model="modelValue"
      class="py-2.5 px-4 w-full h-[130px] rounded-xl bg-gray text-14 font-medium tracking-[-0.5%] text-black100 placeholder:text-14 placeholder:font-medium placeholder:text-gray200 placeholder:tracking-[-0.5%]"
      :placeholder="placeholder"
      :style="{ 
        minHeight: `${minHeight* 20}px`,
        resize: noResize ? 'none' : 'vertical' 
      }"
    />
  </label>
</template>
<script setup lang="ts">
const modelValue = defineModel<string>()

withDefaults(
  defineProps<{
    placeholder?: string
    minHeight?: number,
    noResize?: boolean,
  }>(),
  {
    minHeight: 5,
    moResize: false,
  }
)
</script>