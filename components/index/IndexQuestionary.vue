<script setup lang="ts">

</script>

<template>
  <section class="py-4 pb-7 laptop:py-[52px]">
    <div class="container">
      <div class="flex flex-col gap-4 mb-4 laptop:mb-8">
        <div class="flex items-start justify-between laptop:items-center">
          <div class="flex flex-col laptop:flex-row laptop:gap-2.5">
            <h2 class="text-24 font-semibold tracking-[-1.4%] laptop:text-36 laptop:tracking-[-1.8%]">
              Анкеты
            </h2>
            <div class="flex items-center gap-1">
              <img
                src="/svg/round.svg"
                width="8"
                height="8"
              />
              <span class="text-14 font-semibold tracking-[-0.5%] text-gray200">1276 ОНЛАЙН</span>
            </div>
          </div>
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
            height="337px"
            :slides-per-view="1"
            :modules="[SwiperPagination]"
          >
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
            <SwiperSlide>
              <ui-card />
            </SwiperSlide>
          </ui-slider>
        </div>
        <div class="hidden laptop:grid grid-cols-4 gap-x-2.5 gap-y-8">
          <ui-card />
          <ui-card />
          <ui-card />
          <ui-card />
          <ui-card />
          <ui-card />
          <ui-card />
          <ui-card />
        </div>
      </div>
      <div class="flex justify-center">
        <ui-button
          to="/"
          item="medium"
          :backgroundColor="'#E9EAEC'"
          :color="'#14151A'"
        >
          Посмотреть все
          <img
            src="/svg/chevron-right-gray.svg"
            width="16"
            height="16"
          />
        </ui-button>
      </div>
    </div>
  </section>
</template>
