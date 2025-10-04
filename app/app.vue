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
    // setFontSize()
    useNuxtApp().$aos().refresh()
  }
})

useHead({
  title: 'Portfolio - Azel Alyne Tan | Web Developer',
  meta: [
    { name: 'description', content: 'Frontend Developer & active tech community volunteer. Passionate about building responsive websites and helping others grow in tech.' }
  ],
})
</script>