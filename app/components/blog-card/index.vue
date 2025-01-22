<template>
  <div class="cardWrapper" @click="handleCardClick(blog)">
    <div class="imageWrap">
      <span>{{ blog.category}}</span>
      <img
        :src="blog.image || '/images/logo.svg'"
        alt="img"
        class="bgImage"
        loading="lazy"
      />
    </div>
    <div class="content">
      <p class="date">{{ convertDay(blog.createdAt) }}</p>
      <h3 class="title">{{ blog.title }}</h3>
      <p class="paragraph">
        {{ blog.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const handleCardClick = (blog) => {
  const postId = blog.id;
  router.push(`/post/${postId}`);
};
</script>

<style scoped>
.cardWrapper {
  display: flex;
  flex-direction: column;
  width: calc(33% - 13px);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    width: calc(50% - 13px);
  }
  @media (max-width: 500px) {
    width: 100%;
  }
}
.imageWrap {
  width: 100%;
  height: 17.5rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #6c757d;
}
.bgImage {
  width: 100%;
  height: 100%;
  position: absolute;
}
span {
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 8px;
  background: #00000025;
  backdrop-filter: blur(4px);
  position: absolute;
  top: 10px;
  right: 8px;
  z-index: 2;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 8px 0px;
}
.date {
  font-size: 0.75rem;
  line-height: 1.225rem;
  font-weight: 400;
  color: #6c757d;
}
.title {
  font-size: 1rem;
  line-height: 160%;
  font-weight: 600;
  color: #495057;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.paragraph {
  font-size: 0.875rem;
  line-height: 140%;
  font-weight: 400;
  color: #6c757d;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
