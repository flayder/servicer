<template>
  <div class="w-[70%] mx-auto">
    <NewAnketsHeader/>

    <div class="flex flex-wrap items-center justify-between">
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <GrayBtn class="mx-auto mt-[10px]">посмотреть все <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2294 7.80246C11.2243 7.62667 11.159 7.476 11.0234 7.3404L7.11607 3.51842C7.00056 3.40792 6.86496 3.34766 6.69922 3.34766C6.36272 3.34766 6.10156 3.60882 6.10156 3.94531C6.10156 4.10603 6.16685 4.2567 6.28237 4.37221L9.79799 7.80246L6.28237 11.2327C6.16685 11.3482 6.10156 11.4939 6.10156 11.6596C6.10156 11.9961 6.36272 12.2573 6.69922 12.2573C6.85993 12.2573 7.00056 12.197 7.11607 12.0865L11.0234 8.25949C11.1641 8.12891 11.2294 7.97824 11.2294 7.80246Z" fill="#0F132499"/>
      </svg>
      </GrayBtn>
    </div>
  </div>
</template>
<script setup lang="ts">
import GrayBtn from "~/components/UI/GrayBtn.vue";
import SmallCard from "~/components/smallCard.vue";
import AnketHeader from "~/components/AnketHeader.vue";
</script>
