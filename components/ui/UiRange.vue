<template>
  <Slider
    @change="changeHandler"
    v-model="modelValue"
    :min="min"
    :max="max"
    range
    :pt="{ root: { class: 'w-full h-1 bg-gray' }, startHandler: { class: 'w-6 h-6 -mt-3 ml-0 rounded-full bg-white hover:bg-checkboxhover shadow-range' }, endHandler: { class: 'w-6 h-6 -mt-3 -ml-6 rounded-full bg-white hover:bg-checkboxhover shadow-range' }, range: { class: 'bg-pink max-w-full' } }"
  />
</template>
<script setup lang="ts">
const modelValue = defineModel<number | number[]>()
defineProps<{
	min: number,
	max: number
}>()

const emit = defineEmits<{
  (e: 'change', event: any): any
}>()
const changeHandler = (event: any) => {
  emit('change', event)
}

</script>
<style>
.p-slider .p-slider-handle {
  border: none;
}

.p-slider .p-slider-handle:focus {
  box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.12),0px 4px 4px 0px rgba(0, 0, 0, 0.12);
}

.p-slider .p-slider-handle::before {
  width: 0px;
  height: 0px;
  box-shadow: none;
}
</style>
