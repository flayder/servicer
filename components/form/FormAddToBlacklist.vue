<template>
  <ui-modal
    class="w-full popup"
    :maxWidth="maxWidth"
    v-model="openAddBlacklist"
    :btn="true"
  >
    <form class="flex flex-col gap-0 px-0 laptop:px-10 pb-4" @submit.prevent="formHandler">
      <h4 class="text-24 pb-6 font-semibold laptop:text-30">
        Добавить отзыв
      </h4> 

      <div class="flex flex-col laptop:flex-row justify-stretch gap-[10px] mb-5">
        <ui-input 
          class="w-full grow"
          v-model="form.phone"
          item="form"
          label="Телефон"
          placeholder="Телефон"
          :maxWidth="true"
          mask="+7(999) 999-99-99"
        />
        <ui-input 
          class="w-full grow"
          v-model="form.telegram"
          item="form"
          label="Телеграм"
          placeholder="Телеграм"
          :maxWidth="true"
        />
      </div>

      <div class="flex flex-col laptop:flex-row justify-stretch gap-[10px] mb-5">
        <ui-input
          v-model="form.event"
          item="form"
          label="Название события"
          placeholder="Название события"
          :maxWidth="true"
        />
        <ui-input
          v-model="form.event_at"
          item="form"
          label="Дата события"
          placeholder="__:__:___"
          slotChar="__:__:___"
          mask="99.99.2099"
          :maxWidth="true"
        />
      </div>
      
      
      
      <div class="flex flex-col gap-1 mb-5">
        <span class="text-12 font-medium text-gray200">Ваш отзыв</span>
        <ui-textarea
          v-model="form.event_description"
          class="flex"
          placeholder="Ваш отзыв"
        />
      </div>

      <div class="flex flex-col gap-2.5">
        <ui-button
            type="submit"
            item="large"
          >
          Добавить отзыв
        </ui-button>
      </div>
    </form>
  </ui-modal>
</template>

<script setup >
const { openAddBlacklist } = useRoot()
const { set } = useGlobalErrors()

const form = ref({
  phone: "",
  telegram: "",
  event: "",
  event_at: "",
  event_description: ""
})

const formHandler = async () => {
  const formData = {}

  for(let item in form.value) {
    if(item != "phone")
      formData[item] = form.value[item]
    else
      formData[item] = form.value[item].replace(/[^0-9]+/gi, "")
  }

  const {data} = await useApiFetch("/api/user/blacklists", {
    method: "POST",
    body: formData
  })

  if(data.value.errors.length == 0) {
    set({
      success: true,
      message: "Отзыв успешно добавлен"
    })

    for(let item in form.value) {
      form.value[item] = ""
    }

    openAddBlacklist.value = false
  }
}

</script>