<script setup lang="ts">
import type { Select } from '~/types/index'

const range1 = ref<number[]>([18, 70])
const range1From = ref<number>(range1.value[0])
const range1To = ref<number>(range1.value[1])
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

const range2 = ref<number[]>([120, 220])
const range2From = ref<number>(range2.value[0])
const range2To = ref<number>(range2.value[1])
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

const range3 = ref<number[]>([35, 120])
const range3From = ref<number>(range3.value[0])
const range3To = ref<number>(range3.value[1])
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

const range4 = ref<number[]>([1, 12])
const range4From = ref<number>(range4.value[0])
const range4To = ref<number>(range4.value[1])
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

const range5 = ref<number[]>([35, 46])
const range5From = ref<number>(range5.value[0])
const range5To = ref<number>(range5.value[1])
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

const range6 = ref<number[]>([35, 70])
const range6From = ref<number>(range6.value[0])
const range6To = ref<number>(range6.value[1])
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

const range7 = ref<number[]>([3000, 100000])
const range7From = ref<number>(range7.value[0])
const range7To = ref<number>(range7.value[1])
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

const select1 = ref<Select>({ name: 'Не важно' })
const selects1 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const select2 = ref<Select>({ name: 'Не важно' })
const selects2 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const select3 = ref<Select>({ name: 'Не важно' })
const selects3 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const select4 = ref<Select>({ name: 'Не важно' })
const selects4 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const select5 = ref<Select>({ name: 'Не важно' })
const selects5 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const select6 = ref<Select>({ name: 'Не важно' })
const selects6 = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])
</script>

<template>
  <div class="pt-4 flex flex-col gap-8 mb-[34px]">
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Промежуток 1</span>
      <div class="flex flex-col gap-[18px]">
        <div class="flex items-center">
          <ui-input
            v-model="range1From"
            item="filter"
          />
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range1To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range1"
          :min="18"
          :max="70"
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
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range2To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range2"
          :min="120"
          :max="220"
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
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range3To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range3"
          :min="35"
          :max="120"
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
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range4To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range4"
          :min="1"
          :max="12"
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
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range5To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range5"
          :min="35"
          :max="46"
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
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range6To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range6"
          :min="35"
          :max="70"
        />
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Промежуток 7</span>
      <div class="flex flex-col gap-[18px]">
        <div class="flex items-center">
          <ui-input
            v-model="range7From"
            item="filter"
          />
          <img
            src="/svg/minus.svg"
            width="15"
            range2="15"
          />
          <ui-input
            v-model="range7To"
            item="filter"
          />
        </div>
        <ui-range
          v-model="range7"
          :min="3000"
          :max="100000"
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-[18px]">
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 1</span>
      <ui-select
        v-model="select1"
        item="large"
        :options="selects1"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 2</span>
      <ui-select
        v-model="select2"
        item="large"
        :options="selects2"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 3</span>
      <ui-select
        v-model="select3"
        item="large"
        :options="selects3"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 4</span>
      <ui-select
        v-model="select4"
        item="large"
        :options="selects4"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 5</span>
      <ui-select
        v-model="select5"
        item="large"
        :options="selects5"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Выбор 6</span>
      <ui-select
        v-model="select6"
        item="large"
        :options="selects6"
      />
    </div>
  </div>
</template>
