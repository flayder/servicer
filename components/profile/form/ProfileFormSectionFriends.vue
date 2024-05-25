<script setup>
  const form = ref({
    friends: '',
  })
</script>

<template>
  <div>
    <div class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-1">
        <ui-input
          v-model="form.friends"
          item="form"
          label="ID анкеты"
          placeholder="Введите ID"
        />
      </div>
    </div>  
  </div>
</template>