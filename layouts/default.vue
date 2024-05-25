<template>
  <div>
    <ErrorBlock />
    <layout-header />
    <main class="main">
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<style scoped>
.main {
  flex: 1 1 auto;
}
</style>
