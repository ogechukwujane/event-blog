<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "Events in Minutes",
  description:
    "Our Ideas Hub, where we share trends and inspiration for unforgettable events.",
  ogTitle: "Events in Minutes",
  ogDescription:
    "Our Ideas Hub, where we share trends and inspiration for unforgettable events.",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Events in Minutes",
  twitterDescription:
    "[Our Ideas Hub, where we share trends and inspiration for unforgettable events.",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
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
