<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-14 md:py-20">
    <section>
      <header class="text-center sm:text-left mb-12">
        <h1 class="text-gray-700 font-bold text-3xl mb-4">
          My <span class="text-red-400">Projects</span> 👩🏻‍💻
        </h1>
        <p class="text-gray-700 text-lg mb-2">
          A little showcase of the projects I've built, both for work and for fun.
        </p>
      </header>
    </section>
    <ProjectDevProjects />
    <ProjectPracticeProjects />
  </div>
</template>
<script setup>
useSeoMeta({
  title: "AT | Azel's Projects",
  ogTitle: "AT | Azel's Projects",
  description: "A little showcase of the projects I've built, both for work and for fun.",
  ogDescription: "A little showcase of the projects I've built, both for work and for fun.",
  ogImage: 'https://res.cloudinary.com/dytehra8d/image/upload/c_fill,q_auto,w_600/v1756542261/portfolio/projects/Portfolio_jnrthf.png',
  twitterCard: 'summary_large_image',
})
</script>