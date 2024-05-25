<template>
  <div class="border-b border-gray pb-7">
    <h5 class="text-16 font-semibold mb-2">{{ item.name }}</h5>
    <div class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-1" v-for="place in item.places">
        <template v-for="time in place.times">
          <span class="text-12 font-medium text-gray200">{{ place.name }}, {{ time.name }}</span>
          <div class="flex flex-col gap-1 w-full">
            <ui-input
              v-model="model[item.id][place.id][time.id]"
              item="form"
              :placeholder="__('Введите цену')"
              type="number"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>

const { __ } = useLocale()
const model = defineModel()

defineProps({
  item: {}
})

</script>