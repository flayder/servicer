<script setup>

const settings = ref([
  {
    title: 'Уведомление об исчерпании средств на балансе',
    isTelegram: false,
    isEmail: false,
  },
  {
    title: 'Уведомление о минимальном остатке',
    isTelegram: true,
    isEmail: true,
  },
  {
    title: 'Успешная модерация',
    isTelegram: false,
    isEmail: true,
  },
  {
    title: 'Неуспешная модерация',
    isTelegram: false,
    isEmail: false,
  },
  {
    title: 'Повторная модерация',
    isTelegram: true,
    isEmail: false,
  },
  {
    title: 'Пополнение баланса',
    isTelegram: false,
    isEmail: false,
  },
  {
    title: 'Аккаунт был забанен/разбанен',
    isTelegram: false,
    isEmail: false,
  },
])



</script>

<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-3">Уведомления</ProfileTitleWrap>

    <p class="text-16 laptop:text-18 text-gray300  tracking-tighter font-medium mb-4 laptop:mb-5">
      Avrora будет уведомлять тебя о самом важном, просто выбери, 
      какие именно уведомления тебе нужны.
    </p>

    <div class="pb-7 border-b border-gray mb-4 laptop:mb-5">
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">Самые быстрые уведомления — через Telegram</span>
        <ui-button
          item="large"
          to="/"
          class="w-fit"
          background-color="rgb(233, 234, 236)"
          color="rgb(20, 21, 26)"
        >
          <img
            src="/svg/telegram.svg"
            width="20"
            height="20"
          />
          Войти через Telegram
        </ui-button>
      </div>
    </div>

  
    <div>
      <div class="flex w-full justify-end text-14 text-gray300 gap-[23px] mb-[18px] pr-[14px] ">
        <span>Telegram</span>
        <span>Email</span>
      </div>

      <div v-for="(item, idx) in settings" :key="idx" class="flex justify-between bg-white300 p-[14px] mb-[14px] laptop:mb-[18px] rounded-profile">
        <span class="text-black100 font-medium">{{ item.title }}</span>
        <div class="flex gap-5 laptop:gap-10 items-center">
          <label>
            <UiSwitcher :checked="item.isTelegram" v-model="item.isTelegram"/>
          </label>
          <label>
            <UiSwitcher :checked="item.isEmail" v-model="item.isEmail" />
          </label>
        </div>
      </div>

    </div>




  </div>
</template>