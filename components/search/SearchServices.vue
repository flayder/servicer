<script setup lang="ts">

</script>

<template>
  <section class="pt-7 laptop:pt-10">
    <div class="container">
      <div class="flex flex-col gap-2.5 laptop:gap-2">
        <h2 class="text-24 font-semibold tracking-[-1.4%] laptop:text-20 laptop:font-semibold laptop:tracking-[-1.2%]">
          Sets
        </h2>
        <div class="grid grid-cols-2 gap-x-2.5 gap-y-7 mb-5 laptop:hidden">
          <search-services-category-c />
          <search-services-category-e />
          <search-services-category-a />
          <search-services-category-b />
          <search-services-category-f />
          <search-services-category-d />
        </div>
        <div class="hidden laptop:flex gap-2.5 mb-5">
          <div class="w-[228px] flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 1
              </h4>
              <search-services-category-c-item />
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 2
              </h4>
              <search-services-category-e-item />
            </div>
          </div>
          <div class="w-[228px] flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 4
              </h4>
              <search-services-category-a-item />
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 5
              </h4>
              <search-services-category-b-item />
            </div>
          </div>
          <div class="w-[228px] flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 6
              </h4>
              <search-services-category-f-item />
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-16 font-semibold tracking-[-1%]">
                Set 3
              </h4>
              <search-services-category-d-item />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
