<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'AppPage'
})

onMounted(() => {
   useNuxtApp().$aos().init()
  window.onresize = function () {
    useNuxtApp().$aos().refresh()
  }
})

useHead({
  title: 'Portfolio - Azel Alyne Tan | Web Developer',
  meta: [
    { name: 'description', content: "A web developer based in the Philippines 🇵🇭, passionate about creating modern and accessible websites." }
  ],
})
</script>