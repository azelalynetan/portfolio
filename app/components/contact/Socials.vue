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
  </div>
</template>
<script setup>
const socialLinks = [
  { link: "https://github.com/azelalynetan", label: "Github", icon: "uil:github" },
  { link: "https://www.linkedin.com/in/azelalynetan/", label: "Linkedin", icon: "uil:linkedin" },
  { link: "mailto:azelalynetan@gmail.com", label: "Mail", icon: "material-symbols:mail-rounded" }
]
</script>