<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-2">{{ __('Мои комментарии') }}</ProfileTitleWrap>

    <div class="mt-4 laptop:mt-10 flex flex-col gap-[14px] laptop:gap-[18px] max-w-[386px]" v-if="comments.length == 0">
      <img class="w-48" src="/svg/message-big.svg" alt="">
      <p class="max-w-[308px] font-semibold text-20 tracking-tighter text-gray200">{{ __('Вы пока не оставили ни одного комментария.') }}</p>
    </div>
    <div class="flex flex-col gap-3 laptop:w-full laptop:max-w-[623px]">
      <div class="flex flex-col">
        <template v-for="comment in comments">
          <div class="pt-5 pb-10 flex flex-col gap-2.5 border-b border-solid border-gray" >
            <span class="text-18 font-semibold tracking-[-1.2%]">{{ comment.user }}</span>
            <p class="text-18 font-medium text-gray300 tracking-[-1.2%]">
              {{ comment.text }}
            </p>
            <span class="text-16 font-semibold text-gray200 tracking-[-1%]">{{ comment.created_at }}</span>
          </div>
          <div class="pt-5 pb-10 flex flex-col gap-2.5 border-b border-solid border-gray pl-[45px]" v-if="comment.children">
            <span class="text-18 font-semibold tracking-[-1.2%]">{{ __('Мой ответ') }}</span>
            <p class="text-18 font-medium text-gray300 tracking-[-1.2%]">
              {{ comment.children.text }}
            </p>
            <span class="text-16 font-semibold text-gray200 tracking-[-1%]">{{ comment.children.created_at }}</span>
          </div>
          <form @submit.prevent="formHandler(comment.id)" class="mt-5 mb-5" v-if="!comment.children">
            <ui-textarea
              v-model="text"
              :placeholder="__('Мой ответ')"
            />
            <ui-button
              width="92px"
              background-color="rgb(20, 21, 26)"
              color="rgba(255, 255, 255, 0.9)"
            >
              {{ __('Ответить') }}
            </ui-button>
          </form>
        </template>
      </div>
      <ui-button
        item="card"
        width="128px"
        background-color="rgb(233, 234, 236)"
        color="rgb(20, 21, 26)"
        v-if="current_page < last_page"
        @click="showMore"
      >
        {{ __('Показать еще') }}
        <img
          src="/svg/chevron-down.svg"
          width="16"
          height="16"
        />
      </ui-button>
      
    </div>


  </div>
</template>

<script setup>
const { set } = useGlobalErrors()
const { __ } = useLocale()
const { getCurrentUser } = useAuthStore()
const comments = ref([])
const user = getCurrentUser.value
const current_page = ref(1)
const last_page = ref(1)
const text = ref('')

const showMenu = ref(false)

const getComments = async (params = {}) => {
  params.my = 1
  const {data} = await useApiFetch(`/api/comment/${user.id}`, {
    params
  })

  const response = data.value

  comments.value = response.data

  current_page.value = response.meta.current_page
  last_page.value = response.meta.last_page
}

const showMore = async () => {
  await getComments({page: current_page.value + 1})
}

const formHandler = async (children_id) => {
  const formData = new FormData

  formData.append('text', text.value)
  formData.append('to_user_id', user.id)
  formData.append('children_id', children_id)

  const {data} = await useApiFetch(`/api/comment/${user.id}`, {
    method: 'POST',
    body: formData
  })

  setTimeout(async () => {
    if(Array.isArray(data.value.errors) && data.value.errors.length == 0) {
      set({
        success: true,
        message: __('Комментарий успешно добавлен')
      })

      text.value = ''

      await getComments()
    }
  }, 200)
}

onMounted(() => {
  setTimeout(() => {
    getComments()
  }, 100)
})
</script>