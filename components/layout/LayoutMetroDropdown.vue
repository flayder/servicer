<script setup>

const show = ref(false)

</script>

<template>
  <div v-if="show" @click="show = false" class="fixed top-0 left-0 w-full h-full z-10"></div>
  <div>
    <div class="flex cursor-pointer" @click="show=!show">
      <img width="16"
        height="16" 
        src="/svg/train.svg"  alt=""
      >
      <span class="items-center gap-1 text-12 font-medium tracking-[-0.5%] font-sans text-black100">Метро</span>
      <img
        src="/svg/chevron-down.svg"
        width="16"
        height="16"
        class="icon"
        :class="{ 'rotate-180': show }"
      />
    </div>

    <div v-if="show" class="mt-2 shadow bg-white grid grid-cols-3 absolute z-10 font-sans text-black100">
      <button @click="show = false" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
        Авиамоторная
        <img
          src="/svg/chevron-right-gray.svg"
          width="20"
          height="20"
        />
      </button>
      <button @click="show = false" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
        Автозаводская
        <img
          src="/svg/chevron-right-gray.svg"
          width="20"
          height="20"
        />
      </button>
      <button @click="show = false" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
        Академическая
        <img
          src="/svg/chevron-right-gray.svg"
          width="20"
          height="20"
        />
      </button>
      <button @click="show = false" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
        Алексеевская
        <img
          src="/svg/chevron-right-gray.svg"
          width="20"
          height="20"
        />
      </button>
      <button @click="show = false" class="py-2.5 px-4 bg-white border-b border-solid border-gray text-14 font-medium tracking-[-0.5%] flex items-center gap-1 w-full">
        Алтуфьево
        <img
          src="/svg/chevron-right-gray.svg"
          width="20"
          height="20"
        />
      </button>
    </div>

  </div>
</template>
