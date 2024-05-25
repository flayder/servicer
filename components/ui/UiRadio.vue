<template>
  <div
    v-if="item === 'black'"
    :item="item"
    class="flex gap-2 checkbox-black"
  >
    <RadioButton
      v-model="modelValue"
      :input-id="inputId"
      :name="name"
      :value="value"
      @change="changeHandler"
      :pt="{
        box: ({ context, state }) => ({
          class: context.checked ? 'w-5 h-5 rounded-checkbox border-none outline-none bg-black100 shadow-none' : 'w-5 h-5 bg-gray border-none rounded-checkbox' && state.focused ? 'w-5 h-5 shadow-none rounded-checkbox' : 'w-5 h-5 bg-gray border-none rounded-checkbox'
        }), icon: { class: 'w-2 h-2 text-white' }
      }"
    />
    <label class="text-14 font-medium tracking-[-0.5%] cursor-pointer">{{ label }}</label>
  </div>

  <div
    v-if="item === 'white'"
    :item="item"
    class="flex items-center gap-2 checkbox-white"
  >
    <RadioButton
      v-model="modelValue"
      :input-id="''+inputId"
      :name="name"
      :value="value"
      @change="changeHandler"
      :pt="{
        box: ({ context, state }) => ({
          class: context.checked ? 'w-5 h-5 rounded-checkbox border-none outline-none bg-white shadow-none' : 'w-5 h-5 bg-white border-none rounded-checkbox' && state.focused ? 'w-5 h-5 shadow-none rounded-checkbox' : 'w-5 h-5 bg-white border-none rounded-checkbox'
        }), icon: { class: 'w-2 h-2 text-black100' }
      }"
    />
    <label class="text-12 font-medium text-white100 cursor-pointer">{{ label }}</label>
  </div>
</template>
<script setup lang="ts">
const modelValue = defineModel()

withDefaults(defineProps<{
	label?: string,
	inputId?: any,
	name?: any,
	value?: any,
  item?: string
}>(), {
  item: 'black'
})

const emit = defineEmits<{
  (e: 'change', event: any): any
}>()
const changeHandler = (event: any) => {
  setTimeout(() => {
    emit('change', modelValue.value)
  }, 100)
}

</script>