<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="flex items-center justify-between text-primary">
    <AtomsLanguageSelector />
    <div >
     <NuxtLink
        :to="localePath('/')"
        class="text-sm font-display text-primary hover:text-primary/50 cursor-pointer lowercase"
      >
        {{ t("common.logo") }}
      </NuxtLink>
    </div>
    <div class="flex items-center space-x-4">
      
      <NuxtLink
        :to="localePath('/about')"
        class="text-sm font-sans font-light text-primary hover:text-primary/50 cursor-pointer uppercase"
      >
        {{ t("about.title") }}
      </NuxtLink>
    </div>
  </div>
</template>