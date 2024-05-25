<script setup>
const form = ref({
  avatar: '',
  video: '',
  category: {name: 'Выберите категорию'},
  name: '',
  foreignName: '',
  about: '',
  brief: '',
  tel: '',
  timeToCallFrom: {name: '00'},
  timeToCallTo: {name: '12'},
  acceptCalls: false,
  acceptMessages: false,
  acceptTelegram: false,
  acceptWhatsapp: false,
  acceptViber: false,
  bodytype: {name: 'Любое'},
  haircut: {name: 'Любая'},
  tatooe: false,
  silicon: false,
  pircing: false,
  hairColor: { name: 'Любой'},
  apearence: { name: 'Любая'},
  nationality: { name: 'Любая'},
})


const categories = ref([
  { name: 'Выберите категорию' },
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
])

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

const tags = ref([
  {name: 'Тег 00'},
  {name: 'Тег 01'},
  {name: 'Тег 02'},
  {name: 'Тег 03'},
  {name: 'Тег 04'},
  {name: 'Тег 05'},
  {name: 'Тег 06'},
  {name: 'Тег 07'},
  {name: 'Тег 08'},
  {name: 'Тег 09'},
  {name: 'Тег 10'},
  {name: 'Тег 11'},
  {name: 'Тег 12'},
])


const range1 = ref([0, 100])
const range1From = ref(range1.value[0])
const range1To = ref(range1.value[1])
watch(() => range1.value, () => {
  range1From.value = range1.value[0]
  range1To.value = range1.value[1]
})
watch(() => range1From.value, () => {
  range1.value[0] = range1From.value
})
watch(() => range1To.value, () => {
  range1.value[1] = range1To.value
})

const range2 = ref([0, 100])
const range2From = ref(range2.value[0])
const range2To = ref(range2.value[1])
watch(() => range2.value, () => {
  range2From.value = range2.value[0]
  range2To.value = range2.value[1]
})
watch(() => range2From.value, () => {
  range2.value[0] = range2From.value
})
watch(() => range2To.value, () => {
  range2.value[1] = range2To.value
})
</script>

<template>
  <div>
    <div class="flex flex-col gap-[18px]">


      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Теги</span>
        <UiChips :options="tags" placeholder="Выберите теги" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Есть в:</span>
        
        <div class="flex flex-col gap-[18px]">
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptCalls" v-model="form.acceptCalls" />
            <span class="text-14 font-medium text-black100">Звонки</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptMessages" v-model="form.acceptMessages" />
            <span class="text-14 font-medium text-black100">SMS</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptTelegram" v-model="form.acceptTelegram" />
            <span class="text-14 font-medium text-black100">Telegram</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptWhatsapp" v-model="form.acceptWhatsapp" />
            <span class="text-14 font-medium text-black100">WhatsApp</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.acceptViber" v-model="form.acceptViber" />
            <span class="text-14 font-medium text-black100">Viber</span>
          </label>
        </div>
        
      </div>


      
     
  
      
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 1</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range1From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range1To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range1"
            :min="0"
            :max="100"
          />
        </div>
        <span class="text-12 mt-4 font-medium text-gray200">(если есть ограничение)</span>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 2</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range2From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range2To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range2"
            :min="0"
            :max="100"
          />
        </div>
        <span class="text-12 mt-4 font-medium text-gray200">(если есть ограничение)</span>
      </div>
  
      <div class="flex flex-col gap-1 mb-12">
        <span class="text-12 font-medium text-gray200">Время</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center w-full">
            <ui-select
              v-model="form.timeToCallFrom"
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
              v-model="form.timeToCallTo"
              :grow="true"
              item="large"
              :options="time"
            />
          </div>
        </div>
        <span class="text-12 font-medium text-gray200">(удобное время для звонков)</span>
      </div>
  
    </div>
  </div>
</template>