<template>
  <section id="posts" class="mb-24">
    <article class="mb-6">
      <header class="text-center sm:text-left">
        <h2 class="text-xl text-gray-700 font-bold mb-2">My Tech Posts 💻</h2>
        <p class="text-gray-700">A space where I write and share my learnings as I grow as a developer — one post at a time.</p>
      </header>
    </article>
    <article>
      <ul class="flex flex-col gap-4">
        <li v-for="(item, index) in posts" :key="index"
          class="border border-gray-200 bg-gray-200 p-6 rounded-md shadow-m hover:shadow-xl group"
        >
          <article class="text-gray-700 group-hover:text-gray-900">
            <!-- <a :href="item.link" target="_blank" rel="noopener noreferrer"> -->
              <h3 class="font-semibold text-md">
                {{ item.title }}
              </h3>
              <p class="text-gray-400 group-hover:text-gray-700 text-sm mb-2">{{ item.description }}</p>
              <div class="flex">
                <a
                  :href="item.link" target="_blank" rel="noopener noreferrer"
                  class="bg-red-400 hover:bg-red-300 text-white px-4 py-1 rounded-md text-center
                  transition shadow-lg flex justify-center items-center gap-2"
                >Read <Icon name="cuida:open-in-new-tab-outline" class="w-2.5" /></a>
              </div>
              
            <!-- </a> -->
          </article>
        </li>
      </ul>
    </article>
  </section>
</template>
<script setup>

const posts = [
  {
    title: "Ways to Setup Meta Tags in Nuxt 3",
    description: "Manage your meta data in Nuxt 3",
    link: "https://devbits.ph/azelalynetan/ways-to-setup-meta-tags-in-nuxt-ze2m"
  }, 
  {
    title: "Using Vuelidate and Vuelidate Next in your Vue Project",
    description: "This is a simple guide on how to use Vuelidate in your Vue App. It also covers on how to use Vuelidate for Vue 2 and Vue 3.",
    link: "https://devbits.ph/azelalynetan/using-vuelidate-and-vuelidate-next-in-your-dq5m"
  },
  {
    title: "Lessons learned about JWT and Supabase Authentication",
    description: "Here’s a simple write-up about what did I learned about JWT (JSON Web Tokens), and Supabase Authentication.",
    link: "https://devbits.ph/azelalynetan/lesson-learned-about-supabase-authentication-and-jwt-duwn"
  },
  {
    title: "[Git Basics] Setting up multiple SSH Accounts (Github and Bitbucket) on your computer",
    description: "Simple guide in setting up multiple SSH accounts (Github and Bitbucket) on your computer",
    link: "https://devbits.ph/azelalynetan/git-basics-setting-up-multiple-ssh-accounts-dk5n"
  },
  {
    title: "Sending an email in Nuxt 3 using Brevo",
    description: "How to setup send email in Nuxt 3 using Brevo and short guide in creating webhook in NuxtJS",
    link: "https://devbits.ph/azelalynetan/how-to-setup-brevo-with-nuxtjs-and-dqxm"
  },
  {
    title: "[Javascript Basics] Day 9: Local Storage and Session Storage",
    description: "A simple guide to local storage and session storage.",
    link: "https://devbits.ph/azelalynetan/javascript-basics-day-9-local-storage-and-tiyn"
  },
]
</script>