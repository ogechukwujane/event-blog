<template>
  <div class="wrapper">
    <div class="header">
      <h3 class="title">Top Trends in Corporate Event Design and Engagement</h3>
      <p class="date">08.08.2021</p>
    </div>
    <div class="imageWrap">
      <img src="public/images/logo.svg" alt="img" class="bgImage" />
    </div>
    <div class="content">
      <p class="paragraph">
        Progressively incentivize cooperative systems through technically sound
        functionalities. Credibly productivate seamless data with flexible
        functionalities. Credibly productivate seamless data with flexible
        schemas.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.375rem;
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
  color: #222222;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}
.date {
  font-size: 1rem;
  line-height: 140%;
  font-weight: 400;
  color: #222222b2;
}
.imageWrap {
  width: 100%;
  height: 25.813rem;
  position: relative;
  background: #6c757d;
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
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
