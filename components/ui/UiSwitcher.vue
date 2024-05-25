<template>
  <span class="cursor-pointer">
    <input v-model="modelValue" @change="changeHandler" type="checkbox" class="hidden">

    <span class="w-[34px] h-5 bg-gray400 hover:bg-grayhover active:bg-grayactive' inline-block rounded-filter relative mb-[-5px] transition"
      :class="{ 'bg-green hover:bg-greendark active:bg-greenlight': !!modelValue }"
    >
      <span class="w-4 h-4 bg-white rounded-full absolute top-[50%] translate-y-[-50%] left-0 transition"
        :class="!!modelValue ? 'translate-x-[16px]': 'translate-x-[2px]'"
      ></span>
    </span>
  </span>
</template>

<script setup lang="ts">
const modelValue = defineModel()

withDefaults(defineProps<{
	checked: boolean,
}>(), {
  checked: true,
})

const emit = defineEmits<{
  (e: 'change', event: any): any
}>()

const changeHandler = (event: any) => {
  emit('change', !!modelValue.value)
}

</script>