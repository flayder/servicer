<template>
  <div
    class="flex flex-col laptop:flex-row justify-start gap-2.5"
    v-if="item?.id"
  >
    <div class="flex gap-2.5 laptop:flex-col">
      <div class="relative w-[50%] h-[193px] laptop:w-[228px] laptop:h-[250px]">
        <nuxt-link
          :to="getDetailPage()">
          <nuxt-img
            :src="item.photos[0]"
            class="rounded-lg object-cover w-full h-full"
          />
        </nuxt-link>
        <div class="absolute right-[5px] top-[5px] flex gap-1">
          <ui-favorite 
            :id="item.id"
          />
        </div>
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
      <div class="flex laptop:hidden flex-col gap-[13px] w-[50%] laptop:w-full">
        <div class="flex flex-wrap gap-[5px]">
          <ui-hash 
            :text="tag.name"
            :field="tag.field" 
            v-for="tag in generateTags(item)" 
          />
        </div>
        <div class="flex flex-col gap-1.5 laptop:hidden">
          <template v-for="block in item.block_times">
            <div class="flex items-center gap-0.5">
              <img
                src="/svg/clock.svg"
                width="16"
                height="16"
              />
              <div class="flex items-center gap-1">
                <span class="text-12 font-medium">{{ getCurrentPrice(block.value, block.value_eng, true) }}</span>
                <span class="text-10 font-semibold text-gray300">{{ block.block }}, {{ block.place }}, {{ block.time }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>


    </div>
    <div class="laptop:w-[228px]">
      <div class="hidden laptop:flex flex-col gap-[13px] w-[50%] laptop:w-full">
        <div class="flex flex-wrap gap-[5px]">
          <ui-hash 
            :text="tag.name"
            :field="tag.field" 
            v-for="tag in generateTags(item)" 
          />
        </div>
        <div class="flex flex-col gap-1.5 laptop:hidden">
          <template v-for="block in item.block_times">
            <div class="flex items-center gap-0.5">
              <img
                src="/svg/clock.svg"
                width="16"
                height="16"
              />
              <div class="flex items-center gap-1">
                <span class="text-12 font-medium">{{ getCurrentPrice(block.value, block.value_eng, true) }}</span>
                <span class="text-10 font-semibold text-gray300">{{ block.block }}, {{ block.place }}, {{ block.time }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="flex gap-2.5 w-full laptop:flex-col">
        <div class="w-[50%] flex flex-col gap-[7px] laptop:w-full">
          <nuxt-link
            :to="getDetailPage()"
            class="flex flex-col pb-1.5 border-b border-solid border-gray">
            <span class="text-18 font-medium tracking-[-1.2%]">{{ item.name }}</span>
            <span class="text-10 font-semibold text-gray300 uppercase">{{ item.city ? item.city.title : '' }}, {{ item.metro ? item.metro.title : '' }}</span>
          </nuxt-link>
          <div class="flex gap-[7px]">
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
        <div class="w-[50%] flex flex-col gap-1 laptop:w-full laptop:flex-row">
          <div class="laptop:w-[153px]" v-if="item.phone">
            <ui-button width="100%">
              <img
                src="/svg/phone.svg"
                width="16"
                height="16"
              />
              <a class="whitespace-nowrap" v-if="showPhone" @click.stop :href="'tel:'+ item.phone.replace(/[^0-9]+/gi, '')">{{ item.phone }}</a>
              <button class="whitespace-nowrap" @click="showPhone = true"  v-else>{{ __('Показать телефон') }}</button>
            </ui-button>
          </div>
          <div class="flex items-center gap-1">
            <template v-for="contact in item.contacts">
            <ui-button
              :to="getContact(contact)"
              item="little"
              width="100%"
            >
              <img
                :src="contact.profile_additional_contact_id == 2 ? '/svg/telegram-white.svg' : '/svg/whatsapp.svg'"
                width="16"
                height="16"
              />
            </ui-button>
          </template>
          </div>
        </div>
        <div class="hidden laptop:flex flex-wrap gap-1.5">
          <template v-for="block in item.block_times">
            <div class="flex items-center gap-0.5">
              <img
                src="/svg/clock.svg"
                width="16"
                height="16"
              />
              <div class="flex items-center gap-1">
                <span class="text-12 font-medium">{{ getCurrentPrice(block.value, block.value_eng, true) }}</span>
                <span class="text-10 font-semibold text-gray300">{{ block.block }}, {{ block.place }}, {{ block.time }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { 
    getCurrentPrice, 
    getContact, 
    generateTags, 
    getItemProp
  } from "~/utils/catalogHandler"
  const { __ } = useLocale()

  const props = defineProps({
    item: {}
  })

  const showPhone = ref(false)

  const getDetailPage = () => {
    return `/catalog/${props.item.id}`
  }

</script>