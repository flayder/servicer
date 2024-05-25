<template>
  <Header isAuth="false"/>
  <bread/>
  <Filter/>
  <SearchAnkets class="mt-[80px]"/>
  <Info/>
  <About/>
  <Category/>
  <Footer class="mt-[60px]" />
</template>
<script setup lang="ts">
import Header from "~/components/Header/Header.vue";
import Bread from "~/components/bread.vue";
import Filter from "~/components/Filter.vue";
import Category from "~/components/Category.vue";
import SearchAnkets from "~/components/SearchAnkets.vue";
</script>
