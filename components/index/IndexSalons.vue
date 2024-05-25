<script setup lang="ts">

</script>

<template>
  <section class="pt-4 pb-7 laptop:pb-[52px] laptop:pt-0">
    <div class="container">
      <div class="flex flex-col gap-4 mb-4">
        <div class="flex items-start justify-between laptop:items-center">
          <h2 class="text-24 font-semibold tracking-[-1.4%] laptop:text-36 laptop:tracking-[-1.8%]">
            Салоны
          </h2>
          <ui-button
            background-color="rgba(255, 24, 95, 0.1)"
            color="rgb(255, 24, 95)"
            width="auto"
          >
            Все
            <img
              src="/svg/chevron-right.svg"
              width="16"
              height="16"
            />
          </ui-button>
        </div>
        <div class="laptop:hidden">
          <ui-slider
            height="270px"
            :slides-per-view="2"
            :modules="[SwiperPagination]"
          >
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
            <SwiperSlide>
              <index-salons-card />
            </SwiperSlide>
          </ui-slider>
        </div>
      </div>
    </div>
    <div class="hidden laptop:flex items-center gap-2.5 justify-between mb-8 px-[11px]">
      <index-salons-card />
      <index-salons-card />
      <index-salons-card />
      <index-salons-card />
      <index-salons-card />
      <index-salons-card />
    </div>
    <div class="flex justify-center">
      <ui-button
        to="/"
        item="medium"
        :backgroundColor="'#E9EAEC'"
        :color="'#14151A'"
      >
        Все салоны
        <img
          src="/svg/chevron-right-gray.svg"
          width="16"
          height="16"
        />
      </ui-button>
    </div>
  </section>
</template>
