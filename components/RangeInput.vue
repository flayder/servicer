<template>
  <div class="flex items-center ">
    <input class="rounded-[10px] px-[10px] w-[50%] py-[6px] bg-[#E9EAEC]" placeholder="3000" type="text" name="" id="">
    <div class="text-[#6F717C] mx-[6px] text-[25px] font-light">-</div>
    <input class="rounded-[10px] px-[10px] w-[50%] py-[6px] bg-[#E9EAEC]" placeholder="3000" type="text" name="" id="">
  </div>
  <div class="sliders_control mt-[20px]">
    <input id="fromSlider" type="range" value="-1" min="0" max="100"/>
    <input id="toSlider" type="range" value="100" min="0" max="100"/>
  </div>
</template>

<style scoped>
.sliders_control {
  position: relative;
  min-height: 50px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 1px 2px 10px 1px #C6C6C6;
  cursor: pointer;
  position: relative;
  z-index: 10;
}
input[type=range]::-webkit-slider-container {
  background: #FF185F;
  height: 10px;
  border-radius: 100px;
  position: relative;
}
input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #C6C6C6;
  cursor: pointer;
}

input[type=range]::-webkit-slider-thumb:hover {
  background: #f7f7f7;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  opacity: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: #C6C6C6;
  pointer-events: none;
}

#fromSlider {
  height: 0;
  z-index: 1;
}
</style>
