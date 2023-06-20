<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 15px;
  border: 2px solid rgb(60, 211, 211);
}
</style>
