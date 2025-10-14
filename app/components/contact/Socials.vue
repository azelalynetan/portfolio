<template>
  <div class="flex gap-2.5">
    <a v-for="(item, index) in socialLinks"
      :key="index"
      :href="item.link" 
      :aria-label="item.label" 
      target="_blank" rel="noopener noreferrer" 
      class="text-red-400 hover:text-white hover:bg-red-400 border border-red-400 hover:border-white rounded-md w-14 h-14 text-2xl group flex justify-center items-center"
    >
      <Icon :name="item.icon" class="group-hover:text-4xl" />
    </a>
    <a 
      href="https://devbits.ph/azelalynetan" 
      aria-label="Devbits" 
      target="_blank" rel="noopener noreferrer" 
      class="text-red-400 hover:text-white hover:bg-red-400 border border-red-400 hover:border-white rounded-md w-14 h-14 text-2xl group flex justify-center items-center"
    >
      <img src="~/assets/images/devbits-logo.svg" class="h-6 w-6 group-hover:grayscale group-hover:invert group-hover:brightness-0 group-hover:w-8 group-hover:h-8" />
    </a>
  </div>
</template>
<script setup>
const socialLinks = [
  { link: "https://github.com/azelalynetan", label: "Github", icon: "uil:github" },
  { link: "https://www.linkedin.com/in/azelalynetan/", label: "Linkedin", icon: "uil:linkedin" },
  { link: "mailto:azelalynetan@gmail.com", label: "Mail", icon: "material-symbols:mail-rounded" }
]
</script>