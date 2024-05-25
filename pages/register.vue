<template>
    <div class="px-[30px] max-w-[460px] w-[100%] relative py-[30px] rounded-[30px] h-auto bg-white">
      <NuxtLink to="/" class="absolute right-[10px] top-[10px]">
        <img src="/img/close.png" alt="">
      </NuxtLink>
      <div class="mb-[20px] p-[4px] bg-[#E9EAEC] w-[60%] mx-auto rounded-[10px]">
        <NuxtLink to="/login" class="inline-block text-center py-[5px] w-1/2 rounded-[5px]">{{ __('Вход') }}</NuxtLink>
        <NuxtLink to="/register" class="inline-block text-center bg-white w-1/2 py-[5px]">{{ __('Регистрация') }}</NuxtLink>
      </div>
      <form class="mx-auto w-[70%]" @submit.prevent="handleRegister">
        <p class="leading-[2] text-[#91939D]">{{ __('Ник') }}</p>
        <InputCustom
          type="text"
          :placeholder="__('Ник')"
          v-model="form.login"
          @change="v$.login.$touch"
          :validate="v$.login"
          defaultClass=" w-[100%] bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
        />

        <p class="leading-[2] text-[#91939D]">Email</p>
        <InputCustom
          type="text"
          placeholder="Email"
          v-model="form.email"
          @change="v$.email.$touch"
          :validate="v$.email"
          defaultClass=" w-[100%] bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
        />
        <CheckboxCustom
          v-for="type in types"

          :title="type.name"
          v-model="form.type"
          @change="v$.type.$touch"
          type="radio"
          name="type"
          :value="type.id"
          :validate="v$.type"
          :isChecked="type.id == 1 ? true : false"
          defaultClass="container mt-[15px]"

        />
        <button class="mt-[20px] w-[100%] py-[5px] rounded-[10px] text-white bg-[#FF185F] mx-auto ">{{ __('Зарегестрироваться') }}</button>
        <p class="text-[12px] mt-[10px] text-[#91939D]">{{ __('Нашимая на кнопку “Зарегистрироваться” вы') }}<br> {{ __('соглашаетесь с') }} <span class="text-black">{{ __('пользовательским соглашением') }}</span></p>
      </form>
    </div>

</template>
<script setup lang="ts">

  import { required, minLength, helpers, email } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'
import { hydrate } from 'vue';
  
  const { __ } = useLocale()
  const { set } = useGlobalErrors()

  definePageMeta({
    layout: 'modal',
    middleware: ['no-auth']
  })

  const form = ref({
    login: "",
    email: "",
    type: ""
  })

  const types = ref<any>([])

  onMounted(async () => {
    setTimeout(async () => {
      const {data} = await useApiFetch('/api/user/type');
      if(data.value) {
        const resp: any = data.value
        if(resp?.data && Array.isArray(resp.data)) {
          types.value = resp.data

          if(resp.data.length > 0) {
            form.value.type = resp.data[0].id
          }
        }
      }
    }, 10)
  })

  const rules = computed(() => {
    return {
      login: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required),
        minLength: helpers.withMessage(__('Поле не должно содержать меньше 4 символов'), minLength(4)),
      },
      email: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required),
        minLength: helpers.withMessage(__('Некорректный email'), email),
      },
      type: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      }
    };
  })

  const v$ = useVuelidate(rules, form);

  const handleRegister = async () => {
    v$.value.$validate()

    if(!v$.value.$error) {
      const auth = useAuthStore()
      //const {token} = await executeRecaptcha('submit')

      const {data} = await auth.register(form.value)

      setTimeout(async () => {
        if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
          set({
            success: true,
            message: __('Регистрация успешно выполнена, на указанную при регистрации почту был отправлен код для подвтерждения регистрации')
          })
          await auth.fetchUser()

          return navigateTo('/register-confirm')
        }
      }, 200)
    }
  }

</script>