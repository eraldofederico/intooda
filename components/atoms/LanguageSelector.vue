<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useSwitchLocalePath } from "#i18n";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  locales.value.map((i) => ({ code: i.code, name: i.name }))
);

// open/closed state
const isOpen = ref(false);

// toggle on button click
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// close when you choose
function selectLocale(code: string) {
  isOpen.value = false;
}
</script>

<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      type="button"
      class="inline-flex items-center gap-x-1 text-sm font-sans text-primary hover:text-primary/50 cursor-pointer"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="sr-only">Choose language</span>
      <span class="uppercase">{{ locale }}</span>
      <Icon name="icon:down" class="h-5 w-5" aria-hidden="true" />
    </button>

    <!-- only render when isOpen is true -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 origin-top-left z-10 mt-2 w-40 bg-white ring-1 ring-secondary rounded-2xl ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
    >
      <div class="py-1">
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="block px-4 py-2 text-sm text-primary hover:text-primary/50"
          role="menuitem"
          @click="selectLocale(loc.code)"
        >
          {{ loc.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
