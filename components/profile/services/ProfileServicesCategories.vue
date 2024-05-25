<script setup>
const categoriesA = ref([
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
])
const categoriesB = ref([
  { label: 'Категория ' },
  { label: 'Категория ' },
  { label: 'Категория ' },
])
</script>

<template>
  <div class="flex flex-col">  
    <h2 class="text-24 mb-2 font-semibold tracking-[-1.4%] laptop:text-20 laptop:font-semibold laptop:tracking-[-1.2%]">
      Предпочтения
    </h2>
    <!-- <div class="grid grid-cols-2 gap-x-2.5 gap-y-7 mb-5 pb-7 border-b border-gray mb-[28px] laptop:mb-6 laptop:hidden">
      <search-services-category-c />
      <search-services-category-e />
      <search-services-category-a />
      <search-services-category-b />
      <search-services-category-f />
      <search-services-category-d />
    </div> -->
    <div class="flex flex-col gap-2.5 mb-5">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h4 class="text-16 font-semibold tracking-[-1%]">
            Set 1
          </h4>
          <profile-services-category-form v-for="(category, idx) in categoriesA" :label="category.label + (idx+1)" :key="idx" />
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-16 font-semibold tracking-[-1%]">
            Set 2
          </h4>
          <profile-services-category-form v-for="(category, idx) in categoriesB" :label="category.label + (idx+1)" :key="idx" />
        </div>




      </div>

  
    </div>

  </div>
</template>