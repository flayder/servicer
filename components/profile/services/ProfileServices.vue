<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">    
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-3">{{ __('Ваши услуги') }}</ProfileTitleWrap>
    <p class="text-16 laptop:text-18 text-gray300  tracking-tighter font-medium">
      {{ __('От того, как Вы составили анкету, во многом зависит, откроют ли её пользователи.') }}
    </p>

    <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
    </div>

  
    <form class="flex flex-col-reverse laptop:flex-row laptop:gap-40" @submit.prevent="formHandler">
      <div class="flex flex-col shrink-0 max-w-full laptop:pb-[78px] pb-[10px]">
        <div class="flex flex-col" v-if="categories.length > 0">  
          <h2 class="text-24 mb-2 font-semibold tracking-[-1.4%] laptop:text-20 laptop:font-semibold laptop:tracking-[-1.2%]">
            {{ __('Предпочтения') }}
          </h2>
          <div class="flex flex-col gap-2.5 mb-5">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2" v-for="cat in categories">
                <h4 class="text-16 font-semibold tracking-[-1%]">
                  {{ cat.name }}
                </h4>
                <profile-services-category-form 
                  v-for="(serv, idx) in cat.services"
                  :item="serv"
                  v-model="form.services[serv.id]"
                  :key="idx" 
                />
              </div>
            </div>
          </div>
        </div>
    
        <div class="grid grid-cols-1 laptop:grid-cols-2 gap-[14px]" v-if="prices.length > 0">
          <div>
            <h4 class="text-30 font-semibold mb-4 laptop:mb-3">{{ __('Расценки для РФ и СНГ') }}</h4>
            <!-- <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
              Минимальная стоимость: $40
            </p> -->
            <ProfileServicesPrices 
              v-for="price in prices"
              :item="price"
              v-model="form.prices"
            />
          </div>
          <div>
            <h4 class="text-30 font-semibold mb-4 laptop:mb-3">{{ __('Расценки для иностранцев') }}</h4>
            <!-- <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
              Минимальная стоимость: $40
            </p> -->
              <ProfileServicesForeignPrices 
              v-for="price in prices"
              :item="price"
              v-model="form.prices_eng"
            />
          </div>
          
        </div>
        <ui-button
          class="h-12 mt-3"
          type="submit"
          item="large"
          width="306px"
        >
          {{ __('Сохранить услугу') }}
        </ui-button>
      </div>
    </form>
  </div>
</template>

<script setup>

const { __ } = useLocale()
const {set} = useGlobalErrors()

const categories = ref([])
const prices = ref([])

const form = ref({
  services: {},
  prices: {},
  prices_eng: {}
})

const formHandler = async () => {
  const formData = new FormData

  for(let item in form.value.services) {
    formData.append(`service[${item}][value]`, form.value.services[item].value.length > 0 ? true : false)
    formData.append(`service[${item}][price]`, form.value.services[item].price)
    formData.append(`service[${item}][price_eng]`, form.value.services[item].price_eng)
    formData.append(`service[${item}][comment]`, form.value.services[item].comment)
  }

  const prs = form.value.prices
  const prs_eng = form.value.prices_eng

  for(let item in prs) {
    for(let d in prs[item]) {
      for(let s in prs[item][d]) {
        formData.append(`price[${item}][${d}][${s}][price]`, prs[item][d][s])
        formData.append(`price[${item}][${d}][${s}][price_eng]`, prs_eng[item][d][s])
      }
    }
  }

  

  // for(let item in prs_eng) {
  //   for(let d in prs_eng[item]) {
  //     for(let s in prs_eng[item][d]) {
  //       formData.append(`price_eng[${item}][${d}][${s}]`, prs_eng[item][d][s])
  //     }
  //   }
  // }

  const {data} = await useApiFetch("/api/user/service_places",{
    method: 'POST',
    body: formData
  })

  if(data.value.errors.length == 0) {
    set({
      success: true,
      message: __("Данные успешно сохранены")
    })
  }

  //console.log('form', form.value)
}

const getCats = async () => {
  const {data} = await useApiFetch("/api/user/service_categories")
    
  data.value.data.map(item => {
    item.services.map(serv => {
      serv.value = serv.value ? [serv.value] : []
      form.value.services[serv.id] = serv
    })

    categories.value.push(item)
  })
}

const getPrices = async () => {
  const {data} = await useApiFetch("/api/user/service_places")
    
  data.value.data.map(item => {
    item.places.map(pl => {

      if(typeof form.value.prices[item.id] != "object")
        form.value.prices[item.id] = {}

        pl.times.map(t => {
        if(typeof form.value.prices[item.id][pl.id] != "object")
          form.value.prices[item.id][pl.id] = {}

        form.value.prices[item.id][pl.id][t.id] = t.value
      })

      if(typeof form.value.prices_eng[item.id] != "object")
        form.value.prices_eng[item.id] = {}

        pl.times.map(t => {
        if(typeof form.value.prices_eng[item.id][pl.id] != "object")
          form.value.prices_eng[item.id][pl.id] = {}

        form.value.prices_eng[item.id][pl.id][t.id] = t.value_eng
      })
    })

    prices.value.push(item)
  })
}

onMounted(() => {
  setTimeout(() => {
    getCats()
    getPrices()
  }, 200)
})
</script>