<template>
  <Swiper
    :modules="[Pagination]"
    :direction="direction? direction : 'horizontal'"
    :pagination="pagination? { clickable: true }: false"
    :slides-per-view="slidesPerView"
    :loop="true"
    :space-between="10"
    :style="{ height: height }"
    :breakpoints="breakpoints"
    @swiper="onSwiper"
    class="w-full"
  >
    <slot />
  </Swiper>

  <button v-if="showButton && swiperRef && swiperRef?.slides.length > 4" @click="nextSlide" class="hidden laptop:flex justify-center items-center p-[14.5px]">
    <img
      src="/svg/btn-slider.svg"
      width="40"
      height="40"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  pagination?: boolean,
	height?: string,
	slidesPerView?: number,
  direction?: 'horizontal' | 'vertical',
  showButton?: boolean,
  breakpoints?: object,
}>()
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const swiperRef = ref(null);

const nextSlide = () => {
  swiperRef.value?.slideNext()
};
const onSwiper = (swiper) => {
  swiperRef.value = swiper
};

</script>

<style>
.swiper-pagination-bullet-active {
	background: rgb(20, 21, 26) !important;
}

.swiper-pagination-bullet {
	background: rgb(200, 202, 208);
	opacity: 1;
}
</style>
