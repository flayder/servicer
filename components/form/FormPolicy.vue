<script setup lang="ts">
const { openPolicy } = useRoot()

const policy = ref<string[]>()
</script>

<template>
  <ui-modal
    v-model="openPolicy"
    :btn="false"
  >
    <div class="flex flex-col gap-7">
      <div class="flex flex-col gap-5 pb-5 border-b border-solid border-gray">
        <img
          src="/svg/info-gray.svg"
          width="65"
          height="65"
        />
        <div class="flex flex-col gap-2.5">
          <h4 class="text-24 font-semibold laptop:text-30">
            Важно
          </h4>
          <p class="text-16 font-medium text-gray300">
            У Avrora только один аккаунт поддержки в Telegram - <span class="text-black100">@avrora_support</span>
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-2.5 pb-5 border-b border-solid border-gray">
        <h4 class="text-24 font-semibold laptop:text-30">
          Аккаунтов в WhatsApp
          и Viber у нас НЕТ
        </h4>
        <div class="flex flex-col gap-6 text-16 font-medium text-gray300">
          <p>
            Единственный аккаунт для связи 
            с нами в Telegram - <span class="text-black100">@avrora_support</span>
          </p>
          <p>
            Если кто-то кроме пишет вам 
            от нашего имени - это мошенники.
          </p>
        </div>
      </div>
      <h4 class="text-24 font-semibold pb-5 border-b border-solid border-gray laptop:text-30">
        Все наши контакты указаны тут - <span class="text-pink">/contacts</span>
      </h4>
      <div class="flex flex-col gap-5">
        <p class="text-16 font-medium text-gray300">
          Для дальнейшей работы с Avrora вам нужно согласиться с правилами площадки:
        </p>
        <div class="flex flex-col gap-[18px]">
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="oldAge"
            for-label="oldAge"
            value="Я подтверждаю, что мне и всем девушкам, размещенным от моего аккаунта, есть 18 лет."
            label="Я подтверждаю, что мне и всем девушкам, размещенным от моего аккаунта, есть 18 лет."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="myPhoto"
            for-label="myPhoto"
            value="Я согласен с тем, что меня могут навсегда забанить за размещение фейковых (чужих/ненастоящих) фото 
						и использование более одного
						аккаунта."
            label="Я согласен с тем, что меня могут навсегда забанить за размещение фейковых (чужих/ненастоящих) фото 
						и использование более одного
						аккаунта."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="ifBan"
            for-label="ifBan"
            value="Я согласен с тем, что в случае бана мне не вернут средств с моего баланса."
            label="Я согласен с тем, что в случае бана мне не вернут средств с моего баланса."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="iRead"
            for-label="iRead"
            value="Я прочитал(а) пользовательское соглашение проекта Avrora."
            label="Я прочитал(а) пользовательское соглашение проекта Avrora."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="createQuestionary"
            for-label="createQuestionary"
            value="Я сам(а) и добровольно создал(а) 
						или хочу создать анкету на Avrora."
            label="Я сам(а) и добровольно создал(а) 
						или хочу создать анкету на Avrora."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="iUnderstand"
            for-label="iUnderstand"
            value="Я понимаю, что за использование фильтров или ретуши на проверочных видео меня навсегда забанят на Avrora."
            label="Я понимаю, что за использование фильтров или ретуши на проверочных видео меня навсегда забанят на Avrora."
          />
          <ui-checkbox
            v-model="policy"
            name="policy"
            input-id="ageFive"
            for-label="ageFive"
            value="В анкете я указал(а) возраст примерно (+/- 5 лет) соответствующий реальному."
            label="В анкете я указал(а) возраст примерно (+/- 5 лет) соответствующий реальному."
          />
        </div>
      </div>
      <div class="flex flex-col gap-2.5">
        <ui-button
          type="submit"
          item="large"
        >
          Принять
        </ui-button>
        <ui-button
          type="submit"
          item="large"
          background-color="rgb(233, 234, 236)"
          color="rgb(20, 21, 26)"
        >
          Отклонить
        </ui-button>
      </div>
    </div>
  </ui-modal>
</template>
