<template>
  <section id="about" class="relative overflow-hidden">
    <article class="max-w-6xl min-h-screen mx-auto px-4 sm:px-8 py-14 md:py-20 flex flex-col-reverse lg:flex-row items-center">
      <div class="w-full lg:w-2/3 text-center lg:text-left">
        <div class="flex flex-col sm:justify-around mb-6">
          <hgroup data-aos="fade-up" data-aos-delay="500" class="mb-12">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Hello, I'am 
              <span class="text-red-400">
                Azel
              </span>
              
              <span class="animate-wave">👋</span>
            </h1>
            <h2 class="text-gray-900 text-lg font-semibold sm:text-2xl mb-2">
              Web Developer
            </h2>
            <p class="text-base sm:text-lg text-gray-900 mb-4">
              I build responsive, user-friendly web applications using 
              <span class="text-red-400">Nuxt.js</span> and <span class="text-red-400">Vue.js</span>.
              I'm currently exploring <span class="text-red-400">Next.js</span> and <span class="text-red-400">React.js</span> to expand my skills.
              I also enjoy helping and giving back to the community by sharing knowledge and supporting others in tech. 
            </p>
          </hgroup>
          <div 
            data-aos="fade-up" data-aos-delay="1000"
            class="mb-4 flex flex-col items-center lg:items-start"
          >
            <p class="uppercase text-base font-bold mb-2">Find me on:</p>
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
          </div>
        </div>
      </div>
      <figure class="w-full lg:w-1/3" data-aos="zoom-in-up" data-aos-delay="700">
        <div class="relative w-full max-w-md mx-auto mb-16">
          <div class="overflow-hidden border-8 border-white rounded-[50%_40%_30%_80%/60%_50%_40%_70%] relative z-10 shadow-2xl bg-red-200">
            <img 
              src="https://res.cloudinary.com/dytehra8d/image/upload/f_auto,q_auto/v1756534922/portfolio/assets/character-blank-cropped_gxj91e.png" 
              alt="Character" 
              class="mx-auto relative z-10 w-full max-w-xs md:max-w-sm object-cover" 
            />
          </div>
        </div>
      </figure>
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