<script setup lang="ts">

</script>

<template>
  <section class="py-7 laptop:py-[52px] laptop:pt-0 border-b border-solid border-gray">
    <div class="container">
      <div class="flex flex-col gap-4 mb-4 laptop:mb-8">
        <h2 class="text-24 font-semibold tracking-[-1.4%] laptop:text-36 laptop:tracking-[-1.8%]">
          Avrora это:
        </h2>
        <div class="laptop:hidden">
          <ui-slider
            height="208px"
            :pagination="true"
            :slides-per-view="2"
            :modules="[SwiperPagination]"
            :breakpoints="{ 600: { slidesPerView: 3 } }"
          >
            <SwiperSlide>
              <layout-about-card
                img="/svg/check-pink.svg"
                title="Надежно"
                text="Описание 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <layout-about-card
                img="/svg/check-orange.svg"
                title="Удобно"
                text="Описание 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <layout-about-card
                img="/svg/check-red.svg"
                title="Быстро"
                text="Описание 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <layout-about-card
                img="/svg/check-green.svg"
                title="Безотказно"
                text="Описание 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <layout-about-card
                img="/svg/check-purple.svg"
                title="Круглосуточно"
                text="Описание 5"
              />
            </SwiperSlide>
          </ui-slider>
        </div>
        <div class="hidden laptop:flex justify-between">
          <layout-about-card
            img="/svg/check-pink.svg"
            title="Надежно"
            text="Описание 1"
          />
          <layout-about-card
            img="/svg/check-orange.svg"
            title="Удобно"
            text="Описание 2"
          />
          <layout-about-card
            img="/svg/check-red.svg"
            title="Быстро"
            text="Описание 3"
          />
          <layout-about-card
            img="/svg/check-green.svg"
            title="Безотказно"
            text="Описание 4"
          />
          <layout-about-card
            img="/svg/check-purple.svg"
            title="Круглосуточно"
            text="Описание 5"
          />
        </div>
      </div>
    </div>
  </section>
</template>
