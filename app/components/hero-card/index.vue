<template>
  <div class="cardWrapper">
    <div class="imageWrap">
      <span>CORPORATE EVENTS</span>
      <img src="public/images/logo.svg" alt="img" class="bgImage" />
    </div>
    <div class="content">
      <p class="date">08.08.2021</p>
      <h3 class="title">Top Trends in Corporate Event Design and Engagement</h3>
      <p class="paragraph">
        Progressively incentivize cooperative systems through technically sound
        functionalities. Credibly productivate seamless data with flexible
        functionalities. Credibly productivate seamless data with flexible
        schemas.
      </p>
      <div class="line" />
      <div class="footer">
        <span>Corporate Events</span>
        <button>
          Read <img src="public/images/right-arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardWrapper {
  display: flex;
  align-items: center;
  gap: 1.125rem;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 6px 6px 54px 0px #0000000d;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.375rem;
  }
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
  position: absolute;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  padding: 1.5rem;
  @media (max-width: 600px) {
    gap: 0.875rem;
    padding: 1rem;
  }
}
.date {
  font-size: 0.875rem;
  line-height: 140%;
  font-weight: 400;
  color: #222222b2;
}
.title {
  font-size: 2.063rem;
  font-weight: 500;
  color: #222222;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}
.paragraph {
  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;
  color: #222222b2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  overflow: hidden;
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
}
.line {
  width: 100%;
  height: 1px;
  background: #6a6a6a33;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
span {
  color: #222222b2;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 8px;
  background: #296bff0d;
}
button {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #222222;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  border: none;
}
</style>
