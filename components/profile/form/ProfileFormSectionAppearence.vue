<script setup>

const form = ref({
  field1: false,
  field2: false,
  field3: false,

  category1: {name: 'Любое'},
  category2: {name: 'Любая'},
  category3: { name: 'Любой'},
  category4: { name: 'Любая'},
  category5: { name: 'Любая'},
})


const categories1 = ref([
  { name: 'Любое'},
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
])
const categories2 = ref([
  {name: 'Любая'},
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
])
const categories3 = ref([
  { name: 'Любой'},
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
])
const categories4 = ref([
  { name: 'Любая'},
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
])
const categories5 = ref([
  { name: 'Любая'},
  { name: 'Каатегория 1' },
  { name: 'Каатегория 2' },
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

const range3 = ref([0, 100])
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

const range4 = ref([0, 100])
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

const range5 = ref([0, 100])
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

const range6 = ref([0, 100])
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




</script>


<template>
  <div>
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
              range4="15"
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
              range4="15"
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
              range4="15"
            />
            <ui-input
              v-model="range3To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range3"
            :min="0"
            :max="100"
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
              range4="15"
            />
            <ui-input
              v-model="range4To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range4"
            :min="0"
            :max="100"
          />
        </div>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 5</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range5From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              range4="15"
            />
            <ui-input
              v-model="range5To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range5"
            :min="0"
            :max="100"
          />
        </div>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Промежуток 6</span>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center">
            <ui-input
              v-model="range6From"
              item="filter"
            />
            <img class="shrink-0"
              src="/svg/minus.svg"
              width="15"
              range4="15"
            />
            <ui-input
              v-model="range6To"
              item="filter"
            />
          </div>
          <ui-range
            v-model="range6"
            :min="0"
            :max="100"
          />
        </div>
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 1</span>
        <ui-select
          v-model="form.category1"
          item="large"
          :options="categories1"
        />
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 2</span>
        <ui-select
          v-model="form.category2"
          item="large"
          :options="categories2"
        />
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Группа полей:</span>
        
        <div class="flex flex-col gap-[18px]">
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.field1" v-model="form.field1" />
            <span class="text-14 font-medium text-black100">Поле 1</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.field2" v-model="form.field2" />
            <span class="text-14 font-medium text-black100">Поле 2</span>
          </label>
          <label class="flex gap-2 items-center">
            <UiSwitcher :checked="form.field3" v-model="form.field3" />
            <span class="text-14 font-medium text-black100">Поле 3</span>
          </label>
        </div>
        
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 3</span>
        <ui-select
          v-model="form.category3"
          item="large"
          :options="categories3"
        />
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 4</span>
        <ui-select
          v-model="form.category4"
          item="large"
          :options="categories4"
        />
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Поле 5</span>
        <ui-select
          v-model="form.category5"
          item="large"
          :options="categories5"
        />
      </div>
    </div>
  </div>
</template>