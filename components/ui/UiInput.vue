<template>
  <label
    v-if="item === 'search'"
    :item="item"
    class="relative py-1.5 pr-2.5 pl-[30px] h-7 bg-gray hover:bg-inputhover transition rounded-default w-full laptop:max-w-[349px] laptop:pr-[55px]"
  >
    <input
      v-model="modelValue"
      class="outline-none border-none bg-[transparent] w-full text-12 text-black100 font-medium flex items-center placeholder:font-sans placeholder:text-12 placeholder:text-gray100 placeholder:font-medium"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @keyup.enter="keupEnterHandler"
      @keyup="keyupHandler"
    >
    <slot />
  </label>

  <div
    v-if="item === 'searchLarge'"
    :item="item"
    class="flex flex-col gap-1 text-12 font-medium text-gray200"
  >
    {{ label }}
    <label
      class="relative py-2.5 pr-[61px] pl-9 bg-gray hover:bg-inputhover transition rounded-default w-full"
    >
      <input
        v-model="modelValue"
        class="outline-none border-none bg-[transparent] w-full text-14 tracking-[-0.5%] font-medium text-black100 placeholder:font-sans placeholder:text-14 placeholder:text-gray400 placeholder:font-medium"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        @keyup.enter="keupEnterHandler"
        @keyup="keyupHandler"
      >
      <slot />
    </label>
  </div>

  <label
    v-if="item === 'filter'"
    :item="item"
    class="relative py-2.5 px-4 bg-gray hover:bg-inputhover transition rounded-xl w-full"
  >
    <input
      v-model="modelValue"
      class="outline-none border-none bg-[transparent] w-full text-14 text-black font-medium tracking-[-0.5%]"
      :disabled="disabled"
      :type="type"
      @keyup.enter="keupEnterHandler"
      @keyup="keyupHandler"
    >
  </label>

  <div
    v-if="item === 'form'"
    :item="item"
    class="flex flex-col gap-1 text-12 font-medium text-gray200"
    :class="{ 'w-full': maxWidth }"
    :disabled="disabled"
  >
    {{ label }}
    <label
      class="relative py-2.5 px-4 bg-gray hover:bg-inputhover transition rounded-xl w-full"
    >
      <InputMask v-if="mask" 
        :unstyled="true" 
        v-model="modelValue" 
        :placeholder="placeholder" 
        :mask="mask" :slotChar="slotChar"
        :type="type"
        class="outline-none border-none bg-[transparent] w-full text-14 tracking-[-0.5%] font-medium text-black100 placeholder:font-sans placeholder:text-14 placeholder:text-gray400 placeholder:font-medium"        
      />
      <input v-else
        v-model="modelValue"
        class="outline-none border-none bg-[transparent] w-full text-14 tracking-[-0.5%] font-medium text-black100 placeholder:font-sans placeholder:text-14 placeholder:text-gray400 placeholder:font-medium"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        @keyup.enter="keupEnterHandler"
        @keyup="keyupHandler"
      >

    </label>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<any>()

withDefaults(defineProps<{
	placeholder?: string,
  label?: any,
  item?: any,
  maxWidth?: boolean,
  mask?: string,
  slotChar?: string,
  disabled?: boolean,
  type?: string,
}>(), {
  placeholder: '',
  item: 'default',
  label: '',
  maxWidth: false,
  disabled: false,
  type: "text"
})

const emit = defineEmits<{
  (e: 'enter', event: any): any,
  (e: 'keyup', event: any): any
}>()
const keupEnterHandler = (event: any) => {
  setTimeout(() => {
    emit('enter', modelValue.value)
  }, 100)
}

const keyupHandler = (event: any) => {
  emit('keyup', event.target.value)
}
</script>