<template>
  <CatalogDetail v-if="type == 'detail'" />
  <Catalog v-if="type == 'catalog'" />
</template>

<script setup>

const type = ref('')
const { 
  getDetail, 
  getDetailData, 
  getItemsData, 
  getCategoryData,
  setCategory,
  setDetail
} = useCatalog()

const route = useRoute()
const id = route.params.id

if(parseInt(id) > 0) {
  setDetail({})
  await getDetailData(id)
  type.value = 'detail'
} else {
  setCategory({})
  await getCategoryData(id)

  const data = await getItemsData(true, {}, id)
  type.value = 'catalog'
}

</script>