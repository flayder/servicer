<template>
  <nuxt-link
    :to="clickHandler()"
    target="_blank"
    v-if="item === 'small'"
    :item="item"
    class="flex items-center gap-1 py-0.5 pl-[3px] pr-[7px] rounded-md hover:opacity-[0.9]"
    :style="{ backgroundColor: backgroundColor, cursor: 'pointer' }"
  >
    <hash-icon :style="{ color: color }" />
    <span
      class="text-12 font-medium"
      :style="{ color: color }"
    >{{ text }}</span>
</nuxt-link>

  <nuxt-link 
    :to="clickHandler()"
    v-if="item === 'large'"
    target="_blank"
    :item="item"
    class="flex items-center gap-1 py-1 pl-1.5 pr-2.5 rounded-md hover:opacity-[0.9]"
    :style="{ backgroundColor: backgroundColor, cursor: 'pointer' }"
  >
    <hash-icon :style="{ color: color }" />
    <span
      class="text-14 font-medium tracking-[-0.5%]"
      :style="{ color: color }"
    >{{ text }}</span>
</nuxt-link>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  field?: string
	text: any,
	color?: string,
	backgroundColor?: string,
  item?: string
}>(), {
	color: 'rgba(15, 19, 36, 0.6)',
	backgroundColor: 'rgb(233, 234, 236)',
  item: 'small'
})

const clickHandler = () => {
  const field: any = ''+props.field
  if(field.indexOf('=') == -1)
    return `/catalog/${field}`

  return `/catalog?${field}`
  // if(props.field.indexOf('=') == -1)
  //   return navigateTo({
  //     path: props.field
  //   })
  

  // return navigateTo({
  //   path: props.field,
  //   query
  // })
}

</script>
