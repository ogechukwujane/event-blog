<template>
  <h1 v-if="errorMessage" class="py-[24%] px-8 text-[20px] text-center">
    {{ errorMessage }}
  </h1>
  <div v-else class="container mx-auto px-4 md:px-12 xl:px-0 py-8">
    <section class="heroSection">
      <div class="textWrap" v-if="blogs.length > 0">
        <p class="title">Events in Minutes Ideas</p>
        <p class="paragraph">
          Welcome to our Ideas Hub, where we share tips. trends and inspiration
          for unforgettable events.
        </p>
      </div>
      <HeroCard :blog="blogs[0]" />
    </section>
    <section class="blogSection">
      <p class="subTitle">Popular Articles</p>
      <div class="grid">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
      <Button
        :btnText="isLoading ? 'Loading...' : 'More'"
        :onClick="loadMore"
        :loading="isLoading"
      />
    </section>
  </div>
</template>

<script setup>
const currentPage = ref(1);
const blogs = ref([]);
const isLoading = ref(false);
const errorMessage = ref(null);
const loader = ref(false);

const fetchBlogs = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  const { data, error } = await useFetch(
    `${useRuntimeConfig().public.baseUrl}/post?page=${
      currentPage.value
    }&limit=12`,
    {
      server: true,
      static: true,
    }
  );

  if (data.value) {
    isLoading.value = false;
    blogs.value = [...blogs.value, ...data.value];
  }

  if (error.value) {
    isLoading.value = false;
    errorMessage.value = "Failed to fetch posts. Please try again later.";
  }
};

await fetchBlogs();

const loadMore = async () => {
  if (isLoading.value) return;
  currentPage.value += 1;
  await fetchBlogs();
};
</script>

<style scoped>
.heroSection {
  border-bottom: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  padding: 1.875rem 0px 5rem 0px;
}
.textWrap {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.title {
  font-size: 3rem;
  line-height: 67.2px;
  font-weight: 700;
  color: var(--primary-color-900);
}
.paragraph {
  font-size: 1.25rem;
  line-height: 28px;
  font-weight: 400;
  color: var(--primary-color-800);
}
.subTitle {
  font-size: 1.5rem;
  line-height: 33.6px;
  font-weight: 700;
  color: var(--primary-color-900);
}
.blogSection {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 5rem 0px 2rem 0px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
