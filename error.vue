<template>
  <div class="flex items-center justify-center h-screen bg-background">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div class="flex items-center justify-center">
          <AtomsGenie class="w-24 md:w-56" />
        </div>

        <div class="text-center md:text-start">
          <h1
            class="font-display text-4xl md:text-6xl lg:text-8xl uppercase mb-4"
          >
            {{ error.statusCode }}
          </h1>
          <p class="text-lg md:text-xl font-light uppercase mb-8">
            {{ error.statusMessage || "Something went wrong" }}
          </p>
          <AtomsButton to="/" variant="primary" i18nKey="buttons.backToRoot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
