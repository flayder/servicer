<template>
  <ui-modal
    class="w-full popup"
    :maxWidth="maxWidth"
    v-model="openComplaint"
    :btn="true"
  >
    <form class="flex flex-col gap-0 px-10 pb-4" @submit.prevent="handleForm">
      <h4 class="text-24 pb-6 font-semibold laptop:text-30">
        {{ __('Отпраить жалобу') }}
      </h4> 

      <div class="flex justify-stretch gap-[10px] mb-5" v-if="!auth.isLoggedIn">
        <ui-input 
          v-model="form.phone"
          item="form"
          :label="__('Телефон')"
          :placeholder="__('Телефон')"
          mask="+7(999) 999-99-99"
        />
      </div>
      
      <div class="flex flex-col gap-1 mb-5">
        <span class="text-12 font-medium text-gray200">{{ __('Ваша жалоба') }}</span>
        <ui-textarea
          v-model="form.text"
          class="flex"
          :placeholder="__('Текст жалобы')"
        />
      </div>

      <div class="pb-7 border-b border-gray mb-5">
        <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
          {{ __('Перенесите фото на первое место, чтобы сделать его главным.') }} <br>
          {{ __('Фото до 25Mb формата') }} png, jpeg, jpg, webp <br>
          {{ __('Лимит по количеству фотографий 5 шт.') }}
        </p>
        <UiFile
          item="square"
          class=""
          accept="image/*"
          background-color=""
          :multiple="true"
          color="rgb(20, 21, 26)"
          @change="uploadFile"
        > 
        </UiFile>
      </div>

      <div class="flex flex-col gap-2.5">
        <ui-button
          type="submit"
          item="large"
        >
        {{ __('Отправить жалобу') }}
        </ui-button>
      </div>
    </form>
  </ui-modal>
</template>

<script setup >

const auth = useAuthStore()
const { __ } = useLocale()
const { executeRecaptcha } = useGoogleRecaptcha()
const { set } = useGlobalErrors()
const route = useRoute()

const { openComplaint } = useRoot()

const filesData = ref([])

const form = ref({
  phone: '',
  text: ''
})

const handleForm = async () => {
  const {token} = await executeRecaptcha('submit')
  const formData = new FormData()

  formData.append('captcha', token)

  filesData.value.map((file, key) => {
    formData.append(`file_${key}`, file)
  })

  formData.append('to_user_id', route.params.id)

  for (const item in form.value) {
    formData.append(item, configureData(form.value[item]))
  }
  
  const {data} = await useApiFetch(auth.isLoggedIn ? '/api/user/profile/complain' : '/api/profile/complain', {
    method: 'POST',
    body: formData
  })

  setTimeout(async () => {
    if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
      openComplaint.value = false
      set({
        success: true,
        message: __('Жалоба успешно отправлена')
      })
    }
  }, 200)
}

const uploadFile = (files) => {
  for(let i = 0; i < files.length; i++) {
    filesData.value.push(files[i])
  }
}

</script>