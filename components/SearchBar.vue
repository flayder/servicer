<template>
  <div class="flex items-center py-[6px] rounded-[10px] px-[15px] bg-[#E9EAEC]">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.16106 10.8761C7.95961 10.8761 8.70794 10.635 9.33071 10.2232L11.5305 12.428C11.6761 12.5686 11.862 12.6389 12.0628 12.6389C12.4797 12.6389 12.7861 12.3125 12.7861 11.9006C12.7861 11.7098 12.7208 11.524 12.5801 11.3833L10.3954 9.18858C10.8474 8.54572 11.1136 7.76726 11.1136 6.92351C11.1136 4.74885 9.33573 2.97095 7.16106 2.97095C4.99142 2.97095 3.2085 4.74885 3.2085 6.92351C3.2085 9.09818 4.9864 10.8761 7.16106 10.8761ZM7.16106 9.82139C5.56899 9.82139 4.26318 8.51559 4.26318 6.92351C4.26318 5.33144 5.56899 4.02563 7.16106 4.02563C8.75314 4.02563 10.0589 5.33144 10.0589 6.92351C10.0589 8.51559 8.75314 9.82139 7.16106 9.82139Z" fill="#14151A"/>
    </svg>
    <input
      v-model="search"
      @keyup="searchHandler"
      type="text" 
      class="ml-[10px] md:mr-[100px] bg-[#E9EAEC] w-[100%]" 
      :placeholder="__('Имя, ID, Телефон...')"
    >
    <button 
      @click="searchHandler"
      type="button" 
      class="text-[#0A0F2940] md:block hidden font-semibold text-[17px]">
      {{ __('найти') }}
    </button>
  </div>
</template>

<script setup>
  const { __ } = useLocale()

  const route = useRoute()
  const router = useRouter()
  const search = ref('')

  onMounted(() => {
    setTimeout(() => {
      if(route.query?.search) {
        search.value = route.query.search
      }
    }, 100)
  })
  
  const searchHandler = (event) => {
    console.log('ok')
    // return navigateTo({
    //   path: '/catalog',
    //   query: {search: search.value}
    // })
  }
</script>
