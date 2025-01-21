<template>
  <div class="wrapper">
    <div class="footerWrap container mx-auto">
      <div class="content">
        <div class="flexbox">
          <NuxtLink to="#"
            ><img src="public/images/logo.svg" alt="logo" class="logo"
          /></NuxtLink>
          <div class="linkWrap linkText">
            <NuxtLink to="#"><p>About Us</p></NuxtLink>
            <NuxtLink to="#"><p>Corporate Events</p></NuxtLink>
            <NuxtLink to="#"><p>Personal Events</p></NuxtLink>
            <NuxtLink to="#"><p>List Your Service</p></NuxtLink>
            <NuxtLink to="#"><p>How it Works</p></NuxtLink>
          </div>
        </div>
        <div class="flexbox">
          <p class="subTitle">Contacts</p>
          <div class="column">
            <div class="iconFlex">
              <img src="public/images/mail.svg" alt="email" class="icon" />
              <NuxtLink to="#"
                ><p class="linkText">contact@eventsinminutes.com</p></NuxtLink
              >
            </div>
            <div class="iconFlex">
              <img src="public/images/phone.svg" alt="phone" class="icon" />
              <NuxtLink to="#"
                ><p class="linkText">+1 (628) 587-3235</p></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="copyWriteWrap">
        <div class="linkWrap">
          <NuxtLink to="#"> <p class="footerText">Privacy Policy</p></NuxtLink>
          <span />
          <NuxtLink to="#">
            <p class="footerText">Terms & Conditions</p></NuxtLink
          >
        </div>
        <div>
          <p class="footerText">
            2024 - © All rights Reserved - Events In Minutes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: #f9f9f9;
  border-top: 1px solid #6a6a6a1a;
}
.footerWrap {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 0;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexbox {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.logo {
  width: 6.688rem;
  height: 3.125rem;
  margin-bottom: 1.25rem;
}
.linkWrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.iconFlex {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.icon {
  width: 1.25rem;
  height: 1.25rem;
}
.linkText {
  font-size: 0.875rem;
  line-height: 140%;
  color: #222222;
}
.subTitle {
  font-size: 0.875rem;
  line-height: 1.225rem;
  font-weight: 600;
}
.copyWriteWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0 0 0;
  border-top: 1px solid #6a6a6a1a;
}
span {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 1rem;
  background: #222222b2;
}
.footerText {
  font-size: 0.75rem;
  line-height: 1.225rem;
  font-weight: 400;
  color: #222222b2;
}
</style>
