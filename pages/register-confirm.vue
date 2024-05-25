<template>
    <div class="px-[30px] max-w-[460px] w-[100%] relative py-[30px] rounded-[30px] h-auto bg-white">
      <form class="mx-auto w-[70%]" @submit.prevent="handleRegister">
        <p class="leading-[2] text-[#91939D]">Код был отправлен на почту</p>
        <InputCustom
          type="text"
          placeholder="Введите код"
          v-model="form.code"
          @change="v$.code.$touch"
          :validate="v$.code"
          defaultClass=" w-[100%] bg-[#E9EAEC] px-[15px] py-[6px] rounded-[10px]"
        />

        <button class="mt-[20px] w-[100%] py-[5px] rounded-[10px] text-white bg-[#FF185F] mx-auto ">Подтвердить регистрацию</button>

      </form>
    </div>

</template>
<script setup lang="ts">

  import { required, helpers } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  useHead({
    title: 'Подтверждение регистрации'
  })

  const { set } = useGlobalErrors()

  definePageMeta({
    layout: 'modal',
    middleware: ['auth']
  })

  const form = ref({
    code: ""
  })

  const rules = computed(() => {
    return {
      code: {
        required: helpers.withMessage('Поле обязательное для заполнения', required)
      },
    };
  })

  const v$ = useVuelidate(rules, form);

  const handleRegister = async () => {
    v$.value.$validate()


    if(!v$.value.$error) {
      const auth = useAuthStore()
      //const {token} = await executeRecaptcha('submit')

      const {data} = await auth.confirm(form.value)

      setTimeout(async () => {
        if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
          set({
            success: true,
            message: 'Регистрация успешно подтверждена'
          })
          await auth.fetchUser()

          const user: any = auth.getCurrentUser.value;

          if(user.type.id == 2)
            return navigateTo('/register-accept')

            return navigateTo('/profile')

        }
      }, 200)
    }
  }

</script>