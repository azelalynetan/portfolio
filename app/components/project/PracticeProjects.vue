<template>
  <div>
    <article class="mb-8">
      <header class="text-center sm:text-left">
        <h2 class="text-xl text-gray-700 font-bold mb-2">Fun Projects ✨</h2>
        <p class="text-gray-700">Fun little projects and code snippets I’ve built from challenges and ideas — mostly from Frontend Mentor, all for practice and learning.</p>
      </header>
    </article>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <li v-for="(item, index) in projects" :key={index} class="group relative">
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
            <div class="bg-red-200 rounded-lg shadow-md p-6 min-h-48 flex flex-col justify-between">
              <header>
                <h3 class="text-xl font-bold text-gray-800">
                  {{ item.title }} 
                </h3>
              </header>
              <div>
                <div class="flex flex-col md:flex-row gap-3 mb-2">
                  <a
                    href="/blogs#activities"
                    class="bg-red-400 hover:bg-red-300 text-white px-4 py-1 rounded-md text-center
                    transition shadow-lg flex justify-center items-center gap-2"
                  >Visit Live Site <Icon name="cuida:open-in-new-tab-outline" class="w-2.5" /></a>
                  <a 
                    href="/blogs#posts"
                    class="bg-white border border-red-400 text-red-400 hover:bg-red-100 px-4 py-1 rounded-md
                    text-center transition flex justify-center items-center gap-2"
                  >View Code <Icon name="cuida:open-in-new-tab-outline" class="w-2.5" /></a>
                </div>
                <ul class="flex flex-wrap gap-2 mb-2">
                    <li v-for="tag in item.tags" :key="tag">
                      <span class="bg-white text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                        {{ tag }}
                      </span>
                    </li>
                </ul>
              </div>
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
    title: "My Portfolio Site using Nuxt.js 4",
    image: "https://res.cloudinary.com/dytehra8d/image/upload/c_fill,q_auto,w_600/v1756542261/portfolio/projects/Portfolio_jnrthf.png",
    live: "",
    code: "",
    tags: ["Nuxt.js", "Tailwind CSS"]
  }, 
  {
    title: "[Practice] Simple CSS Animation using Square Shapes",
    image: "https://res.cloudinary.com/inbytes/image/upload/c_fill,q_auto,w_600/v1707460147/dev/azelalynetan/highlights/CSS%20Animation%2011ve.gif",
    live: "https://devbits.ph/azelalynetan/highlights/created-a-simple-css-animation-using-square-da4o",
    code: "https://codepen.io/azelalynetan/pen/XWGPdyg",
    tags: ["CSS", "Animation"]
  }, 
  {
    title: "[Frontend Mentor] Responsive Social proof section using CSS Grid and Flexbox",
    image: "https://raw.githubusercontent.com/azelalynetan/azel.frontend-mentor--social-proof-section/master/screenshots/screenshot-mobile.png",
    live: "https://azelalynetan.github.io/azel-frontend-mentor--3-column-preview-card/",
    code: "https://github.com/azelalynetan/azel-frontend-mentor--3-column-preview-card",
    tags: ["Semantic HTML5", "CSS", "Responsive"]
  }, 
  {
    title: "[Frontend Mentor] Responsive Four Card Feature section using CSS Grid",
    image: "https://raw.githubusercontent.com/azelalynetan/azel.frontend-mentor--four-card-feature-section/master/assets/images/screenshot.png",
    live: "https://azelalynetan.github.io/azel-frontend-mentor--3-column-preview-card/",
    code: "https://github.com/azelalynetan/azel.frontend-mentor--four-card-feature-section",
    tags: ["Semantic HTML5", "CSS", "Responsive"]
  }, 
  {
    title: "[Frontend Mentor] Simple QR Code Component",
    image: "https://raw.githubusercontent.com/azelalynetan/azel.frontend-mentor--qr-code-component/master/images/screenshot.png",
    live: "https://azelalynetan.github.io/azel.frontend-mentor--qr-code-component/",
    code: "https://github.com/azelalynetan/azel-frontend-mentor--3-column-preview-card",
    tags: ["HTML5", "CSS", "Responsive"]
  }, 
  {
    title: "[Frontend Mentor] Responsive 3 Column Preview Card Component",
    image: "https://raw.githubusercontent.com/azelalynetan/azel-frontend-mentor--3-column-preview-card/refs/heads/main/screenshot.png",
    live: "https://azelalynetan.github.io/azel-frontend-mentor--3-column-preview-card/",
    code: "https://github.com/azelalynetan/azel-frontend-mentor--3-column-preview-card",
    tags: ["HTML5", "CSS", "Responsive"]
  }, 
]
</script>