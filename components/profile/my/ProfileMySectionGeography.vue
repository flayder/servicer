
<script setup>
const form = ref({
  country: { name: 'Выберите страну' },
  city: { name: 'Выберите город' },
  metro: { name: 'Выберите метро' },

  type1: false,
  type2: false,
  type3: false,
  type4: false,
  type5: false,
})




const countries = ref([
  { name: 'Выберите страну' },
  { name: 'Страна 1' },
  { name: 'Страна 2' },
])
const cities = ref([
  { name: 'Выберите город' },
  { name: 'Город 1' },
  { name: 'Город 2' },
])
const metros = ref([
  { name: 'Выберите метро' },
  { name: 'Метро 1' },
  { name: 'Метро 2' },
])
</script>


<template>
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
</template>