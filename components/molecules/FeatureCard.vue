<template>
  <div class="border border-secondary rounded-lg p-4 md:p-6 bg-white">
    <div class="mb-4 flex items-center space-x-4">
      <div class="flex w-10 aspect-square items-center justify-center border border-secondary rounded-xl">
        <slot name="icon" />
      </div>

      <h2 class="text-xl md:text-2xl font-base font-display">
        <slot name="title" />
      </h2>
    </div>

    <p class="font-light text-lg leading-relaxed">
      <slot name="description" />
    </p>
  </div>
</template>