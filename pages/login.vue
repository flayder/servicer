<template>

    <form class="px-[30px] max-w-[460px] w-[100%] relative py-[30px] rounded-[30px] h-auto bg-white" @submit.prevent="handleLogin">
      <NuxtLink to="/" class="absolute right-[10px] top-[10px]">
        <img src="/img/close.png" alt="">
      </NuxtLink>
      <div class="mb-[20px] p-[4px] bg-[#E9EAEC] w-[60%] mx-auto rounded-[10px]">
        <NuxtLink to="/login" class="inline-block text-center bg-white py-[5px] w-1/2 rounded-[5px]">{{ __('Вход') }}</NuxtLink>
        <NuxtLink to="/register" class="inline-block text-center w-1/2 py-[5px]">{{ __('Регистрация') }}</NuxtLink>
      </div>
      <div class="mx-auto w-[70%]">
      <p class="leading-[2] text-[#91939D]">{{ __('Email/Логин') }}</p>
      <InputCustom
        type="text"
        placeholder="Email"
        name="login"
        v-model="form.login"
        @change="v$.login.$touch"
        :validate="v$.login"
        defaultClass=" w-[100%] border bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
      />
      <p class="leading-[2] text-[#91939D]">{{ __('Пароль') }}</p>
      <InputCustom
        type="password"
        :placeholder="__('Пароль')"
        v-model="form.password"
        @change="v$.password.$touch"
        :validate="v$.password"
        defaultClass=" w-[100%] border bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
      />
      <NuxtLink class="mt-[20px] block" to="/login-recovery">{{ __('Восстановить пароль') }}</NuxtLink>
      <button class="mt-[20px] w-[100%] py-[5px] rounded-[10px] text-white bg-[#FF185F] mx-auto ">{{ __('Войти') }}</button>
        <!-- <button  class="mt-[10px] items-center justify-center flex w-[100%] py-[5px] rounded-[10px] text-black bg-[#E9EAEC] mx-auto "><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7108 6.02392L14.6358 15.5709C14.4791 16.2446 14.071 16.4123 13.491 16.0951L10.3292 13.822L8.80372 15.2537C8.63478 15.4186 8.49382 15.5561 8.16821 15.5561L8.3956 12.4148L14.2552 7.2491C14.5101 7.02773 14.1997 6.90459 13.8594 7.12644L6.61528 11.5768L3.49664 10.6242C2.8184 10.4177 2.80612 9.96251 3.63809 9.64483L15.8361 5.05988C16.4009 4.85336 16.895 5.18206 16.7108 6.02392Z" fill="#14151A"/>
        </svg>
          Войти через телеграм</button> -->
      </div>
    </form>

</template>

<script setup lang="ts">
  import { required, minLength, helpers } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  const { __ } = useLocale()
  const { executeRecaptcha } = useGoogleRecaptcha()
  const { set } = useGlobalErrors()

  definePageMeta({
    layout: 'modal',
    middleware: ['no-auth']
  })

  const rules = computed(() => {
    return {
      login: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required),
        minLength: helpers.withMessage(__('Поле не должно содержать меньше 4 символов'), minLength(4)),
      },
      password: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required),
        minLength: helpers.withMessage(__('Поле не должно содержать меньше 4 символов'), minLength(4)),
      }
    };
  });

  const form = ref({
    login: "",
    password: ""
  })

  const v$ = useVuelidate(rules, form);

  const handleLogin = async () => {
    v$.value.$validate()

    if(!v$.value.$error) {
      const auth = useAuthStore()
      const {token} = await executeRecaptcha('submit')

      const {data} = await auth.login({
        ...form.value,
        token
      })

      setTimeout(async () => {
        if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
          set({
            success: true,
            message: __('Авторизация успешно выполнена')
          })
          await auth.fetchUser()

          return navigateTo('/profile')
        }
      }, 200)
    }
  }
</script>
