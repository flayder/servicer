<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Breadcrumbs } from '~/types/index'

const breadcrumbs = ref<Breadcrumbs[]>([
	{ label: 'Category 5', route: '/category-5' },
])
</script>

<template>
  <div class="pb-7 laptop:pb-[52px] laptop:border-b laptop:border-solid laptop:border-gray">
    <div class="container">
      <div class="pt-2.5 laptop:pt-0">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <category-a-filter title="Категория 1" />
      <category-a-main />
    </div>
    <category-a-about />
  </div>
</template>
