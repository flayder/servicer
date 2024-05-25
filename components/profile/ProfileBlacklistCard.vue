<template>
  <div class="w-full flex-wrap laptop:flex-nowrap gap-7 laptop:gap-[10px] bg-[#ff185f24] rounded-[20px] p-5 flex">

    <div class="laptop:w-[207px] flex flex-col">
      <div>
        <p class="text-12 text-gray200 font-medium mb-[10px]">
          {{ __('Телефон') }}
        </p>
        <p class="text-12 text-black font-medium mb-[10px]">
          {{ item.phone }}
        </p>
      </div>
      <div>
        <p class="text-12 text-gray200 font-medium mb-[10px]">
          {{ __('Телеграм') }}
        </p>
        <p class="text-12 text-black font-medium mb-[10px]">
          {{ item.telegram }}
        </p>
      </div>
      <div>
        <p class="text-12 text-gray200 font-medium mb-[10px]">
          {{ __('Название события') }}
        </p>
        <p class="text-12 text-black font-medium mb-[10px]">
          {{ item.event }}
        </p>
      </div>
      <div>
        <p class="text-12 text-gray200 font-medium mb-[10px]">
          {{ __('Дата события') }}
        </p>
        <p class="text-12 text-black font-medium mb-[10px]">
          {{ item.event_at }}
        </p>
      </div>
      
    </div>
    
    <div>
      <p class="text-12 text-gray200 font-medium mb-[10px]">
        {{ __('Отзыв') }}
      </p>
      <p class="text-12 text-black font-medium mb-[10px]">
        {{ item.event_description }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
  import {type BlackList} from "~/types"
  defineProps<{
    item: BlackList,
  }>()

  const { __ } = useLocale()
</script>