<template>
    <label
        :class="['container', {
          'border-red-500 focus:border-red-500': validate && validate.$error,
          'border-[#42d392] ': validate && validate.$invalid,
        }, defaultClass]"
    >
        {{ title }}
        <slot />
        <input
            :type="type"
            :name="name"
            v-model="model"
            @change="changeHandler"

            :value="value"
        >
        <span class="checkmark"></span>
    </label>
    <div v-for="error in getErrors(validate)" class="text-xs text-red-500">
        {{ error }}
    </div>
</template>

<script setup lang="ts">

    import {getErrors} from "~/utils/formValidation"

    let checked = ref(false)

    const props = defineProps<{
        type: "radio" | "checkbox"
        name?: string
        value?: any
        defaultClass?: string
        title?: string
        validate?: any
        isChecked?: boolean
    }>()

    // onMounted(() => {
    //     if(props.isChecked !== null || props.isChecked !== undefined) {
    //         checked.value = props.isChecked
    //     }
    // })

    const model = defineModel()

    const emit = defineEmits<{
      (e: 'change', event: any): any
    }>()

    const changeHandler = (event: any) => {
        checked.value = event.target.value
        emit('change', event)
    }

    const echo = (text: string) => {
      return text.replace('\n', "<br/>")
    }
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background: #E9EAEC;
  transition: 0.3s;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #1a1a1a;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #000000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
