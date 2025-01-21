<template>
  <div class="container mx-auto px-4 md:px-12 xl:px-0 py-8">
    <HeroCard />
    <div class="grid">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    <Button />
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
