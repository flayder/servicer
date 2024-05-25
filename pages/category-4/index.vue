<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Breadcrumbs } from '~/types/index'

const breadcrumbs = ref<Breadcrumbs[]>([
	{ label: 'Category 2', route: '/category-4' },
])
</script>

<template>
  <div class="pb-7 laptop:pb-[52px] laptop:border-b laptop:border-solid laptop:border-gray">
    <div class="container">
      <div class="pt-2.5 laptop:pt-0">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <category-a-filter title="Заголвок фильтра" />
      <category-a-main />
    </div>
    <category-a-about />
  </div>
</template>
