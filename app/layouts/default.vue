<template>
  <div class="relative">
    <NuxtLoadingIndicator />
      <Navbar />
      <div>
        <slot />
      </div>
    <Footer />
  </div>
</template>