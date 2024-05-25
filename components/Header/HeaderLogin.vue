<template>
    <nuxt-link
      v-if="!auth.isLoggedIn"
      class="hover:opacity-[0.8] p-1.5 flex items-center justify-center gap-1 rounded-default w-7 min-w-fit laptop:w-full text-12 font-medium laptop:pl-2.5 laptop:pr-[14px] laptop:h-full"
      style="background-color: rgb(233, 234, 236); color: rgb(20, 21, 26);"
      to="/login"
    >
      <img
        src="/svg/login.svg"
        width="16"
        height="16"
      />
      <span>{{ __('Войти') }}</span>
    </nuxt-link>
    <nuxt-link 
      class="text-12 font-medium laptop:pl-2.5 laptop:pr-[14px] whitespace-nowrap hover:opacity-80"
      to="/profile"
      v-if="auth.isLoggedIn"
      color="rgb(20, 21, 26)"
    >
      <span>{{ __('Ваш профиль') }}</span>
    </nuxt-link>
    <ui-button
      @click="logout"
      v-if="auth.isLoggedIn"
      background-color="rgb(233, 234, 236)"
      color="rgb(20, 21, 26)"
    >
      <span>{{ __('Выйти') }}</span>
    </ui-button>
</template>

<script setup lang="ts">
    const auth = useAuthStore()
    const { __ } = useLocale()

    const logout = async () => {
      await auth.logout()
      navigateTo('/')
    }
</script>