<template>
  <Dropdown
    v-if="item === 'small'"
    v-model="modelValue"
    :item="item"
    :options="options"
    :optionLabel="optionName"
    :optionValue="optionValue"
    @change="changeHandler"
    :pt="{ 
      root: ({ state }) => ({ 
      class: state.overlayVisible ? 'py-1.5 pr-2.5 pl-[14px] border-none flex items-center gap-1 bg-gray hover:bg-inputhover rounded-default outline-none rounded-b-none shadow-none' : 'py-1.5 pr-2.5 pl-[14px] border-none flex items-center gap-1 bg-gray hover:bg-inputhover rounded-default outline-none shadow-none' }), 
      input: { class: 'py-0 px-0 text-black100 text-12 font-medium font-sans outline-none' }, 
      trigger: ({ state }) => ({ class: state.overlayVisible ? 'rotate-180 w-4 h-4' : 'w-4 h-4' }), 
      list: { class: 'flex flex-col gap-0' }, 
      item: { class: 'py-1.5 pl-[14px] pr-2.5 my-0 text-12 text-black100 font-medium bg-gray rounded-none'}, 
      panel: { class: 'py-0 px-0 rounded-default font-sans bg-gray' }, 
      wrapper: { class: 'rounded-b-default' } 
    }"
  >
    <template #dropdownicon>
      <img
        src="/svg/chevron-down.svg"
        width="16"
        height="16"
      />
    </template>
  </Dropdown>

  <Dropdown
    v-if="item === 'large'"
    v-model="modelValue"
    :item="item"
    :options="options"
    :optionLabel="optionName"
    :optionValue="optionValue"
    @change="changeHandler"
    :pt="{ 
      root: ({ state }) => ({ 
        class: state.overlayVisible ? `${ grow?'grow ':'' } py-2.5 pr-3 pl-4 border-none flex items-center justify-between bg-gray hover:bg-inputhover rounded-xl outline-none rounded-b-none shadow-none` : `${ grow?'grow ':'' } py-2.5 pr-3 pl-4 border-none flex items-center justify-between bg-gray hover:bg-inputhover rounded-xl outline-none shadow-none` }), 
        input: { class: 'py-0 px-0 text-black100 text-14 font-medium tracking-[-0.5%] font-sans outline-none' }, trigger: ({ state }) => ({ class: state.overlayVisible ? 'rotate-180 w-5 h-5' : 'w-5 h-5' }), 
        list: { class: 'flex flex-col gap-0' }, item: { class: 'py-2.5 pr-3 pl-4 my-0 text-14 tracking-[-0.5%] text-black100 font-medium bg-gray rounded-none'}, 
        panel: { class: 'py-0 px-0 rounded-xl font-sans bg-gray' }, 
        wrapper: { class: 'rounded-b-xl' } }"
  >
    <template #dropdownicon>
      <img
        src="/svg/chevron-down.svg"
        width="20"
        height="20"
      />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import type { Select } from '~/types'

const modelValue = defineModel<any>()

const emit = defineEmits<{
  (e: 'change', event: any): any
}>()

const changeHandler = (event: any) => {
  emit('change', event.value)
}

withDefaults(defineProps<{
  options: any,
  item?: string,
  grow?: boolean,
  optionName?: string,
  optionValue?: string,
}>(), {
  optionName: "name",
  optionValue: "name",
  item: 'small',
  grow: false
})
</script>