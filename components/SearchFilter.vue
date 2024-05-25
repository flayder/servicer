<template>
  <div class="mx-auto w-[70%] mt-[20px]">
    <h2 class="text-[40px] font-semibold">Поиск проституток</h2>
    <div class="flex items-center">
      <div>
        <span class="text-[#6F717C] text-[14px]">Поиск по ID анкеты</span>
        <SearchBar/>
      </div>
      <div class="mx-[10px]">
        <span class="text-[#6F717C] text-[14px]">Поиск по номеру телефона</span>
        <SearchBar/>
      </div>
    </div>
    <div class="flex flex-wrap mt-[15px]">
      <CategotyButtonGray># Новые анкеты</CategotyButtonGray>
      <CategotyButtonGray># Новые анкеты</CategotyButtonGray>
      <CategotyButtonGray># Новые анкеты</CategotyButtonGray>
      <CategotyButtonGray># Новые анкеты</CategotyButtonGray>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchBar from "~/components/SearchBar.vue";
</script>
