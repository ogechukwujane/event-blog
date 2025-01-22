<template>
  <div class="wrapper">
    <div class="header">
      <h3 class="title">{{ data.title }}</h3>
      <p class="date">{{ convertDay(data.createdAt) }}</p>
    </div>
    <div class="imageWrap">
      <img
        :src="data.image || '/images/logo.svg'"
        alt="img"
        class="bgImage"
        loading="lazy"
      />
    </div>
    <div class="content">
      <p class="paragraph">
        {{ data.description }}
      </p>
      <p class="paragraph">
        {{ data.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data, pending, error, refresh } = await useFetch(
  `${useRuntimeConfig().public.baseUrl}/post/${route.params.id}`
);
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
}
.header {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  @media (max-width: 768px) {
    width: 90%;
  }
}
.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 140%;
  color: var(--primary-color-900);
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}
.date {
  font-size: 1rem;
  line-height: 140%;
  font-weight: 400;
  color: var(--primary-color-800);
}
.imageWrap {
  width: 80%;
  height: 35rem;
  position: relative;
  background: var(--color-gray-900);
  @media (max-width: 1024px) {
    height: 25.813rem;
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 18.75rem;
  }
}
.bgImage {
  width: 100%;
  height: 100%;
}
.content {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
