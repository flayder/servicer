<template>
  <nuxt-link v-if="link?.link" :to="link?.link" :class="{ 'bg-gray': isActive, 'mt-5': link.marginTop }" class="flex items-end w-full hover:bg-gray rounded-default py-2.5 pl-3 pr-5">
    <img v-if="link.icon" :src="`/svg/${ link.icon }.svg`" alt="">
    <label class="px-1 text-14 cursor-pointer" :class="[link.icon ? 'px-1' : 'pr-1 pl-6', { 'text-pink': link.pink }]">
      {{ __(link.name) }}
      <ui-switcher class="ml-[6px]" v-if="link.switch" :checked="isOnline" v-model="isOnline" />
    </label>
  </nuxt-link>
  <button v-else :class="{ 'bg-gray': isActive, 'mt-5': link.marginTop }" class="flex items-end w-full hover:bg-gray rounded-default py-2.5 pl-3 pr-5" @click="link.pink ? logout() : null">
    <img v-if="link.icon" :src="`/svg/${ link.icon }.svg`" alt="">
    <label class="px-1 text-14 cursor-pointer" :class="[link.icon ? 'px-1' : 'pr-1 pl-6', { 'text-pink': link.pink }]">
      {{ __(link.name) }}
      <ui-switcher class="ml-[6px]" v-if="link.switch" @change="changeOnline" :checked="isOnline" v-model="isOnline" />
    </label>
  </button>
</template>

<script setup>
const { __ } = useLocale()
const auth = useAuthStore()
const user = auth.getCurrentUser

const isOnline = ref(false)
isOnline.value = !!(user.value && user.value.is_online)

const changeOnline = (result) => {
  auth.updateUser({is_online: result})
}

const logout = () => {
  auth.logout()
}

defineProps({
  link: {
    type: Object,
    default: () => ({})
  },
  isActive: {
    type: Boolean
  }
})

</script>