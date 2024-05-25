<template>
  <div class="w-[70%] flex  flex-wrap mx-auto justify-between">
    <div class="w-[32%] py-[30px] pr-[45px] mt-[10px]">
      <h2 class="text-[25px] font-semibold">Общие</h2>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <CheckBox/>
      <CheckBox/>
      <CheckBox/>
      <CheckBox/>
      <h2 class="text-[30px] font-semibold">Цена на услуги</h2>
      <p class="text-[20px] font-semibold">Аппартаменты</p>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <p class="text-[20px] font-semibold">Выезд</p>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
    </div>
    <div class="w-[32%] py-[30px] px-[45px] mt-[10px]">
      <h2 class="text-[25px] font-semibold">Параметры внешности</h2>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <SelectInput />
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
      <SelectInput/>
    </div>
    <div class="w-[32%] py-[30px] px-[45px] mt-[10px] bg-[#E9EAEC] h-fit rounded-[15px]">
      <h2 class="text-[25px] font-semibold">Быстрый поиск</h2>
      <SelectInput />
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
      <RangeInputFilter/>
    </div>
  </div>
</template>
<script setup lang="ts">
import RangeInputFilter from "~/components/RangeInputFilter.vue";
</script>
