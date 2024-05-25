<template>
  <section class="relative pb-16 mb-7 border-b border-gray" v-if="content.title">
    <div class="mx-auto mt-10 max-w-[624px] px-4 laptop:px-0">
      <h1 class="text-36 tracking-tighter font-semibold mb-3">{{ content.title }}</h1>
        <div class="flex justify-center" v-if="content.image">
            <img :src="content.image.path" :alt="Seo.getSeoAlt(content)" class="mt-5 mb-5 mx-auto max-w-full h-auto">
        </div>
      <div class="text-18 text-gray300 font-medium tracking-tight" v-html="content.text"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const slug = route.params.slug

import Seo from "~/utils/seoHandler"

const content: any = ref({})

const {data}: any = await $fetch(`${config.public.API_URL}/api/page/${slug}`)

if(data) {
    content.value = data

    useHead({
      title: Seo.getSeoTitle(content.value),
      meta: [
        { name: 'description', content: Seo.getSeoDescription(content.value) },
        { name: 'keyword', content: Seo.getSeoKeyword(content.value) }
      ],
    }) 

} else {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
      fatal: true,
    })
}
</script>