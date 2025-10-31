<template>
  <section id="activities" class="mb-24">
    <article class="mb-6">
      <header class="text-center sm:text-left">
        <h2 class="text-xl text-gray-700 font-bold mb-2">My activities ✨</h2>
        <p class="text-gray-700">Stories and experiences from my tech journey — the things I do outside of code.</p>
      </header>
    </article>
    <article>
      <ul class="flex flex-col gap-4">
        <li v-for="(item, index) in posts" :key="index"
          class="border border-gray-200 bg-gray-200 p-6 rounded-md shadow-m hover:shadow-xl group"
        >
          <article class="text-gray-700 group-hover:text-gray-900">
            <component 
              :is="item.link ? 'a' : 'div'"  
              :href="item.link || undefined" target="_blank" rel="noopener noreferrer"
            >
              <div class="text-xs text-500">
                <span>{{item.date}}</span>
              </div>
              <h3 class="font-semibold text-md mb-1">
                {{ item.title }}
              </h3>
              <div class="flex flex-col sm:flex-row sm:gap-2 text-sm">
                <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in item.tags" :key="tag"
                    class="rounded-md px-2 py-1 border border-gray-500 bg-gray-200 text-xs"
                  >{{ tag }}</span>
                </div>
              </div>
            </component>
          </article>
        </li>
      </ul>
    </article>
  </section>
</template>
<script setup>

const posts = [
  {
    title: "Co-organized Women Who Code in the Dark 2023",
    date: "Aug 12, 2023",
    tags: ["Organizer", "Competition"],
    link: "https://devbits.ph/azelalynetan/highlights/coorganized-women-who-code-in-the-dark-jc1m"
  }, 
  {
    title: "Co-organized Blogging 101 for Seniors 2019",
    date: "Sep 14, 2019",
    tags: ["Organizer", "Speaker"],
    link: ""
  },
  {
    title: "Voluteered at WWCode CONNECT Asia 2019",
    date: "Aug 31, 2019",
    tags: ["Volunteer"],
    link: ""
  },
  {
    title: "Guest Speaker at Her World; 2019",
    date: "Apr 27, 2019",
    tags: ["Speaker"],
    link: ""
  },
  {
    title: "Volunteered at PyCon APAC 2019",
    date: "Feb 23, 2019",
    tags: ["Conference", "Volunteer"],
    link: ""
  },
  {
    title: "Joined Accenture Develop Her: An All-Female Innovation Challenge 2018",
    date: "Sep 29, 2018",
    tags: ["Hackathon", "Participant"],
    link: ""
  },
  {
    title: "Workshop Speaker - WordCamp Manila 2018",
    date: "Sep 8, 2018",
    tags: ["Speaker"],
    link: ""
  },
]
</script>