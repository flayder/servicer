<script setup lang="ts">
const searchId = ref<string>('')
const searchPhone = ref<string>('')
</script>

<template>
  <section class="pt-2.5 pb-7 laptop:pt-[14px]">
    <div class="container">
      <div class="flex flex-col gap-[18px] laptop:gap-[14px]">
        <h2 class="text-24 font-semibold tracking-[-1.4%] laptop:text-36 laptop:tracking-[-1.8%]">
          Поиск
        </h2>
        <div class="flex flex-col gap-[18px] laptop:flex-row laptop:gap-2.5">
          <div class="w-full laptop:w-[307px]">
            <ui-input
              v-model="searchId"
              label="Поиск по ID анкеты"
              item="searchLarge"
              placeholder="ID анкеты"
            >
              <img
                src="/svg/search.svg"
                width="20"
                height="20"
                class="absolute left-3 top-2.5"
              />
              <button class="absolute right-5 top-3 text-12 font-medium text-gray100">
                Найти
              </button>
            </ui-input>
          </div>
          <div class="w-full laptop:w-[307px]">
            <ui-input
              v-model="searchPhone"
              label="Поиск по номеру телефона"
              item="searchLarge"
              placeholder="Телефон"
            >
              <img
                src="/svg/search.svg"
                width="20"
                height="20"
                class="absolute left-3 top-2.5"
              />
              <button class="absolute right-5 top-3 text-12 font-medium text-gray100">
                Найти
              </button>
            </ui-input>
          </div>
        </div>
        <div class="flex flex-wrap gap-[5px] laptop:pt-1.5">
          <ui-hash text="Tag 1" />
          <ui-hash text="Tag 2" />
          <ui-hash text="Tag 3" />
          <ui-hash text="Tag 4" />
          <ui-hash text="Tag 5" />
          <ui-hash text="Tag 6" />
          <ui-hash text="Tag 7" />
        </div>
      </div>
    </div>
  </section>
</template>
