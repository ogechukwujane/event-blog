<template>
  <main class="wrapper">
    <div class="content container mx-auto px-4 md:px-12 xl:px-0">
      <div class="flexbox">
        <img src="public/images/logo.svg" alt="logo" class="logo" />
        <div class="phoneWrap">
          <img src="public/images/phone.svg" alt="phone" class="phone" />
          <NuxtLink to="#">
            <p class="phoneText">+1 (628) 587-3235</p></NuxtLink
          >
        </div>
      </div>
      <div class="flexbox">
        <p class="subText">Top Vendors, Apply Now!</p>
        <div class="iconFlex">
          <img
            src="public/images/hambuger.svg"
            alt="menu"
            class="cursor-pointer"
          />
          <img
            src="public/images/profile.svg"
            alt="profile"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  height: 5.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px 0 #0c0c0d1a;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexbox {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.logo {
  width: 6.688rem;
  height: 3.125rem;
}
.phoneWrap {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  @media (max-width: 768px) {
    display: none;
  }
}
.phone {
  width: 1.25rem;
  height: 1.25rem;
}
.phoneText {
  font-size: 0.875rem;
  line-height: 140%;
}
.subText {
  font-size: 0.875rem;
  line-height: 140%;
  font-weight: 600;
  @media (max-width: 768px) {
    display: none;
  }
}
.iconFlex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: #296bff0d;
  width: 6.25rem;
  height: 2.75rem;
  border-radius: 2.5rem;
}
</style>
