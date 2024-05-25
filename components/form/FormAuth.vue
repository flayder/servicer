<script setup lang="ts">
const { openAuth } = useRoot()
</script>

<template>
  <ui-modal v-model="openAuth">
    <form-auth-tab />
  </ui-modal>
</template>
