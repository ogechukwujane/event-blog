<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: "Events in Minutes",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Inter";
}
</style>
