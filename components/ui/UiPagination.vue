<script setup lang="ts">

</script>

<template>
  <Paginator
    :rows="4"
    :total-records="120"
    template="PrevPageLink PageLinks NextPageLink"
    unstyled
    :pt="{ root: { class: 'flex bg-transparent rounded-default h-12' }, pages: { class: 'flex items-center justify-center' }, pageButton: ({ context }) => ({ class: context.active ? 'py-3 px-5 bg-gray text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' : 'py-3 px-5 bg-transparent text-black100 text-16 font-medium font-sans tracking-[-1%] rounded-full' }), nextPageButton: { class: 'hidden' }, previousPageButton: { class: 'hidden' } }"
  />
</template>
