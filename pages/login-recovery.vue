<template>

    <form class="px-[30px] max-w-[460px] w-[100%] relative py-[30px] rounded-[30px] h-auto bg-white" @submit.prevent="handleLogin">
      <NuxtLink to="/" class="absolute right-[10px] top-[10px]">
        <img src="/img/close.png" alt="">
      </NuxtLink>
      <div class="mb-[20px] p-[4px] bg-[#E9EAEC] w-[60%] mx-auto rounded-[10px]">
        <NuxtLink to="/login" class="inline-block text-center py-[5px] w-1/2 rounded-[5px]">{{ __('Вход') }}</NuxtLink>
        <NuxtLink to="/register" class="inline-block text-center w-1/2 py-[5px]">{{ __('Регистрация') }}</NuxtLink>
      </div>
      <div class="mx-auto w-[70%]">
      <p class="leading-[2] text-[#91939D]">{{ __('Введите логин или email') }}</p>
      <InputCustom
        type="text"
        :placeholder="__('Логин/email')"
        name="login"
        v-model="form.login"
        @change="v$.login.$touch"
        :validate="v$.login"
        defaultClass=" w-[100%] border bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
      />
      <button class="mt-[20px] w-[100%] py-[5px] rounded-[10px] text-white bg-[#FF185F] mx-auto ">{{ __('Восстановить') }}</button>
      </div>
    </form>

</template>

<script setup lang="ts">
  import { required, minLength, helpers } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  const { set } = useGlobalErrors()
  const { __ } = useLocale()

  definePageMeta({
    layout: 'modal',
    middleware: ['no-auth']
  })

  const rules = computed(() => {
    return {
      login: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required),
        minLength: helpers.withMessage(__('Поле не должно содержать меньше 4 символов'), minLength(4)),
      }
    };
  });

  const form = ref({
    login: ""
  })

  const v$ = useVuelidate(rules, form);

  const handleLogin = async () => {
    v$.value.$validate()

    if(!v$.value.$error) {
      const auth = useAuthStore()

      auth.loginRecovery(form.value)

      set({
        success: true,
        message: __('Если данные будут найдены, то инструкции с дальнейшими действиями для восстановления будут высланы на почту')
      })

      return navigateTo('/')
    }
  }
</script>
