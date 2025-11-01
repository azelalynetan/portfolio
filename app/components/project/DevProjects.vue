<template>
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <li v-for="(item, index) in projects" :key={index} class="group relative mb-2">
        <article 
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all
          duration-300 h-full"
        >
          <figure class="relative h-80 overflow-hidden">
            <img 
              :src="item.image"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />  
            <span 
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              aria-hidden="true"
            >
            </span>
          </figure>
          <div class="p-4 sm:p-6 relative -mt-10">
            <div class="bg-red-200 rounded-lg shadow-md p-6 min-h-56 lg:min-h-52 flex flex-col justify-between">
              <header>
                <a :href="item.link" class="text-xl font-bold text-gray-800 hover:text-gray-600 flex flex-col justify-center" target="_blank">
                  <h3>
                    {{ item.title }} 
                    <Icon name="cuida:open-in-new-tab-outline" class="text-lg" />
                  </h3>
                </a>
                
              </header>
              <p class="text-gray-600 mb-4">
                {{ item.description }}
              </p>
              <ul class="flex flex-wrap gap-2 mb-2">
                  <li v-for="tag in item.tags" :key="tag">
                    <span class="bg-white text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                      {{ tag }}
                    </span>
                  </li>
              </ul>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<script setup>
const projects = [
  {
    title: "Devbits.ph",
    link: "https://devbits.ph/",
    image: "https://res.cloudinary.com/dytehra8d/image/upload/v1756542261/portfolio/projects/devbits_pmswyt.png",
    description: "A full-stack web application built with Nuxt.js, Tailwind CSS, SCSS, Pinia, and Supabase for the backend.",
    tags: ["Nuxt.js", "Supabase", "Pinia", "Tailwind CSS"]
  },
  {
    title: "Dev Break",
    link: "https://haveabreak.dev/",
    image: "https://res.cloudinary.com/dytehra8d/image/upload/v1756542262/portfolio/projects/devbreak_yqiolz.png",
    description: "A lightweight website developed with Nuxt.js and Tailwind CSS, integrated with Airtable API to handle form submissions.",
    tags: ["Nuxt.js", "Airtable API", "Tailwind CSS"]
  }
]
</script>