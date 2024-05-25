<template>
    <div class="relative w-[100%]">
        <input
          :type="type"
          :placeholder="placeholder"
          :name="name"
          :id="name"
          v-model="model"
          @change="changeHandler"
          :class="[{
            'border-red-500 focus:border-red-500': validate && validate.$error,
            'border-[#42d392] ': validate && validate.$invalid,
          }, defaultClass]"
        >
        <div v-for="error in getErrors(validate)" class="text-xs text-red-500">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">

    import {getErrors} from "~/utils/formValidation"

    defineProps<{
        type: string
        name?: string
        defaultClass?: string
        placeholder?: string
        validate?: any
    }>()

    const model = defineModel()

    const emit = defineEmits<{
      (e: 'change', event: any): any
    }>()

    const changeHandler = (event: any) => {
        emit('change', event)
    }
</script>