<script setup lang="ts">
const modelValue = defineModel<string | number>()

withDefaults(defineProps<{
	placeholder?: string,
  label?: string,
  maxWidth?: boolean,
}>(), {
  placeholder: '',
  label: '',
  maxWidth: false,
})
</script>

<template>

  <div
    :item="item"
    class="flex flex-col gap-1 text-12 font-medium text-gray200"
    :class="{ 'w-full': maxWidth }"
  >
    {{ label }}
    <label
      class="relative py-2.5 px-4 bg-gray rounded-xl w-full"
    >

      <Calendar 
      
      :placeholder="placeholder"
        class="outline-none border-none bg-gray w-full text-14 tracking-[-0.5%] font-medium text-black100 placeholder:font-sans placeholder:text-14 placeholder:text-gray400 placeholder:font-medium"
        v-model="modelValue" dateFormat="dd/mm/yy" />
    </label>
  </div>
</template>
