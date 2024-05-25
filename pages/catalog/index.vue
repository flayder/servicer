<template>
  <Catalog />
</template>

<script setup>
  const { getItemsData, setCategory } = useCatalog()

  setCategory({})

  await getItemsData()

</script>