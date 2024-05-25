<script setup lang="ts">
import type { Select } from '~/types/index'

const common = ref<string[]>()

const selectedCategory = ref<Select>({ name: 'Не важно' })
const category = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const selectedRegion = ref<Select>({ name: 'Не важно' })
const region = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const selectedMetro = ref<Select>({ name: 'Не важно' })
const metro = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const selectedTag = ref<Select>({ name: 'Не важно' })
const tag = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const selectedEnglish = ref<Select>({ name: 'Не важно' })
const english = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])

const selectedGo = ref<Select>({ name: 'Не важно' })
const go = ref<Select[]>([
  { name: 'Не важно' },
  { name: 'Не важно' }
])
</script>

<template>
  <div class="flex flex-col gap-[18px]">
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Категория</span>
      <ui-select
        v-model="selectedCategory"
        item="large"
        :options="category"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Район</span>
      <ui-select
        v-model="selectedRegion"
        item="large"
        :options="region"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Метро</span>
      <ui-select
        v-model="selectedMetro"
        item="large"
        :options="metro"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Тег</span>
      <ui-select
        v-model="selectedTag"
        item="large"
        :options="tag"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Английский язык</span>
      <ui-select
        v-model="selectedEnglish"
        item="large"
        :options="english"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-12 font-medium text-gray200">Категория</span>
      <ui-select
        v-model="selectedGo"
        item="large"
        :options="go"
      />
    </div>
    <ui-checkbox
      v-model="common"
      name="common"
      input-id="type1"
      for-label="type1"
      value="Тип 1"
      label="Тип 1"
    />
    <ui-checkbox
      v-model="common"
      name="common"
      input-id="type2"
      for-label="type2"
      value="Тип 2"
      label="Тип 2"
    />
    <ui-checkbox
      v-model="common"
      name="common"
      input-id="type3"
      for-label="type3"
      value="Тип 3"
      label="Тип 3"
    />
    <ui-checkbox
      v-model="common"
      name="common"
      input-id="type4"
      for-label="type4"
      value="Тип 4"
      label="Тип 4"
    />
  </div>
</template>
