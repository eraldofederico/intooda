<template>
  <section class="flex flex-col lg:flex-row gap-8">
    <!-- ─── LEFT COLUMN: Red circle + headline + paragraph ─────────── -->
    <div class="lg:w-1/2 flex flex-col items-start">
      <AtomsGenie class="w-28 aspect-square mb-12 self-center md:self-start" />

      <!-- Headline -->
      <h1 class="text-3xl font-base font-display">
        {{ t("about.headline") }}
      </h1>

      <!-- Intro paragraph -->
      <p class="text-lg md:text-2xl mt-4 font-sans font-light">
        {{ t("about.description") }}
      </p>
    </div>

    <!-- ─── RIGHT COLUMN: Three FeatureCards ────────────────────────── -->
    <div class="lg:w-1/2 flex flex-col space-y-6">
      <!-- ─ Card #1 ─ -->
      <MoleculesFeatureCard>
        <template #icon>
          <Icon
            name="icon:paper-plane"
            class="h-6 w-6 text-primary"
          />
        </template>
        <template #title>
          {{ t("about.card.0.title") }}
        </template>
        <template #description>
          {{ t("about.card.0.description") }}
        </template>
      </MoleculesFeatureCard>

      <!-- ─ Card #2 ─ -->
      <MoleculesFeatureCard>
        <template #icon>
          <Icon name="icon:hand-coins" class="h-6 w-6 text-primary" />
        </template>
        <template #title>
          {{ t("about.card.1.title") }}
        </template>
        <template #description>
          {{ t("about.card.1.description") }}
        </template>
      </MoleculesFeatureCard>

      <!-- ─ Card #3 ─ -->
      <MoleculesFeatureCard>
        <template #icon>
          <Icon name="icon:globe" class="h-6 w-6 text-primary" />
        </template>
        <template #title>
          {{ t("about.card.2.title") }}
        </template>
        <template #description>
          {{ t("about.card.2.description") }}
        </template>
      </MoleculesFeatureCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useSeoMeta({
  title: t("seo.about.title"),
  ogTitle: t("seo.about.title"),
  description: t("seo.about.description"),
  ogDescription: t("seo.about.description"),
});
</script>
