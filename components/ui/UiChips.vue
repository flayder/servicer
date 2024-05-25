<script setup>

const modelValue = defineModel()

defineProps({
  options: Array,
  grow: false,
  placeholder: ''
})
</script>

<template>
  <MultiSelect
    v-model="modelValue"
    display="chip"
    :placeholder="placeholder"
    :item="item"
    :showToggleAll="false"
    :options="options"
    :closeButtonProps="true"
    option-label="name"
    :maxSelectedLabels="1000"
    :selectionLimit="1000"
    :pt="{
      root: ({state}) => ({
        class: state.overlayVisible 
          ? `${ grow?'grow ':'' } py-2.5 pr-3 pl-[10px] border-none flex items-center justify-between bg-gray rounded-xl outline-none rounded-b-none shadow-none` 
          : `${ grow?'grow ':'' } py-2.5 pr-3 pl-[10px] border-none flex items-center justify-between bg-gray rounded-xl outline-none shadow-none`
      }),
      input: {
        class: 'py-0 px-0 text-black100 text-14 font-medium tracking-[-0.5%] font-sans outline-none'
      },
      trigger: ({state}) => ({
        class: state.overlayVisible ? 'rotate-180 w-5 h-5' : 'w-5 h-5'
      }),
      list: {
        class: 'flex flex-col gap-0'
      },
      token: {
        class: 'flex flex-row-reverse gap-2 bg-white200 py-0.5 px-[7px]  h-5 w-fit m-0 rounded-[6px] font-medium text-gray300'
      },
      label: {
        class: 'flex gap-[6px] justify-start align-start flex-wrap p-0'
      },
      labelContainer: {
        class: 'p-0'
      },
      tokenLabel: {
        class: 'text-14 text-gray300',
      },
      removeTokenIcon: {
        class: 'block w-2.5 h-auto m-0 bg-[url(/svg/cross.svg)] text-transparent'
      },
      item: {
        class: 'py-2.5 pr-3 pl-4 my-0 text-14 tracking-[-0.5%] text-black100 font-medium bg-gray rounded-none'
      },
      panel: {
        class: 'py-0 px-0 rounded-xl font-sans bg-gray'
      },
      wrapper: {
        class: 'rounded-b-xl'
      }
    }"
  >
    <template #dropdownicon>
      <img
        src="/svg/chevron-down.svg"
        width="20"
        height="20"
      />
    </template>
    <!-- <template #removetokenicon>
      <img 
        src="/svg/cross.svg"
      />
    </template> -->
  </MultiSelect>
</template>
