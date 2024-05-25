<script setup lang="ts">

</script>

<template>
  <div class="auth">
    <TabView
      :pt="{ root: { class: 'bg-transparent laptop:py-2.5 laptop:px-10' }, nav: { class: 'flex bg-gray rounded-xl p-0.5 text-14 font-normal font-sans text-black100 h-11 laptop:text-16 laptop:font-medium' }, panelContainer: { class: 'pt-[30px] pb-0 px-0 bg-transparent font-sans text-black100' }, navContent: { class: 'inline-block' } }"
    >
      <TabPanel
        header="Вход"
        :pt="{ headerAction: { class: 'py-2.5 px-4 rounded-xl bg-transparent font-sans h-10' } }"
      >
        <form-auth-tab-login />
      </TabPanel>
      <TabPanel
        header="Регистрация"
        :pt="{ headerAction: { class: 'py-2.5 px-4 rounded-xl bg-transparent font-sans h-10' } }"
      >
        <form-auth-tab-register />
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.auth .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
	background-color: #fff;
}
</style>
