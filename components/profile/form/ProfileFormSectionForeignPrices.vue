<script setup>
const form = ref({
  lang: { name: 'Выберите язык' },

  foreign1: false,
  foreign2: false,
  foreign3: false,
  foreign4: false,
  foreign5: false,
})



const range1 = ref([40, 100000])
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
const range2 = ref([70, 100000])
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
const range3 = ref([40, 100000])
const range3From = ref(range3.value[0])
const range3To = ref(range3.value[1])
watch(() => range3.value, () => {
  range3From.value = range3.value[0]
  range3To.value = range3.value[1]
})
watch(() => range3From.value, () => {
  range3.value[0] = range3From.value
})
watch(() => range3To.value, () => {
  range3.value[1] = range3To.value
})
const range4 = ref([70, 100000])
const range4From = ref(range4.value[0])
const range4To = ref(range4.value[1])
watch(() => range4.value, () => {
  range4From.value = range4.value[0]
  range4To.value = range4.value[1]
})
watch(() => range4From.value, () => {
  range4.value[0] = range4From.value
})
watch(() => range4To.value, () => {
  range4.value[1] = range4To.value
})



const range5 = ref([40, 100000])
const range5From = ref(range5.value[0])
const range5To = ref(range5.value[1])
watch(() => range5.value, () => {
  range5From.value = range5.value[0]
  range5To.value = range5.value[1]
})
watch(() => range5From.value, () => {
  range5.value[0] = range5From.value
})
watch(() => range5To.value, () => {
  range5.value[1] = range5To.value
})
const range6 = ref([70, 100000])
const range6From = ref(range6.value[0])
const range6To = ref(range6.value[1])
watch(() => range6.value, () => {
  range6From.value = range6.value[0]
  range6To.value = range6.value[1]
})
watch(() => range6From.value, () => {
  range6.value[0] = range6From.value
})
watch(() => range6To.value, () => {
  range6.value[1] = range6To.value
})
const range7 = ref([40, 100000])
const range7From = ref(range7.value[0])
const range7To = ref(range7.value[1])
watch(() => range7.value, () => {
  range7From.value = range7.value[0]
  range7To.value = range7.value[1]
})
watch(() => range7From.value, () => {
  range7.value[0] = range7From.value
})
watch(() => range7To.value, () => {
  range7.value[1] = range7To.value
})
const range8 = ref([70, 100000])
const range8From = ref(range8.value[0])
const range8To = ref(range8.value[1])
watch(() => range8.value, () => {
  range8From.value = range8.value[0]
  range8To.value = range8.value[1]
})
watch(() => range8From.value, () => {
  range8.value[0] = range8From.value
})
watch(() => range8To.value, () => {
  range8.value[1] = range8To.value
})

const langs = ref([
  { name: 'Выберите язык' },
  { name: 'Язык 1' },
  { name: 'Язык 2' },
])


</script>

<template>
  <div>
    <div class="flex flex-col gap-1 mb-[18px]">
      <span class="text-12 font-medium text-gray200">Добавить язык</span>
      <ui-select
        v-model="form.lang"
        item="large"
        :options="langs"
      />
    </div>
  
    <h5 class="text-16 font-semibold mb-2">Подзаголовок 1</h5>
    <div class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 1</span>
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
            :min="40"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 2</span>
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
            :min="70"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 3</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range3From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range3To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range3"
            :min="40"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 4</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range4From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range4To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range4"
            :min="70"
            :max="100000"
          />
        </div>
      </div>

    </div>  

    <h5 class="text-16 font-semibold mb-2 mt-[34px]">Подзаголовок 2</h5>
    <div class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 1</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range5From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range5To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range5"
            :min="40"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 2</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range6From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range6To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range6"
            :min="70"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 3</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range7From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range7To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range7"
            :min="40"
            :max="100000"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 4</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range8From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              height="15"
            />
            <ui-input
              v-model="range8To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range8"
            :min="70"
            :max="100000"
          />
        </div>
      </div>
    </div> 
  
    <div class="flex flex-col gap-1 mt-7">
      <span class="text-12 font-medium text-gray200">Отключить публикации в каналах:</span>
      
      <div class="flex flex-col gap-[18px]">
        <label class="flex gap-2 items-center">
          <UiSwitcher :checked="form.foreign1" v-model="form.foreign1" />
          <span class="text-14 font-medium text-black100">Канал 1</span>
        </label>
        <label class="flex gap-2 items-center">
          <UiSwitcher :checked="form.foreign2" v-model="form.foreign2" />
          <span class="text-14 font-medium text-black100">Канал 2</span>
        </label>
        <label class="flex gap-2 items-center">
          <UiSwitcher :checked="form.foreign3" v-model="form.foreign3" />
          <span class="text-14 font-medium text-black100">Канал 3</span>
        </label>
        <label class="flex gap-2 items-center">
          <UiSwitcher :checked="form.foreign4" v-model="form.foreign4" />
          <span class="text-14 font-medium text-black100">Канал 4</span>
        </label>
      </div>
      
    </div>
    <label class="flex gap-2 items-center mt-7">
      <UiSwitcher :checked="form.foreign5" v-model="form.foreign5" />
      <span class="text-14 font-medium text-black100">Сохранить как черновик</span>
    </label>
  </div>
</template>