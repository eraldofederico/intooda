<template>
  <div
    class="flex flex-col items-center justify-center h-full w-full space-y-6"
  >
    <AtomsGenie class="w-50 aspect-square" />
    <div class="font-display font-base text-3xl text-center">
      {{ t(currentHeadlineKey) }}
    </div>
    <div class="font-sans font-light max-w-lg text-center text-lg md:text-xl">
      {{ t(currentDescriptionKey) }}
    </div>
    <MoleculesForm
      @question-submitted="onQuestionSubmitted"
      @form-submitted="onFormSubmitted"
    />
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n()
const route = useRoute()

// 1. Initialise pageStage from the query‐string on first render
//    If route.query.step is absent or not a number, default to 1.
const pageStage = ref<number>( Number(route.query.step) || 1 )

// 2. Watch the URL’s “step” param. Whenever it changes, update pageStage.
//    This covers clicks, browser-back, or manual URL edits.
watch(
  () => Number(route.query.step) || 1,
  (newStep) => {
    pageStage.value = newStep
  }
)

// 3. Computed keys drive your visible text
const currentHeadlineKey = computed(() => {
  if (pageStage.value === 1) return "home.headline"
  if (pageStage.value === 2) return "success.headline"
  return "success.thankYou"
})
const currentDescriptionKey = computed(() => {
  if (pageStage.value === 1) return "home.description"
  if (pageStage.value === 2) return "success.cta"
  return "success.manageExpectations"
})

// 4. (Optional) You can still listen to child emits, but strictly speaking
//    you no longer need them to keep pageStage in sync.
//    If you do keep them, they simply set pageStage = 2 or 3 immediately,
//    though the watcher would have done that anyway once `step` hit 2 or 3.
function onQuestionSubmitted() {
  pageStage.value = 2
}
function onFormSubmitted() {
  pageStage.value = 3
}
</script>
