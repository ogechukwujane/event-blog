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

const router = useRouter();
const username = ref("");
const password = ref("");

const handleLogin = () => {
  if (username.value.trim() && password.value) {
    router.push("/post");
  } else {
    alert("Please fill the form to continue");
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
}
.imageWrap {
  width: 100%;
  height: 100%;
  background: var(--color-gray-900);
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
  color: var(--primary-color-900);
}
.paragraph {
  font-size: 1.25rem;
  line-height: 28px;
  font-weight: 400;
  color: var(--primary-color-800);
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
