<template>
  <section class="bg-gradient-to-r from-red-100 to-red-200">
    <article class="max-w-6xl mx-auto px-4 sm:px-8 py-14 md:py-20">
      <header class="mb-4">
        <h2 class="font-bold text-3xl mb-4">
          Get in <span class="text-red-400">Touch</span> 💬 
        </h2>
        <p>
          Ready to start a conversation? Drop me a message and I'll get back to you as soon as possible.
        </p>
      </header>
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
    </article>
  </section>
</template>
<script setup>
const socialLinks = [
  { link: "https://github.com/azelalynetan", label: "Github", icon: "uil:github" },
  { link: "https://www.linkedin.com/in/azelalynetan/", label: "Linkedin", icon: "uil:linkedin" },
  { link: "mailto:azelalynetan@gmail.com", label: "Mail", icon: "material-symbols:mail-rounded" }
]
</script>