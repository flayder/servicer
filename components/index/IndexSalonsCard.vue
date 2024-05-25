<script setup lang="ts">

</script>

<template>
  <nuxt-link
    to="/"
    class="flex flex-col gap-2.5"
  >
    <div class="relative">
      <nuxt-img
        src="/test/test-1.png"
        class="rounded-lg object-cover w-[167px] h-[166px] laptop:w-[228px] laptop:h-[227px]"
      />
      <button class="absolute right-2.5 bottom-2.5">
        <img
          src="/svg/btn-open.svg"
          width="28"
          height="28"
        />
      </button>
    </div>
    <div class="flex flex-col">
      <span class="text-18 font-medium tracking-[-1.2%]">Лисья Нора</span>
      <span class="text-10 font-semibold text-gray200 uppercase">МОСКВА, АВТОЗАВОДСКАЯ УЛИЦА</span>
    </div>
  </nuxt-link>
</template>

