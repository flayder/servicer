<script setup lang="ts">
const email = ref<string>('')

const router = useRouter()
const { userType } = useRoot()

</script>

<template>
  <form class="flex flex-col gap-5">
    <ui-input
      v-model="email"
      item="form"
      label="Email"
      placeholder="Email"
    />
    <div class="flex flex-col gap-2.5">
      <ui-button
        to="/profile/"
        type="submit"
        item="large"
      >
        Войти
      </ui-button>
      <ui-button
        item="large"
        background-color="rgb(233, 234, 236)"
        color="rgb(20, 21, 26)"
        :onclick="(e) => { e.preventDefault(); userType = 'client' }"
      >
        <img
          src="/svg/telegram.svg"
          width="20"
          height="20"
        />
        Войти через Telegram
      </ui-button>
    </div>
  </form>
</template>
