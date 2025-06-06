<template>
  <div class="bg-background fixed inset-0 overflow-y-auto">
    <div class="flex flex-col min-h-screen no-scrollbar overflow-y-scroll mx-auto max-w-screen-xl p-6 md:p-10">
      
      <OrganismsHeader />
      
      <div class="flex flex-col flex-1 w-full justify-start">
        <div class="mt-[7.5vh]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>