<template>
  <div>
    <ErrorBlock />
    <div class="flex justify-center items-center min-h-[100vh]" style="background: url('/img/Вход.png'); background-size: cover;">
      <slot />
    </div>
  </div>
</template>
<script setup>
  const auth = useAuthStore()
</script>
