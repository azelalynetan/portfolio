<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-14 md:py-20">
    <section>
      <header class="text-center sm:text-left mb-12">
        <h1 class="text-gray-700 font-bold text-3xl mb-4">
          My <span class="text-red-400">Blogs</span> ✍️
        </h1>
        <p class="text-gray-700 text-lg mb-2">
          Welcome to my little corner on the web — a space where I share my learnings, insights, and keeping track of my journey.
        </p>
        <p class="italic text-gray-500 text-sm">
          You can find my posts on my 
          <a 
            href="https://devbits.ph/azelalynetan" target="_blank" rel="noopener noreferrer"
            class="text-red-400"
          >Devbits profile</a>.
        </p>
      </header>
    </section>
    <BlogMyTechPosts />
    <BlogMyActivities />
  </div>
</template>
<script setup>
useSeoMeta({
  title: "AT | Azel's Blogs",
  ogTitle: "AT | Azel's Blogs",
  description: "A space where I share my learnings, insights, and keeping track of my journey.",
  ogDescription: "A space where I share my learnings, insights, and keeping track of my journey.",
  ogImage: 'https://res.cloudinary.com/dytehra8d/image/upload/c_fill,q_auto,w_600/v1756542261/portfolio/projects/Portfolio_jnrthf.png',
  twitterCard: 'summary_large_image',
})
</script>