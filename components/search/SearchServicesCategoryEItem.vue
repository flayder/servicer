<script setup lang="ts">
const set2 = ref<string[]>()
</script>

<template>
  <div class="flex flex-col gap-[18px]">
    <ui-checkbox
      v-model="set2"
      name="set2"
      input-id="set2-1"
      for-label="set2-1"
      value="Set 2"
      label="Set 2"
    />
    <ui-checkbox
      v-model="set2"
      name="set2"
      input-id="set2-2"
      for-label="set2-2"
      value="Set 2"
      label="Set 2"
    />
    <ui-checkbox
      v-model="set2"
      name="set2"
      input-id="set2-3"
      for-label="set2-3"
      value="Set 2"
      label="Set 2"
    />
    <ui-checkbox
      v-model="set2"
      name="set2"
      input-id="set2-4"
      for-label="set2-4"
      value="Set 2"
      label="Set 2"
    />
  </div>
</template>
