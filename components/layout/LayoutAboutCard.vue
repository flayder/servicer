<script setup lang="ts">
defineProps<{
	img: string,
	title: string,
	text: string
}>()
</script>

<template>
  <div class="flex flex-col gap-0.5 w-[168px]">
    <img
      :src="img"
      width="50"
      height="50"
    />
    <div class="flex flex-col gap-1.5">
      <h3 class="text-20 font-medium tracking-[-1.2%]">
        {{ title }}
      </h3>
      <p class="text-14 tracking-[-0.5%] text-gray300">
        {{ text }}
      </p>
    </div>
  </div>
</template>
