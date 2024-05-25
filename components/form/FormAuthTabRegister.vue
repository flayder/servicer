<script setup lang="ts">
const { openPolicy } = useRoot()

const nick = ref<string>('')
const email = ref<string>('')
const type = ref<string[]>()
</script>

<template>
  <form class="flex flex-col gap-5 mb-4">
    <fieldset class="flex flex-col gap-[18px]">
      <ui-input
        v-model="nick"
        item="form"
        label="Ник"
        placeholder="Ваш ник"
      />
      <ui-input
        v-model="email"
        item="form"
        label="Email"
        placeholder="Email"
      />
    </fieldset>
    <fieldset class="flex flex-col gap-2.5">
      <ui-checkbox
        v-model="type"
        name="type"
        input-id="walker"
        for-label="walker"
        value="Ходок"
        label="Ходок"
      />
      <ui-checkbox
        v-model="type"
        name="type"
        input-id="advertiser"
        for-label="advertiser"
        value="Рекламодатель"
        label="Рекламодатель"
      />
    </fieldset>
    <ui-button
      type="submit"
      item="large"
    >
      Зарегистрироваться
    </ui-button>
  </form>
  <span class="block text-12 font-medium text-gray200">Нажимая на кнопку “Зарегистрироваться” вы соглашаетесь с <button
    class="text-black100"
    @click="openPolicy = true"
  >пользовательским соглашением</button></span>
</template>
