<template>
  <div class="wrapper">
    <section class="imageWrap">
      <img src="public/images/logo.svg" alt="bg" loading="lazy" />
    </section>
    <section class="formSection">
      <div class="textWrap">
        <p class="title">Login</p>
        <p class="paragraph">Welcome, Login to access our posts.</p>
      </div>
      <form @submit.prevent="handleLogin">
        <Input
          :label="'User Name'"
          v-model="username"
          placeholder="Enter your username"
          type="text"
        />
        <Input
          :label="'Password'"
          v-model="password"
          placeholder="Enter your password"
          type="password"
        />
        <Button :btnText="'Login'" />
      </form>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});

// const { login } = useAuthStore();
// const username = ref("");
// const password = ref("");

// const handleLogin = () => {
//   login();
//   navigateTo("/post");
// };
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
}
.imageWrap {
  width: 100%;
  height: 100%;
  background: #6c757d;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
.formSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  padding: 1.875rem 5rem;
  margin: auto;
  @media (max-width: 768px) {
    padding: 2rem;
  }
}
.textWrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.title {
  font-size: 3rem;
  line-height: 140%;
  font-weight: 700;
  color: #222222;
}
.paragraph {
  font-size: 1.25rem;
  line-height: 28px;
  font-weight: 400;
  color: #222222b2;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
