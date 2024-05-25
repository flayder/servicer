<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-2">{{ __('Профиль') }}</ProfileTitleWrap>

    <form class="flex flex-col gap-[14px] laptop:gap-[18px] max-w-[386px]" @submit.prevent="formHandler">
      <ui-input
        v-model="form.login"
        item="form"
        :label="__('Login')"
        :disabled="true"
      />

      <ui-input
        v-model="form.email"
        item="form"
        :label="__('Email')"
        placeholder="email@gmail.com"
        :disabled="true"
      />

      <ui-input
        v-model="form.name"
        item="form"
        :label="__('Имя')"
        :placeholder="__('Ваше имя')"
      />

      <ui-input
        v-model="form.phone"
        item="form"
        :label="__('Телефон')"
        :placeholder="__('Ваш телефон')"
        mask="+7(999) 999-99-99"
      />

      <ui-input
        v-model="form.oldPass"
        item="form"
        :label="__('Старый пароль')"
        :placeholder="__('Старый пароль')"
        type="password"
      />

      <ui-input
        v-model="form.newPass"
        item="form"
        :label="__('Новый пароль')"
        :placeholder="__('Новый пароль')"
        type="password"
      />
  
      <!-- <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Пол</span>
        <ui-select
          v-model="sex"
          item="large"
          :options="sexList"
        />
      </div>
      
      <ui-input
        v-model="age"
        item="form"
        label="Возраст, лет"
        placeholder="Ваш возраст"
      /> -->
  
      <!-- <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Город</span>
        <ui-select
          v-model="city"
          item="large"
          :options="cities"
        />
      </div> -->
  
      <!-- <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">О себе</span>
        <ui-textarea
          v-model="about"
          class="flex"
          placeholder="Расскажите о себе"
        />
      </div> -->

      <!-- <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Подключить Telegram</span>
        <ui-button
          item="large"
          to="/"
          class="w-fit"
          background-color="rgb(233, 234, 236)"
          color="rgb(20, 21, 26)"
        >
          <img
            src="/svg/telegram.svg"
            width="20"
            height="20"
          />
          Войти через Telegram
        </ui-button>
      </div> -->
      <template v-if="auth.isLoggedIn && auth.getCurrentUser.value?.type.id == 2">
        <div class="flex flex-col gap-[18px]">
          <label class="flex gap-2 items-center">
            <UiSwitcher v-model="form.is_called" />
            <span class="text-14 font-medium text-black100">{{ __('Отвечаю на звонки') }}</span>
          </label>
        </div>

        <div class="flex flex-col gap-1 mb-12">
          <span class="text-12 font-medium text-gray200">{{ __('Время') }}</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center w-full">
              <ui-select
                v-model="form.calling_from"
                item="large"
                :grow="true"
                :options="time"
              />
              <img class="shrink-0"
                src="/svg/minus.svg"
                width="15"
                height="15"
              />
              <ui-select
                v-model="form.calling_to"
                :grow="true"
                item="large"
                :options="time"
              />
            </div>
          </div>
          <span class="text-12 font-medium text-gray200">({{ __('удобное время для звонков') }})</span>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">{{ __('Загрузить документы') }}</span>
          <UiFile
            item="large"
            class="w-fit"
            background-color="rgb(233, 234, 236)"
            color="rgb(20, 21, 26)"
            :multiple="true"
            accept="*"
            @change="uploadFile"
            @delete="deleteFile"
            :files="documents"
          >
            <img
              src="/svg/picture.svg"
              width="20"
              height="20"
            />
            {{ __('Загрузить') }}
          </UiFile>
        </div>
        <ui-input
          v-for="contact in contacts"
          v-model="form.contacts[contact.id]"
          item="form"
          :label="contact.name"
          :placeholder="contact.name"
        />
      </template>
    
      <ui-button
        class="h-12"
        type="submit"
        item="large"
      >
        {{ __('Сохранить') }}
      </ui-button>

    </form>
  </div>
</template>

<script setup lang="ts">

import {addDataToRef, configureData} from "~/utils/dataHandler"

const { __ } = useLocale()

const gl = useGlobalData()
const auth = useAuthStore()
const { set } = useGlobalErrors()

const contacts: any = ref([])
const documents: any = ref([])

const form: any = ref({
  login: "",
  email: "",
  name: "",
  phone: "",
  is_called: true,
  foreign_name: "",
  calling_from: "",
  calling_to: "",
  oldPass: "",
  newPass: "",
  removed_documents: [],
  contacts: {}
})

const time = ref([
  {name: '00'},
  {name: '01'},
  {name: '02'},
  {name: '03'},
  {name: '04'},
  {name: '05'},
  {name: '06'},
  {name: '07'},
  {name: '08'},
  {name: '09'},
  {name: '10'},
  {name: '11'},
  {name: '12'},
])

onMounted(() => {
  setTimeout(async () => {
    await gl.getAdditionalContacts()
    const items = gl.getContacts.value

    items.map((item: any) => {
      const value: any = contacts.value
      value.push(item)
    })

    if(auth.isLoggedIn) {
      const user = auth.getCurrentUser

      addDataToRef(form, user)
      const user_value: any = user.value
      const form_value: any = form.value
      if(user_value.contacts.length > 0) {
        user_value.contacts.map((item: any) => {
          form_value.contacts[item.profile_additional_contact_id] = item.value
        })
      }

      if(user_value.documents.length > 0) {
        user_value.documents.map((doc: any) => {
          const value: any = documents.value
          value.push(doc)
        })
      }
    }

  }, 200)
})

const deleteFile = (ids: any) => {
  const form_value: any = form.value
  ids.value.map((id: number) => {
    if(!form_value.removed_documents.includes(id))
      form_value.removed_documents.push(id)
  })
}

const uploadFile = (files: any) => {
  documents.value = files
}

// const login = ref()
// const name = ref()
// const email = ref()
// const city = ref({ name: 'Выберите город' })
// const sex = ref({ name: 'Выберите пол' })
// const age = ref()
// const about = ref()
// const avatar = ref()

// city: { name: 'Выберите город' },
// sex: { name: 'Выберите пол' }

// const sexList = ref([
//   { name: 'Выберите пол' },
//   { name: 'Мужской' },
//   { name: 'Женский' },
// ])
// const cities = ref([
//   { name: 'Выберите город' },
// ])

// if(gl.getCityData.value.length > 0 && cities.value.length == 1) {
//   gl.getCityData.value.map(item => {
//     cities.value.push({
//       name: item.title,
//       id: item.id
//     })
//   })

// }
const formHandler = async () => {
  const formData = new FormData()
  const form_value: any = form.value
  for (const item in form_value) {
    if(item != 'phone')
      formData.append(item, configureData(form_value[item]))
    else
      formData.append(item, ""+form_value[item].replace(/[^0-9]/gi, ''))
  }

  for(const item in documents.value) {
    formData.append(`documents${item}`, documents.value[item])
  }
  

  const data = await auth.updateUser(formData)
  setTimeout(async () => {
    if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
      set({
        success: true,
        message: __('Настройки успешно сохранены')
      })
    }
  }, 200)
}

</script>