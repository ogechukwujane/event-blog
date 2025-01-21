<template>
  <div class="container mx-auto px-4 md:px-12 xl:px-0 py-8">
    <section class="heroSection">
      <div class="textWrap">
        <p class="title">Events in Minutes Ideas</p>
        <p class="paragraph">
          Welcome to our Ideas Hub, where we share tips. trends and inspiration
          for unforgettable events.
        </p>
      </div>
      <HeroCard />
    </section>
    <section class="blogSection">
      <p class="subTitle">Popular Articles</p>
      <div class="grid">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Button :btnText="'More'" />
    </section>
  </div>
</template>

<style scoped>
.heroSection {
  border-bottom: 1px solid #6a6a6a33;
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
  color: #222222;
}
.paragraph {
  font-size: 1.25rem;
  line-height: 28px;
  font-weight: 400;
  color: #222222b2;
}
.subTitle {
  font-size: 1.5rem;
  line-height: 33.6px;
  font-weight: 700;
  color: #222222;
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
