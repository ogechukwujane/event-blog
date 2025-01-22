<template>
  <div class="wrapper">
    <div class="footerWrap container mx-auto px-4 md:px-12 xl:px-0 py-8">
      <div class="content">
        <div class="flexbox">
          <NuxtLink to="#"
            ><img
              src="public/images/logo.svg"
              alt="logo"
              class="logo"
              loading="lazy"
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
              <img
                src="public/images/mail.svg"
                alt="email"
                class="icon"
                loading="lazy"
              />
              <NuxtLink to="#"
                ><p class="linkText">contact@eventsinminutes.com</p></NuxtLink
              >
            </div>
            <div class="iconFlex">
              <img
                src="public/images/phone.svg"
                alt="phone"
                class="icon"
                loading="lazy"
              />
              <NuxtLink to="#"
                ><p class="linkText">+1 (628) 587-3235</p></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="copyWriteWrap">
        <div class="footerFlex">
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
  background: var(--color-white-800);
  border-top: 1px solid var(--color-gray-100);
}
.footerWrap {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: unset;
    gap: 1.25rem;
  }
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
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;
    gap: 1rem;
  }
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
  color: var(--primary-color-900);
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
  border-top: 1px solid var(--color-gray-100);
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;
    gap: 1rem;
  }
}
.footerFlex {
  display: flex;
  align-items: center;
  gap: 1rem;
}
span {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 1rem;
  background: var(--primary-color-800);
}
.footerText {
  font-size: 0.75rem;
  line-height: 1.225rem;
  font-weight: 400;
  color: var(--primary-color-800);
}
</style>
