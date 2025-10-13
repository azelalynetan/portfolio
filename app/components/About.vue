<template>
  <section id="#about" class="min-h-screen text-center sm:text-left">
    <article class="max-w-6xl mx-auto px-4 sm:px-8 py-14 md:py-20">
      <header class="mb-4" data-aos="fade-up" data-aos-delay="400">
        <h2 class="font-bold text-3xl text-gray-700">
          About <span class="text-red-400">Me</span> 👩🏻‍💻
        </h2>
      </header>
      <div class="text-lg mb-8" data-aos="fade-up" data-aos-delay="600">
        <p class="text-gray-700 mb-4">
          I'm a web developer based in the Philippines 🇵🇭, passionate about creating modern and accessible websites. 
          I mainly work with <span class="text-red-400">Nuxt.js</span> and <span class="text-red-400">Tailwind CSS</span> to build responsive and user-friendly web applications. 
          I'm currently exploring <span class="text-red-400">Next.js</span> and <span class="text-red-400">React.js</span> to expand my skills. I also have some experience working with backend tools like APIs and PostgreSQL (<span class="text-red-400">Supabase</span>) to better understand how everything connects.
        </p>
      </div>
      <article class="mb-8" data-aos="fade-up" data-aos-delay="800">
        <h3 class="text-gray-700 font-bold text-xl mb-4">
          My Tech Stack 🛠
        </h3>
        <div>
          <ul class="flex gap-5 flex-wrap justify-center sm:justify-start">
            <li 
              v-for="skill in skills" 
              class="bg-red-200 hover:bg-red-300 hover:cursor-pointer border border-red-400 rounded-md w-24 h-24 flex justify-center items-center relative group"
            >
              <a href="" class="flex justify-center items-center" :title="skill.label">
                <Icon :name="skill.icon" class="text-4xl" />
              </a>
              <div
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm text-white 
              bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100"
              >
                {{skill.label}}
            </div>
            </li>
          </ul>
        </div>
      </article>
      <article data-aos="fade-up" data-aos-delay="800">
        <h3 class="font-bold text-xl text-gray-700 mb-4">
          My Blog Posts
        </h3>
        <p class="text-base text-gray-700 mb-4">
          Beyond coding, I believe the small details matter — from smooth interactions to layouts that just feel right. 
          I've also been an active volunteer in tech communities, where I loved sharing knowledge and connecting with fellow developers.
        </p>
        <div class="flex flex-col md:flex-row gap-3">
          <NuxtLink
            href="/blog#posts"
            class="bg-slate-600 hover:bg-slate-400 text-white px-8 py-3 rounded-full text-center
            transition shadow-lg"
          >Read my Tech Posts</NuxtLink>
          <NuxtLink 
            href="/blog#activities"
            class="border border-red-400 text-red-400 hover:bg-red-50 px-8 py-3 rounded-full
            text-center transition"
          >View my Activities</NuxtLink>
        </div>
      </article>
    </article>
  </section>
</template>
<script setup>

const skills = [
  {
    label: "HTML5",
    icon: "logos:html-5",
  },
  {
    label: "CSS3",
    icon: "logos:css-3",
  },
  {
    label: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    label: "SASS",
    icon: "logos:sass",
  },
  {
    label: "Javascript",
    icon: "logos:javascript",
  },
  {
    label: "Nuxt.js",
    icon: "logos:nuxt-icon",
  },
  {
    label: "Vue.js",
    icon: "logos:vue",
  },
  {
    label: "Pinia",
    icon: "skill-icons:pinia-light",
  },
  {
    label: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    label: "Supabase",
    icon: "logos:supabase-icon",
  },
  {
    label: "WordPress",
    icon: "logos:wordpress-icon",
  },
  {
    label: "Git",
    icon: "logos:git-icon",
  }
]
</script>