<script setup lang="ts">
const range1 = ref<number[]>([3000, 100000])
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

const range2 = ref<number[]>([5000, 200000])
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

const range3 = ref<number[]>([5000, 500000])
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

const range4 = ref<number[]>([3000, 100000])
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

const range5 = ref<number[]>([5000, 200000])
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

const range6 = ref<number[]>([5000, 500000])
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
</script>

<template>
  <div class="flex flex-col gap-[34px]">
    <div class="flex flex-col gap-2">
      <h3 class="text-16 font-semibold tracking-[-1%]">
        Category
      </h3>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 1</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range1From"
                item="filter"
              />
              <img
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
              :min="3000"
              :max="100000"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 2</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range2From"
                item="filter"
              />
              <img
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
              :min="5000"
              :max="200000"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 3</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range3From"
                item="filter"
              />
              <img
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
              :min="5000"
              :max="500000"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-16 font-semibold tracking-[-1%]">
        Выезд
      </h3>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 4</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range4From"
                item="filter"
              />
              <img
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
              :min="3000"
              :max="100000"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 5</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range5From"
                item="filter"
              />
              <img
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
              :min="5000"
              :max="200000"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-12 font-medium text-gray200">Описание 6</span>
          <div class="flex flex-col gap-[18px]">
            <div class="flex items-center">
              <ui-input
                v-model="range6From"
                item="filter"
              />
              <img
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
              :min="5000"
              :max="500000"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
