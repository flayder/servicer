<template>
  <div
    class="flex flex-col tablet:flex-row gap-2.5"
    v-if="item?.id"
  >
    <div class="flex gap-2.5 tablet:flex-col">
      <div class="relative h-[250px] w-full tablet:w-[228px] tablet:h-[250px]">
        <nuxt-link
          :to="getDetailPage()">
          <nuxt-img
            :src="item.photos[0]"
            class="rounded-lg object-cover w-full h-full"
          />
        </nuxt-link>
        <div class="absolute right-[5px] bottom-[5px] flex gap-1">
          <ui-button
            width="51px"
            background-color="rgba(255, 255, 255, 0.6)"
            color="rgb(20, 21, 26)"
          >
            <img
              src="/svg/message.svg"
              width="16"
              height="16"
            />
            {{ item.comments }}
          </ui-button>
          <ui-button
            item="little"
            background-color="rgba(255, 255, 255, 0.6)"
            color="rgb(20, 21, 26)"
            v-if="getItemProp(16, item)"
          >
            <img
              src="/svg/video.svg"
              width="16"
              height="16"
            />
          </ui-button>
        </div>
      </div>
      
    </div>
    <div class="flex gap-2.5 w-full tablet:flex-col">
      <div class="w-[50%] flex flex-col gap-[7px] tablet:w-full">
        <nuxt-link
          :to="getDetailPage()"
          class="flex flex-col pb-1.5 border-b border-solid border-gray">
          <span class="text-18 font-medium tracking-[-1.2%]">{{ item.name }}</span>
          <span class="text-10 font-semibold text-gray300 uppercase">{{ item.city ? item.city.title : '' }}, {{ item.metro ? item.metro.title : '' }}</span>
        </nuxt-link>
        <div class="flex flex-wrap gap-[7px]">
          <template v-for="prop in item.properties">
            <div class="flex" v-if="prop.userValues.length > 0 && prop.type != 'video' && prop.type != 'photo' && prop.type != 'textarea'">
              <div class="flex items-center gap-1">
                <span class="text-12 font-medium">{{ prop.name }}</span>
                <span class="text-10 font-semibold text-gray300">{{ prop.userValues.join(',') }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="w-[50%] flex flex-col gap-1 tablet:w-full tablet:flex-row">
        <div class="tablet:w-[153px] flex gap-1">
          <template v-if="!item.is_staff && item.in_staff">
            <ui-button width="100%" backgroundColor="#E9EAEC" color="#14151A" @click="clickHandler">
              {{ __('Подтвердить') }}
            </ui-button>
            <ui-button width="100%" @click="clickHandler(true)">
              {{ __('Отменить') }}
            </ui-button>
          </template>
          <ui-button v-if="item.is_staff && item.in_staff" backgroundColor="#E9EAEC" color="#14151A" width="100%" @click="clickHandler">
            {{ __('Убрать из коллег') }}
          </ui-button>
          <ui-button v-if="!item.in_staff && !item.is_staff" width="100%" @click="clickHandler">
            {{ __('Добавить в коллеги') }}
          </ui-button>
          <!-- <ui-button v-if="!item.in_staff && item.is_staff" width="100%" @click="clickHandler">
            {{ __('Отклонить запрос') }}
          </ui-button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { 
  getCurrentPrice, 
  getContact, 
  generateTags, 
  getItemProp
} from "~/utils/catalogHandler"

const { __ } = useLocale()

const { toggleStaff } = useCatalog()

const props = defineProps<{
  buttonType?: 'remove' | 'add' | 'prompt',
  item?: any
}>()

const showPhone: any = ref(false)

const getDetailPage = () => {
  return `/catalog/${props.item.id}`
}

const emit = defineEmits<{
  (e: 'click', event: any): any,
}>()
const clickHandler = async (decline = false) => {
  await toggleStaff(props.item.id, decline)
  emit('click', props.item.id)
}

</script>
