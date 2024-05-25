<script setup lang="ts">

</script>

<template>
  <section class="py-4 laptop:py-0">
    <div class="container">
      <div class="laptop:hidden">
        <ui-slider
          height="206px"
          :slides-per-view="2"
          :modules="[SwiperPagination]"
        >
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
          <SwiperSlide>
            <index-intro-card />
          </SwiperSlide>
        </ui-slider>
      </div>
    </div>
    <div class="hidden laptop:flex items-center gap-2.5 justify-between px-[11px]">
      <index-intro-card />
      <index-intro-card />
      <index-intro-card />
      <index-intro-card />
      <index-intro-card />
      <index-intro-card />
    </div>
  </section>
</template>
