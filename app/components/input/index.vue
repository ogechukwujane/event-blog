<template>
  <div class="inputWrap">
    <label class="label">{{ label }}</label>
    <input
      class="input"
      v-bind="inputAttrs"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
    inputAttrs: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.inputWrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.label {
  color: var(--primary-color-800);
  font-size: 0.875rem;
  font-weight: 400;
}
.input {
  width: 100%;
  height: 3rem;
  padding: 0px 0.875rem;
  border-radius: 6.25rem;
  border: 1px solid var(--color-gray-100);
  color: var(--primary-color-900);
}
</style>
