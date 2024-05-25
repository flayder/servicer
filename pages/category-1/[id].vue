<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Breadcrumbs } from '~/types'

const breadcrumbs = ref<Breadcrumbs[]>([
	{ label: 'Категория 1', route: '/category-1' },
	{ label: 'Валентина', route: '/category-1/1' },
])

const rateValues = ref({
  val11: '1000',
  val12: '1500',
  val21: '2000',
  val22: '2500',
  val31: '3000',
  val32: '3500',
  val41: '4000',
  val42: '4500',
})

const key = ref(0)

const updateRate = (value) => {
  rateValues.value = value
  key.value = key.value + 1
}

</script>

<template>
  <div class="container">
    <div class="pt-2.5 laptop:pt-0">
      <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
  </div>
  <section class="pt-4 pb-6">
    <div class="container">
      <div class="flex flex-col gap-10 laptop:flex-row laptop:gap-[89px] laptop:w-full">
        <card-slider />
        <card-info />
      </div>
    </div>
  </section>
  <section class="py-7 bg-white300 border-t border-b border-solid border-gray">
    <div class="container">
      <div class="flex flex-col gap-7 laptop:flex-row laptop:gap-[89px] laptop:w-full">
        <card-preferences @setRate="updateRate($event)" />
        <card-rate :key="key" :values="rateValues" />
      </div>
    </div>
  </section>
  <section class="py-[52px] border-b border-solid border-gray">
    <div class="container">
      <card-reviews />
    </div>
  </section>
  <section class="py-7 border-b border-solid border-gray">
    <div class="container">
      <card-other />
    </div>
  </section>
</template>
