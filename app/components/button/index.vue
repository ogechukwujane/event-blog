<template>
  <button class="button" type="submit" :disabled="loading" @click="handleClick">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style>
.button {
  border-radius: 6.25rem;
  border: 1px solid var(--color-gray-200);
  height: 3rem;
  padding: 0px 32px;
  color: var(--primary-color-800);
  font-size: 0.875rem;
  font-weight: 500;
  background: transparent;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
}
</style>
