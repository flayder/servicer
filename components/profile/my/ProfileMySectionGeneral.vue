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
  telegram: '',
  whatsapp: '',
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
        <ui-input
          v-model="form.name"
          item="form"
          label="Имя"
          placeholder="Имя"
        />
        <span class="text-12 font-medium text-gray200">(видно на сайте)</span>
      </div>
  
      <div class="flex flex-col gap-1">
        <ui-input
          v-model="form.foreignName"
          item="form"
          label="Название анкеты для иностранцев"
          placeholder="Название"
        />
        <span class="text-12 font-medium text-gray200">(видно на сайте)</span>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Коротко</span>
        <ui-textarea
          v-model="form.brief"
          class="flex"
          placeholder="Напишите"
        />
        <span class="text-12 font-medium text-gray200">(до 130 символов)</span>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Коротко</span>
        <ui-textarea
          v-model="form.about"
          class="flex"
          placeholder="Напишите"
          :minHeight="10"
          :noResize="true"
        />
        <span class="text-12 font-medium text-gray200">(до 200 символов)</span>
      </div>
  
      <div class="flex flex-col gap-1">
        <ui-input
          v-model="form.tel"
          item="form"
          label="Телефон"
          placeholder="Номер телефона"
        />
        <span class="text-12 font-medium text-gray200">(только один номер)</span>
      </div>
      
      <div class="flex flex-col gap-1">
        <ui-input
          v-model="form.telegram"
          item="form"
          label="Telegram"
          placeholder="@name"
        />
        <span class="text-12 font-medium text-gray200">(ник)</span>
      </div>

      <div class="flex flex-col gap-1">
        <ui-input
          v-model="form.whatsapp"
          item="form"
          label="WhatsApp"
          placeholder="Номер телефона"
        />
        <span class="text-12 font-medium text-gray200">(только один номер)</span>
      </div>
      
  
    </div>
  </div>
</template>