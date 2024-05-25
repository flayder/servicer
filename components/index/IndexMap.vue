<script setup lang="ts">

</script>

<template>
  <section class="bg-[url('/images/bg-index-map.png')] bg-no-repeat bg-cover h-[250px] rounded-xl flex flex-col justify-center items-center gap-2.5 laptop:gap-4 laptop:h-[409px]">
    <div class="flex flex-col text-center text-white100">
      <h2 class="text-30 font-semibold tracking-[-1.6%] laptop:text-48 laptop:tracking-[-2%]">
        карта
      </h2>
      <span class="text-14 font-medium tracking-[-0.5%] laptop:text-24 laptop:tracking-[-1.4%]">Удобный подбор предложений рядом с вами.</span>
    </div>
    <ui-button
      item="medium"
      to="/map"
      :backgroundColor="'#fff'"
      :color="'#14151A'"
    >
      <img
        src="/svg/map.svg"
        width="16"
        height="16"
      />
      Смотреть на карте
    </ui-button>
  </section>
</template>
