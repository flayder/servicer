<script setup>
const form = ref({
  avatar: '',
})

</script>

<template>
  <div class="pt-7 laptop:pt-10 pl-0 laptop:pl-[99px] pb-[52px]">    
    <ProfileTitleWrap @openSidebar="$emit('openSidebar')" class="laptop:mb-3">Добавить анкету</ProfileTitleWrap>
    <p class="text-16 laptop:text-18 text-gray300  tracking-tighter font-medium">
      От того, как Вы составили анкету, во многом зависит, откроют 
      ли её пользователи.
    </p>

    <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
    </div>

  
    <div class="flex flex-col-reverse  laptop:flex-row laptop:gap-40">
      <div class="flex flex-col laptop:max-w-[306px] shrink-0 max-w-full laptop:pb-[78px] pb-[10px]">

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3">Загрузка фото</h4>
          <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
            Перенесите фото на первое место, чтобы сделать его главным. <br>
            Фото до 25Mb формата png, jpeg, jpg, webp <br>
            Лимит по количеству фотографий 30 шт.
            <br><br>
            Порядок обновления фотографий анкеты: Удалить старые -> Сохранить -> Загрузить новые -> Сохранить
          </p>
          <UiFile
            item="square"
            class=""
            accept="image/*"
            :multiple="true"
            background-color=""
            color="rgb(20, 21, 26)"
            v-model="form.avatar"
          > 
          </UiFile>
        </div>
        
        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3">Проверочное видео</h4>
          <p class="text-12 text-gray300 font-medium mb-4 laptop:mb-[14px]">
            Загрузите видео для анкеты. Минимальный хронометраж ролика - 10 секунд. <br><br>
            Размер файла до 200Mb. <br><br>
            Проверочное видео не публикуется в общий доступ, оно нужно исключительно для проверки анкеты на соответствие заявленным фото, видит его только модератор.
          </p>
          <UiFile
            item="square"
            class=""
            accept="video/*"
            background-color=""
            color="rgb(20, 21, 26)"
            v-model="form.video"
          >
            <img src="/svg/plus-big.svg" alt="">   
          </UiFile>
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">Общее</h4>
          <ProfileFormSectionGeneral class="hidden laptop:block" />
          
          <div class="laptop:hidden">
            <ui-accordion
              item="large"
              header="Общее"
            >
              <ProfileFormSectionGeneral />
            </ui-accordion>
          </div>

        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">Общее #2</h4>
          <ProfileFormSectionAppearence class="hidden laptop:block" />
          <div class="laptop:hidden">
            <ui-accordion
              item="large"
              header="Общее #2"
            >
              <ProfileFormSectionAppearence />
            </ui-accordion>
          </div>
        </div>

        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">Заголовок</h4>
          <ProfileFormSectionFriends class="hidden laptop:block" />
          <div class="laptop:hidden">
            <ui-accordion 
              item="large"
              header="Заголовок"
            >
              <ProfileFormSectionFriends />
            </ui-accordion>
          </div>
        </div>
        
        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">География</h4>
          <ProfileFormSectionGeography class="hidden laptop:block" />  
          <div class="laptop:hidden">
            <ui-accordion 
              item="large"
              header="География"
            >
              <ProfileFormSectionGeography />  
            </ui-accordion>
          </div>

        </div>
        
        <div class="pb-7 border-b border-gray mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-1 hidden laptop:block">Расценки</h4>
          <p class="text-12 text-gray300 font-medium bm-4 laptop:mb-[18px] hidden laptop:block">
            Описание
          </p>
          <ProfileFormSectionPrices class="hidden laptop:block" />
          <div class="laptop:hidden">
            <ui-accordion 
              item="large"
              header="Расценки"
            >
              <ProfileFormSectionPrices />
            </ui-accordion>
          </div>


        </div>

        <div class="mb-[28px] laptop:mb-6">
          <h4 class="text-30 font-semibold mb-4 laptop:mb-3 hidden laptop:block">Информация для иностранцев</h4>
          <ProfileFormSectionForeignPrices class="hidden laptop:block" />
          <div class="laptop:hidden">
            <ui-accordion
              item="large"
              header="Информация для иностранцев"
            >
              <ProfileFormSectionForeignPrices />
            </ui-accordion>
          </div>
        </div>
        
        <ui-button
          class="h-12"
          type="submit"
          item="large"
        >
          Создать
        </ui-button>
      

      </div>
      <div class="flex flex-col">  
        <h2 class="text-24 mb-2 font-semibold tracking-[-1.4%] laptop:text-20 laptop:font-semibold laptop:tracking-[-1.2%]">
          Предпочтения
        </h2>
        <div class="grid grid-cols-2 gap-x-2.5 gap-y-7 mb-5 pb-7 border-b border-gray mb-[28px] laptop:mb-6 laptop:hidden">
          <search-services-category-c />
          <search-services-category-e />
          <search-services-category-a />
          <search-services-category-b />
          <search-services-category-f />
          <search-services-category-d />
        </div>
        <div class="hidden laptop:flex flex-col gap-2.5 mb-5">
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




  </div>
</template>