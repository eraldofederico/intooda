<script setup lang="ts">
import { computed } from "vue";
import { NuxtLink } from "#components";

const props = defineProps<{
  i18nKey?: string;
  iconName?: string;
  text?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}>();

const { t } = useI18n();

const label = computed(() =>
  props.i18nKey ? t(props.i18nKey) : props.text ?? ""
);

function handleClick() {
  props.onClick?.();
}

// Base Tailwind classes
const baseClasses = [
  "py-1",
  "px-3",
  "text-sm",
  "font-mono",
  "font-light",
  "rounded-full",
  "focus:outline-none",
  "focus:ring-1",
  "focus:ring-white",
  "color:focus:ring-black",
  "concrete:focus:ring-white",
  "focus:z-10",
  "cursor-pointer",
  "uppercase",
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-1",
  "w-fit",
].join(" ");

// Variant-specific Tailwind classes
const variantMap: Record<"primary" | "secondary" | "ghost", string> = {
  primary: "bg-charcoal text-offwhite focus:ring-none",
  secondary:
    "bg-concrete-200 text-concrete-800 focus:ring-none hover:bg-concrete-300",
  ghost: "bg-transparent text-charcoal focus:ring-none",
};

// Compute final class string
const classes = computed(() => {
  const v = props.variant ?? "primary";
  return [baseClasses, variantMap[v]].join(" ");
});
</script>

<template>
  <component
    :is="props.to ? NuxtLink : 'button'"
    :to="props.to"
    type="button"
    @click="handleClick"
    :class="classes"
  >
    <Icon
      v-if="props.iconName"
      :name="props.iconName"
      class="w-4 h-4"
      aria-hidden="true"
    />
    <slot>{{ label }}</slot>
  </component>
</template>
