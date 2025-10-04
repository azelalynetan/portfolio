<template>
  <div>
    <header class="bg-red-300 sticky top-0 z-50">
      <div class="max-w-screen mx-auto px-4 py-4 flex justify-between items-center gap-8">
        <a href="/" class="px-2 md:px-6 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded">
          <h1 class="text-2xl font-bold text-pink-100">AT</h1>
        </a>
        <nav class="hidden md:flex items-center space-x-6" aria-label="Primary Navigation">
          <NuxtLink 
            v-for="(item, index) in navLinks"
            :key="index"
            :href="item.href"
            class="text-gray-900 hover:text-white transition-color duration-200
            focus:outline-none focus:ring-pink-600 focus:rounded"
            activeClass="underline underline-offset-8"
          >{{ item.label }}</NuxtLink>
          <a 
            href="/contact" 
            class="bg-red-400 hover:bg-red-300 text-white px-6 py-2 rounded-full
            transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800
            focus:ring-offset-2"
            aria-label="Work with me"
          >Work with Me</a>
        </nav>
        <button 
          class="md:hidden hover:scale-110 p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="isMenuOpen" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            <path v-else strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div v-if="isMenuOpen" 
        class="absolute top-[72px] right-0 w-full bg-red-300 rounded-[0%_0%_30%_80%/60%_100%_40%_70%] slide-down">
        <aside 
          v-if="isMenuOpen"
          id="mobile-menu"
          class="flex justify-center items-center pt-8 pb-12"
          aria-label="Mobile menu"
        >
          <nav aria-label="Mobile navigation">
            <ul class="flex flex-col space-y-4 text-center">
              <li v-for="(item, index) in navLinks" :key="index">
                <a 
                  :href="item.href"
                  class="block text-white hover:text-gray-900 
                  transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-pink-600
                  focus:rounded"
                  @click="toggleMenu"
                >{{ item.label }}</a>
              </li>
              <li class="mb-8">
                <a 
                  href="/contact" 
                  class="bg-red-400 hover:bg-red-300 text-white px-6 py-2 rounded-full
                  transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800
                  focus:ring-offset-2"
                  aria-label="Work with me"
                >Work with Me</a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  </div>
</template>
<script setup>
const navLinks = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" }
]

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<style scoped>
.slide-down {
  animation: slideDown 0.5s ease-out forwards; 
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translate(0, -100px); 
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>