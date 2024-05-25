<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <form-auth v-if="openAuth" />
  <form-policy v-if="openPolicy" />
  <form-complaint v-if="openComplaint" />
</template>

<script setup>
  const { openAuth, openPolicy, openComplaint } = useRoot()
  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>
