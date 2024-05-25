<script setup lang="ts">
import type { Breadcrumbs } from '~/types/index'

defineProps<{
  breadcrumbs: Breadcrumbs[]
}>()

const route = useRoute()

const home = ref<Breadcrumbs>({
  icon: 'pi pi-home',
  route: '/'
})
</script>

<template>
  <Breadcrumb
    :pt="{ root: { class: 'bg-transparent py-0 px-0' }, action: { class: 'text-12 font-medium font-sans' }, separator: { class: 'mx-2' } }"
    :home="home"
    :model="breadcrumbs"
  >
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span :class="[item.icon]" />
          <span :class="route.path === item.route ? 'text-gray400' : 'text-black100'">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="route.path === item.route ? 'text-gray400' : 'text-black100'">{{ item.label }}</span>
      </a>
    </template>
    <template #separator>
      <img
        src="/svg/chevron-right-gray.svg"
        width="16"
        height="16"
      />
    </template>
  </Breadcrumb>
</template>

<style>
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
  color: rgb(20, 21, 26);
}
</style>
