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
body {
  font-family: "Inter";
}
div,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0px;
  margin: 0px;
}
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Inter";
}
</style>
