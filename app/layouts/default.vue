<template>
  <div class="relative">
    <NuxtLoadingIndicator />
      <Navbar />
      <div>
        <slot />
      </div>
      <GetInTouch />
      <Footer />
  </div>
</template>