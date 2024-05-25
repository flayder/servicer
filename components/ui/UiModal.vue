<script setup lang="ts">
const modelValue = defineModel<boolean>()

withDefaults(defineProps<{
  btn?: boolean,
  maxWidth?: boolean,
}>(), {
  btn: true,
  maxWidth: false,
})
</script>

<template>
  <Dialog class="dialog"
    v-model:visible="modelValue"
    :pt="{ header: { class: 'hidden' }, content: { class: 'h-full rounded-quick py-5 font-sans text-black100 bg-white laptop:p-10' }, root: { class: 'relative rounded-quick w-full max-w-[343px] bg-white ' + maxWidth?  'laptop:max-w-[780px]' : 'laptop:max-w-[465px]' }, mask: { class: 'bg-black400 backdrop-blur-[15px]' } }"
    modal
    :dismissable-mask="true"
  >
    <slot />
    <button
      v-if="btn === true"
      :btn="btn"
      class="absolute top-5 right-5"
      @click="modelValue = false"
    >
      <img
        src="/svg/btn-close.svg"
        class="w-10 h-10 laptop:w-12 laptop:h-12"
      />
    </button>
  </Dialog>
</template>
