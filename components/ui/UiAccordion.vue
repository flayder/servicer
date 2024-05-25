<script setup>
defineProps({
  header: '',
	item: 'large',
  src: '',
  name: '',
  absolute: false
})
</script>

<template>
  <Accordion
    v-if="item === 'extra-large'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :header="header"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center' : 'flex flex-row-reverse items-center' }), headerTitle: { class: 'text-30 font-semibold tracking-[-1.4%] font-sans text-black100' }, header: { class: 'p-0 flex' }, content: { class: 'font-sans text-black100 pt-2' } }"
    >
      <slot />
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="28"
          height="28"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>
  <Accordion
    v-if="item === 'large'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :header="header"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center' : 'flex flex-row-reverse items-center' }), headerTitle: { class: 'text-24 font-semibold tracking-[-1.4%] font-sans text-black100' }, header: { class: 'p-0 flex' }, content: { class: 'font-sans text-black100 pt-2' } }"
    >
      <slot />
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="28"
          height="28"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>

  <Accordion
    v-if="item === 'small'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :header="header"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center' : 'flex flex-row-reverse items-center' }), headerTitle: { class: 'text-16 font-semibold tracking-[-1%] font-sans text-black100' }, header: { class: 'p-0 flex' }, content: { class: 'font-sans text-black100 pt-2' } }"
    >
      <slot />
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="28"
          height="28"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>

  <Accordion
    v-if="item === 'menuCity'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-black100' : 'flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-black100' }), header: { class: 'py-2.5 px-3 flex border-b border-solid border-gray' }, content: { class: `font-sans text-black100` }, root: { class: 'bg-white' } }"
    >
      <slot />
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img v-if="src && src !== 'null'"
              :src="src"
              width="20"
              height="20"
            />
            <span>{{ name }}</span>
          </div>
        </div>
      </template>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="20"
          height="20"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>

  <Accordion
    v-if="item === 'headerItem'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-1 text-12 font-medium tracking-[-0.5%] font-sans text-black100' : 'flex flex-row-reverse items-center gap-1 text-12 font-medium tracking-[-0.5%] font-sans text-black100' }), header: { class: 'py-2.5 flex ' }, content: { class: `shadow bg-white grid grid-cols-3 absolute z-10 font-sans text-black100` }, root: { class: 'bg-white' } }"
    >
      <slot />
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img
              :src="src"
              width="16"
              height="16"
            />
            <span>{{ name }}</span>
          </div>
        </div>
      </template>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="16"
          height="16"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>

  <Accordion
    v-if="item === 'menuMetro'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-black100' : 'flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-black100' }), header: { class: 'py-2.5 px-3 flex' }, content: { class: 'font-sans text-black100' }, root: { class: 'bg-white' } }"
    >
      <slot />
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img
              :src="src"
              width="20"
              height="20"
            />
            <span>{{ name }}</span>
          </div>
        </div>
      </template>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="20"
          height="20"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>


  <Accordion
    v-if="item === 'menuMetroAbsolute'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-1 text-12 font-medium tracking-[-0.5%] font-sans text-black100' : 'flex flex-row-reverse items-center gap-1 text-12 font-medium tracking-[-0.5%] font-sans text-black100' }), header: { class: 'py-2.5 flex' }, content: { class: 'font-sans text-black100 z-10 absolute' }, root: { class: 'bg-white' } }"
    >
      <slot />
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img
              :src="src"
              width="16"
              height="16"
            />
            <span>{{ name }}</span>
          </div>
        </div>
      </template>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="16"
          height="16"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>

  <Accordion
    v-if="item === 'menu'"
    :item="item"
    unstyled
  >
    <AccordionTab
      :header="header"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-gray300' : 'flex flex-row-reverse items-center gap-1 text-14 font-medium tracking-[-0.5%] font-sans text-gray300' }), header: { class: 'py-2.5 px-4 flex border-b border-solid border-gray' }, content: { class: 'font-sans text-black100' }, root: { class: 'bg-white' } }"
    >
      <slot />
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          width="20"
          height="20"
          class="icon"
        />
      </template>
    </AccordionTab>
  </Accordion>
</template>

<style scoped>
.active .icon {
  transform: rotate(180deg);
}
</style>
