<template>
  <form class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]" @submit.prevent="handleForm">    
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-3">{{ __('Ваша анкета') }}</ProfileTitleWrap>
    <p class="text-16 laptop:text-18 text-gray300  tracking-tighter font-medium">
      {{ __('От того, как Вы составили анкету, во многом зависит, откроют ли её пользователи.') }}
    </p>
    <p class="text-12 laptop:text-12 text-gray300  tracking-tighter font-medium" v-if="user && user.class.length > 0">
      {{ __('Класс профилей') }}: {{ user.class.map((item: any) => item.name).join(', ') }}
    </p>

    <p class="text-12 laptop:text-12 text-gray300  tracking-tighter font-medium" v-if="user && user.status.length > 0">
      {{ __('Статус профиля') }}: {{ user.status.map((item: any) => item.name).join(', ') }}
    </p>

    <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
    </div>
    <div class="flex flex-col-reverse  laptop:flex-row laptop:gap-40">
      <div class="flex flex-col shrink-0 max-w-full laptop:pb-[78px] pb-[10px]">

        <div class="pb-3 border-b border-gray mb-[28px] laptop:mb-6" v-for="field in serverFields">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3">{{ field.name }}</h4>
          <template v-if="field.type == 'photo' || field.type == 'video'">
            <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]" v-if="field.type == 'photo'">
              {{ __('Перенесите фото на первое место, чтобы сделать его главным.') }} <br>
              {{ __('Фото до 25Mb формата png, jpeg, jpg, webp') }} <br>
              {{ __('Лимит по количеству фотографий 30 шт.') }}
              <br><br>
              {{ __('Порядок обновления фотографий анкеты: Удалить старые -> Сохранить -> Загрузить новые -> Сохранить') }}
            </p>
            <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
              {{ __('Файл до 100Mb формата') }} flv, avi, mov, mp4, mpeg,<br> webm, mkv, 3gp:
            </p>
            <UiFile
              :files="formServerField[field.id]"
              item="square"
              class=""
              :accept="field.type == 'photo' ? 'image/*' : 'video/*'"
              :multiple="true"
              background-color=""
              @change="uploadFile($event, field.id)"
              @delete="deleteFile($event, field.id)"
              color="rgb(20, 21, 26)"
            > 
            </UiFile>
          </template>
          <template v-if="field.type == 'checkbox'">
            <div class="flex mb-[5px]" v-for="input in field.values">
              <label class="px-1 text-14 cursor-pointer">
                <ui-switcher
                  class="mr-[6px]"
                  v-model="formServerField[field.id][input.id]"
                  :checked="formServerField[field.id][input.id]"
                />
                {{ input.value }}
              </label>
            </div>
            
          </template>
          <template v-if="field.type == 'radio'">

            <ui-radio
              v-model="formServerField[field.id][input.id]"
              :value="true"
              v-for="input in field.values"
              :inputId="input.id"
              :name="field.id"
              item="black"
              :label="input.value"
              @change="radioHandler($event, field.id, input.id)"
            />
          </template>
          <ui-input
            v-if="field.type == 'input' || field.type == 'number'"
            v-model="formServerField[field.id]"
            item="form"
            :label="field.name"
            :placeholder="field.name"
            :type="field.type == 'number' ? 'number' : 'text'"
          />
          <ui-textarea
            v-if="field.type == 'textarea'"
            v-model="formServerField[field.id]"
            item="form"
            :label="field.name"
            :placeholder="field.name"
          />
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">{{__('География')}}</h4>
          <div>
            <div class="flex flex-col gap-[18px]">
              <div class="flex flex-col gap-1">
                <span class="text-12 font-medium text-gray200">{{ __('Страна') }}</span>
                <ui-select
                  v-model="geography.country"
                  item="large"
                  :options="countries"
                  optionName="title"
                  optionValue="id"
                  @change="countryHandler"
                />
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-12 font-medium text-gray200">{{ __('Город') }}</span>
                <ui-select
                  v-model="geography.city"
                  item="large"
                  :options="cities"
                  optionName="title"
                  optionValue="id"
                  @change="cityHandler"
                />
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-12 font-medium text-gray200">{{ __('Метро') }}</span>
                <ui-select
                  v-model="geography.metro"
                  item="large"
                  :options="metros"
                  optionName="title"
                  optionValue="id"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6" v-if="activities.length > 0">
          <span class="flex text-12 font-medium text-gray200 mb-[5px]">{{ __('Робочая активность') }}</span>
          <div>
            <div class="flex mb-[5px]" v-for="d in activities">
              <label class="px-1 text-14 cursor-pointer">
                <ui-switcher
                  class="mr-[6px]"
                  v-model="activitiesData[d.id]"
                  :checked="activitiesData[d.id]"
                />
                {{ d.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6" v-if="places.length > 0">
          <span class="flex text-12 font-medium text-gray200 mb-[5px]">{{ __('Выезд') }}</span>
          <div>
            <div class="flex mb-[5px]" v-for="d in places">
              <label class="px-1 text-14 cursor-pointer">
                <ui-switcher
                  class="mr-[6px]"
                  v-model="placesData[d.id]"
                  :checked="placesData[d.id]"
                />
                {{ d.name }}
              </label>
            </div>
          </div>
        </div>
        <!-- <div class="mb-[28px] laptop:mb-6">
          
          <ProfileFormSectionAppearence />
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <ProfileMySectionGeneral />
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">Заголовок</h4>
          <ProfileFormSectionFriends />
        </div>
        
        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">География</h4>
          <div>
    <div class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Стана</span>
        <ui-select
          v-model="form.country"
          item="large"
          :options="countries"
        />
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Город</span>
        <ui-select
          v-model="form.city"
          item="large"
          :options="cities"
        />
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Метро</span>
        <ui-select
          v-model="form.metro"
          item="large"
          :options="metros"
        />
      </div>
  
  
      <div class="flex flex-col gap-1">              
        <div class="flex flex-col gap-[18px]">
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptCalls" v-model="form.acceptCalls" />
            <span class="text-14 font-medium text-black100">Тип 1</span>
          </label>
        </div>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Группа:</span>
        
        <div class="flex flex-col gap-[18px]">
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.type1" v-model="form.type1" />
            <span class="text-14 font-medium text-black100">Тип 2</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.type2" v-model="form.type2" />
            <span class="text-14 font-medium text-black100">Тип 3</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.type3" v-model="form.type3" />
            <span class="text-14 font-medium text-black100">Тип 4</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.type4" v-model="form.type4" />
            <span class="text-14 font-medium text-black100">Тип 5</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.type5" v-model="form.type5" />
            <span class="text-14 font-medium text-black100">Тип 6</span>
          </label>
        </div>
        
      </div>
  
  
    </div>
  </div>
        </div>


        <ProfileMySectionFinal />
        
         -->
        <ui-button
          class="h-12"
          type="submit"
          item="large"
          width="306px"
          :disabled="submit"
        >
          {{ __('Сохранить') }}
        </ui-button>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">

import {addDataToRef, configureData} from "~/utils/dataHandler"
const { set } = useGlobalErrors()
const {__} = useLocale()

const auth = useAuthStore()
const user: any = auth.getCurrentUser.value
const gl = useGlobalData()

const serverFields: any = ref([])
const formServerField: any = ref({})
const filesData: any = ref({})
const removedFiles: any = ref({})

const radioHandler = (val: boolean, field_id: number, input_id: any) => {
  for(let item in formServerField.value[field_id]) {
    if(input_id != item && formServerField.value[field_id][item]) {
      formServerField.value[field_id][item] = false
    }
  }
}

const countries = ref([
  { 
    title: __('Выберите страну'),
    id: 0 
  },
])
const cities = ref([
  { 
    title: __('Выберите город'),
    id: 0
   },
])
const metros = ref([
  { 
    title: __('Выберите метро'),
    id: 0
   },
])

const activities: any = ref([])
const places: any = ref([])
const activitiesData: any = ref({})
const placesData: any = ref({})
const submit: any = ref(false)

const geography = ref({
  country: null,
  city: null,
  metro: null
})


watch(gl.getCountryData, (cons: any) => {
  countries.value = cons
})

watch(gl.getCityData, (cons: any) => {
  cities.value = cons
})

watch(gl.getMetroData, (cons: any) => {
  metros.value = cons
})

const countryHandler = (val: any) => {
  if(val > 0) {
    gl.getCity({country_id: val})
  }
}

const cityHandler = (val: any) => {
  if(val > 0) {
    gl.getMetro({city_id: val})
  }
}

const getActivities = async () => {
  const {data} = await useApiFetch("/api/user/profile_activities")
  const acts: any = data.value
  try {
    const actsData: any = activitiesData.value
    acts.data.map((act: any) => {
      acts.push(act)
      actsData[act.id] = act.value
    })
    activities.value = acts
  } catch(e) {
    console.log('activity error', e)
  }
}

const getPlaces = async () => {
  const {data} = await useApiFetch("/api/user/profile_places")
  const pls: any = data.value
  const plsData: any = placesData.value
  try {
    pls.data.map((pl: any) => {
      plsData[pl.id] = pl.value
    })
    places.value = pls
  } catch(e) {
    console.log('place error', e)
  }
}


const getFields = async (init = true) => {
  let user: any = auth.getCurrentUser

  const {data} = await useApiFetch("/api/user/profile_fields", {method: "POST"})
  //console.log('data.value', typeof data.value.data, data.value.data)
  //if(Array.isArray(data.value.data)) {
  const items: any = data.value.data

  //console.log('items', items)
    for(let field in items) {
      if(items[field].type == "photo" || items[field].type == "video") {
        formServerField.value[items[field].id] = items[field].userValues
      } else if(items[field].type == "radio" || items[field].type == "checkbox") {
        formServerField.value[items[field].id] = {}
        items[field].values.map((val: any) => {
          formServerField.value[items[field].id][val.id] = items[field].userValues.includes(val.id)
        })
      } 
      // else if(items[field].type == "checkbox") {
      //   formServerField.value[items[field].id] = {}
      //   items[field].values.map((val: any) => {
      //     formServerField.value[items[field].id][val.id] = items[field].userValues.includes(val.id) ? [val.id] : []
      //   })
      // } 
      else {
        formServerField.value[items[field].id] = items[field].userValues[0] ?? ''
      }

      
    }
    if(init)
      serverFields.value = items
    // console.log('serverFields', serverFields.value)
    //console.log('formServerField', formServerField.value)
  //}
  

  //console.log('user', user)

  if(user.value && user.value.country) {
    geography.value.country = user.value.country.id;
  }

  if(user.value && user.value.city) {
    geography.value.city = user.value.city.id;
  }

  if(user.value && user.value.metro) {
    geography.value.metro = user.value.metro.id;
  }
  
}

onMounted(() => {
  setTimeout(async () => {
    
    await getFields()
    //console.log('geography.value', geography.value)
    gl.getCountry()
    gl.getCity()
    gl.getMetro()

    getActivities()
    getPlaces()
  }, 200)
})

const uploadFile = (files: any, id: number) => {
  if(!filesData.value.hasOwnProperty(id))
      filesData.value[id] = []

  for(let i = 0; i < files.length; i++) {
    filesData.value[id].push(files[i])
  }
}

const deleteFile = (ids: any, id: number) => {
  if(!removedFiles.value.hasOwnProperty(id)) {
    removedFiles.value[id] = ids
  } else {
    removedFiles.value[id].push(ids[0])
  }
}

const handleForm = async () => {
  
  setTimeout(async () => {
    const formData = new FormData
    const form_value: any = formServerField.value

    for (const item in form_value) {
      formData.append(`field[${item}]`, configureData(form_value[item]))
    }

    const files: any = filesData.value

    for (const item in files) {
      let i = 0
      files[item].map((file: any) => {
        formData.append(`${i}file[${item}]`, file)
        i++
      })

    }

    const geo_value: any = geography.value

    for (const item in geo_value) {
      formData.append(`geo[${item}]`, geo_value[item])
    }

    const activity_value: any = activitiesData.value

    for (const item in activity_value) {
      formData.append(`activity[${item}]`, configureData(activity_value[item]))
    }

    const place_value: any = placesData.value

    for (const item in place_value) {
      formData.append(`place[${item}]`, configureData(place_value[item]))
    }

    const rmvFiles: any = removedFiles.value

    for (const item in rmvFiles) {
      formData.append(`doc_remove[${item}]`, configureData(rmvFiles[item]))
    }

    if(!submit.value) {
      
      const {data} = await useApiFetch("/api/user/profile_fields/update",
        {
          method: "POST",
          body: formData
        }
      )

      setTimeout(async () => {
        if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
          set({
            success: true,
            message: __('Настройки успешно сохранены')
          })
          await getFields(false)
        }
      }, 200)
    }
    submit.value = true
    setTimeout(() => {
      console.log('submit.value2', submit.value)
      submit.value = false
    }, 3000)
  }, 100)
  
}

</script>