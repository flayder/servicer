<script setup>

</script>


<template>
  <button @click="$emit('openSidebar')" class="flex items-center text-30 laptop:text-36 font-semibold mb-4">
    <slot />
    <svg class="laptop:hidden" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.999 18.4883C14.3066 18.4795 14.5879 18.3652 14.8164 18.1191L21.4961 11.2812C21.6895 11.0879 21.7949 10.8418 21.7949 10.5518C21.7949 9.97168 21.3379 9.50586 20.7578 9.50586C20.4766 9.50586 20.2041 9.62012 20.002 9.82227L14.0078 15.9834L7.99609 9.82227C7.79395 9.62891 7.53027 9.50586 7.24023 9.50586C6.66016 9.50586 6.20312 9.97168 6.20312 10.5518C6.20312 10.8418 6.30859 11.0879 6.50195 11.2812L13.1904 18.1191C13.4277 18.3652 13.6914 18.4883 13.999 18.4883Z" fill="#0D1126" fill-opacity="0.4"/>
    </svg>       
  </button>
</template>