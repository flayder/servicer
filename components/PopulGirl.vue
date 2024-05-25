<template>
  <div class="md:flex hidden items-center mt-[20px]">
    <PopularGirlEl class="w-[16%]"/>
    <PopularGirlEl class="w-[16%]"/>
    <PopularGirlEl class="w-[16%]"/>
    <PopularGirlEl class="w-[16%]"/>
    <PopularGirlEl class="w-[16%]"/>
    <PopularGirlEl class="w-[16%]"/>
  </div>
  <div class="md:hidden mt-[20px] w-full pr-[15px]">
  <Swiper
      class=""
      :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperPagination]"
      :pagination="true"
      :slides-per-view="2"
      :space-between="10"

  >
    <SwiperSlide :key="1">
      <PopularGirlEl/>
    </SwiperSlide>
    <SwiperSlide  :key="2">
      <PopularGirlEl/>
    </SwiperSlide>
    <SwiperSlide  :key="3">
      <PopularGirlEl/>
    </SwiperSlide>
    <SwiperSlide  :key="4">
      <PopularGirlEl/>
    </SwiperSlide>
    <SwiperSlide :key="5">
      <PopularGirlEl/>
    </SwiperSlide>

  </Swiper>
  </div>
</template>
<script setup lang="ts">
import PopularGirlEl from "~/components/PopularGirlEl.vue";
</script>
<style>
.swiper-pagination-bullets{
  bottom: -20px;
}
</style>
