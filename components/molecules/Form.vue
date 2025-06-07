<template>
  <div class="max-w-2xl w-full">
    <!-- ─── SINGLE MERGED FORM FOR NETLIFY ─── -->
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleFormSubmit"
      class="space-y-4"
    >
      <!-- Netlify needs this hidden input to wire the form name -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- ─── ALWAYS-PRESENT HIDDEN "email" FIELD ───────────────────── -->
      <!-- This is how Netlify "knows" there is an email in the form. -->
      <input type="hidden" name="email" :value="email" />

      <!-- ─── HONEYPOT FIELD (invisible to humans) ─────────────── -->
      <p class="hidden">
        <label>
          {{ t("form.honeypotLabel") }}
          <input v-model="botField" name="bot-field" />
        </label>
      </p>

      <!-- ─── STEP 1: Ask a free question ─────────────────────────── -->
      <div v-if="step === 1" class="space-y-4">
        <div class="relative w-full">
          <input
            v-model="question"
            id="question"
            name="question"
            type="text"
            required
            :disabled="isLoading"
            :class="inputClasses"
            :placeholder="t('form.questionPlaceholder')"
          />
          <button
            type="button"
            @click="goToEmailStep"
            :disabled="isLoading"
            :class="submitButtonClasses"
          >
            <Icon name="icon:skip-forward" class="h-5 w-5 text-white" />
          </button>
        </div>

        <!-- Suggestion "chips" -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="key in suggestionKeys"
            :key="key"
            type="button"
            :class="suggestionBtnClasses"
            @click="chooseSuggestion(key)"
            :disabled="isLoading"
          >
            {{ t(`form.suggestions.${key}`) }}
          </button>
        </div>
      </div>

      <!-- ─── STEP 2: Ask for email (still in same form) ─────────── -->
      <div v-else-if="step === 2">

        <div class="relative w-full">
          <input
            v-model="email"
            id="email"
            type="email"
            required
            :disabled="isLoading"
            :class="inputClasses"
            :placeholder="t('form.emailPlaceholder')"
          />
          <button
            type="submit"
            :disabled="isLoading"
            :class="submitButtonClasses"
          >
            <Icon name="icon:skip-forward" class="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      <!-- ─── FINAL STATE: "Set up a call" button (after submit) ─── -->
      <div v-else-if="step === 3" class="flex justify-center py-8"></div>
    </form>
  </div>
</template>

<script setup lang="ts">

/** i18n helper */
const { t } = useI18n();

/** Emits */
const emit = defineEmits(["question-submitted", "form-submitted"]);

/*** REACTIVE STATE ***/
const route = useRoute();
const router = useRouter();

/* 1 = question, 2 = email, 3 = thank-you */
const step = ref<number>(Number(route.query.step) || 1);
const question = ref("");
const email = ref("");
const botField = ref("");
const isLoading = ref(false);

/* Suggestion keys */
const suggestionKeys = ["one", "two", "three"];

/** ─── Shared Tailwind class strings ────────────────────────────── */
const inputClasses =
  "w-full h-10 pr-12 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-accent";
const submitButtonClasses =
  "w-8 aspect-square absolute inset-y-0 right-0 flex items-center justify-center bg-primary hover:bg-secondary rounded-full p-1 m-1 disabled:opacity-50";
const suggestionBtnClasses =
  "px-3 py-1 bg-secondary text-primary text-xs rounded-full hover:bg-secondary/50 disabled:opacity-50";
const finalBtnClasses =
  "px-6 py-1 cursor-pointer bg-primary text-white rounded-full hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-accent";

/** ─── Keep URL ↔ state in sync ─────────────────────────────────── */
watch(step, (s) => {
  router.push({ query: { ...route.query, step: s.toString() } });
});

watch(
  () => route.query.step,
  (qs) => {
    const s = Number(qs) || 1;
    if (s !== step.value) step.value = s;
  }
);

/** ─── STEP 1 helpers ───────────────────────────────────────────── */
function chooseSuggestion(key: string) {
  question.value = t(`form.suggestions.${key}`);
  goToEmailStep();
}

function goToEmailStep() {
  if (!question.value.trim()) return; // empty → stay
  step.value = 2;
  emit("question-submitted");
}

/** ─── FORM SUBMISSION (STEP 2) ─────────────────────────────────── */
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

async function handleFormSubmit() {
  if (botField.value) return; // honeypot
  if (step.value !== 2) return; // only on step 2

  isLoading.value = true;
  
  try {
    // Save to Supabase first
    const { data: supabaseData } = await $fetch('/api/contacts', {
      method: 'POST',
      body: {
        email: email.value,
        question: question.value
      }
    });

    // Then submit to Netlify for backup/compatibility
    const netlifyPayload = {
      "form-name": "contact",
      question: question.value,
      email: email.value,
    };

    const netlifyRes = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(netlifyPayload),
    });

    if (netlifyRes.ok) {
      question.value = "";
      email.value = "";
      emit("form-submitted");

      /* go to thank-you (step 3) and reflect it in the URL */
      step.value = 3;
      router.replace({ query: { ...route.query, step: "3" } });
    } else {
      console.error("Netlify form error:", netlifyRes.statusText);
    }
  } catch (err) {
    console.error('Form submission error:', err);
  } finally {
    isLoading.value = false;
  }
}
</script>