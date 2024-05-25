<template>
  <div class="w-full mt-[18px]">

    <ui-checkbox
      v-model="model.value"
      :name="item.name"
      :value="true"
      :input-id="item.id"
      :for-label="item.id"
      :label="item.name"
      @change="checkHandler($event)"
    />

    <div class="mt-[18px]" v-if="model.value.length > 0">
      <div class="flex gap-[14px] mb-[10px]">
        <div class="flex flex-col gap-1 w-full">
          <ui-input
            v-model="model.price"
            item="form"
            :label="__('Доплата за услугу') + ' (₽)'"
            :placeholder="__('Введите')"
            type="number"
          />
        </div>
  
        <div class="flex flex-col gap-1 w-full">
          <ui-input
            v-model="model.price_eng"
            item="form"
            :label="__('Доплата за услугу') + ' ($)'"
            :placeholder="__('Введите')"
            type="number"
          />
        </div>
    
      </div>
  
      <div class="flex flex-col gap-1">
        <span class="text-12 font-medium text-gray200">{{ __('Комментарий') }}</span>
        <ui-textarea
          v-model="model.comment"
          class="flex"
          :placeholder="__('Напишите ваш комментарий к услуге')"
          :minHeight="8"
          :noResize="true"
        />
        <span class="text-12 font-medium text-gray200">({{ __('до 130 символов') }})</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const { __ } = useLocale()
const model = defineModel()

const props = defineProps({
  item: {}
})

const checkHandler = (event) => {

  // setTimeout(() => {
  //   if(Array.isArray(event.value)) {
  //     if(event.value.length == 0)
  //       model.value.value = false
  //     else
  //       model.value.value = true
  //   }
  // }, 100)
}

</script>