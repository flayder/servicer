<template class="overflow-x-hidden">
  <Header isAuth="false"/>
  <PopulGirl/>
  <Ankets/>
  <Banner/>
  <NewAnkets class="mt-[60px]"/>
  <Salons/>
  <MassajAnkets/>
  <About/>
  <Category/>
  <Footer class="mt-[60px]" />
</template>
<script setup lang="ts">
import Header from "~/components/Header/Header.vue";
import RedButton from "~/components/UI/RedButton.vue";
import SmallRedButton from "~/components/UI/SmallRedButton.vue";
import SmallCard from "~/components/smallCard.vue";
import GrayBtn from "~/components/UI/GrayBtn.vue";
import Ankets from "~/components/Ankets.vue";
import Banner from "~/components/banner.vue";
import Category from "~/components/Category.vue";
</script>
