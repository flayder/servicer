<template>
    <div>
      <form class="px-[30px] py-[30px] rounded-[30px] my-[60px] h-auto bg-white" @submit.prevent="accept">
      <div class="mb-[30px]">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4030_60618)">
          <path d="M32.4691 64.4099C50.089 64.4099 64.6324 49.8665 64.6324 32.2777C64.6324 14.6889 50.0579 0.145508 32.438 0.145508C14.8492 0.145508 0.336914 14.6889 0.336914 32.2777C0.336914 49.8665 14.8803 64.4099 32.4691 64.4099ZM32.4691 37.5916C30.6356 37.5916 29.5791 36.5661 29.5169 34.7016L29.0819 19.1949C29.0197 17.2682 30.387 15.9319 32.438 15.9319C34.4269 15.9319 35.8874 17.2992 35.8253 19.2259L35.3281 34.7016C35.2659 36.5972 34.2404 37.5916 32.4691 37.5916ZM32.4691 48.3438C30.356 48.3438 28.6157 46.8211 28.6157 44.7701C28.6157 42.7191 30.3249 41.1964 32.4691 41.1964C34.5822 41.1964 36.2914 42.7191 36.2914 44.7701C36.2914 46.8522 34.5512 48.3438 32.4691 48.3438Z" fill="#0A0F29" fill-opacity="0.25"/>
        </g>
        <defs>
          <clipPath id="clip0_4030_60618">
            <rect width="65" height="65" fill="white"/>
          </clipPath>
        </defs>
      </svg>
        <h2 class="font-bold text-[25px]">{{ __('Важно') }}</h2>
        <p class="text-[#6F717C]">{{ __('У Avrora только один аккаунт поддержки') }}<br>
          Telegram - <span class="text-black">@avrora_support</span></p>
      </div>
      <div  class="mb-[30px]">
        <h2 class="font-semibold text-[25px] ">{{ __('Аккаунтов в WhatsApp и Viber у нас НЕТ') }}</h2>
        <p class="text-[#6F717C]">
          {{ __('Единственный аккаунт для связи с нами') }}<br>
          Telegram - <span class="text-black">@avrora_support</span></p>

          <p class="text-[#6F717C] mt-[15px]">{{ __('Если кто-то кроме пишет вам от нашего имени - это мошенники.') }}</p>
      </div>
      <h2 class="font-semibold text-[25px] ">{{ __('Все наши контакты указаны тут') }} <span class="text-[#FF185F]"><NuxtLink to="/contacts">{{ __('контакты') }}</NuxtLink></span></h2>
      <p class="text-[#6F717C] mt-[20px]">{{ __('Для дайнейшей работы с Avrora вам нужно согласиться с правилами прощадки') }}:</p>
      <CheckboxCustom
        v-model="form.checkbox1"
        @change="v$.checkbox1.$touch"
        type="checkbox"
        :validate="v$.checkbox1"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я подтверждаю, что мне и всем девушкам, размещенным от моего аккаунта, есть 18 лет.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox2"
        @change="v$.checkbox2.$touch"
        type="checkbox"
        :validate="v$.checkbox2"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я подтверждаю, что мне и всем девушкам, размещенным от моего аккаунта, есть 18 лет.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox3"
        @change="v$.checkbox3.$touch"
        type="checkbox"
        :validate="v$.checkbox3"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я согласен с тем, что меня могут навсегда забанить за размещение фейковых (чужих/ненастоящих) фото и использование более одного аккаунта.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox4"
        @change="v$.checkbox4.$touch"
        type="checkbox"
        :validate="v$.checkbox4"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я согласен с тем, что в случае бана мне не вернут средств с моего баланса.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox5"
        @change="v$.checkbox5.$touch"
        type="checkbox"
        :validate="v$.checkbox5"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я прочитал(а) пользовательское соглашение проекта Avrora.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox6"
        @change="v$.checkbox6.$touch"
        type="checkbox"
        :validate="v$.checkbox6"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я сам(а) и добровольно создал(а) или хочу создать анкету на Avrora.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox7"
        @change="v$.checkbox7.$touch"
        type="checkbox"
        :validate="v$.checkbox7"
        defaultClass="container mt-[15px]"
      >
        {{ __('Я понимаю, что за использование фильтров или ретуши на проверочных видео меня навсегда<br>забанят на Avrora.') }}
      </CheckboxCustom>
      <CheckboxCustom
        v-model="form.checkbox8"
        @change="v$.checkbox8.$touch"
        type="checkbox"
        :validate="v$.checkbox8"
        defaultClass="container mt-[15px]"
      >
        {{ __('В анкете я указал(а) возраст примерно (+/- 5 лет) соответствующий реальному.') }}
      </CheckboxCustom>
      <div class="flex justify-between">
        <button class="py-[6px] px-[50px] rounded-[10px] bg-[#FF185F] text-white">Принять</button>
        <button type="button" class="py-[6px] px-[40px] rounded-[10px] bg-[#E9EAEC] text-black" @click="decline">Отклонить</button>
      </div>
    </form>
    </div>
</template>

<script setup lang="ts">

  import { required, helpers} from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  const { __ } = useLocale()
  const auth = useAuthStore()

  useHead({
    title: __('Согласие с правилами')
  })

  definePageMeta({
    layout: 'modal',
    middleware: ['auth']
  })

  const form = ref({
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    checkbox4: "",
    checkbox5: "",
    checkbox6: "",
    checkbox7: "",
    checkbox8: "",
  })

  const rules = computed(() => {
    return {
      checkbox1: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox2: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox3: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox4: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox5: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox6: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox7: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
      checkbox8: {
        required: helpers.withMessage(__('Поле обязательное для заполнения'), required)
      },
    };
  })

  const v$ = useVuelidate(rules, form);

  const accept = async () => {
    v$.value.$validate()

    if(!v$.value.$error) {
      const {data} = await auth.accept()

      const response: any = data.value
      if(response.errors && response.errors.length == 0) {
        await auth.fetchUser()

        return navigateTo('/profile')
      }
    }
  }

  const decline = async () => {
    await auth.logout()

    return navigateTo('/')
  }
</script>

<style>
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
