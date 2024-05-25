<script setup>

</script>

<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-2">Мои ответы</ProfileTitleWrap>

    <div class="mt-4 laptop:mt-10 flex flex-col gap-[14px] laptop:gap-[18px] max-w-[386px]">
      <img class="w-48" src="/svg/reply-big.svg" alt="">
      <p class="max-w-[308px] font-semibold text-20 tracking-tighter text-gray200">Вы пока не оставили ни одного
        ответа.</p>

    </div>
    




  </div>
</template>